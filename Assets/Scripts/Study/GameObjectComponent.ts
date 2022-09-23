import { Animator, GameObject, Transform, Vector3 } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class GameObjectComponent extends ZepetoScriptBehaviour {

    Start() {
        //GameObject Create
        var tempObj = new GameObject();
        var obj = GameObject.Instantiate(tempObj);

        //GameObject Destroy
        GameObject.Destroy(obj);

        //GetComponent with Generic
        var myTransform = this.GetComponent<Transform>();
        myTransform.position = Vector3.op_Subtraction(myTransform.position, new Vector3(1, 3, 1));
        //AddComponent with Generic
        var animator = this.gameObject.AddComponent<Animator>();

    }

}