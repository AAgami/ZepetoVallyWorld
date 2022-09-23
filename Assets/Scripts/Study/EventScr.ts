import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { UnityEvent$1 } from "UnityEngine.Events";
import { Input } from 'UnityEngine';


export default class EventScr extends ZepetoScriptBehaviour {
    private mEventInt: UnityEvent$1<int>;
    private countNum: number;
    private beforeNum: number;
    private totalNum: number;

    Start() {
        this.countNum = 0;
        this.beforeNum = 0;
        this.totalNum = 0;
    }

    Update() {

        if (Input.anyKeyDown) {


            this.beforeNum = this.countNum; //1 2

            ++this.countNum; //1

            this.totalNum += this.countNum; // 0+1 = 1

            console.log(`${this.beforeNum}+${this.countNum}은  ${this.countNum + this.beforeNum} 입니다.`) // 1 + 2 = 1
            console.log(`이때까지 총 합은 ${this.totalNum} 입니다.`) // 1


            if (this.countNum > 101) {
                this.countNum = 0;
            }
        }

    }



}
