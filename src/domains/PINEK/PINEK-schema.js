import Joi from "joi";

const createPINEK = Joi.object({
    nomor_surat : Joi.string()
            .optional().min(0),
    hari : Joi.string()
            .optional().min(0),
    tanggal_surat_perjanjian_kredit : Joi.string()
            .optional().min(0),
    nama_debitur : Joi.string()
            .optional().min(0),
    pekerjaan_debitur : Joi.string()
            .optional().min(0),
    tempat_lahir_debitur : Joi.string()
            .optional().min(0),
    tanggal_lahir_debitur : Joi.string()
            .optional().min(0),
    tempat_tinggal_debitur : Joi.string()
            .optional().min(0),
    mendapat_persetujuan : Joi.string()
            .optional().min(0),
    nama_penjamin : Joi.string()
            .optional().min(0),
    tempat_lahir_penjamin : Joi.string()
            .optional().min(0),
    tanggal_lahir_penjamin : Joi.string()
            .optional().min(0),
    tempat_tinggal_penjamin : Joi.string()
            .optional().min(0),
    tanggal_pengajuan_kredit : Joi.string()
            .optional().min(0),
    debitur_menerima_pinjaman : Joi.string()
            .optional().min(0),
    dikenakan_bunga : Joi.string()
            .optional().min(0),
    total_seluruh_hutang : Joi.string()
            .optional().min(0),
    jangka_waktu_hutang : Joi.string()
            .optional().min(0),
    mengangsur_paling_lambat : Joi.string()
            .optional().min(0),
    pemotongan_gaji : Joi.string()
            .optional().min(0),
    tanggal_mengangsur_pertama : Joi.string()
            .optional().min(0),
    tanggal_mengangsur_terakhir : Joi.string()
            .optional().min(0),
    biaya : Joi.string()
            .optional().min(0),
    total_biaya : Joi.string()
            .optional().min(0),
    tanggal_surat_kuasa_debet : Joi.string()
            .optional().min(0),
    tanggal_surat_pemotongan_gaji : Joi.string()
            .optional().min(0),
    tanggal_surat_dokumen_agunan : Joi.string()
            .optional().min(0),
    tanggal_surat_pernyataan : Joi.string()
            .optional().min(0),
        status : Joi.string()
        .optional().min(0),
    is_submitted : Joi.boolean()
        .required()
})

export {createPINEK};