-- CreateTable
CREATE TABLE "Feed" (
    "feedId" SERIAL NOT NULL,
    "fedBy" TEXT NOT NULL,
    "feedTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Feed_pkey" PRIMARY KEY ("feedId")
);
