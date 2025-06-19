/*
  Warnings:

  - The `tanggal_surat_kuasa_debet` column on the `KSS` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "KSS" DROP COLUMN "tanggal_surat_kuasa_debet",
ADD COLUMN     "tanggal_surat_kuasa_debet" DATE;
