-- CreateTable
CREATE TABLE "Todos" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Todos_pkey" PRIMARY KEY ("id")
);
