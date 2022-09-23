import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class HelloWorld extends ZepetoScriptBehaviour {

    Start() 
    {    
        const a = 10;
        console.log("log:Hello World");
        console.warn("warn:Hello World");
        console.error("error:Hello World");
        console.log(`${a}`);
    }

}