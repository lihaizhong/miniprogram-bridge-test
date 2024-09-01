import { _decorator, Component } from 'cc';
import Inge, { BridgeErrorItem } from 'inge-bridge';

const { ccclass, property } = _decorator;

@ccclass('OpenAdButton')
export class OpenAdButton extends Component {
    async onOpenAd(event) {
        try {
            const result = await Inge.getAdUnitId()

            Inge.createRewardedAd(result.data.adUnitId)
        } catch (err) {
            console.error(err.toString())
        }
    }
}
