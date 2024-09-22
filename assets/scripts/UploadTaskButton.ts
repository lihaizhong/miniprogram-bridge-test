import { _decorator, Component } from 'cc';
import Inge, { configure, log } from 'inge-bridge';
import { format } from 'date-fns';
import { nanoid } from 'nanoid';

const { ccclass, property } = _decorator;

@ccclass('UploadTaskButton')
export class UploadTaskButton extends Component {
    onUploadTask(event) {
        Inge.services.uploadTaskCompletionBehavior({
            cpOutBizNo: nanoid(),
            gameRoleId: 'test_role_01',
            buyerId: configure.getUserId(),
            actionFinishDate: format(new Date(), 'yyyy-MM-dd hh:mm:ss')
        })
            .catch((err) => {
                log.error(err)
            })
    }
}
