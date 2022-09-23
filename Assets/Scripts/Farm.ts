import { AnimationClip, BoxCollider, Collider, GameObject, Mathf, Transform, Vector3, Vector3Int, WaitForSeconds } from 'UnityEngine'
import { ZepetoCharacter } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import PlayerData from './PlayerData';
import UI_VegetableList from './UI_VegetableList';

export default class Farm extends ZepetoScriptBehaviour {
    @SerializeField() private _takeclip: AnimationClip;
    @SerializeField() private _vegetable: GameObject;
    private _scale = 0;

    Awake() {


    }

    FixedUpdate() {

        this._vegetable.transform.localScale = new Vector3(this._scale, this._scale, this._scale);

        this._scale += 0.002;

        if (this._scale == 0.5) {
            console.log(` 반 성장 완료 `);

        }

        else if (this._scale == 1) {
            console.log(` 성장 완료 `);

        }
        console.log(` 채소 크기 : ${this._scale.toFixed(1)}`);
        this._scale = Mathf.Clamp(this._scale, 0, 1);



    }





    OnTriggerEnter(collider: Collider) {

        if (this._scale < 1.0) {
            console.log(`아직 채소가 덜자랐어요.`);
            // UI_VegetableList.WarningA();
            return;
        }

        if (1 <= this._scale) {
            console.log(`채소다! 심봤다! ${collider.name}가 뽑는다.`);
            collider.GetComponent<ZepetoCharacter>().SetGesture(this._takeclip);

            this.StartCoroutine(this.DoRoutine(collider.transform.GetChild(0).GetChild(1)));
            collider.GetComponent<ZepetoCharacter>().CancelGesture;
        }

        else {
            console.log(`잘못된 접근입니다.`);
        }
    }

    OnTake() {
    }


    *DoRoutine(parent: Transform) {

        console.log(`채소 뽑는중 ..`);
        yield new WaitForSeconds(1);

        this._vegetable.GetComponent<BoxCollider>().enabled = false;
        this.transform.SetParent(parent);
        this._vegetable.transform.localPosition = new Vector3(0.219, -0.624, -0.018);
        console.log(`${this._vegetable.name} 채소를 뽑았다!`);
        this.OnTake();

    }


}