/*
  Warnings:

  - You are about to drop the column `nama_penjamin_1` on the `KMS` table. All the data in the column will be lost.
  - You are about to drop the column `no_ktp_penjamin_1` on the `KMS` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FLEKSI" ADD COLUMN     "nama_SHM" TEXT,
ADD COLUMN     "status_debitur" TEXT;

-- AlterTable
ALTER TABLE "KAR" ADD COLUMN     "nama_SHM" TEXT,
ADD COLUMN     "status_debitur" TEXT;

-- AlterTable
ALTER TABLE "KEF" ADD COLUMN     "nama_SHM" TEXT,
ADD COLUMN     "status_debitur" TEXT;

-- AlterTable
ALTER TABLE "KMM" ADD COLUMN     "nama_SHM" TEXT,
ADD COLUMN     "status_debitur" TEXT;

-- AlterTable
ALTER TABLE "KMS" DROP COLUMN "nama_penjamin_1",
DROP COLUMN "no_ktp_penjamin_1",
ADD COLUMN     "nama_SHM" TEXT,
ADD COLUMN     "no_ktp_SHM" TEXT,
ADD COLUMN     "status_debitur" TEXT;

-- AlterTable
ALTER TABLE "KMSM" ADD COLUMN     "nama_SHM" TEXT,
ADD COLUMN     "status_debitur" TEXT;

-- AlterTable
ALTER TABLE "KRS" ADD COLUMN     "nama_SHM" TEXT,
ADD COLUMN     "status_debitur" TEXT;

-- AlterTable
ALTER TABLE "KSM" ADD COLUMN     "nama_SHM" TEXT,
ADD COLUMN     "status_debitur" TEXT;

-- AlterTable
ALTER TABLE "KSS" ADD COLUMN     "status_debitur" TEXT;

-- AlterTable
ALTER TABLE "PINEK" ADD COLUMN     "nama_SHM" TEXT,
ADD COLUMN     "status_debitur" TEXT;

-- AlterTable
ALTER TABLE "PROCIM" ADD COLUMN     "nama_SHM" TEXT,
ADD COLUMN     "status_debitur" TEXT;
