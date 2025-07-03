import Joi from "joi";
import JoiDate from '@joi/date';

const JoiExtended = Joi.extend(JoiDate);

const createKSM = JoiExtended.object({
    nama : JoiExtended.string()
            .optional()
            .min(0),
    jabatan : JoiExtended.string()
            .optional()
            .min(0),
    nama_debitur : JoiExtended.string()
            .optional()
            .min(0),
        status_debitur : JoiExtended.string()
            .optional()
            .min(0),
        nama_SHM : JoiExtended.string()
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
    tanggal_surat_perjanjian_kredit : JoiExtended.date()
            .format('YYYY/MM/DD')
            .min(0),
    nomor_surat : JoiExtended.string()
            .optional()
            .min(0),
    nominal : JoiExtended.number()
            .optional()
            .min(0),
    tujuan_penggunaan : JoiExtended.string()
            .optional()
            .min(0),
    suku_bunga : JoiExtended.number()
            .optional()
            .min(0),
    provisi : JoiExtended.number()
            .optional()
            .min(0),
        administrasi : JoiExtended.number()
            .optional()
            .min(0),
    jangka_waktu : JoiExtended.number()
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
    mendapat_persetujuan_dari : JoiExtended.string()
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
    tempat_tinggal_sama_dengan : JoiExtended.string()
            .optional()
            .min(0),
    no_ktp_penjamin : JoiExtended.string()
            .optional()
            .min(0),
    seluruh_hutang_sebesar : JoiExtended.number()
            .optional()
            .min(0),
    tanggal_mengangsur_paling_lambat : JoiExtended.number()
            .optional()
            .min(0),
    biaya_angsuran : JoiExtended.number()
            .optional()
            .min(0),
    tanggal_mengangsur_pertama : JoiExtended.date()
            .format('YYYY/MM/DD')
            .min(0),
    tanggal_mengangsur_terakhir : JoiExtended.date()
            .format('YYYY/MM/DD')
            .min(0),
    biaya_provisi : JoiExtended.number()
            .optional()
            .min(0),
    biaya_materai : JoiExtended.number()
            .optional()
            .min(0),
    biaya_asuransi : JoiExtended.number()
            .optional()
            .min(0),
    biaya_asuransi_tlo : JoiExtended.number()
            .optional()
            .min(0),
    biaya_administrasi : JoiExtended.number()
            .optional()
            .min(0),
    biaya_notaris : JoiExtended.number()
            .optional()
            .min(0),
    total_biaya : JoiExtended.number()
            .optional()
            .min(0),
    nama_barang : JoiExtended.string()
            .optional()
            .min(0),
    jenis_kelamin_debitur : JoiExtended.string()
            .optional()
            .min(0),
    harga_jaminan_saat_ini : JoiExtended.number()
            .optional()
            .min(0),
        status : JoiExtended.string()
        .optional()
        .min(0),
    is_submitted : JoiExtended.boolean()
        .required(),
});

export {createKSM};