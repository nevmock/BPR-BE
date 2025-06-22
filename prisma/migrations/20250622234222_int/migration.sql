/*
  Warnings:

  - The `harga` column on the `FleksiBarangElektronik` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `harga` column on the `FleksiBarangFurniture` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_provisi_sebesar` column on the `KEF` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_administrasi_sebesar` column on the `KEF` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_materai_sebesar` column on the `KEF` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_fidusia_sebesar` column on the `KEF` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `harga` column on the `ProcimBarangElektronik` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `harga` column on the `ProcimBarangFurniture` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "FleksiBarangElektronik" DROP COLUMN "harga",
ADD COLUMN     "harga" INTEGER;

-- AlterTable
ALTER TABLE "FleksiBarangFurniture" DROP COLUMN "harga",
ADD COLUMN     "harga" INTEGER;

-- AlterTable
ALTER TABLE "KEF" DROP COLUMN "biaya_provisi_sebesar",
ADD COLUMN     "biaya_provisi_sebesar" INTEGER,
DROP COLUMN "biaya_administrasi_sebesar",
ADD COLUMN     "biaya_administrasi_sebesar" INTEGER,
DROP COLUMN "biaya_materai_sebesar",
ADD COLUMN     "biaya_materai_sebesar" INTEGER,
DROP COLUMN "biaya_fidusia_sebesar",
ADD COLUMN     "biaya_fidusia_sebesar" INTEGER;

-- AlterTable
ALTER TABLE "ProcimBarangElektronik" DROP COLUMN "harga",
ADD COLUMN     "harga" INTEGER;

-- AlterTable
ALTER TABLE "ProcimBarangFurniture" DROP COLUMN "harga",
ADD COLUMN     "harga" INTEGER;
