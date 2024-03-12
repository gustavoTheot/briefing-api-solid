import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { BriefingRepository } from '../briefing-repository'

export class PrismaBriefingRepository implements BriefingRepository {
  async findById(id: number) {
    const searchBriefing = await prisma.briefing.findFirst({
      where: {
        id,
      },
    })

    return searchBriefing
  }

  async create(data: Prisma.BriefingCreateInput) {
    const briefing = await prisma.briefing.create({ data })
    return briefing
  }

  async getBriefing() {
    const briefings = await prisma.briefing.findMany()
    return briefings
  }

  async update(id: number, data: Prisma.BriefingUncheckedUpdateInput) {
    const updateBriefing = await prisma.briefing.update({
      where: {
        id,
      },
      data,
    })

    return updateBriefing
  }

  async delete(id: number) {
    await prisma.briefing.delete({
      where: {
        id,
      },
    })

    return null
  }
}
