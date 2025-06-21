/*
  Warnings:

  - You are about to drop the column `bunga_pinjaman` on the `KSS` table. All the data in the column will be lost.
  - You are about to drop the column `jangka_asuransi` on the `KSS` table. All the data in the column will be lost.
  - You are about to drop the column `jumlah_bank_menyerahkan_uang` on the `KSS` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "KSS" DROP COLUMN "bunga_pinjaman",
DROP COLUMN "jangka_asuransi",
DROP COLUMN "jumlah_bank_menyerahkan_uang";
