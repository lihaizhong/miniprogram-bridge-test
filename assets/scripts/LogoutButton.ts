import { _decorator, Component } from 'cc';
import Inge from 'inge-bridge';
const { ccclass, property } = _decorator;

@ccclass('LoginoutButton')
export class LoginoutButton extends Component {
    onLogout(event) {
        Inge.logout()
            .catch((err) => {
                console.error(err.toString())
            })
    }
}
