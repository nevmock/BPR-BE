import { createdResponse, successResponse } from "../../utils/response.js";
import PINEKService from "./PINEK-service.js"

class PINEKController {
    async get(req, res) {
        const datas = await PINEKService.getAll();
        return successResponse(res, datas)
    }

    async getById(req, res) {
        const { id } = req.params;
        const data = await PINEKService.getById(id);
        
        if (!data) {
            return res.status(404).json({ message: "PINEK not found" });
        }
        
        return successResponse(res, data);
    }

    async post(req, res) {
        const {
        nomor_surat,
        tanggal_surat_persetujuan_kredit,
        nama_debitur,
        pekerjaan_debitur,
        tempat_lahir_debitur,
        tanggal_lahir_debitur,
        tempat_tinggal_debitur,
        mendapat_persetujuan,
        nama_penjamin,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        tempat_tinggal_penjamin,
        tanggal_pengajuan_kredit,
        debitur_menerima_pinjaman,
        dikenakan_bunga,
        total_seluruh_hutang,
        jangka_waktu_hutang,
        mengangsur_paling_lambat,
        pemotongan_gaji,
        tanggal_mengangsur_pertama,
        tanggal_mengangsur_terakhir,
        biaya,
        total_biaya,
        is_submitted,
        } = req.body;

        const userID = req.app.locals.user

        const newPINEK = await PINEKService.create({
        nomor_surat,
        tanggal_surat_persetujuan_kredit,
        nama_debitur,
        pekerjaan_debitur,
        tempat_lahir_debitur,
        tanggal_lahir_debitur,
        tempat_tinggal_debitur,
        mendapat_persetujuan,
        nama_penjamin,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        tempat_tinggal_penjamin,
        tanggal_pengajuan_kredit,
        debitur_menerima_pinjaman,
        dikenakan_bunga,
        total_seluruh_hutang,
        jangka_waktu_hutang,
        mengangsur_paling_lambat,
        pemotongan_gaji,
        tanggal_mengangsur_pertama,
        tanggal_mengangsur_terakhir,
        biaya,
        total_biaya,
        is_submitted,
        userID
        });

        if (!newPINEK) {
            throw Error("Failed to create PINEK");
        }

        return createdResponse(res, newPINEK);
    }

    async put(req, res) {
        const { id } = req.params;
        let payload = req.body;

        const userID = req.app.locals.user
        payload.userID = userID
        const updatedPINEK = await PINEKService.update(id, payload);

        if (!updatedPINEK) {
            return res.status(404).json({ message: "PINEK not found" });
        }

        return successResponse(res, updatedPINEK);
    }

    async deleteById(req, res) {
        const { id } = req.params;
        const data = await PINEKService.deleteById(id);
        
        if (!data) {
            return res.status(404).json({ message: "PINEK not found" });
        }
        
        return successResponse(res, data);
    }
}

export default new PINEKController();