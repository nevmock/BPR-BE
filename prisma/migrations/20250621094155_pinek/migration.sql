/*
  Warnings:

  - You are about to drop the column `tanggal_pengajuan_kredit` on the `PINEK` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PINEK" DROP COLUMN "tanggal_pengajuan_kredit",
ADD COLUMN     "no_ktp_debitur" TEXT,
ADD COLUMN     "no_ktp_penjamin" TEXT,
ADD COLUMN     "tanggal_permohonan_kredit" DATE;
