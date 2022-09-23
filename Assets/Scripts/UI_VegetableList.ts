import { TextMeshProUGUI } from 'TMPro'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Image } from "UnityEngine.UI";

import PlayerData from './PlayerData';
import { GameObject } from 'UnityEngine';

export default class UI_VegetableList extends ZepetoScriptBehaviour {
    public _carrotList: TextMeshProUGUI;
    public _cabbageList: TextMeshProUGUI;
    public _allList: TextMeshProUGUI;
    public _warningA: TextMeshProUGUI;

    @SerializeField() private _warningBack: GameObject;


    Start() {
        this._carrotList.GetComponent<TextMeshProUGUI>();
        this._cabbageList.GetComponent<TextMeshProUGUI>();
        this._allList.GetComponent<TextMeshProUGUI>();
        this._warningA.GetComponent<TextMeshProUGUI>();

    }
    WarningA() {
        if (this._warningBack.SetActive) {

            this._warningA.text = `아직 수확할 수 없어요.`;

        }


    }



    Update() {
        const carrotText = PlayerData.instance.carrotCount.toString().length < 3 ? '00' + PlayerData.instance.carrotCount : PlayerData.instance.carrotCount;
        this._carrotList.text = `${carrotText}`;

        const cabbageText = PlayerData.instance.cabbageCount.toString().length < 3 ? '00' + PlayerData.instance.cabbageCount : PlayerData.instance.cabbageCount;
        this._cabbageList.text = `${cabbageText}`;

        const allText = PlayerData.instance.allCount.toString().length < 3 ? '00' + PlayerData.instance.allCount : PlayerData.instance.allCount;
        this._allList.text = `${allText}`;




    }

}