import Joi from "joi";
import JoiDate from "@joi/date";

const JoiExtended = Joi.extend(JoiDate);

const createPROCIM = JoiExtended.object({
  nomor_surat: JoiExtended.string().optional().min(0),
  tanggal_surat_persetujuan_kredit: JoiExtended.date()
    .format("YYYY/MM/DD")
    .optional(),
  nama_debitur: JoiExtended.string().optional().min(0),
  nik_debitur: JoiExtended.string().optional().min(0),
  status_debitur: JoiExtended.string().optional().min(0),
  tempat_lahir_debitur: JoiExtended.string().optional().min(0),
  tanggal_lahir_debitur: JoiExtended.date().format("YYYY/MM/DD").optional(),
  alamat_rumah_debitur: JoiExtended.string().optional().min(0),
  nama_penjamin: JoiExtended.string().optional().min(0),
  nik_penjamin: JoiExtended.string().optional().min(0),
  tempat_lahir_penjamin: JoiExtended.string().optional().min(0),
  tanggal_lahir_penjamin: JoiExtended.date().format("YYYY/MM/DD").optional(),
  alamat_rumah_penjamin: JoiExtended.string().optional().min(0),
  nama_SHM: JoiExtended.string().optional().min(0),
  nominal_pinjaman: JoiExtended.number().optional().min(0),
  bunga_pinjaman: JoiExtended.number().optional().min(0),
  jangka_waktu: JoiExtended.number().optional().min(0),
  rekening_pinjaman: JoiExtended.string().optional().min(0),
  nominal_angsuran: JoiExtended.number().optional().min(0),
  tanggal_angsuran_pertama: JoiExtended.date().format("YYYY/MM/DD").optional(),
  barang_elektronik: Joi.array().items(
    Joi.object({
      nama_barang: Joi.string().optional(),
      tipe: Joi.string().optional(),
      harga: Joi.number().optional(),
    })
  ),

  barang_furniture: Joi.array().items(
    Joi.object({
      nama_barang: Joi.string().optional(),
      tipe: Joi.string().optional(),
      harga: Joi.number().optional(),
    })
  ),
  barang_jaminan_lainnya: JoiExtended.string().optional().min(0),
  status: JoiExtended.string().optional().min(0),
  is_submitted: JoiExtended.boolean().required(),
});

export { createPROCIM };
