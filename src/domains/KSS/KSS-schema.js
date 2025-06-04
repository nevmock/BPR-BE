import Joi from "joi";

const createKSS = Joi.object({
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
    tanggal_surat_fasilitas_kredit : Joi.string()
            .optional().min(0),
    nomor_surat : Joi.string()
            .optional().min(0),
    plaford : Joi.string()
            .optional().min(0),
    jangka_waktu : Joi.string()
            .optional().min(0),
    suku_bunga : Joi.string()
            .optional().min(0),
    biaya_provisi : Joi.string()
            .optional().min(0),
    biaya_administrasi : Joi.string()
            .optional().min(0),
    detail_jaminan : Joi.string()
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
    tanggal_surat_pernyataan : Joi.string()
            .optional().min(0),
    hari : Joi.string()
            .optional().min(0),
    tanggal_surat_perjanjian_kredit : Joi.string()
            .optional().min(0),
    no_ktp_debitur : Joi.string()
            .optional().min(0),
    persetujuan_dari : Joi.string()
            .optional().min(0),
    tempat_lahir_penjamin : Joi.string()
            .optional().min(0),
    tanggal_lahir_penjamin : Joi.string()
            .optional().min(0),
    tinggal_sama_dengan : Joi.string()
            .optional().min(0),
    jumlah_bank_menyerahkan_uang : Joi.string()
            .optional().min(0),
    bunga_pinjaman : Joi.string()
            .optional().min(0),
    tujuan_penggunaan_kredit : Joi.string()
            .optional().min(0),
    total_seluruh_pinjaman : Joi.string()
            .optional().min(0),
    tanggal_angsuran_dimulai : Joi.string()
            .optional().min(0),
    tanggal_angsuran_terakhir : Joi.string()
            .optional().min(0),
    angsuran_tiap_bulan : Joi.string()
            .optional().min(0),
    nominal_provisi : Joi.string()
            .optional().min(0),
    nominal_administrasi : Joi.string()
            .optional().min(0),
    nama_asuransi : Joi.string()
            .optional().min(0),
    jangka_asuransi : Joi.string()
            .optional().min(0),
    biaya_asuransi : Joi.string()
            .optional().min(0),
    biaya_materai : Joi.string()
            .optional().min(0),
    biaya_notaris : Joi.string()
            .optional().min(0),
    total_biaya : Joi.string()
            .optional().min(0),
    tanggal_surat_penyerahan_jaminan : Joi.string()
            .optional().min(0),
    nama_shm : Joi.string()
            .optional().min(0),
    tanggal_surat_fasilitas_kredit_1 : Joi.string()
            .optional().min(0),
        status : Joi.string()
                .optional().min(0),
    is_submitted : Joi.boolean()
        .required()
})

export {createKSS};