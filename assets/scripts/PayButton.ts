import { _decorator, Component } from 'cc';
import Inge from 'inge-bridge';

const { ccclass, property } = _decorator;

@ccclass('PayButton')
export class PayButton extends Component {
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
