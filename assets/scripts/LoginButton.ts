import { _decorator, Component } from 'cc';
import Inge, { log } from 'inge-bridge';

const { ccclass, property } = _decorator;

@ccclass('LoginButton')
export class LoginButton extends Component {
    onLogin(event) {
        Inge.services.login()
            .catch((err) => {
                log.error(err)
            })
    }
}
