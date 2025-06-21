import Joi from "joi";
import JoiDate from '@joi/date';

const JoiExtended = Joi.extend(JoiDate);

const createKSS = JoiExtended.object({
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
    plaford : JoiExtended.number()
            .optional()
            .min(0),
    jangka_waktu : JoiExtended.number()
            .optional()
            .min(0),
    suku_bunga : JoiExtended.number()
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
    nama_penjamin : JoiExtended.string()
            .optional()
            .min(0),
    alamat_penjamin : JoiExtended.string()
            .optional()
            .min(0),
    no_ktp_penjamin : JoiExtended.string()
            .optional()
            .min(0),
    no_ktp_debitur : JoiExtended.string()
            .optional()
            .min(0),
    persetujuan_dari : JoiExtended.string()
            .optional()
            .min(0),
    tempat_lahir_penjamin : JoiExtended.string()
            .optional()
            .min(0),
    tanggal_lahir_penjamin : JoiExtended.date()
            .format('YYYY/MM/DD')
            .min(0),
    tinggal_sama_dengan : JoiExtended.string()
            .optional()
            .min(0),
    tujuan_penggunaan_kredit : JoiExtended.string()
            .optional()
            .min(0),
    total_seluruh_pinjaman : JoiExtended.number()
            .optional()
            .min(0),
    tanggal_angsuran_dimulai : JoiExtended.date()
            .format('YYYY/MM/DD')
            .min(0),
    tanggal_angsuran_terakhir : JoiExtended.date()
            .format('YYYY/MM/DD')
            .min(0),
    angsuran_tiap_bulan : JoiExtended.number()
            .optional()
            .min(0),
    nominal_provisi : JoiExtended.number()
            .optional()
            .min(0),
    nominal_administrasi : JoiExtended.number()
            .optional()
            .min(0),
    nama_asuransi : JoiExtended.string()
            .optional()
            .min(0),
    biaya_asuransi : JoiExtended.number()
            .optional()
            .min(0),
    biaya_materai : JoiExtended.number()
            .optional()
            .min(0),
    biaya_notaris : JoiExtended.number()
            .optional()
            .min(0),
    total_biaya : JoiExtended.number()
            .optional()
            .min(0),
    nama_shm : JoiExtended.string()
            .optional()
            .min(0),
        status : JoiExtended.string()
                .optional()
                .min(0),
    is_submitted : JoiExtended.boolean()
        .required(),
});

export {createKSS};