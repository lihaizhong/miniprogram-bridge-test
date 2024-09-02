import { _decorator, Component } from 'cc';
import Inge, { configure, log } from 'inge-bridge';

const { ccclass, property } = _decorator;

@ccclass('PayButton')
export class PayButton extends Component {
    async onPay(event) {
        try {
            const result = await Inge.getPayTradeNo({
                outTradeNo: '',
                totalAmount: 0.1,
                subject: '',
                gameRoleId: '',
                body: '',
                buyerId: configure.getUserId(),
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
        } catch (err) {
            log.error(err)
        }
    }
}
