import { _decorator, Component, Input, input, Node } from 'cc';
import Inge from 'inge-bridge';

const { ccclass, property } = _decorator;

@ccclass('AddRoleButton')
export class AddRoleButton extends Component {
    protected onLoad(): void {
        input.on(Input.EventType.TOUCH_START, this.onAddRole, this)
    }

    onAddRole(event) {
        Inge.addUserRole({
            gameRoleId: '',
            buyerId: '',
            gameServeId: ''
        })
    }
}
