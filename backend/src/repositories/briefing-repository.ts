import { Briefing, Prisma } from '@prisma/client'

export interface BriefingRepository {
  findById(id: number): Promise<Briefing | null>
  create(data: Prisma.BriefingCreateInput): Promise<Briefing>
  getBriefing(): Promise<Briefing[] | [] | null>
  update(
    id: number,
    data: Prisma.BriefingUncheckedUpdateInput,
  ): Promise<Briefing>
  delete(id: number): Promise<null>
}
