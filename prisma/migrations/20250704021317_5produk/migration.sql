/*
  Warnings:

  - You are about to drop the column `alamat_debitur` on the `FLEKSI` table. All the data in the column will be lost.
  - You are about to drop the column `alamat_penjamin` on the `FLEKSI` table. All the data in the column will be lost.
  - You are about to drop the column `angsuran_pinjaman` on the `FLEKSI` table. All the data in the column will be lost.
  - You are about to drop the column `besar_pinjaman` on the `FLEKSI` table. All the data in the column will be lost.
  - You are about to drop the column `hubungan_debitur_penjamin` on the `FLEKSI` table. All the data in the column will be lost.
  - You are about to drop the column `jangka_waktu_pinjaman` on the `FLEKSI` table. All the data in the column will be lost.
  - You are about to drop the column `nama_SHM` on the `FLEKSI` table. All the data in the column will be lost.
  - You are about to drop the column `no_ktp_debitur` on the `FLEKSI` table. All the data in the column will be lost.
  - You are about to drop the column `no_ktp_penjamin` on the `FLEKSI` table. All the data in the column will be lost.
  - You are about to drop the column `nomor_rekening_pinjaman` on the `FLEKSI` table. All the data in the column will be lost.
  - You are about to drop the column `bertempat_tinggal_sama` on the `KAR` table. All the data in the column will be lost.
  - You are about to drop the column `biaya_administrasi` on the `KAR` table. All the data in the column will be lost.
  - You are about to drop the column `biaya_asuransi_jiwa_sebesar` on the `KAR` table. All the data in the column will be lost.
  - You are about to drop the column `biaya_materai_sebesar` on the `KAR` table. All the data in the column will be lost.
  - You are about to drop the column `biaya_notaris_sebesar` on the `KAR` table. All the data in the column will be lost.
  - You are about to drop the column `biaya_provisi_sebesar` on the `KAR` table. All the data in the column will be lost.
  - You are about to drop the column `hutang_keseluruhan_sebesar` on the `KAR` table. All the data in the column will be lost.
  - You are about to drop the column `nama_SHM` on the `KAR` table. All the data in the column will be lost.
  - You are about to drop the column `nama_asuransi_jiwa` on the `KAR` table. All the data in the column will be lost.
  - You are about to drop the column `no_ktp_debitur` on the `KAR` table. All the data in the column will be lost.
  - You are about to drop the column `no_ktp_penjamin` on the `KAR` table. All the data in the column will be lost.
  - You are about to drop the column `nominal` on the `KAR` table. All the data in the column will be lost.
  - You are about to drop the column `tenggat_angsuran_tiap_bulan` on the `KAR` table. All the data in the column will be lost.
  - You are about to drop the column `angsuran_paling_lambat` on the `PINEK` table. All the data in the column will be lost.
  - You are about to drop the column `biaya` on the `PINEK` table. All the data in the column will be lost.
  - You are about to drop the column `debitur_menerima_pinjaman` on the `PINEK` table. All the data in the column will be lost.
  - You are about to drop the column `dikenakan_bunga` on the `PINEK` table. All the data in the column will be lost.
  - You are about to drop the column `jangka_waktu_hutang` on the `PINEK` table. All the data in the column will be lost.
  - You are about to drop the column `mendapat_persetujuan` on the `PINEK` table. All the data in the column will be lost.
  - You are about to drop the column `nama_SHM` on the `PINEK` table. All the data in the column will be lost.
  - You are about to drop the column `no_ktp_debitur` on the `PINEK` table. All the data in the column will be lost.
  - You are about to drop the column `no_ktp_penjamin` on the `PINEK` table. All the data in the column will be lost.
  - You are about to drop the column `pemotongan_gaji` on the `PINEK` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_permohonan_kredit` on the `PINEK` table. All the data in the column will be lost.
  - You are about to drop the column `tempat_tinggal_debitur` on the `PINEK` table. All the data in the column will be lost.
  - You are about to drop the column `tempat_tinggal_penjamin` on the `PINEK` table. All the data in the column will be lost.
  - You are about to drop the column `total_seluruh_hutang` on the `PINEK` table. All the data in the column will be lost.
  - You are about to drop the column `alamat_debitur` on the `PROCIM` table. All the data in the column will be lost.
  - You are about to drop the column `alamat_penjamin` on the `PROCIM` table. All the data in the column will be lost.
  - You are about to drop the column `angsuran_pinjaman` on the `PROCIM` table. All the data in the column will be lost.
  - You are about to drop the column `bunga_pinjaman_pinjaman` on the `PROCIM` table. All the data in the column will be lost.
  - You are about to drop the column `jangka_waktu_pinjaman` on the `PROCIM` table. All the data in the column will be lost.
  - You are about to drop the column `no_ktp_debitur` on the `PROCIM` table. All the data in the column will be lost.
  - You are about to drop the column `no_ktp_penjamin` on the `PROCIM` table. All the data in the column will be lost.
  - You are about to drop the column `nominal_plafond` on the `PROCIM` table. All the data in the column will be lost.
  - You are about to drop the column `nomor_rekening_pinjaman` on the `PROCIM` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FLEKSI" DROP COLUMN "alamat_debitur",
DROP COLUMN "alamat_penjamin",
DROP COLUMN "angsuran_pinjaman",
DROP COLUMN "besar_pinjaman",
DROP COLUMN "hubungan_debitur_penjamin",
DROP COLUMN "jangka_waktu_pinjaman",
DROP COLUMN "nama_SHM",
DROP COLUMN "no_ktp_debitur",
DROP COLUMN "no_ktp_penjamin",
DROP COLUMN "nomor_rekening_pinjaman",
ADD COLUMN     "alamat_rumah_debitur" TEXT,
ADD COLUMN     "alamat_rumah_penjamin" TEXT,
ADD COLUMN     "hubungan_penjamin_debitur" TEXT,
ADD COLUMN     "jangka_waktu" INTEGER,
ADD COLUMN     "jenis_kelamin_debitur" TEXT,
ADD COLUMN     "nama_shm" TEXT,
ADD COLUMN     "nik_debitur" TEXT,
ADD COLUMN     "nik_penjamin" TEXT,
ADD COLUMN     "nominal_angsuran" INTEGER,
ADD COLUMN     "nominal_pinjaman" INTEGER,
ADD COLUMN     "rekening_pinjaman" TEXT;

-- AlterTable
ALTER TABLE "KAR" DROP COLUMN "bertempat_tinggal_sama",
DROP COLUMN "biaya_administrasi",
DROP COLUMN "biaya_asuransi_jiwa_sebesar",
DROP COLUMN "biaya_materai_sebesar",
DROP COLUMN "biaya_notaris_sebesar",
DROP COLUMN "biaya_provisi_sebesar",
DROP COLUMN "hutang_keseluruhan_sebesar",
DROP COLUMN "nama_SHM",
DROP COLUMN "nama_asuransi_jiwa",
DROP COLUMN "no_ktp_debitur",
DROP COLUMN "no_ktp_penjamin",
DROP COLUMN "nominal",
DROP COLUMN "tenggat_angsuran_tiap_bulan",
ADD COLUMN     "administrasi_nominal" INTEGER,
ADD COLUMN     "alamat_rumah_penjamin" TEXT,
ADD COLUMN     "asuransi_jiwa_nominal" INTEGER,
ADD COLUMN     "hubungan_penjamin_debitur" TEXT,
ADD COLUMN     "hutang_keseluruhan" INTEGER,
ADD COLUMN     "materai_nominal" INTEGER,
ADD COLUMN     "nama_asuransi" TEXT,
ADD COLUMN     "nama_shm" TEXT,
ADD COLUMN     "nik_debitur" TEXT,
ADD COLUMN     "nik_penjamin" TEXT,
ADD COLUMN     "nominal_pinjaman" INTEGER,
ADD COLUMN     "notaris_nominal" INTEGER,
ADD COLUMN     "provisi_nominal" INTEGER,
ADD COLUMN     "tenggat_angsuran" INTEGER;

-- AlterTable
ALTER TABLE "KSSM" ADD COLUMN     "alamat_rumah_penjamin" TEXT;

-- AlterTable
ALTER TABLE "PINEK" DROP COLUMN "angsuran_paling_lambat",
DROP COLUMN "biaya",
DROP COLUMN "debitur_menerima_pinjaman",
DROP COLUMN "dikenakan_bunga",
DROP COLUMN "jangka_waktu_hutang",
DROP COLUMN "mendapat_persetujuan",
DROP COLUMN "nama_SHM",
DROP COLUMN "no_ktp_debitur",
DROP COLUMN "no_ktp_penjamin",
DROP COLUMN "pemotongan_gaji",
DROP COLUMN "tanggal_permohonan_kredit",
DROP COLUMN "tempat_tinggal_debitur",
DROP COLUMN "tempat_tinggal_penjamin",
DROP COLUMN "total_seluruh_hutang",
ADD COLUMN     "alamat_rumah_debitur" TEXT,
ADD COLUMN     "alamat_rumah_penjamin" TEXT,
ADD COLUMN     "asuransi_jiwa_nominal" INTEGER,
ADD COLUMN     "bunga_pinjaman" DOUBLE PRECISION,
ADD COLUMN     "hubungan_penjamin_debitur" TEXT,
ADD COLUMN     "hutang_keseluruhan" INTEGER,
ADD COLUMN     "jangka_waktu" INTEGER,
ADD COLUMN     "materai_nominal" INTEGER,
ADD COLUMN     "nama_asuransi" TEXT,
ADD COLUMN     "nama_shm" TEXT,
ADD COLUMN     "nik_debitur" TEXT,
ADD COLUMN     "nik_penjamin" TEXT,
ADD COLUMN     "nominal_angsuran" INTEGER,
ADD COLUMN     "nominal_pinjaman" INTEGER,
ADD COLUMN     "provisi_nominal" INTEGER,
ADD COLUMN     "provisi_persen" DOUBLE PRECISION,
ADD COLUMN     "rekening_pinjaman" TEXT,
ADD COLUMN     "tanggal_surat_permohonan_kredit" DATE,
ADD COLUMN     "tenggat_angsuran" INTEGER,
ADD COLUMN     "tujuan_penggunaan" TEXT;

-- AlterTable
ALTER TABLE "PROCIM" DROP COLUMN "alamat_debitur",
DROP COLUMN "alamat_penjamin",
DROP COLUMN "angsuran_pinjaman",
DROP COLUMN "bunga_pinjaman_pinjaman",
DROP COLUMN "jangka_waktu_pinjaman",
DROP COLUMN "no_ktp_debitur",
DROP COLUMN "no_ktp_penjamin",
DROP COLUMN "nominal_plafond",
DROP COLUMN "nomor_rekening_pinjaman",
ADD COLUMN     "alamat_rumah_debitur" TEXT,
ADD COLUMN     "alamat_rumah_penjamin" TEXT,
ADD COLUMN     "bunga_pinjaman" DOUBLE PRECISION,
ADD COLUMN     "jangka_waktu" INTEGER,
ADD COLUMN     "nik_debitur" TEXT,
ADD COLUMN     "nik_penjamin" TEXT,
ADD COLUMN     "nominal_angsuran" INTEGER,
ADD COLUMN     "nominal_pinjaman" INTEGER,
ADD COLUMN     "rekening_pinjaman" TEXT;
