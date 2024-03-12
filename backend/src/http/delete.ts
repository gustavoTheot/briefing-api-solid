import { makeDeleteBriefingUseCase } from "@/use-case/factory/make-delete-briefing-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deleteBriefing(request: FastifyRequest  <{Params: {id: string}}>, reply: FastifyReply){
    const deleteBriefingSchema = z.object({
        id: z.number()
    })

    //const {id} = deleteBriefingSchema.parse(request.params)
    const {id} = request.params
    const convertIdInNumber = parseInt(id, 10)

    try{
        const deleteBriefing = makeDeleteBriefingUseCase();
        await deleteBriefing.delete({
            id: convertIdInNumber
        })
    }catch(err){
        if(err instanceof Error){
            return reply.status(500).send({messagem: err.message})
        }
    }

    return reply.status(201).send({message: "Sucessfuly delete briefing"})

}