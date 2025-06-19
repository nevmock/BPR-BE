/*
  Warnings:

  - You are about to drop the column `hari` on the `FLEKSI` table. All the data in the column will be lost.
  - You are about to drop the column `hari_pembayaran_angsuran` on the `FLEKSI` table. All the data in the column will be lost.
  - You are about to drop the column `nomor_surat_perjanjian_kredit` on the `FLEKSI` table. All the data in the column will be lost.
  - You are about to drop the column `nomor_surat_pernyataan_jaminan` on the `FLEKSI` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_pencairan` on the `FLEKSI` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_penyerahan_jaminan` on the `FLEKSI` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_perjanjian_kredit` on the `FLEKSI` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_pernyataan_jaminan` on the `FLEKSI` table. All the data in the column will be lost.
  - The `besar_pinjaman` column on the `FLEKSI` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `bunga_pinjaman` column on the `FLEKSI` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jangka_waktu_pinjaman` column on the `FLEKSI` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `angsuran_pinjaman` column on the `FLEKSI` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `biaya_administrasi_sebesar` on the `KAR` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_fasilitas_kredit` on the `KAR` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_kuasa_debet` on the `KAR` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_kuasa_kendaraan` on the `KAR` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_pemotongan_gaji` on the `KAR` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_penyerahan_jaminan` on the `KAR` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_perintah_jalan` on the `KAR` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_perjanjian_kredit` on the `KAR` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_pernyataan` on the `KAR` table. All the data in the column will be lost.
  - The `nominal` column on the `KAR` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `suku_bunga` column on the `KAR` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jangka_waktu` column on the `KAR` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_provisi` column on the `KAR` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_administrasi` column on the `KAR` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `utang_atas_kredit_sebesar` column on the `KAR` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `tenggat_mengangsur_tiap_bulan` column on the `KAR` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `nilai_mengangsur` column on the `KAR` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_provisi_sebesar` column on the `KAR` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_materai_sebesar` column on the `KAR` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_asuransi_jiwa_sebesar` column on the `KAR` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_notaris_sebesar` column on the `KAR` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `total_biaya` column on the `KAR` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `hari` on the `KEF` table. All the data in the column will be lost.
  - You are about to drop the column `hari_pembuatan_surat` on the `KEF` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_kuasa` on the `KEF` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_kuasa_debet` on the `KEF` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_perjanjian_kredit` on the `KEF` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_perjanjian_sewabeli` on the `KEF` table. All the data in the column will be lost.
  - The `harga_barang` column on the `KEF` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `bunga_pinjaman` column on the `KEF` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `total_pinjaman` column on the `KEF` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jangka_waktu` column on the `KEF` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `tenggat_mengangsur_pada` column on the `KEF` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `nilai_mengangsur` column on the `KEF` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `total_biaya` column on the `KEF` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `harga_jaminan` column on the `KEF` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `total_harga_keseluruhan_barang` column on the `KEF` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `hari` on the `KMM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_fasilitas_kredit` on the `KMM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_kuasa` on the `KMM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_kuasa_debet` on the `KMM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_kuasa_kendaraan` on the `KMM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_penyerahan_jaminan` on the `KMM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_perintah_jalan` on the `KMM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_perjanjian_kredit` on the `KMM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_pernyataan` on the `KMM` table. All the data in the column will be lost.
  - The `nominal` column on the `KMM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `suku_bunga` column on the `KMM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jangka_waktu` column on the `KMM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_provisi` column on the `KMM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_administasi` column on the `KMM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `utang_atas_kredit` column on the `KMM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `tenggat_mengangsur_tiap_bulan` column on the `KMM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `nilai_mengangsur_tiap_bulan` column on the `KMM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_provisi_sebesar` column on the `KMM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_materai_sebesar` column on the `KMM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_asuransi_jiwa_sebesar` column on the `KMM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_asuransi_tlo` column on the `KMM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_administrasi_sebesar` column on the `KMM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_notaris_sebesar` column on the `KMM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `total_biaya` column on the `KMM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `harga_jaminan` column on the `KMM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `hari` on the `KMS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_fasilitas_kredit` on the `KMS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_kuasa_debet` on the `KMS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_penawaran_kredit` on the `KMS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_penyerahan_jaminan` on the `KMS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_perintah_jalan` on the `KMS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_perjanjian_kredit` on the `KMS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_pernyataan` on the `KMS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_pernyataan_1` on the `KMS` table. All the data in the column will be lost.
  - The `plafond` column on the `KMS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jangka_waktu` column on the `KMS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `suku_bunga` column on the `KMS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `melunasi_hutang_sebesar` column on the `KMS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `tanggal_mengangsur_tiap_bulan` column on the `KMS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `nominal_angsuran` column on the `KMS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_provisi_sebesar` column on the `KMS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_administrasi_sebesar` column on the `KMS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `waktu_asuransi_jiwa` column on the `KMS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_asuransi_jiwa_sebesar` column on the `KMS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_materai_sebesar` column on the `KMS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_notaris_sebesar` column on the `KMS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_jumlah` column on the `KMS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `hari` on the `KMSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_fasilitas_kredit` on the `KMSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_kuasa` on the `KMSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_kuasa_debet` on the `KMSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_kuasa_kendaraan` on the `KMSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_pemberian_kredit` on the `KMSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_penyerahan_jaminan` on the `KMSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_perintah_jalan` on the `KMSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_perjanjian_kredit` on the `KMSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_pernyataan` on the `KMSM` table. All the data in the column will be lost.
  - The `nominal` column on the `KMSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `suku_bunga` column on the `KMSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jangka_waktu` column on the `KMSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_provisi` column on the `KMSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_administrasi` column on the `KMSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `utang_atas_kredit` column on the `KMSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `tenggat_mengangsur_tanggal` column on the `KMSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `nilai_mengangsur` column on the `KMSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_provisi_sebesar` column on the `KMSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_materai` column on the `KMSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `waktu_asuransi_tlo` column on the `KMSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_asuransi_tlo` column on the `KMSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_administrasi_sebesar` column on the `KMSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_notaris` column on the `KMSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `total_biaya` column on the `KMSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `harga_jaminan` column on the `KMSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `hari` on the `KRS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_kuasa_debet` on the `KRS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_penyerahan_jaminan` on the `KRS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_perintah_jalan` on the `KRS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_perjanjian_kredit` on the `KRS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_pernyataan` on the `KRS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_pernyataan_1` on the `KRS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_persetujuan_fasilitas_kredit` on the `KRS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_terima_fasilitas_kredit` on the `KRS` table. All the data in the column will be lost.
  - The `plafond` column on the `KRS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jangka_waktu` column on the `KRS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `suku_bunga` column on the `KRS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_provisi` column on the `KRS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_administrasi` column on the `KRS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `melunasi_hutang_sebesar` column on the `KRS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jangka_waktu_angsuran` column on the `KRS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `tanggal_mengangsur_paling_lambat` column on the `KRS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `nominal_angsuran` column on the `KRS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_provisi_sebesar` column on the `KRS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_administrasi_sebesar` column on the `KRS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `waktu_asuransi_jiwa` column on the `KRS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_asuransi_jiwa` column on the `KRS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_materai_sebesar` column on the `KRS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_jumlah` column on the `KRS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `hari` on the `KSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_pencairan` on the `KSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_fasilitas_kredit` on the `KSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_kuasa` on the `KSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_kuasa_debet` on the `KSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_kuasa_kendaraan` on the `KSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_pemberian_fasilitas_kredit` on the `KSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_pengikatan_jaminan` on the `KSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_penyerahan_jaminan` on the `KSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_perintah_jalan` on the `KSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_pernyataan` on the `KSM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_pernyataan_2` on the `KSM` table. All the data in the column will be lost.
  - The `nominal` column on the `KSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `suku_bunga` column on the `KSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `provisi` column on the `KSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jangka_waktu` column on the `KSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `seluruh_hutang_sebesar` column on the `KSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `tanggal_mengangsur_paling_lambat` column on the `KSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_angsuran` column on the `KSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_provisi` column on the `KSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_materai` column on the `KSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_asuransi` column on the `KSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_asuransi_tlo` column on the `KSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_administrasi` column on the `KSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_notaris` column on the `KSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `total_biaya` column on the `KSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `harga_jaminan_saat_ini` column on the `KSM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `hari` on the `KSS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_fasilitas_kredit` on the `KSS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_fasilitas_kredit_1` on the `KSS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_kuasa_debet` on the `KSS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_penyerahan_jaminan` on the `KSS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_perintah_jalan` on the `KSS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_perjanjian_kredit` on the `KSS` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_pernyataan` on the `KSS` table. All the data in the column will be lost.
  - The `plaford` column on the `KSS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jangka_waktu` column on the `KSS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `suku_bunga` column on the `KSS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_provisi` column on the `KSS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_administrasi` column on the `KSS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `bunga_pinjaman` column on the `KSS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `total_seluruh_pinjaman` column on the `KSS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `angsuran_tiap_bulan` column on the `KSS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `nominal_provisi` column on the `KSS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `nominal_administrasi` column on the `KSS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jangka_asuransi` column on the `KSS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_asuransi` column on the `KSS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_materai` column on the `KSS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biaya_notaris` column on the `KSS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `total_biaya` column on the `KSS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jumlah_bank_menyerahkan_uang` column on the `KSS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `hari` on the `PINEK` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_dokumen_agunan` on the `PINEK` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_kuasa_debet` on the `PINEK` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_pemotongan_gaji` on the `PINEK` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_perjanjian_kredit` on the `PINEK` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_pernyataan` on the `PINEK` table. All the data in the column will be lost.
  - The `debitur_menerima_pinjaman` column on the `PINEK` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dikenakan_bunga` column on the `PINEK` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `total_seluruh_hutang` column on the `PINEK` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jangka_waktu_hutang` column on the `PINEK` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `mengangsur_paling_lambat` column on the `PINEK` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `pemotongan_gaji` column on the `PINEK` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `total_biaya` column on the `PINEK` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `hari` on the `PROCIM` table. All the data in the column will be lost.
  - You are about to drop the column `hari_pembayaran_angsuran` on the `PROCIM` table. All the data in the column will be lost.
  - You are about to drop the column `nomor_perjanjian_kredit` on the `PROCIM` table. All the data in the column will be lost.
  - You are about to drop the column `nomor_surat_pernyataan_jaminan` on the `PROCIM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_pencairan` on the `PROCIM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_penyerahan_jaminan` on the `PROCIM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_perjanjian_kredit` on the `PROCIM` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_surat_pernyataan_jaminan` on the `PROCIM` table. All the data in the column will be lost.
  - The `nominal_plafond` column on the `PROCIM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `suku_bunga_pinjaman` column on the `PROCIM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jangka_waktu_pinjaman` column on the `PROCIM` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `angsuran_pinjaman` column on the `PROCIM` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "FLEKSI" DROP COLUMN "hari",
DROP COLUMN "hari_pembayaran_angsuran",
DROP COLUMN "nomor_surat_perjanjian_kredit",
DROP COLUMN "nomor_surat_pernyataan_jaminan",
DROP COLUMN "tanggal_pencairan",
DROP COLUMN "tanggal_surat_penyerahan_jaminan",
DROP COLUMN "tanggal_surat_perjanjian_kredit",
DROP COLUMN "tanggal_surat_pernyataan_jaminan",
ADD COLUMN     "nomor_surat_" TEXT,
ADD COLUMN     "tanggal_surat_persetujuan_kredit" DATE,
DROP COLUMN "besar_pinjaman",
ADD COLUMN     "besar_pinjaman" INTEGER,
DROP COLUMN "bunga_pinjaman",
ADD COLUMN     "bunga_pinjaman" DOUBLE PRECISION,
DROP COLUMN "jangka_waktu_pinjaman",
ADD COLUMN     "jangka_waktu_pinjaman" INTEGER,
DROP COLUMN "angsuran_pinjaman",
ADD COLUMN     "angsuran_pinjaman" INTEGER;

-- AlterTable
ALTER TABLE "KAR" DROP COLUMN "biaya_administrasi_sebesar",
DROP COLUMN "tanggal_surat_fasilitas_kredit",
DROP COLUMN "tanggal_surat_kuasa_debet",
DROP COLUMN "tanggal_surat_kuasa_kendaraan",
DROP COLUMN "tanggal_surat_pemotongan_gaji",
DROP COLUMN "tanggal_surat_penyerahan_jaminan",
DROP COLUMN "tanggal_surat_perintah_jalan",
DROP COLUMN "tanggal_surat_perjanjian_kredit",
DROP COLUMN "tanggal_surat_pernyataan",
ADD COLUMN     "tanggal_surat_permohonan_kredit" DATE,
DROP COLUMN "nominal",
ADD COLUMN     "nominal" INTEGER,
DROP COLUMN "suku_bunga",
ADD COLUMN     "suku_bunga" DOUBLE PRECISION,
DROP COLUMN "jangka_waktu",
ADD COLUMN     "jangka_waktu" INTEGER,
DROP COLUMN "biaya_provisi",
ADD COLUMN     "biaya_provisi" DOUBLE PRECISION,
DROP COLUMN "biaya_administrasi",
ADD COLUMN     "biaya_administrasi" INTEGER,
DROP COLUMN "utang_atas_kredit_sebesar",
ADD COLUMN     "utang_atas_kredit_sebesar" INTEGER,
DROP COLUMN "tenggat_mengangsur_tiap_bulan",
ADD COLUMN     "tenggat_mengangsur_tiap_bulan" INTEGER,
DROP COLUMN "nilai_mengangsur",
ADD COLUMN     "nilai_mengangsur" INTEGER,
DROP COLUMN "biaya_provisi_sebesar",
ADD COLUMN     "biaya_provisi_sebesar" INTEGER,
DROP COLUMN "biaya_materai_sebesar",
ADD COLUMN     "biaya_materai_sebesar" INTEGER,
DROP COLUMN "biaya_asuransi_jiwa_sebesar",
ADD COLUMN     "biaya_asuransi_jiwa_sebesar" INTEGER,
DROP COLUMN "biaya_notaris_sebesar",
ADD COLUMN     "biaya_notaris_sebesar" INTEGER,
DROP COLUMN "total_biaya",
ADD COLUMN     "total_biaya" INTEGER;

-- AlterTable
ALTER TABLE "KEF" DROP COLUMN "hari",
DROP COLUMN "hari_pembuatan_surat",
DROP COLUMN "tanggal_surat_kuasa",
DROP COLUMN "tanggal_surat_kuasa_debet",
DROP COLUMN "tanggal_surat_perjanjian_kredit",
DROP COLUMN "tanggal_surat_perjanjian_sewabeli",
ADD COLUMN     "tanggal_surat_persetujuan_kredit" DATE,
DROP COLUMN "harga_barang",
ADD COLUMN     "harga_barang" INTEGER,
DROP COLUMN "bunga_pinjaman",
ADD COLUMN     "bunga_pinjaman" DOUBLE PRECISION,
DROP COLUMN "total_pinjaman",
ADD COLUMN     "total_pinjaman" INTEGER,
DROP COLUMN "jangka_waktu",
ADD COLUMN     "jangka_waktu" INTEGER,
DROP COLUMN "tenggat_mengangsur_pada",
ADD COLUMN     "tenggat_mengangsur_pada" INTEGER,
DROP COLUMN "nilai_mengangsur",
ADD COLUMN     "nilai_mengangsur" INTEGER,
DROP COLUMN "total_biaya",
ADD COLUMN     "total_biaya" INTEGER,
DROP COLUMN "harga_jaminan",
ADD COLUMN     "harga_jaminan" INTEGER,
DROP COLUMN "total_harga_keseluruhan_barang",
ADD COLUMN     "total_harga_keseluruhan_barang" INTEGER;

-- AlterTable
ALTER TABLE "KMM" DROP COLUMN "hari",
DROP COLUMN "tanggal_surat_fasilitas_kredit",
DROP COLUMN "tanggal_surat_kuasa",
DROP COLUMN "tanggal_surat_kuasa_debet",
DROP COLUMN "tanggal_surat_kuasa_kendaraan",
DROP COLUMN "tanggal_surat_penyerahan_jaminan",
DROP COLUMN "tanggal_surat_perintah_jalan",
DROP COLUMN "tanggal_surat_perjanjian_kredit",
DROP COLUMN "tanggal_surat_pernyataan",
ADD COLUMN     "tanggal_surat_permohonan_kredit" DATE,
DROP COLUMN "nominal",
ADD COLUMN     "nominal" INTEGER,
DROP COLUMN "suku_bunga",
ADD COLUMN     "suku_bunga" DOUBLE PRECISION,
DROP COLUMN "jangka_waktu",
ADD COLUMN     "jangka_waktu" INTEGER,
DROP COLUMN "biaya_provisi",
ADD COLUMN     "biaya_provisi" DOUBLE PRECISION,
DROP COLUMN "biaya_administasi",
ADD COLUMN     "biaya_administasi" DOUBLE PRECISION,
DROP COLUMN "utang_atas_kredit",
ADD COLUMN     "utang_atas_kredit" INTEGER,
DROP COLUMN "tenggat_mengangsur_tiap_bulan",
ADD COLUMN     "tenggat_mengangsur_tiap_bulan" INTEGER,
DROP COLUMN "nilai_mengangsur_tiap_bulan",
ADD COLUMN     "nilai_mengangsur_tiap_bulan" INTEGER,
DROP COLUMN "biaya_provisi_sebesar",
ADD COLUMN     "biaya_provisi_sebesar" INTEGER,
DROP COLUMN "biaya_materai_sebesar",
ADD COLUMN     "biaya_materai_sebesar" INTEGER,
DROP COLUMN "biaya_asuransi_jiwa_sebesar",
ADD COLUMN     "biaya_asuransi_jiwa_sebesar" INTEGER,
DROP COLUMN "biaya_asuransi_tlo",
ADD COLUMN     "biaya_asuransi_tlo" INTEGER,
DROP COLUMN "biaya_administrasi_sebesar",
ADD COLUMN     "biaya_administrasi_sebesar" INTEGER,
DROP COLUMN "biaya_notaris_sebesar",
ADD COLUMN     "biaya_notaris_sebesar" INTEGER,
DROP COLUMN "total_biaya",
ADD COLUMN     "total_biaya" INTEGER,
DROP COLUMN "harga_jaminan",
ADD COLUMN     "harga_jaminan" INTEGER;

-- AlterTable
ALTER TABLE "KMS" DROP COLUMN "hari",
DROP COLUMN "tanggal_surat_fasilitas_kredit",
DROP COLUMN "tanggal_surat_kuasa_debet",
DROP COLUMN "tanggal_surat_penawaran_kredit",
DROP COLUMN "tanggal_surat_penyerahan_jaminan",
DROP COLUMN "tanggal_surat_perintah_jalan",
DROP COLUMN "tanggal_surat_perjanjian_kredit",
DROP COLUMN "tanggal_surat_pernyataan",
DROP COLUMN "tanggal_surat_pernyataan_1",
ADD COLUMN     "tanggal_surat_permohonan_kredit" DATE,
ADD COLUMN     "tanggal_surat_persetujuan_kredit" DATE,
DROP COLUMN "plafond",
ADD COLUMN     "plafond" INTEGER,
DROP COLUMN "jangka_waktu",
ADD COLUMN     "jangka_waktu" INTEGER,
DROP COLUMN "suku_bunga",
ADD COLUMN     "suku_bunga" DOUBLE PRECISION,
DROP COLUMN "melunasi_hutang_sebesar",
ADD COLUMN     "melunasi_hutang_sebesar" INTEGER,
DROP COLUMN "tanggal_mengangsur_tiap_bulan",
ADD COLUMN     "tanggal_mengangsur_tiap_bulan" INTEGER,
DROP COLUMN "nominal_angsuran",
ADD COLUMN     "nominal_angsuran" INTEGER,
DROP COLUMN "biaya_provisi_sebesar",
ADD COLUMN     "biaya_provisi_sebesar" INTEGER,
DROP COLUMN "biaya_administrasi_sebesar",
ADD COLUMN     "biaya_administrasi_sebesar" INTEGER,
DROP COLUMN "waktu_asuransi_jiwa",
ADD COLUMN     "waktu_asuransi_jiwa" INTEGER,
DROP COLUMN "biaya_asuransi_jiwa_sebesar",
ADD COLUMN     "biaya_asuransi_jiwa_sebesar" INTEGER,
DROP COLUMN "biaya_materai_sebesar",
ADD COLUMN     "biaya_materai_sebesar" INTEGER,
DROP COLUMN "biaya_notaris_sebesar",
ADD COLUMN     "biaya_notaris_sebesar" INTEGER,
DROP COLUMN "biaya_jumlah",
ADD COLUMN     "biaya_jumlah" INTEGER;

-- AlterTable
ALTER TABLE "KMSM" DROP COLUMN "hari",
DROP COLUMN "tanggal_surat_fasilitas_kredit",
DROP COLUMN "tanggal_surat_kuasa",
DROP COLUMN "tanggal_surat_kuasa_debet",
DROP COLUMN "tanggal_surat_kuasa_kendaraan",
DROP COLUMN "tanggal_surat_pemberian_kredit",
DROP COLUMN "tanggal_surat_penyerahan_jaminan",
DROP COLUMN "tanggal_surat_perintah_jalan",
DROP COLUMN "tanggal_surat_perjanjian_kredit",
DROP COLUMN "tanggal_surat_pernyataan",
ADD COLUMN     "tanggal_surat_permohonan_kredit" DATE,
ADD COLUMN     "tanggal_surat_persetujuan_kredit" DATE,
DROP COLUMN "nominal",
ADD COLUMN     "nominal" INTEGER,
DROP COLUMN "suku_bunga",
ADD COLUMN     "suku_bunga" DOUBLE PRECISION,
DROP COLUMN "jangka_waktu",
ADD COLUMN     "jangka_waktu" INTEGER,
DROP COLUMN "biaya_provisi",
ADD COLUMN     "biaya_provisi" DOUBLE PRECISION,
DROP COLUMN "biaya_administrasi",
ADD COLUMN     "biaya_administrasi" DOUBLE PRECISION,
DROP COLUMN "utang_atas_kredit",
ADD COLUMN     "utang_atas_kredit" INTEGER,
DROP COLUMN "tenggat_mengangsur_tanggal",
ADD COLUMN     "tenggat_mengangsur_tanggal" INTEGER,
DROP COLUMN "nilai_mengangsur",
ADD COLUMN     "nilai_mengangsur" INTEGER,
DROP COLUMN "biaya_provisi_sebesar",
ADD COLUMN     "biaya_provisi_sebesar" INTEGER,
DROP COLUMN "biaya_materai",
ADD COLUMN     "biaya_materai" INTEGER,
DROP COLUMN "waktu_asuransi_tlo",
ADD COLUMN     "waktu_asuransi_tlo" INTEGER,
DROP COLUMN "biaya_asuransi_tlo",
ADD COLUMN     "biaya_asuransi_tlo" INTEGER,
DROP COLUMN "biaya_administrasi_sebesar",
ADD COLUMN     "biaya_administrasi_sebesar" INTEGER,
DROP COLUMN "biaya_notaris",
ADD COLUMN     "biaya_notaris" INTEGER,
DROP COLUMN "total_biaya",
ADD COLUMN     "total_biaya" INTEGER,
DROP COLUMN "harga_jaminan",
ADD COLUMN     "harga_jaminan" INTEGER;

-- AlterTable
ALTER TABLE "KRS" DROP COLUMN "hari",
DROP COLUMN "tanggal_surat_kuasa_debet",
DROP COLUMN "tanggal_surat_penyerahan_jaminan",
DROP COLUMN "tanggal_surat_perintah_jalan",
DROP COLUMN "tanggal_surat_perjanjian_kredit",
DROP COLUMN "tanggal_surat_pernyataan",
DROP COLUMN "tanggal_surat_pernyataan_1",
DROP COLUMN "tanggal_surat_persetujuan_fasilitas_kredit",
DROP COLUMN "tanggal_surat_terima_fasilitas_kredit",
ADD COLUMN     "tanggal_surat_permohonan_kredit" DATE,
ADD COLUMN     "tanggal_surat_persetujuan_kredit" DATE,
DROP COLUMN "plafond",
ADD COLUMN     "plafond" INTEGER,
DROP COLUMN "jangka_waktu",
ADD COLUMN     "jangka_waktu" INTEGER,
DROP COLUMN "suku_bunga",
ADD COLUMN     "suku_bunga" DOUBLE PRECISION,
DROP COLUMN "biaya_provisi",
ADD COLUMN     "biaya_provisi" DOUBLE PRECISION,
DROP COLUMN "biaya_administrasi",
ADD COLUMN     "biaya_administrasi" DOUBLE PRECISION,
DROP COLUMN "melunasi_hutang_sebesar",
ADD COLUMN     "melunasi_hutang_sebesar" INTEGER,
DROP COLUMN "jangka_waktu_angsuran",
ADD COLUMN     "jangka_waktu_angsuran" INTEGER,
DROP COLUMN "tanggal_mengangsur_paling_lambat",
ADD COLUMN     "tanggal_mengangsur_paling_lambat" INTEGER,
DROP COLUMN "nominal_angsuran",
ADD COLUMN     "nominal_angsuran" INTEGER,
DROP COLUMN "biaya_provisi_sebesar",
ADD COLUMN     "biaya_provisi_sebesar" INTEGER,
DROP COLUMN "biaya_administrasi_sebesar",
ADD COLUMN     "biaya_administrasi_sebesar" INTEGER,
DROP COLUMN "waktu_asuransi_jiwa",
ADD COLUMN     "waktu_asuransi_jiwa" INTEGER,
DROP COLUMN "biaya_asuransi_jiwa",
ADD COLUMN     "biaya_asuransi_jiwa" INTEGER,
DROP COLUMN "biaya_materai_sebesar",
ADD COLUMN     "biaya_materai_sebesar" INTEGER,
DROP COLUMN "biaya_jumlah",
ADD COLUMN     "biaya_jumlah" INTEGER;

-- AlterTable
ALTER TABLE "KSM" DROP COLUMN "hari",
DROP COLUMN "tanggal_pencairan",
DROP COLUMN "tanggal_surat_fasilitas_kredit",
DROP COLUMN "tanggal_surat_kuasa",
DROP COLUMN "tanggal_surat_kuasa_debet",
DROP COLUMN "tanggal_surat_kuasa_kendaraan",
DROP COLUMN "tanggal_surat_pemberian_fasilitas_kredit",
DROP COLUMN "tanggal_surat_pengikatan_jaminan",
DROP COLUMN "tanggal_surat_penyerahan_jaminan",
DROP COLUMN "tanggal_surat_perintah_jalan",
DROP COLUMN "tanggal_surat_pernyataan",
DROP COLUMN "tanggal_surat_pernyataan_2",
ADD COLUMN     "tanggal_surat_permohonan_kredit" DATE,
DROP COLUMN "nominal",
ADD COLUMN     "nominal" INTEGER,
DROP COLUMN "suku_bunga",
ADD COLUMN     "suku_bunga" DOUBLE PRECISION,
DROP COLUMN "provisi",
ADD COLUMN     "provisi" DOUBLE PRECISION,
DROP COLUMN "jangka_waktu",
ADD COLUMN     "jangka_waktu" INTEGER,
DROP COLUMN "seluruh_hutang_sebesar",
ADD COLUMN     "seluruh_hutang_sebesar" INTEGER,
DROP COLUMN "tanggal_mengangsur_paling_lambat",
ADD COLUMN     "tanggal_mengangsur_paling_lambat" INTEGER,
DROP COLUMN "biaya_angsuran",
ADD COLUMN     "biaya_angsuran" INTEGER,
DROP COLUMN "biaya_provisi",
ADD COLUMN     "biaya_provisi" INTEGER,
DROP COLUMN "biaya_materai",
ADD COLUMN     "biaya_materai" INTEGER,
DROP COLUMN "biaya_asuransi",
ADD COLUMN     "biaya_asuransi" INTEGER,
DROP COLUMN "biaya_asuransi_tlo",
ADD COLUMN     "biaya_asuransi_tlo" INTEGER,
DROP COLUMN "biaya_administrasi",
ADD COLUMN     "biaya_administrasi" INTEGER,
DROP COLUMN "biaya_notaris",
ADD COLUMN     "biaya_notaris" INTEGER,
DROP COLUMN "total_biaya",
ADD COLUMN     "total_biaya" INTEGER,
DROP COLUMN "harga_jaminan_saat_ini",
ADD COLUMN     "harga_jaminan_saat_ini" INTEGER;

-- AlterTable
ALTER TABLE "KSS" DROP COLUMN "hari",
DROP COLUMN "tanggal_surat_fasilitas_kredit",
DROP COLUMN "tanggal_surat_fasilitas_kredit_1",
DROP COLUMN "tanggal_surat_kuasa_debet",
DROP COLUMN "tanggal_surat_penyerahan_jaminan",
DROP COLUMN "tanggal_surat_perintah_jalan",
DROP COLUMN "tanggal_surat_perjanjian_kredit",
DROP COLUMN "tanggal_surat_pernyataan",
ADD COLUMN     "tanggal_surat_permohonan_kredit" DATE,
ADD COLUMN     "tanggal_surat_persetujuan_kredit" DATE,
DROP COLUMN "plaford",
ADD COLUMN     "plaford" INTEGER,
DROP COLUMN "jangka_waktu",
ADD COLUMN     "jangka_waktu" INTEGER,
DROP COLUMN "suku_bunga",
ADD COLUMN     "suku_bunga" DOUBLE PRECISION,
DROP COLUMN "biaya_provisi",
ADD COLUMN     "biaya_provisi" DOUBLE PRECISION,
DROP COLUMN "biaya_administrasi",
ADD COLUMN     "biaya_administrasi" DOUBLE PRECISION,
DROP COLUMN "bunga_pinjaman",
ADD COLUMN     "bunga_pinjaman" DOUBLE PRECISION,
DROP COLUMN "total_seluruh_pinjaman",
ADD COLUMN     "total_seluruh_pinjaman" INTEGER,
DROP COLUMN "angsuran_tiap_bulan",
ADD COLUMN     "angsuran_tiap_bulan" INTEGER,
DROP COLUMN "nominal_provisi",
ADD COLUMN     "nominal_provisi" INTEGER,
DROP COLUMN "nominal_administrasi",
ADD COLUMN     "nominal_administrasi" INTEGER,
DROP COLUMN "jangka_asuransi",
ADD COLUMN     "jangka_asuransi" INTEGER,
DROP COLUMN "biaya_asuransi",
ADD COLUMN     "biaya_asuransi" INTEGER,
DROP COLUMN "biaya_materai",
ADD COLUMN     "biaya_materai" INTEGER,
DROP COLUMN "biaya_notaris",
ADD COLUMN     "biaya_notaris" INTEGER,
DROP COLUMN "total_biaya",
ADD COLUMN     "total_biaya" INTEGER,
DROP COLUMN "jumlah_bank_menyerahkan_uang",
ADD COLUMN     "jumlah_bank_menyerahkan_uang" INTEGER;

-- AlterTable
ALTER TABLE "PINEK" DROP COLUMN "hari",
DROP COLUMN "tanggal_surat_dokumen_agunan",
DROP COLUMN "tanggal_surat_kuasa_debet",
DROP COLUMN "tanggal_surat_pemotongan_gaji",
DROP COLUMN "tanggal_surat_perjanjian_kredit",
DROP COLUMN "tanggal_surat_pernyataan",
ADD COLUMN     "tanggal_surat_persetujuan_kredit" DATE,
DROP COLUMN "debitur_menerima_pinjaman",
ADD COLUMN     "debitur_menerima_pinjaman" INTEGER,
DROP COLUMN "dikenakan_bunga",
ADD COLUMN     "dikenakan_bunga" DOUBLE PRECISION,
DROP COLUMN "total_seluruh_hutang",
ADD COLUMN     "total_seluruh_hutang" INTEGER,
DROP COLUMN "jangka_waktu_hutang",
ADD COLUMN     "jangka_waktu_hutang" INTEGER,
DROP COLUMN "mengangsur_paling_lambat",
ADD COLUMN     "mengangsur_paling_lambat" INTEGER,
DROP COLUMN "pemotongan_gaji",
ADD COLUMN     "pemotongan_gaji" INTEGER,
DROP COLUMN "total_biaya",
ADD COLUMN     "total_biaya" INTEGER;

-- AlterTable
ALTER TABLE "PROCIM" DROP COLUMN "hari",
DROP COLUMN "hari_pembayaran_angsuran",
DROP COLUMN "nomor_perjanjian_kredit",
DROP COLUMN "nomor_surat_pernyataan_jaminan",
DROP COLUMN "tanggal_pencairan",
DROP COLUMN "tanggal_surat_penyerahan_jaminan",
DROP COLUMN "tanggal_surat_perjanjian_kredit",
DROP COLUMN "tanggal_surat_pernyataan_jaminan",
ADD COLUMN     "nomor_surat" TEXT,
ADD COLUMN     "tanggal_surat_persetujuan_kredit" DATE,
DROP COLUMN "nominal_plafond",
ADD COLUMN     "nominal_plafond" INTEGER,
DROP COLUMN "suku_bunga_pinjaman",
ADD COLUMN     "suku_bunga_pinjaman" DOUBLE PRECISION,
DROP COLUMN "jangka_waktu_pinjaman",
ADD COLUMN     "jangka_waktu_pinjaman" INTEGER,
DROP COLUMN "angsuran_pinjaman",
ADD COLUMN     "angsuran_pinjaman" INTEGER;
