import { createdResponse, successResponse } from "../../utils/response.js";
import KARService from "./KAR-service.js";

class KARController {
    async get(req, res) {
        const datas = KARService.getAll()
        return successResponse(res, datas)
    }

    async getById(req, res) {
        const { id } = req.params;
        const data = await KARService.getById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KAR not found" });
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
            tanggal_surat_persetujuan_kredit,
            nomor_surat,
            nominal,
            suku_bunga,
            jangka_waktu,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            tanggal_surat_kuasa_debet,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            no_ktp_debitur,
            tanggal_surat_kuasa_kendaraan,
            hari,
            tanggal_surat_perjanjian_kredit,
            hubungan_debitur_penjamin,
            nama_penjamin,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            no_ktp_penjamin,
            utang_atas_kredit_sebesar,
            tenggat_mengangsur_tiap_bulan,
            nilai_mengangsur,
            tanggal_mengangsur_pertama,
            tanggal_mengangsur_terakhir,
            biaya_provisi_sebesar,
            biaya_materai_sebesar,
            biaya_asuransi_jiwa_sebesar,
            biaya_administrasi_sebesar,
            biaya_notaris_sebesar,
            total_biaya,
            nama_barang,
            tanggal_surat_penyerahan_jaminan,
            tanggal_surat_fasilitas_kredit,
            tanggal_surat_pernyataan,
            tanggal_surat_pemotongan_gaji,
            is_submitted,
        } = req.body;

        const newKAR = await KARService.create({
            nama,
            jabatan,
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_perintah_jalan,
            tanggal_surat_persetujuan_kredit,
            nomor_surat,
            nominal,
            suku_bunga,
            jangka_waktu,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            tanggal_surat_kuasa_debet,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            no_ktp_debitur,
            tanggal_surat_kuasa_kendaraan,
            hari,
            tanggal_surat_perjanjian_kredit,
            hubungan_debitur_penjamin,
            nama_penjamin,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            no_ktp_penjamin,
            utang_atas_kredit_sebesar,
            tenggat_mengangsur_tiap_bulan,
            nilai_mengangsur,
            tanggal_mengangsur_pertama,
            tanggal_mengangsur_terakhir,
            biaya_provisi_sebesar,
            biaya_materai_sebesar,
            biaya_asuransi_jiwa_sebesar,
            biaya_administrasi_sebesar,
            biaya_notaris_sebesar,
            total_biaya,
            nama_barang,
            tanggal_surat_penyerahan_jaminan,
            tanggal_surat_fasilitas_kredit,
            tanggal_surat_pernyataan,
            tanggal_surat_pemotongan_gaji,
            is_submitted
        });

        if (!newKAR) {
            throw Error("Failed to create KAR");
        }

        return createdResponse(res, newKAR);
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
            tanggal_surat_persetujuan_kredit,
            nomor_surat,
            nominal,
            suku_bunga,
            jangka_waktu,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            tanggal_surat_kuasa_debet,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            no_ktp_debitur,
            tanggal_surat_kuasa_kendaraan,
            hari,
            tanggal_surat_perjanjian_kredit,
            hubungan_debitur_penjamin,
            nama_penjamin,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            no_ktp_penjamin,
            utang_atas_kredit_sebesar,
            tenggat_mengangsur_tiap_bulan,
            nilai_mengangsur,
            tanggal_mengangsur_pertama,
            tanggal_mengangsur_terakhir,
            biaya_provisi_sebesar,
            biaya_materai_sebesar,
            biaya_asuransi_jiwa_sebesar,
            biaya_administrasi_sebesar,
            biaya_notaris_sebesar,
            total_biaya,
            nama_barang,
            tanggal_surat_penyerahan_jaminan,
            tanggal_surat_fasilitas_kredit,
            tanggal_surat_pernyataan,
            tanggal_surat_pemotongan_gaji,
            status,
        } = req.body;

        const updatedKAR = await KARService.update(id, payload);
        
        if (!updatedKAR) {
            return res.status(404).json({ message: "KAR not found" });
        }

        return successResponse(res, updatedKAR);
    }
}

export default new KARController();