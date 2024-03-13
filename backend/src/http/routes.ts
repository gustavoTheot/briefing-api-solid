import { app } from "@/app";
import { createBriefing } from "./create";
import { listBriefings } from "./list";
import { updateBriefing } from "./update";
import { deleteBriefing } from "./delete";
import { FastifyInstance } from "fastify";
import { getByIdBriefing } from "./get-by-id";

export async function router(app: FastifyInstance){
    app.post("/create", createBriefing)
    app.get("/list", listBriefings)
    app.get("/getBriefing/:id", getByIdBriefing)

    app.put("/update/:id", updateBriefing)
    app.delete("/delete/:id", deleteBriefing)


}