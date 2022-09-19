/*
  Warnings:

  - You are about to drop the column `fieldId` on the `UserInfo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserInfo" DROP CONSTRAINT "UserInfo_fieldId_fkey";

-- DropIndex
DROP INDEX "UserInfo_fieldId_key";

-- AlterTable
ALTER TABLE "UserInfo" DROP COLUMN "fieldId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "UserInfo_pkey" PRIMARY KEY ("id");
