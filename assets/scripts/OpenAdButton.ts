import { _decorator, Component, Input, input, Node } from 'cc';
import Inge from 'inge-bridge';

const { ccclass, property } = _decorator;

@ccclass('OpenAdButton')
export class OpenAdButton extends Component {
    protected onLoad(): void {
        input.on(Input.EventType.TOUCH_START, this.onOpenAd, this)
    }

    async onOpenAd(event) {
        const result = await Inge.getAdUnitId()

        Inge.createRewardedAd(result.data.adUnitId)
    }
}
