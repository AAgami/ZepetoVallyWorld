import { WaitForSeconds } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class CoroutineTest extends ZepetoScriptBehaviour {
    private current: number;

    Start() {
        this.current = 0;
        console.log(`start routine`);
        this.StartCoroutine(this.DoRoutine());

    }

    *DoRoutine() {
        while (true) {
            yield null; //한 프레임 멈췄을때
            console.log(`[${this.current++}] Wait to next routine..`);
            //current 추가..추가..추가
            yield new WaitForSeconds(1);
        }
    }

}