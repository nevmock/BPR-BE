import { createdResponse, successResponse } from "../../utils/response.js";
import KARService from "./KAR-service.js";

class KARController {
    async get(req, res) {
        const datas = await KARService.getAll()
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
            tanggal_surat_permohonan_kredit,
            tanggal_surat_persetujuan_kredit,
            nomor_surat,
            nominal,
            suku_bunga,
            jangka_waktu,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            no_ktp_debitur,
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
            biaya_notaris_sebesar,
            total_biaya,
            nama_barang,
            is_submitted,
        } = req.body;

        const userID = req.app.locals.user

        const newKAR = await KARService.create({
            nama,
            jabatan,
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_permohonan_kredit,
            tanggal_surat_persetujuan_kredit,
            nomor_surat,
            nominal,
            suku_bunga,
            jangka_waktu,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            no_ktp_debitur,
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
            biaya_notaris_sebesar,
            total_biaya,
            nama_barang,
            is_submitted,
            userID
        });

        if (!newKAR) {
            throw Error("Failed to create KAR");
        }

        return createdResponse(res, newKAR);
    }

    async put(req, res) {
        const { id } = req.params;
        let payload = req.body;

        const userID = req.app.locals.user
        payload.userID = userID
        const updatedKAR = await KARService.update(id, payload);
        
        if (!updatedKAR) {
            return res.status(404).json({ message: "KAR not found" });
        }

        return successResponse(res, updatedKAR);
    }

    async deleteById(req, res) {
        const { id } = req.params;
        const data = await KARService.deleteById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KAR not found" });
        }
        
        return successResponse(res, data);
    }
}

export default new KARController();