import { Debug } from 'UnityEngine';
import { Image } from "UnityEngine.UI";
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class PlayerData extends ZepetoScriptBehaviour {
    public static instance; //static으로 선언하면...뭐 대강 프리펩의 느낌....

    public carrotCount = 0;
    public cabbageCount = 0;
    public allCount = 0;


    Awake() {
        PlayerData.instance = this; //외부에서 쓸 때 Awake에 자기자신을..넣어놧으니??  뭐
    }
    public AddCarrot() {
        this.carrotCount += 1;
        Debug.Log("당근 갯수 : " + this.carrotCount);
    }
    public AddCabbage() {
        this.cabbageCount += 1;
        Debug.Log("배추 갯수 : " + this.cabbageCount);
    }

    public AllVegettable() {
        this.allCount = this.carrotCount + this.cabbageCount;
        Debug.Log("모든 채소 갯수: " + this.allCount);
    }

}