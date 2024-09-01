import { _decorator, Component } from 'cc';
import Inge from 'inge-bridge';

const { ccclass, property } = _decorator;

@ccclass('ShareButton')
export class ShareButton extends Component {
    async onShareAppMessage(event) {
        const result = await Inge.getShareProfile()

        Inge.shareApp({
            title: result.data.shareTitle,
            desc: result.data.shareDesc,
            query: result.data.shareQuery
        })
    }
}
