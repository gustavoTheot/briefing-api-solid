import { makeListBriefingUseCase } from "@/use-case/factory/make-list-briefing-use-case";
import { makeFindByIdBriefingUseCase } from "@/use-case/factory/make-search-id-briefing-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getByIdBriefing(request: FastifyRequest  <{Params: {id: string}}>, reply: FastifyReply){
    try{
        const {id} = request.params
        const convertIdInNumber = parseInt(id, 10)


        const getBriefing = makeFindByIdBriefingUseCase()
        const briefing = await getBriefing.search({
            id: convertIdInNumber
        })

        if(briefing == null){
            return reply.status(200).send({message: 'Your list with briefing is empty'})
        }

        return reply.status(201).send(briefing)
    }catch(err){
        if(err instanceof Error){
            return reply.status(500).send({messagem: err.message})
        }
    }

}