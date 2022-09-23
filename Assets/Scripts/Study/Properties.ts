import { GameObject, Transform, Vector3 } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class Properties extends ZepetoScriptBehaviour {

    public floatValue: float;
    public vectorValue: Vector3;
    public floatValues: float[];

    public gameObjectName: GameObject;
    public transformValue: Transform;

    //Serialize가 불필요한 public Property ( serialize -> 데이터 변환을 할 때 포함이 안됨 )
    @NonSerialized()
    public strValue: string;

    //Inspector 상에 노출하고 싶지 않은 Property ->Inspector에 노출만 안함.
    @HideInInspector()
    public strValue2: string;

    //Serialize가 필요한 private Property
    @SerializeField()
    private strValue3: string;

    //Property 위에 헤더 추가
    @Header("Header Title")
    public stringProperty: string;

    //Property 간 간격 추가
    @Space(10)
    public transformProperty: Transform;

    //Property에 마우스가 위치하는 경우 나타나는 툴팁 추가
    @Tooltip("this is Tooltip")
    public numberProperty: number;


    Start() {
        console.log(`floatValue:${this.floatValue}`);
        console.log(`strValue:${this.strValue}`);

        //rotate cube a
        let transform = this.gameObjectName.GetComponent<Transform>();
        transform.Rotate(this.vectorValue);

        //rotate cube b
        this.transformValue.Rotate(this.vectorValue);
    }


}