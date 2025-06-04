import Joi from "joi";

const createPROCIM = Joi.object({
    nomor_perjanjian_kredit : Joi.string()
            .required(),
    hari : Joi.string()
            .required(),
    tanggal_surat_perjanjian_kredit : Joi.string()
            .required(),
    nama_debitur : Joi.string()
            .required(),
    tempat_lahir_debitur : Joi.string()
            .required(),
    tanggal_lahir_debitur : Joi.string()
            .required(),
    alamat_debitur : Joi.string()
            .required(),
    no_ktp_debitur : Joi.string()
            .required(),
    nominal_plafond : Joi.string()
            .required(),
    suku_bunga_pinjaman : Joi.string()
            .required(),
    jangka_waktu_pinjaman : Joi.string()
            .required(),
    angsuran_pinjaman : Joi.string()
            .required(),
    tanggal_angsuran_pertama : Joi.string()
            .required(),
    hari_pembayaran_angsuran : Joi.string()
            .required(),
    tanggal_pencairan : Joi.string()
            .required(),
    nomor_rekening_pinjaman : Joi.string()
            .required(),
    nama_penjamin : Joi.string()
            .required(),
    nomor_surat_pernyataan_jaminan : Joi.string()
            .required(),
    tempat_lahir_penjamin : Joi.string()
            .required(),
    tanggal_lahir_penjamin : Joi.string()
            .required(),
    alamat_penjamin : Joi.string()
            .required(),
    no_ktp_penjamin : Joi.string()
            .required(),
    barang_elektronik : Joi.string()
            .required(),
    barang_furniture : Joi.string()
            .required(),
    barang_jaminan_lainnya : Joi.string()
            .required(),
    tanggal_surat_pernyataan_jaminan : Joi.string()
            .required(),
    tanggal_surat_penyerahan_jaminan : Joi.string()
            .required()
})

export {createPROCIM}