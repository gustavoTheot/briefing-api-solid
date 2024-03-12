import { makeUpdateBriefingUseCase } from "@/use-case/factory/make-update-briefing-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function updateBriefing(request: FastifyRequest <{Params: {id: string}}>, reply: FastifyReply){
    const UpdateBriefingBodySchema = z.object({
        name: z.string().optional(),
        description: z.string().optional(),
        state: z.enum(['negociação', 'finalizado', 'aprovado']).optional()
    })

    const {id} = request.params
    const convertIdInNumber = parseInt(id, 10)
    const {name, description, state} = UpdateBriefingBodySchema.parse(request.body)

    try{
        const updateBriefing = makeUpdateBriefingUseCase();
        await updateBriefing.update({
            id: convertIdInNumber,
            data:{
                name, description, state
            }
        })
    }catch(err){
        if(err instanceof Error){
            return reply.status(500).send({messagem: err.message})
        }
    }

    return reply.status(201).send({message: "Sucessfuly update briefing"})

}