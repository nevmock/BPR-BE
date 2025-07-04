import Joi from "joi";
import JoiDate from "@joi/date";

const JoiExtended = Joi.extend(JoiDate);

const createKMS = JoiExtended.object({
  nomor_surat: JoiExtended.string().optional(),
  tanggal_surat_permohonan_kredit: JoiExtended.date()
    .format("YYYY/MM/DD")
    .optional(),
  tanggal_surat_persetujuan_kredit: JoiExtended.date()
    .format("YYYY/MM/DD")
    .optional(),
  nama: JoiExtended.string().optional(),
  jabatan: JoiExtended.string().optional(),
  nama_debitur: JoiExtended.string().optional(),
  status_debitur: JoiExtended.string().optional(),
  alamat_usaha_debitur: JoiExtended.string().optional(),
  alamat_rumah_debitur: JoiExtended.string().optional(),
  nik_debitur: JoiExtended.string().optional(),
  pekerjaan_debitur: JoiExtended.string().optional(),
  hubungan_debitur_penjamin: JoiExtended.string().optional(),
  alamat_rumah_penjamin: JoiExtended.string().optional(),
  nama_penjamin: JoiExtended.string().optional(),
  tempat_lahir_penjamin: JoiExtended.string().optional(),
  tanggal_lahir_penjamin: JoiExtended.date().format("YYYY/MM/DD").optional(),
  nik_penjamin: JoiExtended.string().optional(),
  hubungan_penjamin_debitur: JoiExtended.string().optional(),
  nama_shm: JoiExtended.string().optional(),
  nik_shm: JoiExtended.string().optional(),
  detail_jaminan: JoiExtended.string().optional(),
  nominal_pinjaman: JoiExtended.number().optional(),
  tujuan_penggunaan: JoiExtended.string().optional(),
  jangka_waktu: JoiExtended.number().optional(),
  bunga_pinjaman: JoiExtended.number().optional(),
  tanggal_angsuran_terakhir: JoiExtended.date().format("YYYY/MM/DD").optional(),
  tenggat_angsuran: JoiExtended.number().optional(),
  tanggal_angsuran_pertama: JoiExtended.date().format("YYYY/MM/DD").optional(),
  nominal_angsuran: JoiExtended.number().optional(),
  hutang_keseluruhan: JoiExtended.number().optional(),
  provisi_persen: JoiExtended.number().optional(),
  provisi_nominal: JoiExtended.number().optional(),
  administrasi_persen: JoiExtended.number().optional(),
  administrasi_nominal: JoiExtended.number().optional(),
  materai_nominal: JoiExtended.number().optional(),
  notaris_nominal: JoiExtended.number().optional(),
  nama_asuransi_jiwa: JoiExtended.string().optional(),
  asuransi_jiwa_nominal: JoiExtended.number().optional(),
  total_biaya: JoiExtended.number().optional(),
  status: JoiExtended.string().optional().min(0),
  is_submitted: JoiExtended.boolean().required(),
});

export { createKMS };
