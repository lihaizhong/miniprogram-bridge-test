import { _decorator, Component } from 'cc';
import Inge, { configure, log } from 'inge-bridge';
import { format } from 'date-fns';

const { ccclass, property } = _decorator;

/**
 * 生成UUID
 * @returns {string}
 */
export function generateUUID(): string {
    let d = Date.now()
  
    return 'xxxx-xxxx-4xxx-yxxx-xxxx'.replace(/[xy]/g, (c) => {
      // eslint-disable-next-line no-bitwise
      const r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      // eslint-disable-next-line no-bitwise, no-mixed-operators
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
  }

@ccclass('UploadTaskButton')
export class UploadTaskButton extends Component {
    onUploadTask(event) {
        Inge.services.uploadTaskCompletionBehavior({
            cpOutBizNo: generateUUID(),
            gameRoleId: 'test_role_01',
            buyerId: configure.getUserId(),
            actionFinishDate: format(new Date(), 'yyyy-MM-dd hh:mm:ss')
        })
            .catch((err) => {
                log.error(err)
            })
    }
}
