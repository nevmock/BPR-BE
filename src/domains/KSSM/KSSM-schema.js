import Joi from 'joi';
import JoiDate from '@joi/date';

// Extend Joi with JoiDate
const JoiExtended = Joi.extend(JoiDate);

// Now you can use JoiExtended with date validation
const createKSSM = JoiExtended.object({
  nama: JoiExtended.string()
    .optional()
    .min(0),
  jabatan: JoiExtended.string()
    .optional()
    .min(0),
    nama_debitur: JoiExtended.string()
    .optional()
    .min(0),
    alamat_usaha_debitur: JoiExtended.string()
    .optional()
    .min(0),
    alamat_rumah_debitur: JoiExtended.string()
    .optional()
    .min(0),
  tanggal_surat_permohonan_kredit: JoiExtended.date()
    .format('YYYY/MM/DD')
    .optional(),
  tanggal_surat_keputusan_kredit: JoiExtended.date()
    .format('YYYY/MM/DD')
    .optional(),
  nomor_surat: JoiExtended.string()
    .optional()
    .min(0),
  nominal: JoiExtended.number()
    .optional()
    .min(0),
  tujuan_penggunaan: JoiExtended.string()
    .optional()
    .min(0),
  suku_bunga: JoiExtended.number()
    .optional()
    .min(0),
  jangka_waktu: JoiExtended.number()
    .optional()
    .min(0),
  biaya_provisi: JoiExtended.number()
    .optional()
    .min(0),
  biaya_administrasi: JoiExtended.number()
    .optional()
    .min(0),
  detail_jaminan: JoiExtended.string()
    .optional()
    .min(0),
  pekerjaan_debitur: JoiExtended.string()
    .optional()
    .min(0),
  tempat_lahir_debitur: JoiExtended.string()
    .optional()
    .min(0),
  tanggal_lahir_debitur: JoiExtended.date()
    .format('YYYY/MM/DD')
    .optional(),
  no_ktp_debitur: JoiExtended.string()
    .optional()
    .min(0),
  persetujuan_dari: JoiExtended.string()
    .optional()
    .min(0),
  nama_penjamin: JoiExtended.string()
    .optional()
    .min(0),
  tempat_lahir_penjamin: JoiExtended.string()
    .optional()
    .min(0),
  tanggal_lahir_penjamin: JoiExtended.date()
    .format('YYYY/MM/DD')
    .optional(),
  no_ktp_penjamin: JoiExtended.string()
    .optional()
    .min(0),
  utang_atas_kredit: JoiExtended.number()
    .optional()
    .min(0),
  tenggat_mengangsur: JoiExtended.number()
    .optional()
    .min(0),
  nilai_mengangsur: JoiExtended.number()
    .optional()
    .min(0),
  tanggal_mengangsur_pertama: JoiExtended.date()
    .format('YYYY/MM/DD')
    .optional(),
  tanggal_mengangsur_terakhir: JoiExtended.date()
    .format('YYYY/MM/DD')
    .optional(),
  nominal_provisi: JoiExtended.number()
    .optional()
    .min(0),
  nominal_materai: JoiExtended.number()
    .optional()
    .min(0),
  nominal_asuransi_jiwa: JoiExtended.number()
    .optional()
    .min(0),
  jangka_asuransi_tlo: JoiExtended.number()
    .optional()
    .min(0),
  nominal_asuransi_tlo: JoiExtended.number()
    .optional()
    .min(0),
  nominal_administrasi: JoiExtended.number()
    .optional()
    .min(0),
  nominal_notaris: JoiExtended.number()
    .optional()
    .min(0),
  total_biaya: JoiExtended.number()
    .optional()
    .min(0),
  nama_barang: JoiExtended.string()
    .optional()
    .min(0),
  nik_debitur: JoiExtended.string()
    .optional()
    .min(0),
  jenis_kelamin_debitur: JoiExtended.string()
    .optional()
    .min(0),
  harga_jaminan: JoiExtended.number()
    .optional()
    .min(0),
  status: JoiExtended.string()
    .optional()
    .min(0),
  is_submitted: JoiExtended.boolean()
    .required(),
});

export { createKSSM };
