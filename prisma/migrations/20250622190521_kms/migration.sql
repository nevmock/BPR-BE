/*
  Warnings:

  - You are about to drop the column `waktu_asuransi_jiwa` on the `KMS` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "KMS" DROP COLUMN "waktu_asuransi_jiwa",
ADD COLUMN     "no_ktp_debitur" TEXT;
