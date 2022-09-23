import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Camera, Input, Physics, RaycastHit } from 'UnityEngine';

export default class RayCastTest extends ZepetoScriptBehaviour {

    Update() {
        this.MouseControl();
    }

    MouseControl() {
        if (Input.GetMouseButtonDown(0)) {
            let ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            let ref = $ref<RaycastHit>();

            if (Physics.Raycast(ray, ref, 1000)) {
                let hitInfo = $unref(ref);

                console.log(`Detect Hit!`);
                console.log(`hitInfo.collider.name:${hitInfo.collider.name}`);
            }
            else {
                console.log(`Failed to Detect Collision`);
            }
        }
    }
}

