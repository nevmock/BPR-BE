/*
  Warnings:

  - The `biaya_administrasi` column on the `KSSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_provisi` column on the `KSSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `harga_jaminan` column on the `KSSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jangka_asuransi_tlo` column on the `KSSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jangka_waktu` column on the `KSSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `nilai_mengangsur` column on the `KSSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `nominal` column on the `KSSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `nominal_administrasi` column on the `KSSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `nominal_asuransi_jiwa` column on the `KSSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `nominal_asuransi_tlo` column on the `KSSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `nominal_materai` column on the `KSSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `nominal_notaris` column on the `KSSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `nominal_provisi` column on the `KSSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `suku_bunga` column on the `KSSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `tenggat_mengangsur` column on the `KSSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `total_biaya` column on the `KSSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `utang_atas_kredit` column on the `KSSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "KSSM" DROP COLUMN "biaya_administrasi",
ADD COLUMN     "biaya_administrasi" DOUBLE PRECISION,
DROP COLUMN "biaya_provisi",
ADD COLUMN     "biaya_provisi" DOUBLE PRECISION,
DROP COLUMN "harga_jaminan",
ADD COLUMN     "harga_jaminan" INTEGER,
DROP COLUMN "jangka_asuransi_tlo",
ADD COLUMN     "jangka_asuransi_tlo" INTEGER,
DROP COLUMN "jangka_waktu",
ADD COLUMN     "jangka_waktu" INTEGER,
DROP COLUMN "nilai_mengangsur",
ADD COLUMN     "nilai_mengangsur" INTEGER,
DROP COLUMN "nominal",
ADD COLUMN     "nominal" INTEGER,
DROP COLUMN "nominal_administrasi",
ADD COLUMN     "nominal_administrasi" INTEGER,
DROP COLUMN "nominal_asuransi_jiwa",
ADD COLUMN     "nominal_asuransi_jiwa" INTEGER,
DROP COLUMN "nominal_asuransi_tlo",
ADD COLUMN     "nominal_asuransi_tlo" INTEGER,
DROP COLUMN "nominal_materai",
ADD COLUMN     "nominal_materai" INTEGER,
DROP COLUMN "nominal_notaris",
ADD COLUMN     "nominal_notaris" INTEGER,
DROP COLUMN "nominal_provisi",
ADD COLUMN     "nominal_provisi" INTEGER,
DROP COLUMN "suku_bunga",
ADD COLUMN     "suku_bunga" DOUBLE PRECISION,
DROP COLUMN "tenggat_mengangsur",
ADD COLUMN     "tenggat_mengangsur" INTEGER,
DROP COLUMN "total_biaya",
ADD COLUMN     "total_biaya" INTEGER,
DROP COLUMN "utang_atas_kredit",
ADD COLUMN     "utang_atas_kredit" INTEGER;
