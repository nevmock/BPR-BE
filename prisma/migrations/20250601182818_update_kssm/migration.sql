/*
  Warnings:

  - Added the required column `alamat_rumah_debitur` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `alamat_usaha_debitur` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `biaya_administrasi` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `biaya_provisi` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `detail_jaminan` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `harga_jaminan` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hari` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jangka_asuransi_tlo` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jangka_waktu` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jenis_kelamin_debitur` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_barang` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nik_debitur` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nilai_mengangsur` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `no_ktp_debitur` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `no_ktp_penjamin` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nominal` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nominal_administrasi` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nominal_asuransi_jiwa` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nominal_asuransi_tlo` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nominal_materai` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nominal_notaris` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nominal_provisi` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomor_surat` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pekerjaan_debitur` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suku_bunga` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_lahir_debitur` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_lahir_penjamin` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_mengangsur_pertama` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_mengangsur_terakhir` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_pembuatan_surat` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tempat_lahir_debitur` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tempat_lahir_penjamin` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenggat_mengangsur` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_biaya` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tujuan_penggunaan` to the `KSSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `utang_atas_kredit` to the `KSSM` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "KSSM" ADD COLUMN     "alamat_rumah_debitur" TEXT NOT NULL,
ADD COLUMN     "alamat_usaha_debitur" TEXT NOT NULL,
ADD COLUMN     "biaya_administrasi" TEXT NOT NULL,
ADD COLUMN     "biaya_provisi" TEXT NOT NULL,
ADD COLUMN     "detail_jaminan" TEXT NOT NULL,
ADD COLUMN     "harga_jaminan" TEXT NOT NULL,
ADD COLUMN     "hari" TEXT NOT NULL,
ADD COLUMN     "jangka_asuransi_tlo" TEXT NOT NULL,
ADD COLUMN     "jangka_waktu" TEXT NOT NULL,
ADD COLUMN     "jenis_kelamin_debitur" TEXT NOT NULL,
ADD COLUMN     "nama_barang" TEXT NOT NULL,
ADD COLUMN     "nik_debitur" TEXT NOT NULL,
ADD COLUMN     "nilai_mengangsur" TEXT NOT NULL,
ADD COLUMN     "no_ktp_debitur" TEXT NOT NULL,
ADD COLUMN     "no_ktp_penjamin" TEXT NOT NULL,
ADD COLUMN     "nominal" TEXT NOT NULL,
ADD COLUMN     "nominal_administrasi" TEXT NOT NULL,
ADD COLUMN     "nominal_asuransi_jiwa" TEXT NOT NULL,
ADD COLUMN     "nominal_asuransi_tlo" TEXT NOT NULL,
ADD COLUMN     "nominal_materai" TEXT NOT NULL,
ADD COLUMN     "nominal_notaris" TEXT NOT NULL,
ADD COLUMN     "nominal_provisi" TEXT NOT NULL,
ADD COLUMN     "nomor_surat" TEXT NOT NULL,
ADD COLUMN     "pekerjaan_debitur" TEXT NOT NULL,
ADD COLUMN     "suku_bunga" TEXT NOT NULL,
ADD COLUMN     "tanggal_lahir_debitur" DATE NOT NULL,
ADD COLUMN     "tanggal_lahir_penjamin" TEXT NOT NULL,
ADD COLUMN     "tanggal_mengangsur_pertama" DATE NOT NULL,
ADD COLUMN     "tanggal_mengangsur_terakhir" DATE NOT NULL,
ADD COLUMN     "tanggal_pembuatan_surat" DATE NOT NULL,
ADD COLUMN     "tempat_lahir_debitur" TEXT NOT NULL,
ADD COLUMN     "tempat_lahir_penjamin" TEXT NOT NULL,
ADD COLUMN     "tenggat_mengangsur" TEXT NOT NULL,
ADD COLUMN     "total_biaya" TEXT NOT NULL,
ADD COLUMN     "tujuan_penggunaan" TEXT NOT NULL,
ADD COLUMN     "utang_atas_kredit" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "KSS" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "jabatan" TEXT NOT NULL,
    "nama_debitur" TEXT NOT NULL,
    "alamat_usaha_debitur" TEXT NOT NULL,
    "alamat_rumah_debitur" TEXT NOT NULL,
    "tanggal_pembuatan_surat" DATE NOT NULL,
    "nomor_surat" TEXT NOT NULL,
    "plaford" TEXT NOT NULL,
    "jangka_waktu" TEXT NOT NULL,
    "suku_bunga" TEXT NOT NULL,
    "biaya_provisi" TEXT NOT NULL,
    "biaya_administrasi" TEXT NOT NULL,
    "detail_jaminan" TEXT NOT NULL,
    "pekerjaan_debitur" TEXT NOT NULL,
    "nama_penjamin" TEXT NOT NULL,
    "alamat_penjamin" TEXT NOT NULL,
    "no_ktp_penjamin" TEXT NOT NULL,
    "hari" TEXT NOT NULL,
    "no_ktp_debitur" TEXT NOT NULL,
    "persetujuan_dari" TEXT NOT NULL,
    "tempat_lahir_penjamin" TEXT NOT NULL,
    "tanggal_lahir_penjamin" DATE NOT NULL,
    "tinggal_sama_dengan" TEXT NOT NULL,
    "jumlah_bank_uang" TEXT NOT NULL,
    "bunga_pinjaman" TEXT NOT NULL,
    "tujuan_penggunaan_kredit" TEXT NOT NULL,
    "total_seluruh_pinjaman" TEXT NOT NULL,
    "tanggal_angsuran_dimulai" DATE NOT NULL,
    "tanggal_angsuran_terakhir" DATE NOT NULL,
    "angsuran_tiap_bulan" TEXT NOT NULL,
    "nominal_provisi" TEXT NOT NULL,
    "nominal_administrasi" TEXT NOT NULL,
    "nama_asuransi" TEXT NOT NULL,
    "jangka_asuransi" TEXT NOT NULL,
    "biaya_asuransi" TEXT NOT NULL,
    "biaya_materai" TEXT NOT NULL,
    "biaya_notaris" TEXT NOT NULL,
    "total_biaya" TEXT NOT NULL,
    "nama_shm" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KSS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PINEK" (
    "id" TEXT NOT NULL,
    "nomor_surat" TEXT NOT NULL,
    "hari" TEXT NOT NULL,
    "tanggal_pembuatan_surat" DATE NOT NULL,
    "nama_debitur" TEXT NOT NULL,
    "pekerjaan_debitur" TEXT NOT NULL,
    "tempat_lahir_debitur" TEXT NOT NULL,
    "tanggal_lahir_debitur" DATE NOT NULL,
    "tempat_tinggal_debitur" TEXT NOT NULL,
    "mendapat_persetujuan" TEXT NOT NULL,
    "nama_penjamin" TEXT NOT NULL,
    "tempat_lahir_penjamin" TEXT NOT NULL,
    "tanggal_lahir_penjamin" DATE NOT NULL,
    "tempat_tinggal_penjamin" TEXT NOT NULL,
    "tanggal_pengajuan_kredit" DATE NOT NULL,
    "debitur_menerima_pinjaman" TEXT NOT NULL,
    "dikenakan_bunga" TEXT NOT NULL,
    "total_seluruh_hutang" TEXT NOT NULL,
    "jangka_waktu_hutang" TEXT NOT NULL,
    "mengangsur_paling_lambat" TEXT NOT NULL,
    "pemotongan_gaji" TEXT NOT NULL,
    "tanggal_mengangsur_pertama" TEXT NOT NULL,
    "tanggal_mengangsur_terakhir" TEXT NOT NULL,
    "biaya" TEXT NOT NULL,
    "total_biaya" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PINEK_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FLEKSI" (
    "id" TEXT NOT NULL,
    "nomor_surat_perjanjian_kredit" TEXT NOT NULL,
    "hari" TEXT NOT NULL,
    "tanggal_surat_perjanjian_kredit" DATE NOT NULL,
    "nama_debitur" TEXT NOT NULL,
    "tempat_lahir_debitur" TEXT NOT NULL,
    "tanggal_lahir_debitur" DATE NOT NULL,
    "alamat_debitur" TEXT NOT NULL,
    "no_ktp_debitur" TEXT NOT NULL,
    "besar_pinjaman" TEXT NOT NULL,
    "bunga_pinjaman" TEXT NOT NULL,
    "jangka_waktu_pinjaman" TEXT NOT NULL,
    "angsuran_pinjaman" TEXT NOT NULL,
    "tanggal_angsuran_pertama" DATE NOT NULL,
    "hari_pembayaran_angsuran" TEXT NOT NULL,
    "tanggal_pencairan" DATE NOT NULL,
    "nomor_rekening_pinjaman" TEXT NOT NULL,
    "tujuan_penggunaan" TEXT NOT NULL,
    "nama_penjamin" TEXT NOT NULL,
    "nomor_surat_pernyataan_jaminan" TEXT NOT NULL,
    "tempat_lahir_penjamin" TEXT NOT NULL,
    "tanggal_lahir_penjamin" DATE NOT NULL,
    "alamat_penjamin" TEXT NOT NULL,
    "no_ktp_penjamin" TEXT NOT NULL,
    "barang_jaminan_lainnya" TEXT NOT NULL,
    "tanggal_surat_pernyataan_jaminan" DATE NOT NULL,
    "nama_penjamin_hubungan" TEXT NOT NULL,
    "tanggal_surat_penyerahan_jaminan" DATE NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FLEKSI_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PROCIM" (
    "id" TEXT NOT NULL,
    "nomor_perjanjian_kredit" TEXT NOT NULL,
    "hari" TEXT NOT NULL,
    "tanggal_surat_perjanjian_kredit" DATE NOT NULL,
    "nama_debitur" TEXT NOT NULL,
    "tempat_lahir_debitur" TEXT NOT NULL,
    "tanggal_lahir_debitur" DATE NOT NULL,
    "alamat_debitur" TEXT NOT NULL,
    "no_ktp_debitur" TEXT NOT NULL,
    "nominal_plafond" TEXT NOT NULL,
    "suku_bunga_pinjaman" TEXT NOT NULL,
    "jangka_waktu_pinjaman" TEXT NOT NULL,
    "angsuran_pinjaman" TEXT NOT NULL,
    "tanggal_angsuran_pertama" DATE NOT NULL,
    "hari_pembayaran_angsuran" TEXT NOT NULL,
    "tanggal_pencairan" DATE NOT NULL,
    "nomor_rekening_pinjaman" TEXT NOT NULL,
    "nama_penjamin" TEXT NOT NULL,
    "nomor_surat_pernyataan_jaminan" TEXT NOT NULL,
    "tempat_lahir_penjamin" TEXT NOT NULL,
    "tanggal_lahir_penjamin" DATE NOT NULL,
    "alamat_penjamin" TEXT NOT NULL,
    "no_ktp_penjamin" TEXT NOT NULL,
    "barang_jaminan_lainnya" TEXT NOT NULL,
    "tanggal_surat_pernyataan_jaminan" DATE NOT NULL,
    "tanggal_surat_penyerahan_jaminan" DATE NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PROCIM_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KSM" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "jabatan" TEXT NOT NULL,
    "nama_debitur" TEXT NOT NULL,
    "alamat_usaha_debitur" TEXT NOT NULL,
    "alamat_rumah_debitur" TEXT NOT NULL,
    "tanggal_surat_perintah_jalan" DATE NOT NULL,
    "tanggal_surat_pemberian_fasilitas_kredit" DATE NOT NULL,
    "nomor_surat" TEXT NOT NULL,
    "nominal" TEXT NOT NULL,
    "tujuan_penggunaan" TEXT NOT NULL,
    "suku_bunga" TEXT NOT NULL,
    "provisi" TEXT NOT NULL,
    "jangka_waktu" TEXT NOT NULL,
    "detail_jaminan" TEXT NOT NULL,
    "pekerjaan_debitur" TEXT NOT NULL,
    "tanggal_surat_kuasa_debet" DATE NOT NULL,
    "tempat_lahir_debitur" TEXT NOT NULL,
    "tanggal_lahir_debitur" DATE NOT NULL,
    "no_ktp_debitur" TEXT NOT NULL,
    "tanggal_surat_kuasa_kendaraan" DATE NOT NULL,
    "hari" TEXT NOT NULL,
    "tanggal_surat_perjanjian_kredit" DATE NOT NULL,
    "mendapat_persetujuan_dari" TEXT NOT NULL,
    "nama_penjamin" TEXT NOT NULL,
    "tempat_lahir_penjamin" TEXT NOT NULL,
    "tanggal_lahir_penjamin" DATE NOT NULL,
    "tempat_tinggal_sama_dengan" TEXT NOT NULL,
    "no_ktp_penjamin" TEXT NOT NULL,
    "seluruh_hutang_sebesar" TEXT NOT NULL,
    "tanggal_mengangsur_paling_lambat" TEXT NOT NULL,
    "biaya_angsuran" TEXT NOT NULL,
    "tanggal_mengangsur_pertama" DATE NOT NULL,
    "tanggal_mengangsur_terakhir" DATE NOT NULL,
    "biaya_provisi" TEXT NOT NULL,
    "biaya_materai" TEXT NOT NULL,
    "biaya_asuransi" TEXT NOT NULL,
    "biaya_asuransi_tlo" TEXT NOT NULL,
    "biaya_administrasi" TEXT NOT NULL,
    "biaya_notaris" TEXT NOT NULL,
    "total_biaya" TEXT NOT NULL,
    "tanggal_surat_pengikatan_jaminan" DATE NOT NULL,
    "nama_barang" TEXT NOT NULL,
    "tanggal_surat_penyerahan_jaminan" DATE NOT NULL,
    "tanggal_surat_fasilitas_kredit" DATE NOT NULL,
    "tanggal_surat_pernyataan" DATE NOT NULL,
    "nik_debitur" TEXT NOT NULL,
    "jenis_kelamin_debitur" TEXT NOT NULL,
    "harga_jaminan_saat_ini" TEXT NOT NULL,
    "tanggal_surat_kuasa" DATE NOT NULL,
    "tanggal_pencairan" DATE NOT NULL,
    "tanggal_surat_pernyataan_2" DATE NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KSM_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KMSM" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "jabatan" TEXT NOT NULL,
    "nama_debitur" TEXT NOT NULL,
    "alamat_usaha_debitur" TEXT NOT NULL,
    "alamat_rumah_debitur" TEXT NOT NULL,
    "tanggal_surat_perintah_jalan" DATE NOT NULL,
    "tanggal_surat_pemberian_kredit" DATE NOT NULL,
    "nomor_surat" TEXT NOT NULL,
    "nominal" TEXT NOT NULL,
    "tujuan_penggunaan" TEXT NOT NULL,
    "suku_bunga" TEXT NOT NULL,
    "jangka_waktu" TEXT NOT NULL,
    "biaya_provisi" TEXT NOT NULL,
    "biaya_administrasi" TEXT NOT NULL,
    "detail_jaminan" TEXT NOT NULL,
    "pekerjaan_debitur" TEXT NOT NULL,
    "tanggal_surat_kuasa_debet" DATE NOT NULL,
    "tanggal_lahir_debitur" DATE NOT NULL,
    "no_ktp_debitur" TEXT NOT NULL,
    "tanggal_surat_kuasa_kendaraan" DATE NOT NULL,
    "hari" TEXT NOT NULL,
    "tanggal_surat_perjanjian_kredit" DATE NOT NULL,
    "tempat_lahir_debitur" TEXT NOT NULL,
    "hubungan_debitur_penjamin" TEXT NOT NULL,
    "nama_penjamin" TEXT NOT NULL,
    "tempat_lahir_penjamin" TEXT NOT NULL,
    "tanggal_lahir_penjamin" DATE NOT NULL,
    "no_ktp_penjamin" TEXT NOT NULL,
    "utang_atas_kredit" TEXT NOT NULL,
    "tenggat_mengangsur_tanggal" TEXT NOT NULL,
    "nilai_mengangsur" TEXT NOT NULL,
    "tanggal_mengangsur_pertama" DATE NOT NULL,
    "tanggal_mengangsur_terakhir" DATE NOT NULL,
    "biaya_provisi_sebesar" TEXT NOT NULL,
    "biaya_materai" TEXT NOT NULL,
    "waktu_asuransi_tlo" TEXT NOT NULL,
    "biaya_asuransi_tlo" TEXT NOT NULL,
    "biaya_administrasi_sebesar" TEXT NOT NULL,
    "biaya_notaris" TEXT NOT NULL,
    "total_biaya" TEXT NOT NULL,
    "nama_barang" TEXT NOT NULL,
    "tanggal_surat_penyerahan_jaminan" DATE NOT NULL,
    "tanggal_surat_fasilitas_kredit" DATE NOT NULL,
    "tanggal_surat_pernyataan" DATE NOT NULL,
    "nik_debitur" TEXT NOT NULL,
    "jenis_kelamin_debitur" TEXT NOT NULL,
    "harga_jaminan" TEXT NOT NULL,
    "tanggal_surat_kuasa" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KMSM_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KRS" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "jabatan" TEXT NOT NULL,
    "nama_debitur" TEXT NOT NULL,
    "alamat_usaha_debitur" TEXT NOT NULL,
    "alamat_rumah_debitur" TEXT NOT NULL,
    "tanggal_surat_perintah_jalan" DATE NOT NULL,
    "tanggal_surat_persetujuan_fasilitas_kredit" DATE NOT NULL,
    "nomor_surat" TEXT NOT NULL,
    "tujuan_penggunaan" TEXT NOT NULL,
    "plafond" TEXT NOT NULL,
    "jangka_waktu" TEXT NOT NULL,
    "suku_bunga" TEXT NOT NULL,
    "biaya_provisi" TEXT NOT NULL,
    "biaya_administrasi" TEXT NOT NULL,
    "detail_jaminan" TEXT NOT NULL,
    "pekerjaan_debitur" TEXT NOT NULL,
    "tanggal_surat_kuasa_debet" DATE NOT NULL,
    "no_ktp_debitur" TEXT NOT NULL,
    "tanggal_surat_pernyataan" DATE NOT NULL,
    "hari" TEXT NOT NULL,
    "tanggal_surat_perjanjian_kredit" DATE NOT NULL,
    "tempat_lahir_debitur" TEXT NOT NULL,
    "tanggal_lahir_debitur" DATE NOT NULL,
    "telah_persetujuan_dari" TEXT NOT NULL,
    "nama_penjamin" TEXT NOT NULL,
    "tempat_lahir_penjamin" TEXT NOT NULL,
    "tanggal_lahir_penjamin" DATE NOT NULL,
    "no_ktp_penjamin" TEXT NOT NULL,
    "bertempat_tinggal_sama_dengan" TEXT NOT NULL,
    "debitur_pemilik_rekening" TEXT NOT NULL,
    "melunasi_hutang_sebesar" TEXT NOT NULL,
    "jangka_waktu_angsuran" TEXT NOT NULL,
    "tanggal_mengangsur_terakhir" DATE NOT NULL,
    "tanggal_mengangsur_paling_lambat" TEXT NOT NULL,
    "tanggal_mengangsur_pertama" DATE NOT NULL,
    "nominal_angsuran" TEXT NOT NULL,
    "biaya_provisi_sebesar" TEXT NOT NULL,
    "biaya_administrasi_sebesar" TEXT NOT NULL,
    "waktu_asuransi_jiwa" TEXT NOT NULL,
    "biaya_asuransi_jiwa" TEXT NOT NULL,
    "biaya_materai_sebesar" TEXT NOT NULL,
    "biaya_jumlah" TEXT NOT NULL,
    "tanggal_surat_penyerahan_jaminan" DATE NOT NULL,
    "tanggal_surat_terima_fasilitas_kredit" DATE NOT NULL,
    "tanggal_surat_pernyataan_1" DATE NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KRS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KMM" (
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
    "tujuan_penggunaan" TEXT NOT NULL,
    "suku_bunga" TEXT NOT NULL,
    "jangka_waktu" TEXT NOT NULL,
    "biaya_provisi" TEXT NOT NULL,
    "biaya_administasi" TEXT NOT NULL,
    "detail_jaminan" TEXT NOT NULL,
    "pekerjaan_debitur" TEXT NOT NULL,
    "tanggal_surat_kuasa_debet" DATE NOT NULL,
    "tanggal_lahir_debitur" DATE NOT NULL,
    "no_ktp_debitur" TEXT NOT NULL,
    "tanggal_surat_kuasa_kendaraan" DATE NOT NULL,
    "hari" TEXT NOT NULL,
    "tanggal_surat_perjanjian_kredit" DATE NOT NULL,
    "tempat_lahir_debitur" TEXT NOT NULL,
    "hubungan_debitur_penjamin" TEXT NOT NULL,
    "nama_penjamin" TEXT NOT NULL,
    "tempat_lahir_penjamin" TEXT NOT NULL,
    "tanggal_lahir_penjamin" DATE NOT NULL,
    "no_ktp_penjamin" TEXT NOT NULL,
    "utang_atas_kredit" TEXT NOT NULL,
    "tenggat_mengangsur_tiap_bulan" TEXT NOT NULL,
    "nilai_mengangsur_tiap_bulan" TEXT NOT NULL,
    "tanggal_mengangsur_pertama" DATE NOT NULL,
    "tanggal_mengangsur_terakhir" DATE NOT NULL,
    "biaya_provisi_sebesar" TEXT NOT NULL,
    "biaya_materai_sebesar" TEXT NOT NULL,
    "biaya_asuransi_jiwa_sebesar" TEXT NOT NULL,
    "biaya_asuransi_tlo" TEXT NOT NULL,
    "biaya_administrasi_sebesar" TEXT NOT NULL,
    "biaya_notaris_sebesar" TEXT NOT NULL,
    "total_biaya" TEXT NOT NULL,
    "nama_barang" TEXT NOT NULL,
    "tanggal_surat_penyerahan_jaminan" DATE NOT NULL,
    "tanggal_surat_fasilitas_kredit" DATE NOT NULL,
    "tanggal_surat_pernyataan" DATE NOT NULL,
    "nik_debitur" TEXT NOT NULL,
    "jenis_kelamin_debitur" TEXT NOT NULL,
    "harga_jaminan" TEXT NOT NULL,
    "tanggal_surat_kuasa" DATE NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KMM_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KMS" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "jabatan" TEXT NOT NULL,
    "nama_debitur" TEXT NOT NULL,
    "alamat_usaha_debitur" TEXT NOT NULL,
    "alamat_rumah_debitur" TEXT NOT NULL,
    "tanggal_surat_perintah_jalan" DATE NOT NULL,
    "tanggal_surat_penawaran_kredit" DATE NOT NULL,
    "nomor_surat" TEXT NOT NULL,
    "tujuan" TEXT NOT NULL,
    "plafond" TEXT NOT NULL,
    "jangka_waktu" TEXT NOT NULL,
    "suku_bunga" TEXT NOT NULL,
    "pekerjaan_debitur" TEXT NOT NULL,
    "tanggal_surat_kuasa_debet" DATE NOT NULL,
    "nama_penjamin" TEXT NOT NULL,
    "alamat_penjamin" TEXT NOT NULL,
    "no_ktp_penjamin" TEXT NOT NULL,
    "detail_jaminan" TEXT NOT NULL,
    "tanggal_surat_pernyataan" DATE NOT NULL,
    "hari" TEXT NOT NULL,
    "tanggal_surat_perjanjian_kredit" DATE NOT NULL,
    "telah_persetujuan_dari" TEXT NOT NULL,
    "nama_penjamin_1" TEXT NOT NULL,
    "tempat_lahir_penjamin" TEXT NOT NULL,
    "tanggal_lahir_penjamin" DATE NOT NULL,
    "no_ktp_penjamin_1" TEXT NOT NULL,
    "bertempat_sama_dengan" TEXT NOT NULL,
    "debitur_adalah_pemilik_rekening" TEXT NOT NULL,
    "melunasi_hutang_sebesar" TEXT NOT NULL,
    "tanggal_mengangsur_terakhir" DATE NOT NULL,
    "tanggal_mengangsur_tiap_bulan" TEXT NOT NULL,
    "tanggal_mengangsur_pertama" DATE NOT NULL,
    "nominal_angsuran" TEXT NOT NULL,
    "biaya_provisi_sebesar" TEXT NOT NULL,
    "biaya_administrasi_sebesar" TEXT NOT NULL,
    "nama_asuransi_jiwa" TEXT NOT NULL,
    "waktu_asuransi_jiwa" TEXT NOT NULL,
    "biaya_asuransi_jiwa_sebesar" TEXT NOT NULL,
    "biaya_materai_sebesar" TEXT NOT NULL,
    "biaya_notaris_sebesar" TEXT NOT NULL,
    "biaya_jumlah" TEXT NOT NULL,
    "tanggal_surat_penyerahan_jaminan" DATE NOT NULL,
    "tanggal_surat_fasilitas_kredit" DATE NOT NULL,
    "tanggal_surat_pernyataan_1" DATE NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KMS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KEF" (
    "id" TEXT NOT NULL,
    "nomor_surat" TEXT NOT NULL,
    "hari" TEXT NOT NULL,
    "tanggal_surat_perjanjian_kredit" DATE NOT NULL,
    "nama_debitur" TEXT NOT NULL,
    "tempat_lahir_debitur" TEXT NOT NULL,
    "tanggal_lahir_debitur" DATE NOT NULL,
    "alamat_rumah_debitur" TEXT NOT NULL,
    "no_ktp_debitur" TEXT NOT NULL,
    "telah_mendapat_persetujuan" TEXT NOT NULL,
    "nama_penjamin" TEXT NOT NULL,
    "tempat_lahir_penjamin" TEXT NOT NULL,
    "tanggal_lahir_penjamin" DATE NOT NULL,
    "no_ktp_penjamin" TEXT NOT NULL,
    "bertempat_tinggal_dengan" TEXT NOT NULL,
    "nama_barang" TEXT NOT NULL,
    "nama_toko" TEXT NOT NULL,
    "alamat_toko" TEXT NOT NULL,
    "harga_barang" TEXT NOT NULL,
    "bunga_pinjaman" TEXT NOT NULL,
    "total_pinjaman" TEXT NOT NULL,
    "jangka_waktu" TEXT NOT NULL,
    "tanggal_angsuran_berakhir" DATE NOT NULL,
    "tenggat_mengangsur_pada" TEXT NOT NULL,
    "tanggal_angsuran_pertama" DATE NOT NULL,
    "nilai_mengangsur" TEXT NOT NULL,
    "biaya_provisi_sebesar" TEXT NOT NULL,
    "biaya_administrasi_sebesar" TEXT NOT NULL,
    "biaya_materai_sebesar" TEXT NOT NULL,
    "biaya_fidusia_sebesar" TEXT NOT NULL,
    "total_biaya" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KEF_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FleksiBarangElektronik" (
    "id" TEXT NOT NULL,
    "fleksi_id" TEXT NOT NULL,
    "nama_barang" TEXT NOT NULL,
    "tipe" TEXT NOT NULL,
    "harga" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FleksiBarangElektronik_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FleksiBarangFurniture" (
    "id" TEXT NOT NULL,
    "fleksi_id" TEXT NOT NULL,
    "nama_barang" TEXT NOT NULL,
    "tipe" TEXT NOT NULL,
    "harga" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FleksiBarangFurniture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProcimBarangElektronik" (
    "id" TEXT NOT NULL,
    "procim_id" TEXT NOT NULL,
    "nama_barang" TEXT NOT NULL,
    "tipe" TEXT NOT NULL,
    "harga" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProcimBarangElektronik_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProcimBarangFurniture" (
    "id" TEXT NOT NULL,
    "procim_id" TEXT NOT NULL,
    "nama_barang" TEXT NOT NULL,
    "tipe" TEXT NOT NULL,
    "harga" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProcimBarangFurniture_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FleksiBarangElektronik" ADD CONSTRAINT "FleksiBarangElektronik_fleksi_id_fkey" FOREIGN KEY ("fleksi_id") REFERENCES "FLEKSI"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FleksiBarangFurniture" ADD CONSTRAINT "FleksiBarangFurniture_fleksi_id_fkey" FOREIGN KEY ("fleksi_id") REFERENCES "FLEKSI"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProcimBarangElektronik" ADD CONSTRAINT "ProcimBarangElektronik_procim_id_fkey" FOREIGN KEY ("procim_id") REFERENCES "PROCIM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProcimBarangFurniture" ADD CONSTRAINT "ProcimBarangFurniture_procim_id_fkey" FOREIGN KEY ("procim_id") REFERENCES "PROCIM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
