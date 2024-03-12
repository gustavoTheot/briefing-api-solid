import { extname } from "path";

export class BriefingDoesntExist extends Error{
    constructor(private msg: string){
        super(msg)
    }
}