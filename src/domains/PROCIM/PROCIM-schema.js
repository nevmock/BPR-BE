import Joi from "joi";
import JoiDate from '@joi/date';

const JoiExtended = Joi.extend(JoiDate);

const createPROCIM = JoiExtended.object({
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
    alamat_debitur : JoiExtended.string()
            .optional()
            .min(0),
    no_ktp_debitur : JoiExtended.string()
            .optional()
            .min(0),
    nominal_plafond : JoiExtended.number()
            .optional()
            .min(0),
    suku_bunga_pinjaman : JoiExtended.number()
            .optional()
            .min(0),
    jangka_waktu_pinjaman : JoiExtended.number()
            .optional()
            .min(0),
    angsuran_pinjaman : JoiExtended.number()
            .optional()
            .min(0),
    tanggal_angsuran_pertama : JoiExtended.date()
            .format('YYYY/MM/DD')
            .min(0),
    nomor_rekening_pinjaman : JoiExtended.string()
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
    alamat_penjamin : JoiExtended.string()
            .optional()
            .min(0),
    no_ktp_penjamin : JoiExtended.string()
            .optional()
            .min(0),
    barang_elektronik: Joi.array().items(
        Joi.object({
        nama_barang: Joi.string().optional(),
        tipe: Joi.string().optional(),
        harga: Joi.string().optional()
        })
        ),

barang_furniture: Joi.array().items(
        Joi.object({
        nama_barang: Joi.string().optional(),
        tipe: Joi.string().optional(),
        harga: Joi.string().optional()
        })
        ),
    barang_jaminan_lainnya : JoiExtended.string()
            .optional()
            .min(0),
        status : JoiExtended.string()
                .optional()
                .min(0),
        is_submitted : JoiExtended.boolean()
                .required(),
});

export {createPROCIM};