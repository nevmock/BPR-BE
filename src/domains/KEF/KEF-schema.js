import Joi from "joi";

const createKEF = Joi.object({
    nomor_surat : Joi.string()
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
    alamat_rumah_debitur : Joi.string()
        .optional().min(0),
    no_ktp_debitur : Joi.string()
        .optional().min(0),
    telah_mendapat_persetujuan : Joi.string()
        .optional().min(0),
    nama_penjamin : Joi.string()
        .optional().min(0),
    tempat_lahir_penjamin : Joi.string()
        .optional().min(0),
    tanggal_lahir_penjamin : Joi.string()
        .optional().min(0),
    no_ktp_penjamin : Joi.string()
        .optional().min(0),
    bertempat_tinggal_dengan : Joi.string()
        .optional().min(0),
    nama_barang : Joi.string()
        .optional().min(0),
    nama_toko : Joi.string()
        .optional().min(0),
    alamat_toko : Joi.string()
        .optional().min(0),
    harga_barang : Joi.string()
        .optional().min(0),
    bunga_pinjaman : Joi.string()
        .optional().min(0),
    total_pinjaman : Joi.string()
        .optional().min(0),
    jangka_waktu : Joi.string()
        .optional().min(0),
    tanggal_angsuran_berakhir : Joi.string()
        .optional().min(0),
    tenggat_mengangsur_pada : Joi.string()
        .optional().min(0),
    tanggal_angsuran_pertama : Joi.string()
        .optional().min(0),
    nilai_mengangsur : Joi.string()
        .optional().min(0),
    biaya_provisi_sebesar : Joi.string()
        .optional().min(0),
    biaya_administrasi_sebesar : Joi.string()
        .optional().min(0),
    biaya_materai_sebesar : Joi.string()
        .optional().min(0),
    biaya_fidusia_sebesar : Joi.string()
        .optional().min(0),
    total_biaya : Joi.string()
        .optional().min(0),
    pekerjaan_debitur : Joi.string()
        .optional().min(0),
    tanggal_surat_kuasa_debet : Joi.string()
        .optional().min(0),
    nik_debitur : Joi.string()
        .optional().min(0),
    jenis_kelamin_debitur : Joi.string()
        .optional().min(0),
    detail_jaminan : Joi.string()
        .optional().min(0),
    harga_jaminan : Joi.string()
        .optional().min(0),
    tanggal_surat_kuasa : Joi.string()
        .optional().min(0),
    no_hp_debitur : Joi.string()
        .optional().min(0),
    hari_pembuatan_surat : Joi.string()
        .optional().min(0),
    tanggal_surat_perjanjian_sewabeli : Joi.string()
        .optional().min(0),
    total_harga_keseluruhan_barang : Joi.string()
        .optional().min(0),
    status : Joi.string()
        .optional().min(0),
    is_submitted : Joi.boolean()
        .required()
})

export {createKEF};