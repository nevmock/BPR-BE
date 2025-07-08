/*
  Warnings:

  - You are about to drop the column `nama_SHM` on the `KSSM` table. All the data in the column will be lost.
  - You are about to drop the column `nama_shm` on the `PINEK` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "KSSM" DROP COLUMN "nama_SHM";

-- AlterTable
ALTER TABLE "PINEK" DROP COLUMN "nama_shm",
ADD COLUMN     "detail_jaminan" TEXT,
ADD COLUMN     "nama_barang" TEXT;
