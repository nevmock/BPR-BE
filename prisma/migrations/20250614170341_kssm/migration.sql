/*
  Warnings:

  - You are about to drop the column `tanggal_surat_fasilitas_kredit` on the `KSSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_kuasa_debet` on the `KSSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_kuasa_kendaraan` on the `KSSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_perintah_jalan` on the `KSSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_perjanjian_kredit` on the `KSSM` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "KSSM" DROP COLUMN "tanggal_surat_fasilitas_kredit",
DROP COLUMN "tanggal_surat_kuasa_debet",
DROP COLUMN "tanggal_surat_kuasa_kendaraan",
DROP COLUMN "tanggal_surat_perintah_jalan",
DROP COLUMN "tanggal_surat_perjanjian_kredit",
ADD COLUMN     "tanggal_surat_keputusan_kredit" DATE,
ADD COLUMN     "tanggal_surat_permohonan_kredit" DATE;
