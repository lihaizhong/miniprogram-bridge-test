import { _decorator, Component, Input, input, Node } from 'cc';
import Inge from 'inge-bridge';

const { ccclass, property } = _decorator;

@ccclass('PayButton')
export class PayButton extends Component {
    protected onLoad(): void {
        input.on(Input.EventType.TOUCH_START, this.onPay, this)
    }

    async onPay(event) {
        const result = await Inge.getPayTradeNo({
            outTradeNo: '',
            totalAmount: 0.1,
            subject: '',
            gameRoleId: '',
            body: '',
            buyerId: '',
            notifyUrl: ''
        })

        Inge.pay({
            // 支付宝
            customId: result.data.customId,
            buyQuantity: '',
            // 淘宝
            itemId: '',
            outOrderId: ''
        })
    }
}
