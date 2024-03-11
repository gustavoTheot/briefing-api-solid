import { makeCreateBriefingUseCase } from "@/use-case/factory/make-create-briefing-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import {z} from "zod"

export async function createBriefing(request: FastifyRequest, reply: FastifyReply){
    const createBriefingBodySchema = z.object({
        name: z.string(),
        description: z.string(),
        state: z.enum(['negociação', 'finalizado', 'aprovado'])
    })

    const {name, description, state} =  createBriefingBodySchema.parse(request.body)

    try{
        const createBriefing = makeCreateBriefingUseCase();

        await createBriefing.create({
            name, description, state
        })
    }catch(err){
        if(err instanceof Error){
            return reply.status(500).send({messagem: err.message})
        }
    }

    return reply.status(201).send({message: "Sucessfuly create briefing"})
}