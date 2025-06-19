import { createdResponse, successResponse } from "../../utils/response.js";
import KMMService from "./KMM-service.js";

class KMMController {
    async get(req, res) {
        const datas = await KMMService.getAll()
        return successResponse(res, datas)
    }

    async getById(req, res) {
        const { id } = req.params;
        const data = await KMMService.getById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KMM not found" });
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
            biaya_administasi,
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
            tenggat_mengangsur_tiap_bulan,
            nilai_mengangsur_tiap_bulan,
            tanggal_mengangsur_pertama,
            tanggal_mengangsur_terakhir,
            biaya_provisi_sebesar,
            biaya_materai_sebesar,
            biaya_asuransi_jiwa_sebesar,
            biaya_asuransi_tlo,
            biaya_administrasi_sebesar,
            biaya_notaris_sebesar,
            total_biaya,
            nama_barang,
            nik_debitur,
            jenis_kelamin_debitur,
            harga_jaminan,
            is_submitted,
        } = req.body;

        const userID = req.app.locals.user

        const newKMM = await KMMService.create({
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
            biaya_administasi,
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
            tenggat_mengangsur_tiap_bulan,
            nilai_mengangsur_tiap_bulan,
            tanggal_mengangsur_pertama,
            tanggal_mengangsur_terakhir,
            biaya_provisi_sebesar,
            biaya_materai_sebesar,
            biaya_asuransi_jiwa_sebesar,
            biaya_asuransi_tlo,
            biaya_administrasi_sebesar,
            biaya_notaris_sebesar,
            total_biaya,
            nama_barang,
            nik_debitur,
            jenis_kelamin_debitur,
            harga_jaminan,
            is_submitted,
            userID
        });

        if (!newKMM) {
            throw Error("Failed to create KMM");
        }

        return createdResponse(res, newKMM);
    }

    async put(req, res) {
        const { id } = req.params;
        let payload = req.body;

        const userID = req.app.locals.user
        payload.userID = userID
        const updatedKMM = await KMMService.update(id, payload);
        
        if (!updatedKMM) {
            return res.status(404).json({ message: "KMM not found" });
        }

        return successResponse(res, updatedKMM);
    }

    async deleteById(req, res) {
        const { id } = req.params;
        const data = await KMMService.deleteById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KMM not found" });
        }
        
        return successResponse(res, data);
    }
}

export default new KMMController();