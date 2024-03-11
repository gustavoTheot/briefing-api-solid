-- CreateTable
CREATE TABLE "briefing" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dateCreate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "state" TEXT NOT NULL,

    CONSTRAINT "briefing_pkey" PRIMARY KEY ("id")
);
