import { Quaternion, Vector3 } from 'UnityEngine'
import { ZepetoScriptableObject, ZepetoScriptBehaviour } from 'ZEPETO.Script'


export default class PlayerScriptObjectDef extends ZepetoScriptBehaviour {
    public playerName: string;
    public playerHp: number;
    public position: Vector3;
    public rotation: Vector3;


    Start() {

    }

}