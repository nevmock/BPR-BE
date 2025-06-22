/*
  Warnings:

  - You are about to drop the column `nik_debitur` on the `KMSM` table. All the data in the column will be lost.
  - You are about to drop the column `waktu_asuransi_tlo` on the `KMSM` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "KMSM" DROP COLUMN "nik_debitur",
DROP COLUMN "waktu_asuransi_tlo";
