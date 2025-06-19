import { createdResponse, successResponse } from "../../utils/response.js";
import PROCIMService from "./PROCIM-service.js";

class PROCIMController {
    async get(req, res) {
        const datas = await PROCIMService.getAll()
        return successResponse(res, datas)
    }

    async getById(req, res) {
        const { id } = req.params;
        const data = await PROCIMService.getById(id);
        
        if (!data) {
            return res.status(404).json({ message: "PROCIM not found" });
        }
        
        return successResponse(res, data);
    }

    async post(req, res) {
        const {
            nomor_surat,
            tanggal_surat_persetujuan_kredit,
            nama_debitur,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            alamat_debitur,
            no_ktp_debitur,
            nominal_plafond,
            suku_bunga_pinjaman,
            jangka_waktu_pinjaman,
            angsuran_pinjaman,
            tanggal_angsuran_pertama,
            nomor_rekening_pinjaman,
            nama_penjamin,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            alamat_penjamin,
            no_ktp_penjamin,
            barang_elektronik,
            barang_furniture,
            barang_jaminan_lainnya,
            is_submitted,
        } = req.body;

        const userID = req.app.locals.user

        const newPROCIM = await PROCIMService.create({
            nomor_surat,
            tanggal_surat_persetujuan_kredit,
            nama_debitur,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            alamat_debitur,
            no_ktp_debitur,
            nominal_plafond,
            suku_bunga_pinjaman,
            jangka_waktu_pinjaman,
            angsuran_pinjaman,
            tanggal_angsuran_pertama,
            nomor_rekening_pinjaman,
            nama_penjamin,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            alamat_penjamin,
            no_ktp_penjamin,
            barang_elektronik,
            barang_furniture,
            barang_jaminan_lainnya,
            is_submitted,
            userID
        });

        if (!newPROCIM) {
            throw Error("Failed to create PROCIM");
        }

        return createdResponse(res, newPROCIM);
    }

    async put(req, res) {
        const { id } = req.params;
        let payload = req.body;

        const userID = req.app.locals.user
        payload.userID = userID
        const updatedPROCIM = await PROCIMService.update(id, payload);
        
        if (!updatedPROCIM) {
            return res.status(404).json({ message: "PROCIM not found" });
        }

        return successResponse(res, updatedPROCIM);
    }

    async deleteById(req, res) {
        const { id } = req.params;
        const data = await PROCIMService.deleteById(id);
        
        if (!data) {
            return res.status(404).json({ message: "PROCIM not found" });
        }
        
        return successResponse(res, data);
    }
}

export default new PROCIMController();