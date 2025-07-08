/*
  Warnings:

  - You are about to drop the column `nama_shm` on the `KAR` table. All the data in the column will be lost.
  - You are about to drop the column `nama_shm` on the `KEF` table. All the data in the column will be lost.
  - You are about to drop the column `nama_shm` on the `KMM` table. All the data in the column will be lost.
  - You are about to drop the column `nama_shm` on the `KMSM` table. All the data in the column will be lost.
  - You are about to drop the column `nama_shm` on the `KSM` table. All the data in the column will be lost.
  - You are about to drop the column `barang_jaminan_lainnya` on the `PROCIM` table. All the data in the column will be lost.
  - You are about to drop the column `nama_SHM` on the `PROCIM` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "KAR" DROP COLUMN "nama_shm";

-- AlterTable
ALTER TABLE "KEF" DROP COLUMN "nama_shm";

-- AlterTable
ALTER TABLE "KMM" DROP COLUMN "nama_shm";

-- AlterTable
ALTER TABLE "KMS" ADD COLUMN     "alamat_shm" TEXT;

-- AlterTable
ALTER TABLE "KMSM" DROP COLUMN "nama_shm";

-- AlterTable
ALTER TABLE "KRS" ADD COLUMN     "alamat_shm" TEXT,
ADD COLUMN     "nik_shm" TEXT;

-- AlterTable
ALTER TABLE "KSM" DROP COLUMN "nama_shm";

-- AlterTable
ALTER TABLE "KSS" ADD COLUMN     "alamat_shm" TEXT,
ADD COLUMN     "nik_shm" TEXT;

-- AlterTable
ALTER TABLE "PROCIM" DROP COLUMN "barang_jaminan_lainnya",
DROP COLUMN "nama_SHM";

-- CreateTable
CREATE TABLE "ProcimBarangJaminanLainnya" (
    "id" TEXT NOT NULL,
    "procim_id" TEXT NOT NULL,
    "nama_barang" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "ProcimBarangJaminanLainnya_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProcimBarangJaminanLainnya" ADD CONSTRAINT "ProcimBarangJaminanLainnya_procim_id_fkey" FOREIGN KEY ("procim_id") REFERENCES "PROCIM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
