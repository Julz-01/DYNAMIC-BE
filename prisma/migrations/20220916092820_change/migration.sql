/*
  Warnings:

  - You are about to drop the column `fieldId` on the `UserInfo` table. All the data in the column will be lost.
  - You are about to drop the `Field` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserInfo" DROP CONSTRAINT "UserInfo_fieldId_fkey";

-- DropIndex
DROP INDEX "UserInfo_fieldId_key";

-- AlterTable
ALTER TABLE "UserInfo" DROP COLUMN "fieldId";

-- DropTable
DROP TABLE "Field";

-- CreateTable
CREATE TABLE "UserField" (
    "id" SERIAL NOT NULL,
    "fldname" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT false,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserField_pkey" PRIMARY KEY ("id")
);
