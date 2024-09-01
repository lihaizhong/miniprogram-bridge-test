import { _decorator, Component, Input, input, Node } from 'cc';
import Inge from 'inge-bridge';

const { ccclass, property } = _decorator;

@ccclass('ShareButton')
export class ShareButton extends Component {
    protected onLoad(): void {
        input.on(Input.EventType.TOUCH_START, this.onShareAppMessage, this)
    }

    async onShareAppMessage(event) {
        const result = await Inge.getShareProfile()

        Inge.shareApp({
            title: result.data.shareTitle,
            desc: result.data.shareDesc,
            query: result.data.shareQuery
        })
    }
}
