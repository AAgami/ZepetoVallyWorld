import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Text } from "UnityEngine.UI";
import ExtraComponent from './ExtraComponent';

export default class ScriptImport extends ZepetoScriptBehaviour {
    public resultUI: Text;
    private extComponent: ExtraComponent;

    Start() {
        this.gameObject.AddComponent<ExtraComponent>();
        this.extComponent = this.gameObject.GetComponent<ExtraComponent>();
    }


    Update() {
        let count = this.extComponent.GetCount();
        if (count > 10) {
            this.extComponent.SetCount(0);
        }

        var resultString = this.extComponent.stringProperty;

        console.log(`result:${resultString}`);
        this.resultUI.text = resultString;
    }


}