/*
  Warnings:

  - You are about to drop the column `jumlah_bank_uang` on the `KSS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_pembuatan_surat` on the `KSS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_pembuatan_surat` on the `KSSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_pembuatan_surat` on the `PINEK` table. All the data in the column will be lost.
  - Added the required column `detail_jaminan` to the `KEF` table without a default value. This is not possible if the table is not empty.
  - Added the required column `harga_jaminan` to the `KEF` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hari_pembuatan_surat` to the `KEF` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jenis_kelamin_debitur` to the `KEF` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nik_debitur` to the `KEF` table without a default value. This is not possible if the table is not empty.
  - Added the required column `no_hp_debitur` to the `KEF` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pekerjaan_debitur` to the `KEF` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_surat_kuasa` to the `KEF` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_surat_kuasa_debet` to the `KEF` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_surat_perjanjian_sewabeli` to the `KEF` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_harga_keseluruhan_barang` to the `KEF` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jumlah_bank_menyerahkan_uang` to the `KSS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_surat_fasilitas_kredit` to the `KSS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_surat_fasilitas_kredit_1` to the `KSS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_surat_kuasa_debet` to the `KSS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_surat_penyerahan_jaminan` to the `KSS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_surat_perintah_jalan` to the `KSS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_surat_perjanjian_kredit` to the `KSS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_surat_pernyataan` to the `KSS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_surat_fasilitas_kredit` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_surat_kuasa_debet` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_surat_kuasa_kendaraan` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_surat_perintah_jalan` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_surat_perjanjian_kredit` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `tanggal_lahir_penjamin` on the `KSSM` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `tanggal_surat_dokumen_agunan` to the `PINEK` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_surat_kuasa_debet` to the `PINEK` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_surat_pemotongan_gaji` to the `PINEK` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_surat_perjanjian_kredit` to the `PINEK` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_surat_pernyataan` to the `PINEK` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "KEF" ADD COLUMN     "detail_jaminan" TEXT NOT NULL,
ADD COLUMN     "harga_jaminan" TEXT NOT NULL,
ADD COLUMN     "hari_pembuatan_surat" TEXT NOT NULL,
ADD COLUMN     "jenis_kelamin_debitur" TEXT NOT NULL,
ADD COLUMN     "nik_debitur" TEXT NOT NULL,
ADD COLUMN     "no_hp_debitur" TEXT NOT NULL,
ADD COLUMN     "pekerjaan_debitur" TEXT NOT NULL,
ADD COLUMN     "tanggal_surat_kuasa" DATE NOT NULL,
ADD COLUMN     "tanggal_surat_kuasa_debet" DATE NOT NULL,
ADD COLUMN     "tanggal_surat_perjanjian_sewabeli" DATE NOT NULL,
ADD COLUMN     "total_harga_keseluruhan_barang" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "KSS" DROP COLUMN "jumlah_bank_uang",
DROP COLUMN "tanggal_pembuatan_surat",
ADD COLUMN     "jumlah_bank_menyerahkan_uang" TEXT NOT NULL,
ADD COLUMN     "tanggal_surat_fasilitas_kredit" DATE NOT NULL,
ADD COLUMN     "tanggal_surat_fasilitas_kredit_1" DATE NOT NULL,
ADD COLUMN     "tanggal_surat_kuasa_debet" TEXT NOT NULL,
ADD COLUMN     "tanggal_surat_penyerahan_jaminan" DATE NOT NULL,
ADD COLUMN     "tanggal_surat_perintah_jalan" DATE NOT NULL,
ADD COLUMN     "tanggal_surat_perjanjian_kredit" DATE NOT NULL,
ADD COLUMN     "tanggal_surat_pernyataan" DATE NOT NULL;

-- AlterTable
ALTER TABLE "KSSM" DROP COLUMN "tanggal_pembuatan_surat",
ADD COLUMN     "tanggal_surat_fasilitas_kredit" DATE NOT NULL,
ADD COLUMN     "tanggal_surat_kuasa_debet" TEXT NOT NULL,
ADD COLUMN     "tanggal_surat_kuasa_kendaraan" DATE NOT NULL,
ADD COLUMN     "tanggal_surat_perintah_jalan" DATE NOT NULL,
ADD COLUMN     "tanggal_surat_perjanjian_kredit" DATE NOT NULL,
DROP COLUMN "tanggal_lahir_penjamin",
ADD COLUMN     "tanggal_lahir_penjamin" DATE NOT NULL;

-- AlterTable
ALTER TABLE "PINEK" DROP COLUMN "tanggal_pembuatan_surat",
ADD COLUMN     "tanggal_surat_dokumen_agunan" DATE NOT NULL,
ADD COLUMN     "tanggal_surat_kuasa_debet" DATE NOT NULL,
ADD COLUMN     "tanggal_surat_pemotongan_gaji" DATE NOT NULL,
ADD COLUMN     "tanggal_surat_perjanjian_kredit" DATE NOT NULL,
ADD COLUMN     "tanggal_surat_pernyataan" DATE NOT NULL;

-- CreateTable
CREATE TABLE "KAR" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "jabatan" TEXT NOT NULL,
    "nama_debitur" TEXT NOT NULL,
    "alamat_usaha_debitur" TEXT NOT NULL,
    "alamat_rumah_debitur" TEXT NOT NULL,
    "tanggal_surat_perintah_jalan" DATE NOT NULL,
    "tanggal_surat_persetujuan_kredit" DATE NOT NULL,
    "nomor_surat" TEXT NOT NULL,
    "nominal" TEXT NOT NULL,
    "suku_bunga" TEXT NOT NULL,
    "jangka_waktu" TEXT NOT NULL,
    "biaya_provisi" TEXT NOT NULL,
    "biaya_administrasi" TEXT NOT NULL,
    "detail_jaminan" TEXT NOT NULL,
    "pekerjaan_debitur" TEXT NOT NULL,
    "tanggal_surat_kuasa_debet" DATE NOT NULL,
    "tempat_lahir_debitur" TEXT NOT NULL,
    "tanggal_lahir_debitur" DATE NOT NULL,
    "no_ktp_debitur" TEXT NOT NULL,
    "tanggal_surat_kuasa_kendaraan" DATE NOT NULL,
    "hari" TEXT NOT NULL,
    "tanggal_surat_perjanjian_kredit" DATE NOT NULL,
    "hubungan_debitur_penjamin" TEXT NOT NULL,
    "nama_penjamin" TEXT NOT NULL,
    "tempat_lahir_penjamin" TEXT NOT NULL,
    "tanggal_lahir_penjamin" DATE NOT NULL,
    "no_ktp_penjamin" TEXT NOT NULL,
    "utang_atas_kredit_sebesar" TEXT NOT NULL,
    "tenggat_mengangsur_tiap_bulan" TEXT NOT NULL,
    "nilai_mengangsur" TEXT NOT NULL,
    "tanggal_mengangsur_pertama" DATE NOT NULL,
    "tanggal_mengangsur_terakhir" DATE NOT NULL,
    "biaya_provisi_sebesar" TEXT NOT NULL,
    "biaya_materai_sebesar" TEXT NOT NULL,
    "biaya_asuransi_jiwa_sebesar" TEXT NOT NULL,
    "biaya_administrasi_sebesar" TEXT NOT NULL,
    "biaya_notaris_sebesar" TEXT NOT NULL,
    "total_biaya" TEXT NOT NULL,
    "nama_barang" TEXT NOT NULL,
    "tanggal_surat_penyerahan_jaminan" DATE NOT NULL,
    "tanggal_surat_fasilitas_kredit" DATE NOT NULL,
    "tanggal_surat_pernyataan" DATE NOT NULL,
    "tanggal_surat_pemotongan_gaji" DATE NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KAR_pkey" PRIMARY KEY ("id")
);
