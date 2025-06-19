import { createdResponse, successResponse } from "../../utils/response.js";
import KMSService from "./KMS-service.js";

class KMSController {
    async get(req, res) {
        const datas = await KMSService.getAll()
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
            tanggal_surat_permohonan_kredit,
            tanggal_surat_persetujuan_kredit,
            nomor_surat,
            tujuan,
            plafond,
            jangka_waktu,
            suku_bunga,
            pekerjaan_debitur,
            nama_penjamin,
            alamat_penjamin,
            no_ktp_penjamin,
            detail_jaminan,
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
            is_submitted,
        } = req.body;

        const userID = req.app.locals.user

        const newKMS = await KMSService.create({
            nama,
            jabatan,
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_permohonan_kredit,
            tanggal_surat_persetujuan_kredit,
            nomor_surat,
            tujuan,
            plafond,
            jangka_waktu,
            suku_bunga,
            pekerjaan_debitur,
            nama_penjamin,
            alamat_penjamin,
            no_ktp_penjamin,
            detail_jaminan,
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
            is_submitted,
            userID
        });

        if (!newKMS) {
            throw Error("Failed to create KMS");
        }

        return createdResponse(res, newKMS);
    }

    async put(req, res) {
        const { id } = req.params;
        let payload = req.body;

        const userID = req.app.locals.user
        payload.userID = userID
        const updatedKMS = await KMSService.update(id, payload);
        
        if (!updatedKMS) {
            return res.status(404).json({ message: "KMS not found" });
        }

        return successResponse(res, updatedKMS);
    }

    async deleteById(req, res) {
        const { id } = req.params;
        const data = await KMSService.deleteById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KMS not found" });
        }
        
        return successResponse(res, data);
    }
}

export default new KMSController();