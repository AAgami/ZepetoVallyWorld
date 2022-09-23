import { Camera, Input, Physics, RaycastHit } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class LayerExample extends ZepetoScriptBehaviour {

    Start() {

    }
    Update() {
        if (Input.GetMouseButtonDown(0)) {
            let ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            let ref = $ref<RaycastHit>(); //reference 받고

            let layerMask = 1 << 3; /// 0001 -> 0010

            if (Physics.Raycast(ray, ref, 100, layerMask)) {
                let hitInfo = $unref(ref); // refernece 수정..?
                console.log(`name:${hitInfo.collider.gameObject.name}`);
            }
        }
    }

}

