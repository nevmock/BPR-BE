import Joi from "joi";

const createPROCIM = Joi.object({
    nomor_perjanjian_kredit : Joi.string()
            .optional().min(0),
    hari : Joi.string()
            .optional().min(0),
    tanggal_surat_perjanjian_kredit : Joi.string()
            .optional().min(0),
    nama_debitur : Joi.string()
            .optional().min(0),
    tempat_lahir_debitur : Joi.string()
            .optional().min(0),
    tanggal_lahir_debitur : Joi.string()
            .optional().min(0),
    alamat_debitur : Joi.string()
            .optional().min(0),
    no_ktp_debitur : Joi.string()
            .optional().min(0),
    nominal_plafond : Joi.string()
            .optional().min(0),
    suku_bunga_pinjaman : Joi.string()
            .optional().min(0),
    jangka_waktu_pinjaman : Joi.string()
            .optional().min(0),
    angsuran_pinjaman : Joi.string()
            .optional().min(0),
    tanggal_angsuran_pertama : Joi.string()
            .optional().min(0),
    hari_pembayaran_angsuran : Joi.string()
            .optional().min(0),
    tanggal_pencairan : Joi.string()
            .optional().min(0),
    nomor_rekening_pinjaman : Joi.string()
            .optional().min(0),
    nama_penjamin : Joi.string()
            .optional().min(0),
    nomor_surat_pernyataan_jaminan : Joi.string()
            .optional().min(0),
    tempat_lahir_penjamin : Joi.string()
            .optional().min(0),
    tanggal_lahir_penjamin : Joi.string()
            .optional().min(0),
    alamat_penjamin : Joi.string()
            .optional().min(0),
    no_ktp_penjamin : Joi.string()
            .optional().min(0),
    barang_elektronik : Joi.string()
            .optional().min(0),
    barang_furniture : Joi.string()
            .optional().min(0),
    barang_jaminan_lainnya : Joi.string()
            .optional().min(0),
    tanggal_surat_pernyataan_jaminan : Joi.string()
            .optional().min(0),
    tanggal_surat_penyerahan_jaminan : Joi.string()
            .optional().min(0),
        status : Joi.string()
                .optional().min(0),
        is_submitted : Joi.boolean()
                .required()
})

export {createPROCIM};