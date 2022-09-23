import { ZepetoScriptableObject, ZepetoScriptBehaviour } from 'ZEPETO.Script'
import PlayerScriptObjectDef from './ScriptableObject/playerDefine/PlayerScriptObjectDef';

export default class ScriptableTest extends ZepetoScriptBehaviour {

    public player: ZepetoScriptableObject<PlayerScriptObjectDef>;
    public enemy: ZepetoScriptableObject<PlayerScriptObjectDef>;

    Start() {

    }

}