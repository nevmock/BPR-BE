import Joi from "joi";

const createKMS = Joi.object({
    nama : Joi.string()
        .optional().min(0),
    jabatan : Joi.string()
        .optional().min(0),
    nama_debitur : Joi.string()
        .optional().min(0),
    alamat_usaha_debitur : Joi.string()
        .optional().min(0),
    alamat_rumah_debitur : Joi.string()
        .optional().min(0),
    tanggal_surat_perintah_jalan : Joi.string()
        .optional().min(0),
    tanggal_surat_penawaran_kredit : Joi.string()
        .optional().min(0),
    nomor_surat : Joi.string()
        .optional().min(0),
    tujuan : Joi.string()
        .optional().min(0),
    plafond : Joi.string()
        .optional().min(0),
    jangka_waktu : Joi.string()
        .optional().min(0),
    suku_bunga : Joi.string()
        .optional().min(0),
    pekerjaan_debitur : Joi.string()
        .optional().min(0),
    tanggal_surat_kuasa_debet : Joi.string()
        .optional().min(0),
    nama_penjamin : Joi.string()
        .optional().min(0),
    alamat_penjamin : Joi.string()
        .optional().min(0),
    no_ktp_penjamin : Joi.string()
        .optional().min(0),
    detail_jaminan : Joi.string()
        .optional().min(0),
    tanggal_surat_pernyataan : Joi.string()
        .optional().min(0),
    hari : Joi.string()
        .optional().min(0),
    tanggal_surat_perjanjian_kredit : Joi.string()
        .optional().min(0),
    telah_persetujuan_dari : Joi.string()
        .optional().min(0),
    nama_penjamin_1 : Joi.string()
        .optional().min(0),
    tempat_lahir_penjamin : Joi.string()
        .optional().min(0),
    tanggal_lahir_penjamin : Joi.string()
        .optional().min(0),
    no_ktp_penjamin_1 : Joi.string()
        .optional().min(0),
    bertempat_sama_dengan : Joi.string()
        .optional().min(0),
    debitur_adalah_pemilik_rekening : Joi.string()
        .optional().min(0),
    melunasi_hutang_sebesar : Joi.string()
        .optional().min(0),
    tanggal_mengangsur_terakhir : Joi.string()
        .optional().min(0),
    tanggal_mengangsur_tiap_bulan : Joi.string()
        .optional().min(0),
    tanggal_mengangsur_pertama : Joi.string()
        .optional().min(0),
    nominal_angsuran : Joi.string()
        .optional().min(0),
    biaya_provisi_sebesar : Joi.string()
        .optional().min(0),
    biaya_administrasi_sebesar : Joi.string()
        .optional().min(0),
    nama_asuransi_jiwa : Joi.string()
        .optional().min(0),
    waktu_asuransi_jiwa : Joi.string()
        .optional().min(0),
    biaya_asuransi_jiwa_sebesar : Joi.string()
        .optional().min(0),
    biaya_materai_sebesar : Joi.string()
        .optional().min(0),
    biaya_notaris_sebesar : Joi.string()
        .optional().min(0),
    biaya_jumlah : Joi.string()
        .optional().min(0),
    tanggal_surat_penyerahan_jaminan : Joi.string()
        .optional().min(0),
    tanggal_surat_fasilitas_kredit : Joi.string()
        .optional().min(0),
    tanggal_surat_pernyataan_1 : Joi.string()
        .optional().min(0),
    status : Joi.string()
            .optional().min(0),
    is_submitted : Joi.boolean()
        .required()
})

export {createKMS};