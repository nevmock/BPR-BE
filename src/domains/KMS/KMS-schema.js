import Joi from "joi";

const createKMS = Joi.object({
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
    tanggal_surat_penawaran_kredit : Joi.string()
        .required(),
    nomor_surat : Joi.string()
        .required(),
    tujuan : Joi.string()
        .required(),
    plafond : Joi.string()
        .required(),
    jangka_waktu : Joi.string()
        .required(),
    suku_bunga : Joi.string()
        .required(),
    pekerjaan_debitur : Joi.string()
        .required(),
    tanggal_surat_kuasa_debet : Joi.string()
        .required(),
    nama_penjamin : Joi.string()
        .required(),
    alamat_penjamin : Joi.string()
        .required(),
    no_ktp_penjamin : Joi.string()
        .required(),
    detail_jaminan : Joi.string()
        .required(),
    tanggal_surat_pernyataan : Joi.string()
        .required(),
    hari : Joi.string()
        .required(),
    tanggal_surat_perjanjian_kredit : Joi.string()
        .required(),
    telah_persetujuan_dari : Joi.string()
        .required(),
    nama_penjamin_1 : Joi.string()
        .required(),
    tempat_lahir_penjamin : Joi.string()
        .required(),
    tanggal_lahir_penjamin : Joi.string()
        .required(),
    no_ktp_penjamin_1 : Joi.string()
        .required(),
    bertempat_sama_dengan : Joi.string()
        .required(),
    debitur_adalah_pemilik_rekening : Joi.string()
        .required(),
    melunasi_hutang_sebesar : Joi.string()
        .required(),
    tanggal_mengangsur_terakhir : Joi.string()
        .required(),
    tanggal_mengangsur_tiap_bulan : Joi.string()
        .required(),
    tanggal_mengangsur_pertama : Joi.string()
        .required(),
    nominal_angsuran : Joi.string()
        .required(),
    biaya_provisi_sebesar : Joi.string()
        .required(),
    biaya_administrasi_sebesar : Joi.string()
        .required(),
    nama_asuransi_jiwa : Joi.string()
        .required(),
    waktu_asuransi_jiwa : Joi.string()
        .required(),
    biaya_asuransi_jiwa_sebesar : Joi.string()
        .required(),
    biaya_materai_sebesar : Joi.string()
        .required(),
    biaya_notaris_sebesar : Joi.string()
        .required(),
    biaya_jumlah : Joi.string()
        .required(),
    tanggal_surat_penyerahan_jaminan : Joi.string()
        .required(),
    tanggal_surat_fasilitas_kredit : Joi.string()
        .required(),
    tanggal_surat_pernyataan_1 : Joi.string()
        .required()
})

export {createKMS};