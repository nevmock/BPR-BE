import Joi from "joi";
import JoiDate from '@joi/date';

const JoiExtended = Joi.extend(JoiDate);

const createKAR = JoiExtended.object({
    nama : JoiExtended.string()
        .optional()
        .min(0),
    jabatan : JoiExtended.string()
        .optional()
        .min(0),
    nama_debitur : JoiExtended.string()
        .optional()
        .min(0),
    alamat_usaha_debitur : JoiExtended.string()
        .optional()
        .min(0),
    alamat_rumah_debitur : JoiExtended.string()
        .optional()
        .min(0),
    tanggal_surat_permohonan_kredit : JoiExtended.date()
        .format('YYYY/MM/DD')
        .min(0),
    tanggal_surat_persetujuan_kredit : JoiExtended.date()
        .format('YYYY/MM/DD')
        .min(0),
    nomor_surat : JoiExtended.string()
        .optional()
        .min(0),
    nominal : JoiExtended.number()
        .optional()
        .min(0),
    suku_bunga : JoiExtended.number()
        .optional()
        .min(0),
    jangka_waktu : JoiExtended.number()
        .optional()
        .min(0),
    biaya_provisi : JoiExtended.number()
        .optional()
        .min(0),
    biaya_administrasi : JoiExtended.number()
        .optional()
        .min(0),
    detail_jaminan : JoiExtended.string()
        .optional()
        .min(0),
    pekerjaan_debitur : JoiExtended.string()
        .optional()
        .min(0),
    tempat_lahir_debitur : JoiExtended.string()
        .optional()
        .min(0),
    tanggal_lahir_debitur : JoiExtended.date()
        .format('YYYY/MM/DD')
        .min(0),
    no_ktp_debitur : JoiExtended.string()
        .optional()
        .min(0),
    hubungan_debitur_penjamin : JoiExtended.string()
        .optional()
        .min(0),
    nama_penjamin : JoiExtended.string()
        .optional()
        .min(0),
    tempat_lahir_penjamin : JoiExtended.string()
        .optional()
        .min(0),
    tanggal_lahir_penjamin : JoiExtended.date()
        .format('YYYY/MM/DD')
        .min(0),
    no_ktp_penjamin : JoiExtended.string()
        .optional()
        .min(0),
    utang_atas_kredit_sebesar : JoiExtended.number()
        .optional()
        .min(0),
    tenggat_mengangsur_tiap_bulan : JoiExtended.number()
        .optional()
        .min(0),
    nilai_mengangsur : JoiExtended.number()
        .optional()
        .min(0),
    tanggal_mengangsur_pertama : JoiExtended.date()
        .format('YYYY/MM/DD')
        .min(0),
    tanggal_mengangsur_terakhir : JoiExtended.date()
        .format('YYYY/MM/DD')
        .min(0),
    biaya_provisi_sebesar : JoiExtended.number()
        .optional()
        .min(0),
    biaya_materai_sebesar : JoiExtended.number()
        .optional()
        .min(0),
    biaya_asuransi_jiwa_sebesar : JoiExtended.number()
        .optional()
        .min(0),
    biaya_notaris_sebesar : JoiExtended.number()
        .optional()
        .min(0),
    total_biaya : JoiExtended.number()
        .optional()
        .min(0),
    nama_barang : JoiExtended.string()
        .optional()
        .min(0),
    status : JoiExtended.string()
        .optional()
        .min(0),
    is_submitted : JoiExtended.boolean()
        .required(),
});

export {createKAR};