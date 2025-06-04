import Joi from "joi";

const createKAR = Joi.object({
    nama : Joi.string()
        .required(),
    jabatan : Joi.string()
        .required(),
    nama_debitur : Joi.string()
        .required(),
    alamat_usaha_debitur : Joi.string()
        .required(),
    alamat_rumah_debitur : Joi.string()
        .required(),
    tanggal_surat_perintah_jalan : Joi.string()
        .required(),
    tanggal_surat_persetujuan_kredit : Joi.string()
        .required(),
    nomor_surat : Joi.string()
        .required(),
    nominal : Joi.string()
        .required(),
    suku_bunga : Joi.string()
        .required(),
    jangka_waktu : Joi.string()
        .required(),
    biaya_provisi : Joi.string()
        .required(),
    biaya_administrasi : Joi.string()
        .required(),
    detail_jaminan : Joi.string()
        .required(),
    pekerjaan_debitur : Joi.string()
        .required(),
    tanggal_surat_kuasa_debet : Joi.string()
        .required(),
    tempat_lahir_debitur : Joi.string()
        .required(),
    tanggal_lahir_debitur : Joi.string()
        .required(),
    no_ktp_debitur : Joi.string()
        .required(),
    tanggal_surat_kuasa_kendaraan : Joi.string()
        .required(),
    hari : Joi.string()
        .required(),
    tanggal_surat_perjanjian_kredit : Joi.string()
        .required(),
    hubungan_debitur_penjamin : Joi.string()
        .required(),
    nama_penjamin : Joi.string()
        .required(),
    tempat_lahir_penjamin : Joi.string()
        .required(),
    tanggal_lahir_penjamin : Joi.string()
        .required(),
    no_ktp_penjamin : Joi.string()
        .required(),
    utang_atas_kredit_sebesar : Joi.string()
        .required(),
    tenggat_mengangsur_tiap_bulan : Joi.string()
        .required(),
    nilai_mengangsur : Joi.string()
        .required(),
    tanggal_mengangsur_pertama : Joi.string()
        .required(),
    tanggal_mengangsur_terakhir : Joi.string()
        .required(),
    biaya_provisi_sebesar : Joi.string()
        .required(),
    biaya_materai_sebesar : Joi.string()
        .required(),
    biaya_asuransi_jiwa_sebesar : Joi.string()
        .required(),
    biaya_administrasi_sebesar : Joi.string()
        .required(),
    biaya_notaris_sebesar : Joi.string()
        .required(),
    total_biaya : Joi.string()
        .required(),
    nama_barang : Joi.string()
        .required(),
    tanggal_surat_penyerahan_jaminan : Joi.string()
        .required(),
    tanggal_surat_fasilitas_kredit : Joi.string()
        .required(),
    tanggal_surat_pernyataan : Joi.string()
        .required(),
    tanggal_surat_pemotongan_gaji : Joi.string()
        .required(),
})

export {createKAR};