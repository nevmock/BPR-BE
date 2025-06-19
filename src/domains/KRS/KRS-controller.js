import { createdResponse, successResponse } from "../../utils/response.js";
import KRSService from "./KRS-service.js";

class KRSController {
    async get(req, res) {
        const datas = await KRSService.getAll()
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
            tanggal_surat_permohonan_kredit,
            tanggal_surat_persetujuan_kredit,
            nomor_surat,
            tujuan_penggunaan,
            plafond,
            jangka_waktu,
            suku_bunga,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            no_ktp_debitur,
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
            is_submitted,
        } = req.body;

        const userID = req.app.locals.user

        const newKRS = await KRSService.create({
            nama,
            jabatan,
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_permohonan_kredit,
            tanggal_surat_persetujuan_kredit,
            nomor_surat,
            tujuan_penggunaan,
            plafond,
            jangka_waktu,
            suku_bunga,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            no_ktp_debitur,
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
            is_submitted,
            userID
        });

        if (!newKRS) {
            throw Error("Failed to create KRS");
        }

        return createdResponse(res, newKRS);
    }

    async put(req, res) {
        const { id } = req.params;
        let payload = req.body;

        const userID = req.app.locals.user
        payload.userID = userID
        const updatedKRS = await KRSService.update(id, payload);
        
        if (!updatedKRS) {
            return res.status(404).json({ message: "KRS not found" });
        }

        return successResponse(res, updatedKRS);
    }

    async deleteById(req, res) {
        const { id } = req.params;
        const data = await KRSService.deleteById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KRS not found" });
        }
        
        return successResponse(res, data);
    }
}

export default new KRSController();