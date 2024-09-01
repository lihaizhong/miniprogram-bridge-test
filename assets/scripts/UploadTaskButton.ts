import { _decorator, Component } from 'cc';
import Inge from 'inge-bridge';

const { ccclass, property } = _decorator;

@ccclass('UploadTaskButton')
export class UploadTaskButton extends Component {
    onUploadTask(event) {
        Inge.uploadTaskCompletionBehavior({
            cpOutBizNo: '',
            gameRoleId: '',
            buyerId: '',
            actionFinishDate: ''
        })
            .catch((err) => {
                console.error(err.toString())
            })
    }
}
