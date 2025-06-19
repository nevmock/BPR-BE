/*
  Warnings:

  - You are about to drop the column `nomor_surat_` on the `FLEKSI` table. All the data in the column will be lost.
  - You are about to drop the column `hari` on the `KAR` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FLEKSI" DROP COLUMN "nomor_surat_",
ADD COLUMN     "nomor_surat" TEXT;

-- AlterTable
ALTER TABLE "KAR" DROP COLUMN "hari";
