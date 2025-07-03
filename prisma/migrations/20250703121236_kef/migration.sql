/*
  Warnings:

  - You are about to drop the column `nama_penjamin_hubungan` on the `FLEKSI` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FLEKSI" DROP COLUMN "nama_penjamin_hubungan",
ADD COLUMN     "hubungan_debitur_penjamin" TEXT;

-- AlterTable
ALTER TABLE "KEF" ADD COLUMN     "merek_barang" TEXT,
ADD COLUMN     "tipe_barang" TEXT,
ADD COLUMN     "ukuran_barang" TEXT,
ADD COLUMN     "warna_barang" TEXT;
