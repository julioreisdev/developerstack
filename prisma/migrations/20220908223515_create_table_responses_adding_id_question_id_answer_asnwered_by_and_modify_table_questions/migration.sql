-- CreateTable
CREATE TABLE "reponses" (
    "id" SERIAL NOT NULL,
    "questionId" INTEGER NOT NULL,
    "answer" TEXT NOT NULL,
    "answeredBy" TEXT NOT NULL,

    CONSTRAINT "reponses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reponses" ADD CONSTRAINT "reponses_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
