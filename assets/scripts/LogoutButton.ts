import { _decorator, Component, Node, input, Input } from 'cc';
import { IngeBridge } from 'inge-bridge';
const { ccclass, property } = _decorator;

@ccclass('LoginoutButton')
export class LoginoutButton extends Component {
    protected onLoad(): void {
        input.on(Input.EventType.TOUCH_START, this.onLogout, this)
    }
    
    start() {

    }

    update(deltaTime: number) {
        
    }

    onLogout(event) {
        IngeBridge.logout()
    }
}

