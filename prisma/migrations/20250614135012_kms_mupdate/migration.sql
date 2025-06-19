/*
  Warnings:

  - The `tanggal_surat_kuasa` column on the `KMSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "KMSM" DROP COLUMN "tanggal_surat_kuasa",
ADD COLUMN     "tanggal_surat_kuasa" DATE;
