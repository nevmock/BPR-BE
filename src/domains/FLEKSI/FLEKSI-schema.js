import Joi from "joi";
import JoiDate from '@joi/date';

const JoiExtended = Joi.extend(JoiDate);

const createFLEKSI = JoiExtended.object({
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
    besar_pinjaman : JoiExtended.number()
            .optional()
            .min(0),
    bunga_pinjaman : JoiExtended.number()
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
    tujuan_penggunaan : JoiExtended.string()
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
    barang_elektronik : JoiExtended.string()
            .optional()
            .min(0),
    barang_furniture : JoiExtended.string()
            .optional()
            .min(0),
    barang_jaminan_lainnya : JoiExtended.string()
            .optional()
            .min(0),
    nama_penjamin_hubungan : JoiExtended.string()
            .optional()
            .min(0),
        status : JoiExtended.string()
                .optional()
                .min(0),
        is_submitted : JoiExtended.boolean()
                .required(),
});

export {createFLEKSI};