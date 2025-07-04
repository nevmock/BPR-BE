/*
  Warnings:

  - You are about to drop the column `is_rekening_bpr` on the `KMS` table. All the data in the column will be lost.
  - You are about to drop the column `is_rekening_bpr` on the `KRS` table. All the data in the column will be lost.
  - You are about to drop the column `is_rekening_bpr` on the `KSS` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "KMS" DROP COLUMN "is_rekening_bpr";

-- AlterTable
ALTER TABLE "KRS" DROP COLUMN "is_rekening_bpr";

-- AlterTable
ALTER TABLE "KSS" DROP COLUMN "is_rekening_bpr";
