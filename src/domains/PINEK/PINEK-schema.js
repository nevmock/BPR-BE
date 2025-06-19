import Joi from "joi";
import JoiDate from '@joi/date';

const JoiExtended = Joi.extend(JoiDate);

const createPINEK = JoiExtended.object({
    nomor_surat : JoiExtended.string()
            .optional()
            .min(0),
    tanggal_surat_persetujuan_kredit : JoiExtended.date()
            .format('YYYY/MM/DD')
            .min(0),
    nama_debitur : JoiExtended.string()
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
    tempat_tinggal_debitur : JoiExtended.string()
            .optional()
            .min(0),
    mendapat_persetujuan : JoiExtended.string()
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
    tempat_tinggal_penjamin : JoiExtended.string()
            .optional()
            .min(0),
    tanggal_pengajuan_kredit : JoiExtended.date()
            .format('YYYY/MM/DD')
            .min(0),
    debitur_menerima_pinjaman : JoiExtended.number()
            .optional()
            .min(0),
    dikenakan_bunga : JoiExtended.number()
            .optional()
            .min(0),
    total_seluruh_hutang : JoiExtended.number()
            .optional()
            .min(0),
    jangka_waktu_hutang : JoiExtended.number()
            .optional()
            .min(0),
    mengangsur_paling_lambat : JoiExtended.number()
            .optional()
            .min(0),
    pemotongan_gaji : JoiExtended.number()
            .optional()
            .min(0),
    tanggal_mengangsur_pertama : JoiExtended.date()
            .format('YYYY/MM/DD')
            .min(0),
    tanggal_mengangsur_terakhir : JoiExtended.date()
            .format('YYYY/MM/DD')
            .min(0),
    biaya : JoiExtended.string()
            .optional()
            .min(0),
    total_biaya : JoiExtended.number()
            .optional()
            .min(0),
        status : JoiExtended.string()
        .optional()
        .min(0),
    is_submitted : JoiExtended.boolean()
        .required(),
});

export {createPINEK};