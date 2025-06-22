import Joi from "joi";
import JoiDate from '@joi/date';

const JoiExtended = Joi.extend(JoiDate);

const createKEF = JoiExtended.object({
    nomor_surat : JoiExtended.string()
        .optional()
        .min(0),
    tanggal_surat_persetujuan_kredit : JoiExtended.date()
        .format('YYYY/MM/DD')
        .min(0),
    nama_debitur : JoiExtended.string()
        .optional()
        .min(0),
    tempat_lahir_debitur : JoiExtended.string()
        .optional()
        .min(0),
    tanggal_lahir_debitur : JoiExtended.date()
        .format('YYYY/MM/DD')
        .min(0),
    alamat_rumah_debitur : JoiExtended.string()
        .optional()
        .min(0),
    no_ktp_debitur : JoiExtended.string()
        .optional()
        .min(0),
    telah_mendapat_persetujuan : JoiExtended.string()
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
    bertempat_tinggal_dengan : JoiExtended.string()
        .optional()
        .min(0),
    tanggal_surat_permohonan_kredit : JoiExtended.date()
        .format('YYYY/MM/DD')
        .min(0),
    nama_barang : JoiExtended.string()
        .optional()
        .min(0),
    nama_toko : JoiExtended.string()
        .optional()
        .min(0),
    alamat_toko : JoiExtended.string()
        .optional()
        .min(0),
    harga_barang : JoiExtended.number()
        .optional()
        .min(0),
    bunga_pinjaman : JoiExtended.number()
        .optional()
        .min(0),
    total_pinjaman : JoiExtended.number()
        .optional()
        .min(0),
    jangka_waktu : JoiExtended.number()
        .optional()
        .min(0),
    tanggal_angsuran_berakhir : JoiExtended.date()
        .format('YYYY/MM/DD')
        .min(0),
    tenggat_mengangsur_pada : JoiExtended.number()
        .optional()
        .min(0),
    tanggal_angsuran_pertama : JoiExtended.date()
        .format('YYYY/MM/DD')
        .min(0),
    nilai_mengangsur : JoiExtended.number()
        .optional()
        .min(0),
    biaya_provisi_sebesar : JoiExtended.string()
        .optional()
        .min(0),
    biaya_administrasi_sebesar : JoiExtended.string()
        .optional()
        .min(0),
    biaya_materai_sebesar : JoiExtended.string()
        .optional()
        .min(0),
    biaya_fidusia_sebesar : JoiExtended.string()
        .optional()
        .min(0),
    total_biaya : JoiExtended.number()
        .optional()
        .min(0),
    pekerjaan_debitur : JoiExtended.string()
        .optional()
        .min(0),
    jenis_kelamin_debitur : JoiExtended.string()
        .optional()
        .min(0),
    detail_jaminan : JoiExtended.string()
        .optional()
        .min(0),
    no_hp_debitur : JoiExtended.string()
        .optional()
        .min(0),
    status : JoiExtended.string()
        .optional()
        .min(0),
    is_submitted : JoiExtended.boolean()
        .required(),
});

export {createKEF};