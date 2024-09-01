import { _decorator, Component } from 'cc';
import Inge from 'inge-bridge';

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
                console.error(err.toString())
            })
    }
}
