import { _decorator, Component } from 'cc';
import Inge from 'inge-bridge';

const { ccclass, property } = _decorator;

@ccclass('LoginButton')
export class LoginButton extends Component {
    onLogin(event) {
        Inge.login()
            .catch((err) => {
                console.error(err.toString())
            })
    }
}
