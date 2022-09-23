import { Vector3 } from 'UnityEngine';
import { ZepetoScriptableObject, ZepetoScriptBehaviour } from 'ZEPETO.Script'
import PlayerScriptObjectDef from '../PlayerScriptObjectDef';

export default class ScriptableTest extends ZepetoScriptBehaviour {

    public player: ZepetoScriptableObject<PlayerScriptObjectDef>;
    public enemy: ZepetoScriptableObject<PlayerScriptObjectDef>;

    Awake() {
        let a = this.player["playerName"];       // as Vector3 -> typeCasting
        console.log(a);
        console.log(`play name: ${this.player["playerName"]}`);
        console.log(`play position: 
        (${this.player["position"].x}, ${this.player["position"].y}, ${this.player["position"].z})`);

    }


}