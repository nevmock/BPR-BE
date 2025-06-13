import { createdResponse, successResponse } from "../../utils/response.js";
import KMSService from "./KMS-service.js";

class KMSController {
    async get(req, res) {
        const datas = KMSService.getAll()
        return successResponse(res, datas)
    }

    async getById(req, res) {
        const { id } = req.params;
        const data = await KMSService.getById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KMS not found" });
        }
        
        return successResponse(res, data);
    }

    async post(req, res) {
        const {
            nama,
            jabatan,
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_perintah_jalan,
            tanggal_surat_penawaran_kredit,
            nomor_surat,
            tujuan,
            plafond,
            jangka_waktu,
            suku_bunga,
            pekerjaan_debitur,
            tanggal_surat_kuasa_debet,
            nama_penjamin,
            alamat_penjamin,
            no_ktp_penjamin,
            detail_jaminan,
            tanggal_surat_pernyataan,
            hari,
            tanggal_surat_perjanjian_kredit,
            telah_persetujuan_dari,
            nama_penjamin_1,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            no_ktp_penjamin_1,
            bertempat_sama_dengan,
            debitur_adalah_pemilik_rekening,
            melunasi_hutang_sebesar,
            tanggal_mengangsur_terakhir,
            tanggal_mengangsur_tiap_bulan,
            tanggal_mengangsur_pertama,
            nominal_angsuran,
            biaya_provisi_sebesar,
            biaya_administrasi_sebesar,
            nama_asuransi_jiwa,
            waktu_asuransi_jiwa,
            biaya_asuransi_jiwa_sebesar,
            biaya_materai_sebesar,
            biaya_notaris_sebesar,
            biaya_jumlah,
            tanggal_surat_penyerahan_jaminan,
            tanggal_surat_fasilitas_kredit,
            tanggal_surat_pernyataan_1,
            is_submitted,
        } = req.body;

        const newKMS = await KMSService.create({
            nama,
            jabatan,
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_perintah_jalan,
            tanggal_surat_penawaran_kredit,
            nomor_surat,
            tujuan,
            plafond,
            jangka_waktu,
            suku_bunga,
            pekerjaan_debitur,
            tanggal_surat_kuasa_debet,
            nama_penjamin,
            alamat_penjamin,
            no_ktp_penjamin,
            detail_jaminan,
            tanggal_surat_pernyataan,
            hari,
            tanggal_surat_perjanjian_kredit,
            telah_persetujuan_dari,
            nama_penjamin_1,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            no_ktp_penjamin_1,
            bertempat_sama_dengan,
            debitur_adalah_pemilik_rekening,
            melunasi_hutang_sebesar,
            tanggal_mengangsur_terakhir,
            tanggal_mengangsur_tiap_bulan,
            tanggal_mengangsur_pertama,
            nominal_angsuran,
            biaya_provisi_sebesar,
            biaya_administrasi_sebesar,
            nama_asuransi_jiwa,
            waktu_asuransi_jiwa,
            biaya_asuransi_jiwa_sebesar,
            biaya_materai_sebesar,
            biaya_notaris_sebesar,
            biaya_jumlah,
            tanggal_surat_penyerahan_jaminan,
            tanggal_surat_fasilitas_kredit,
            tanggal_surat_pernyataan_1,
            is_submitted
        });

        if (!newKMS) {
            throw Error("Failed to create KMS");
        }

        return createdResponse(res, newKMS);
    }

    async put(req, res) {
        const { id } = req.params;
        const payload = {
            nama,
            jabatan,
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_perintah_jalan,
            tanggal_surat_penawaran_kredit,
            nomor_surat,
            tujuan,
            plafond,
            jangka_waktu,
            suku_bunga,
            pekerjaan_debitur,
            tanggal_surat_kuasa_debet,
            nama_penjamin,
            alamat_penjamin,
            no_ktp_penjamin,
            detail_jaminan,
            tanggal_surat_pernyataan,
            hari,
            tanggal_surat_perjanjian_kredit,
            telah_persetujuan_dari,
            nama_penjamin_1,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            no_ktp_penjamin_1,
            bertempat_sama_dengan,
            debitur_adalah_pemilik_rekening,
            melunasi_hutang_sebesar,
            tanggal_mengangsur_terakhir,
            tanggal_mengangsur_tiap_bulan,
            tanggal_mengangsur_pertama,
            nominal_angsuran,
            biaya_provisi_sebesar,
            biaya_administrasi_sebesar,
            nama_asuransi_jiwa,
            waktu_asuransi_jiwa,
            biaya_asuransi_jiwa_sebesar,
            biaya_materai_sebesar,
            biaya_notaris_sebesar,
            biaya_jumlah,
            tanggal_surat_penyerahan_jaminan,
            tanggal_surat_fasilitas_kredit,
            tanggal_surat_pernyataan_1,
            status,
        } = req.body;

        const updatedKMS = await KMSService.update(id, payload);
        
        if (!updatedKMS) {
            return res.status(404).json({ message: "KMS not found" });
        }

        return successResponse(res, updatedKMS);
    }
}

export default new KMSController();