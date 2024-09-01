import { _decorator, Component } from 'cc';
import Inge from 'inge-bridge';

const { ccclass, property } = _decorator;

@ccclass('OpenAdButton')
export class OpenAdButton extends Component {
    async onOpenAd(event) {
        const result = await Inge.getAdUnitId()

        Inge.createRewardedAd(result.data.adUnitId)
    }
}
