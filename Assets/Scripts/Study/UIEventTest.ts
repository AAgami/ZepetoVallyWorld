import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Slider, Button } from "UnityEngine.UI";

export default class UIEventTest extends ZepetoScriptBehaviour {

    public sliderUI: Slider;
    public btnUI: Button;

    Start() {

        this.btnUI.onClick.AddListener(() => {
            console.log('btnUI OnClick');
        });

        this.sliderUI.onValueChanged.AddListener((v) => {
            console.log(`[${v}] sliderUI onValueChanged`)
        });


    }

}