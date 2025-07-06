/*
  Warnings:

  - You are about to drop the column `barang_jaminan_lainnya` on the `FLEKSI` table. All the data in the column will be lost.
  - You are about to drop the column `nama_shm` on the `FLEKSI` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FLEKSI" DROP COLUMN "barang_jaminan_lainnya",
DROP COLUMN "nama_shm";

-- CreateTable
CREATE TABLE "FleksiBarangJaminanLainnya" (
    "id" TEXT NOT NULL,
    "fleksi_id" TEXT NOT NULL,
    "nama_barang" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "FleksiBarangJaminanLainnya_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FleksiBarangJaminanLainnya" ADD CONSTRAINT "FleksiBarangJaminanLainnya_fleksi_id_fkey" FOREIGN KEY ("fleksi_id") REFERENCES "FLEKSI"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
