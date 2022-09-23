import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import Farm from './Farm';
import PlayerData from './PlayerData';

export default class CabbageFarm extends Farm {

    OnTake() {
        PlayerData.instance.AddCabbage();
        PlayerData.instance.AllVegettable();

    }

}