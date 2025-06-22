/*
  Warnings:

  - You are about to drop the column `nik_debitur` on the `KMM` table. All the data in the column will be lost.
  - You are about to drop the column `jangka_waktu_angsuran` on the `KRS` table. All the data in the column will be lost.
  - You are about to drop the column `waktu_asuransi_jiwa` on the `KRS` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "KMM" DROP COLUMN "nik_debitur";

-- AlterTable
ALTER TABLE "KRS" DROP COLUMN "jangka_waktu_angsuran",
DROP COLUMN "waktu_asuransi_jiwa";
