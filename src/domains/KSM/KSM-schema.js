import Joi from "joi";

const createKSM = Joi.object({
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
    tanggal_surat_pemberian_fasilitas_kredit : Joi.string()
            .optional().min(0),
    nomor_surat : Joi.string()
            .optional().min(0),
    nominal : Joi.string()
            .optional().min(0),
    tujuan_penggunaan : Joi.string()
            .optional().min(0),
    suku_bunga : Joi.string()
            .optional().min(0),
    provisi : Joi.string()
            .optional().min(0),
    jangka_waktu : Joi.string()
            .optional().min(0),
    detail_jaminan : Joi.string()
            .optional().min(0),
    pekerjaan_debitur : Joi.string()
            .optional().min(0),
    tanggal_surat_kuasa_debet : Joi.string()
            .optional().min(0),
    tempat_lahir_debitur : Joi.string()
            .optional().min(0),
    tanggal_lahir_debitur : Joi.string()
            .optional().min(0),
    no_ktp_debitur : Joi.string()
            .optional().min(0),
    tanggal_surat_kuasa_kendaraan : Joi.string()
            .optional().min(0),
    hari : Joi.string()
            .optional().min(0),
    tanggal_surat_perjanjian_kredit : Joi.string()
            .optional().min(0),
    mendapat_persetujuan_dari : Joi.string()
            .optional().min(0),
    nama_penjamin : Joi.string()
            .optional().min(0),
    tempat_lahir_penjamin : Joi.string()
            .optional().min(0),
    tanggal_lahir_penjamin : Joi.string()
            .optional().min(0),
    tempat_tinggal_sama_dengan : Joi.string()
            .optional().min(0),
    no_ktp_penjamin : Joi.string()
            .optional().min(0),
    seluruh_hutang_sebesar : Joi.string()
            .optional().min(0),
    tanggal_mengangsur_paling_lambat : Joi.string()
            .optional().min(0),
    biaya_angsuran : Joi.string()
            .optional().min(0),
    tanggal_mengangsur_pertama : Joi.string()
            .optional().min(0),
    tanggal_mengangsur_terakhir : Joi.string()
            .optional().min(0),
    biaya_provisi : Joi.string()
            .optional().min(0),
    biaya_materai : Joi.string()
            .optional().min(0),
    biaya_asuransi : Joi.string()
            .optional().min(0),
    biaya_asuransi_tlo : Joi.string()
            .optional().min(0),
    biaya_administrasi : Joi.string()
            .optional().min(0),
    biaya_notaris : Joi.string()
            .optional().min(0),
    total_biaya : Joi.string()
            .optional().min(0),
    tanggal_surat_pengikatan_jaminan : Joi.string()
            .optional().min(0),
    nama_barang : Joi.string()
            .optional().min(0),
    tanggal_surat_penyerahan_jaminan : Joi.string()
            .optional().min(0),
    tanggal_surat_fasilitas_kredit : Joi.string()
            .optional().min(0),
    tanggal_surat_pernyataan : Joi.string()
            .optional().min(0),
    nik_debitur : Joi.string()
            .optional().min(0),
    jenis_kelamin_debitur : Joi.string()
            .optional().min(0),
    harga_jaminan_saat_ini : Joi.string()
            .optional().min(0),
    tanggal_surat_kuasa : Joi.string()
            .optional().min(0),
    tanggal_pencairan : Joi.string()
            .optional().min(0),
    tanggal_surat_pernyataan_2 : Joi.string()
            .optional().min(0),
        status : Joi.string()
        .optional().min(0),
    is_submitted : Joi.boolean()
        .required()
})

export {createKSM};