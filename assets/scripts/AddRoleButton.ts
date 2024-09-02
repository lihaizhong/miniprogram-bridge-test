import { _decorator, Component } from 'cc';
import Inge, { log } from 'inge-bridge';

const { ccclass, property } = _decorator;

@ccclass('AddRoleButton')
export class AddRoleButton extends Component {
    onAddRole(event) {
        Inge.addUserRole({
            gameRoleId: '',
            buyerId: '',
            gameServeId: ''
        })
            .catch((err) => {
                log.error(err)
            })
    }
}
