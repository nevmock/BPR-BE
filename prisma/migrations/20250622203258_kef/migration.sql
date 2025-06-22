/*
  Warnings:

  - You are about to drop the column `harga_jaminan` on the `KEF` table. All the data in the column will be lost.
  - You are about to drop the column `nik_debitur` on the `KEF` table. All the data in the column will be lost.
  - You are about to drop the column `total_harga_keseluruhan_barang` on the `KEF` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "KEF" DROP COLUMN "harga_jaminan",
DROP COLUMN "nik_debitur",
DROP COLUMN "total_harga_keseluruhan_barang",
ADD COLUMN     "tanggal_surat_permohonan_kredit" DATE;
