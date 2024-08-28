import { _decorator, Component, Node, input, Input } from 'cc';
import Inge from 'inge-bridge';

const { ccclass, property } = _decorator;

@ccclass('LoginButton')
export class LoginButton extends Component {
    protected onLoad(): void {
        input.on(Input.EventType.TOUCH_START, this.onLogin, this)
    }

    start() {

    }

    update(deltaTime: number) {
        
    }

    onLogin(event) {
        Inge.login()
    }
}

