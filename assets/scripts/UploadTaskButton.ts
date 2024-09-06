import { _decorator, Component } from 'cc';
import Inge, { configure, log } from 'inge-bridge';

const { ccclass, property } = _decorator;

@ccclass('UploadTaskButton')
export class UploadTaskButton extends Component {
    onUploadTask(event) {
        Inge.services.uploadTaskCompletionBehavior({
            cpOutBizNo: '',
            gameRoleId: '',
            buyerId: configure.getUserId(),
            actionFinishDate: ''
        })
            .catch((err) => {
                log.error(err)
            })
    }
}
