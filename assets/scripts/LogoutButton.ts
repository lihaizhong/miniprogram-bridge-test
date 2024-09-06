import { _decorator, Component } from 'cc';
import Inge, { log } from 'inge-bridge';
const { ccclass, property } = _decorator;

@ccclass('LogoutButton')
export class LogoutButton extends Component {
    onLogout(event) {
        Inge.services.logout()
            .catch((err) => {
                log.error(err)
            })
    }
}
