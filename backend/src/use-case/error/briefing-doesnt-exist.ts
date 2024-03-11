import { extname } from "path";

export class BriefingDoesntExist extends Error{
    constructor(){
        super('Briefing search does not exist ')
    }
}