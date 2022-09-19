/*
  Warnings:

  - A unique constraint covering the columns `[userFieldId]` on the table `UserInfo` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "UserInfo" ADD COLUMN     "userFieldId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "UserInfo_userFieldId_key" ON "UserInfo"("userFieldId");

-- AddForeignKey
ALTER TABLE "UserInfo" ADD CONSTRAINT "UserInfo_userFieldId_fkey" FOREIGN KEY ("userFieldId") REFERENCES "UserField"("id") ON DELETE SET NULL ON UPDATE CASCADE;
