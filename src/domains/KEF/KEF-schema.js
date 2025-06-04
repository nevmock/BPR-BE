import Joi from "joi";

const createKEF = Joi.object({
    nomor_surat : Joi.string()
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
    alamat_rumah_debitur : Joi.string()
        .required(),
    no_ktp_debitur : Joi.string()
        .required(),
    telah_mendapat_persetujuan : Joi.string()
        .required(),
    nama_penjamin : Joi.string()
        .required(),
    tempat_lahir_penjamin : Joi.string()
        .required(),
    tanggal_lahir_penjamin : Joi.string()
        .required(),
    no_ktp_penjamin : Joi.string()
        .required(),
    bertempat_tinggal_dengan : Joi.string()
        .required(),
    nama_barang : Joi.string()
        .required(),
    nama_toko : Joi.string()
        .required(),
    alamat_toko : Joi.string()
        .required(),
    harga_barang : Joi.string()
        .required(),
    bunga_pinjaman : Joi.string()
        .required(),
    total_pinjaman : Joi.string()
        .required(),
    jangka_waktu : Joi.string()
        .required(),
    tanggal_angsuran_berakhir : Joi.string()
        .required(),
    tenggat_mengangsur_pada : Joi.string()
        .required(),
    tanggal_angsuran_pertama : Joi.string()
        .required(),
    nilai_mengangsur : Joi.string()
        .required(),
    biaya_provisi_sebesar : Joi.string()
        .required(),
    biaya_administrasi_sebesar : Joi.string()
        .required(),
    biaya_materai_sebesar : Joi.string()
        .required(),
    biaya_fidusia_sebesar : Joi.string()
        .required(),
    total_biaya : Joi.string()
        .required(),
    pekerjaan_debitur : Joi.string()
        .required(),
    tanggal_surat_kuasa_debet : Joi.string()
        .required(),
    nik_debitur : Joi.string()
        .required(),
    jenis_kelamin_debitur : Joi.string()
        .required(),
    detail_jaminan : Joi.string()
        .required(),
    harga_jaminan : Joi.string()
        .required(),
    tanggal_surat_kuasa : Joi.string()
        .required(),
    no_hp_debitur : Joi.string()
        .required(),
    hari_pembuatan_surat : Joi.string()
        .required(),
    tanggal_surat_perjanjian_sewabeli : Joi.string()
        .required(),
    total_harga_keseluruhan_barang : Joi.string()
        .required()
})

export {createKEF}