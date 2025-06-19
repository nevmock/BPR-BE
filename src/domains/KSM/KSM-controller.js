import { createdResponse, successResponse } from "../../utils/response.js";
import KSMService from "./KSM-service.js";

class KSMController {
    async get(req, res) {
        const datas = await KSMService.getAll()
        return successResponse(res, datas)
    }

    async getById(req, res) {
        const { id } = req.params;
        const data = await KSMService.getById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KSM not found" });
        }
        
        return successResponse(res, data);
    }

    async post(req, res) {
        const{
            nama,
            jabatan,
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_permohonan_kredit,
            tanggal_surat_perjanjian_kredit,
            nomor_surat,
            nominal,
            tujuan_penggunaan,
            suku_bunga,
            provisi,
            jangka_waktu,
            detail_jaminan,
            pekerjaan_debitur,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            no_ktp_debitur,
            mendapat_persetujuan_dari,
            nama_penjamin,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            tempat_tinggal_sama_dengan,
            no_ktp_penjamin,
            seluruh_hutang_sebesar,
            tanggal_mengangsur_paling_lambat,
            biaya_angsuran,
            tanggal_mengangsur_pertama,
            tanggal_mengangsur_terakhir,
            biaya_provisi,
            biaya_materai,
            biaya_asuransi,
            biaya_asuransi_tlo,
            biaya_administrasi,
            biaya_notaris,
            total_biaya,
            nama_barang,
            nik_debitur,
            jenis_kelamin_debitur,
            harga_jaminan_saat_ini,
            is_submitted,
        } = req.body;

        const userID = req.app.locals.user

        const newKSM = await KSMService.create({
            nama,
            jabatan,
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_permohonan_kredit,
            tanggal_surat_perjanjian_kredit,
            nomor_surat,
            nominal,
            tujuan_penggunaan,
            suku_bunga,
            provisi,
            jangka_waktu,
            detail_jaminan,
            pekerjaan_debitur,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            no_ktp_debitur,
            mendapat_persetujuan_dari,
            nama_penjamin,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            tempat_tinggal_sama_dengan,
            no_ktp_penjamin,
            seluruh_hutang_sebesar,
            tanggal_mengangsur_paling_lambat,
            biaya_angsuran,
            tanggal_mengangsur_pertama,
            tanggal_mengangsur_terakhir,
            biaya_provisi,
            biaya_materai,
            biaya_asuransi,
            biaya_asuransi_tlo,
            biaya_administrasi,
            biaya_notaris,
            total_biaya,
            nama_barang,
            nik_debitur,
            jenis_kelamin_debitur,
            harga_jaminan_saat_ini,
            is_submitted,
            userID
        });

        if (!newKSM) {
            throw Error("Failed to create KSM");
        }

        return createdResponse(res, newKSM);
    }

    async put(req, res) {
        const { id } = req.params;
        let payload = req.body;

        const userID = req.app.locals.user
        payload.userID = userID
        const updatedKSM = await KSMService.update(id, payload);
        
        if (!updatedKSM) {
            return res.status(404).json({ message: "KSM not found" });
        }

        return successResponse(res, updatedKSM);
    }

    async deleteById(req, res) {
        const { id } = req.params;
        const data = await KSMService.deleteById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KSM not found" });
        }
        
        return successResponse(res, data);
    }
}

export default new KSMController();