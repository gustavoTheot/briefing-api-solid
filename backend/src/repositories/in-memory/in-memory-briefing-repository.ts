import { Briefing, Prisma } from "@prisma/client";
import { BriefingRepository } from "../briefing-repository";

export class InMemoryBriefingUseRepositoryRepository implements BriefingRepository{
    public briefings: Briefing[] = []

    /*
    constructor(briefings: Briefing[]){
        this.briefings = briefings
    }
    */
    
    async findById(id: number){
        const briefing = this.briefings.find((item) => item.id === id)
        
        if(!briefing){
            return null
        }

        return briefing
    }

    async create(data: Prisma.BriefingCreateInput){
        const briefing = {
            id: 1,
            name: data.name,
            description: data.description,
            dateCreate: new Date(),
            state: data.state
        }

        this.briefings.push(briefing)

        return briefing
    }
    getBriefing(): Promise<[] | { id: number; name: string; description: string; dateCreate: Date; state: string; }[] | null> {
        throw new Error("Method not implemented.");
    }
    update(id: number, data: Prisma.BriefingUncheckedUpdateInput): Promise<{ id: number; name: string; description: string; dateCreate: Date; state: string; }> {
        throw new Error("Method not implemented.");
    }
    async delete(id: number) {
        const briefing = this.briefings.findIndex((item) => item.id === id)

        if(briefing !== -1){
            this.briefings.splice(briefing, 1)
        }

        return null
    }
    
}