import { _decorator, Component } from 'cc';
import Inge, { configure, log } from 'inge-bridge';

const { ccclass, property } = _decorator;

@ccclass('PayButton')
export class PayButton extends Component {
    /**
     * 支付
     * buyQuantity 限制说明：https://opendocs.alipay.com/mini-game/0an78p?pathHash=3f1be7cb
     * 购买游戏币的数量，换算成 RMB 必须满足以下价格档位， 即 buyQuantity * 游戏币单价 = 限定价格等级。如：游戏币单价为 0.1 元，一次购买数量至少是 10 个。
     * @param event 
     */
    async onPay(event) {
        try {
            const result = await Inge.services.getPayTradeNo({
                outTradeNo: 'No00001',
                totalAmount: 0.1,
                subject: 'test_subject',
                gameRoleId: 'test_role_01',
                buyerId: configure.getUserId(),
                notifyUrl: 'https://test.inge.com/success'
            })
    
            Inge.services.pay({
                // 支付宝
                customId: result.data.customId,
                buyQuantity: 10,
                // 淘宝
                itemId: '',
                outOrderId: ''
            })
        } catch (err) {
            log.error(err)
        }
    }
}
