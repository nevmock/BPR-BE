/*
  Warnings:

  - You are about to drop the column `jangka_asuransi_tlo` on the `KSSM` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "KEF" ADD COLUMN     "biaya_administrasi" DOUBLE PRECISION,
ADD COLUMN     "biaya_provisi" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "KMM" ADD COLUMN     "nama_asuransi_jiwa" TEXT;

-- AlterTable
ALTER TABLE "KMS" ADD COLUMN     "biaya_administrasi" DOUBLE PRECISION,
ADD COLUMN     "biaya_provisi" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "KRS" ADD COLUMN     "nama_asuransi_jiwa" TEXT;

-- AlterTable
ALTER TABLE "KSM" ADD COLUMN     "administrasi" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "KSSM" DROP COLUMN "jangka_asuransi_tlo";
