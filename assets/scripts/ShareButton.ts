import { _decorator, Component } from 'cc';
import Inge, { log } from 'inge-bridge';

const { ccclass, property } = _decorator;

@ccclass('ShareButton')
export class ShareButton extends Component {
    async onShareAppMessage(event) {
        try {
            const result = await Inge.services.getShareProfile()

            Inge.services.shareApp({
                title: result.data.shareTitle,
                desc: result.data.shareDesc,
                query: result.data.shareQuery
            })
        } catch (err) {
            log.error(err)
        }
    }
}
