import { _decorator, Component } from 'cc';
import Inge from 'inge-bridge'
const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {
    protected onLoad() {
        Inge.init({
            env: 'test',
            alipayOptions: {
                channelCode: '883e823e9883524da169768612a02ec1',
                adCode: '202405191900347095',
                gameAppId: '2021004143672001',
                secret: 'yingeI8O3k6odMXzdboAnQ==',
                actionCode: 'MM202405282120471688'
            },
            taobaoOptions: {
                channelCode: 'e39d611b7f9fee63472d7e3acabdbcf3',
                adCode: '202408171659461178',
                gameAppId: '34721604',
                secret: 'yinge89f124a98da9dde48763d29a260',
                cloudAppId: '53106'
            }
        })
    }
}
