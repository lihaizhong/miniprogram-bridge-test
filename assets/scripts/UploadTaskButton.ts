import { _decorator, Component, Input, input, Node } from 'cc';
import Inge from 'inge-bridge';

const { ccclass, property } = _decorator;

@ccclass('UploadTaskButton')
export class UploadTaskButton extends Component {
    protected onLoad(): void {
        input.on(Input.EventType.TOUCH_START, this.onUploadTask, this)
    }

    onUploadTask(event) {
        Inge.uploadTaskCompletionBehavior({
            cpOutBizNo: '',
            gameRoleId: '',
            buyerId: '',
            actionFinishDate: ''
        })
    }
}
