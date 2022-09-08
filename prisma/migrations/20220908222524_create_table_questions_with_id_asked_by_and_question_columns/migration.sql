-- CreateTable
CREATE TABLE "questions" (
    "id" SERIAL NOT NULL,
    "askedBy" INTEGER NOT NULL,
    "question" TEXT NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);
