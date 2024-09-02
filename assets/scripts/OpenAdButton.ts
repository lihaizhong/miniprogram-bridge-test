import { _decorator, Component } from 'cc';
import Inge, { BridgeErrorItem, log } from 'inge-bridge';

const { ccclass, property } = _decorator;

@ccclass('OpenAdButton')
export class OpenAdButton extends Component {
    async onOpenAd(event) {
        try {
            const result = await Inge.getAdUnitId()

            Inge.createRewardedAd(result.data.adUnitId)
        } catch (err) {
            log.error(err)
        }
    }
}
