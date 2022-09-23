import { GameObject } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class TagExample extends ZepetoScriptBehaviour {

    Start() {
        let findObj = GameObject.FindGameObjectWithTag("CustomTag");
        if (null != findObj) {
            console.log(`name : ${findObj.name}`);
        }

    }

}