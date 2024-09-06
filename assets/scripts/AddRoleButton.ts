import { _decorator, Component } from 'cc';
import Inge, { configure, log } from 'inge-bridge';

const { ccclass, property } = _decorator;

@ccclass('AddRoleButton')
export class AddRoleButton extends Component {
    onAddRole(event) {
        Inge.services.addUserRole({
            gameRoleId: '',
            buyerId: configure.getUserId(),
            gameServeId: ''
        })
            .catch((err) => {
                log.error(err)
            })
    }
}
