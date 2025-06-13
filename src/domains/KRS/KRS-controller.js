import { createdResponse, successResponse } from "../../utils/response.js";
import KRSService from "./KRS-service.js";

class KRSController {
    async get(req, res) {
        const datas = KRSService.getAll()
        return successResponse(res, datas)
    }

    async getById(req, res) {
        const { id } = req.params;
        const data = await KRSService.getById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KRS not found" });
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
            tanggal_surat_persetujuan_fasilitas_kredit,
            nomor_surat,
            tujuan_penggunaan,
            plafond,
            jangka_waktu,
            suku_bunga,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            tanggal_surat_kuasa_debet,
            no_ktp_debitur,
            tanggal_surat_pernyataan,
            hari,
            tanggal_surat_perjanjian_kredit,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            telah_persetujuan_dari,
            nama_penjamin,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            no_ktp_penjamin,
            bertempat_tinggal_sama_dengan,
            debitur_pemilik_rekening,
            melunasi_hutang_sebesar,
            jangka_waktu_angsuran,
            tanggal_mengangsur_terakhir,
            tanggal_mengangsur_paling_lambat,
            tanggal_mengangsur_pertama,
            nominal_angsuran,
            biaya_provisi_sebesar,
            biaya_administrasi_sebesar,
            waktu_asuransi_jiwa,
            biaya_asuransi_jiwa,
            biaya_materai_sebesar,
            biaya_jumlah,
            tanggal_surat_penyerahan_jaminan,
            tanggal_surat_terima_fasilitas_kredit,
            tanggal_surat_pernyataan_1,
            is_submitted,
        } = req.body;

        const newKRS = await KRSService.create({
            nama,
            jabatan,
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_perintah_jalan,
            tanggal_surat_persetujuan_fasilitas_kredit,
            nomor_surat,
            tujuan_penggunaan,
            plafond,
            jangka_waktu,
            suku_bunga,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            tanggal_surat_kuasa_debet,
            no_ktp_debitur,
            tanggal_surat_pernyataan,
            hari,
            tanggal_surat_perjanjian_kredit,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            telah_persetujuan_dari,
            nama_penjamin,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            no_ktp_penjamin,
            bertempat_tinggal_sama_dengan,
            debitur_pemilik_rekening,
            melunasi_hutang_sebesar,
            jangka_waktu_angsuran,
            tanggal_mengangsur_terakhir,
            tanggal_mengangsur_paling_lambat,
            tanggal_mengangsur_pertama,
            nominal_angsuran,
            biaya_provisi_sebesar,
            biaya_administrasi_sebesar,
            waktu_asuransi_jiwa,
            biaya_asuransi_jiwa,
            biaya_materai_sebesar,
            biaya_jumlah,
            tanggal_surat_penyerahan_jaminan,
            tanggal_surat_terima_fasilitas_kredit,
            tanggal_surat_pernyataan_1,
            is_submitted
        });

        if (!newKRS) {
            throw Error("Failed to create KRS");
        }

        return createdResponse(res, newKRS);
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
            tanggal_surat_persetujuan_fasilitas_kredit,
            nomor_surat,
            tujuan_penggunaan,
            plafond,
            jangka_waktu,
            suku_bunga,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            tanggal_surat_kuasa_debet,
            no_ktp_debitur,
            tanggal_surat_pernyataan,
            hari,
            tanggal_surat_perjanjian_kredit,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            telah_persetujuan_dari,
            nama_penjamin,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            no_ktp_penjamin,
            bertempat_tinggal_sama_dengan,
            debitur_pemilik_rekening,
            melunasi_hutang_sebesar,
            jangka_waktu_angsuran,
            tanggal_mengangsur_terakhir,
            tanggal_mengangsur_paling_lambat,
            tanggal_mengangsur_pertama,
            nominal_angsuran,
            biaya_provisi_sebesar,
            biaya_administrasi_sebesar,
            waktu_asuransi_jiwa,
            biaya_asuransi_jiwa,
            biaya_materai_sebesar,
            biaya_jumlah,
            tanggal_surat_penyerahan_jaminan,
            tanggal_surat_terima_fasilitas_kredit,
            tanggal_surat_pernyataan_1,
            status,
        } = req.body;

        const updatedKRS = await KRSService.update(id, payload);
        
        if (!updatedKRS) {
            return res.status(404).json({ message: "KRS not found" });
        }

        return successResponse(res, updatedKRS);
    }
}

export default new KRSController();