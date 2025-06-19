import { createdResponse, successResponse } from "../../utils/response.js";
import KMSMService from "./KMSM-service.js";

class KMSMController {
    async get(req, res) {
        const datas = await KMSMService.getAll()
        return successResponse(res, datas)
    }

    async getById(req, res) {
        const { id } = req.params;
        const data = await KMSMService.getById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KMSM not found" });
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
            tujuan_penggunaan,
            suku_bunga,
            jangka_waktu,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            tanggal_lahir_debitur,
            no_ktp_debitur,
            tempat_lahir_debitur,
            hubungan_debitur_penjamin,
            nama_penjamin,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            no_ktp_penjamin,
            utang_atas_kredit,
            tenggat_mengangsur_tanggal,
            nilai_mengangsur,
            tanggal_mengangsur_pertama,
            tanggal_mengangsur_terakhir,
            biaya_provisi_sebesar,
            biaya_materai,
            waktu_asuransi_tlo,
            biaya_asuransi_tlo,
            biaya_administrasi_sebesar,
            biaya_notaris,
            total_biaya,
            nama_barang,
            nik_debitur,
            jenis_kelamin_debitur,
            harga_jaminan,
            is_submitted,
        } = req.body;

        const userID = req.app.locals.user

        const newKMSM = await KMSMService.create({
            nama,
            jabatan,
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_permohonan_kredit,
            tanggal_surat_persetujuan_kredit,
            nomor_surat,
            nominal,
            tujuan_penggunaan,
            suku_bunga,
            jangka_waktu,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            tanggal_lahir_debitur,
            no_ktp_debitur,
            tempat_lahir_debitur,
            hubungan_debitur_penjamin,
            nama_penjamin,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            no_ktp_penjamin,
            utang_atas_kredit,
            tenggat_mengangsur_tanggal,
            nilai_mengangsur,
            tanggal_mengangsur_pertama,
            tanggal_mengangsur_terakhir,
            biaya_provisi_sebesar,
            biaya_materai,
            waktu_asuransi_tlo,
            biaya_asuransi_tlo,
            biaya_administrasi_sebesar,
            biaya_notaris,
            total_biaya,
            nama_barang,
            nik_debitur,
            jenis_kelamin_debitur,
            harga_jaminan,
            is_submitted,
            userID,
        });

        if (!newKMSM) {
            throw Error("Failed to create KMSM");
        }

        return createdResponse(res, newKMSM);
    }

    async put(req, res) {
        const { id } = req.params;
        let payload = req.body;

        const userID = req.app.locals.user
        payload.userID = userID
        const updatedKMSM = await KMSMService.update(id, payload);
        
        if (!updatedKMSM) {
            return res.status(404).json({ message: "KMSM not found" });
        }

        return successResponse(res, updatedKMSM);
    }

    async deleteById(req, res) {
        const { id } = req.params;
        const data = await KMSMService.deleteById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KMSM not found" });
        }
        
        return successResponse(res, data);
    }
}

export default new KMSMController();