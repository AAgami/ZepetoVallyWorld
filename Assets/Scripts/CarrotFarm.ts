import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import Farm from './Farm';
import PlayerData from './PlayerData';

export default class CarrotFarm extends Farm {
    OnTake() {
        PlayerData.instance.AddCarrot();
        PlayerData.instance.AllVegettable();
    }
}