/*
  Warnings:

  - Changed the type of `tanggal_mengangsur_pertama` on the `PINEK` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tanggal_mengangsur_terakhir` on the `PINEK` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "PINEK" DROP COLUMN "tanggal_mengangsur_pertama",
ADD COLUMN     "tanggal_mengangsur_pertama" DATE NOT NULL,
DROP COLUMN "tanggal_mengangsur_terakhir",
ADD COLUMN     "tanggal_mengangsur_terakhir" DATE NOT NULL;
