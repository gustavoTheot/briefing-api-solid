import { makeListBriefingUseCase } from "@/use-case/factory/make-list-briefing-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function listBriefings(request: FastifyRequest, reply: FastifyReply){
    try{
        const getBriefings = makeListBriefingUseCase()
        const list = await getBriefings.list()

        return reply.status(201).send({list})
    }catch(err){
        if(err instanceof Error){
            return reply.status(500).send({messagem: err.message})
        }
    }

}