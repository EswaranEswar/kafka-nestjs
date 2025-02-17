export class GetUserIdReques{
    constructor(public readonly userId:string){}

    toString(){
        return JSON.stringify({
            userId:this.userId
        });
    }
}