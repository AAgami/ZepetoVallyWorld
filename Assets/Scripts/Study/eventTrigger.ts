import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { EventTrigger, EventTriggerType } from 'UnityEngine.EventSystems';
import { Entry } from "UnityEngine.EventSystems.EventTrigger";

export default class eventTrigger extends ZepetoScriptBehaviour {

    Start() {
        var trigger = this.gameObject.GetComponent<EventTrigger>();

        var entryA = new Entry();
        entryA.eventID = EventTriggerType.PointerClick;
        entryA.callback.AddListener(() => {
            console.log("click")
        });
        trigger.triggers.Add(entryA);

        var entryB = new Entry();
        entryB.eventID = EventTriggerType.BeginDrag;
        entryB.callback.AddListener(() => {
            console.log("Drag Start")
        });
        trigger.triggers.Add(entryB);

        var entryC = new Entry();
        entryC.eventID = EventTriggerType.EndDrag;
        entryC.callback.AddListener(() => {
            console.log("Drag End")
        });

        trigger.triggers.Add(entryC);
    }




}


