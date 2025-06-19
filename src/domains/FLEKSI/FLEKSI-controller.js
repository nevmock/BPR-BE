import { createdResponse, successResponse } from "../../utils/response.js";
import FLEKSIService from "./FLEKSI-service.js";

class FLEKSIController {
    async get(req, res) {
        const datas = await FLEKSIService.getAll()
        return successResponse(res, datas)
    }
    
    async getById(req, res) {
        const { id } = req.params;
        const data = await FLEKSIService.getById(id);
        
        if (!data) {
            return res.status(404).json({ message: "FLEKSI not found" });
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
        besar_pinjaman,
        bunga_pinjaman,
        jangka_waktu_pinjaman,
        angsuran_pinjaman,
        tanggal_angsuran_pertama,
        nomor_rekening_pinjaman,
        tujuan_penggunaan,
        nama_penjamin,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        alamat_penjamin,
        no_ktp_penjamin,
        barang_elektronik,
        barang_furniture,
        barang_jaminan_lainnya,
        nama_penjamin_hubungan,
        is_submitted,
        } = req.body;

        const userID = req.app.locals.user

        const newFLEKSI = await FLEKSIService.create({
            nomor_surat,
            tanggal_surat_persetujuan_kredit,
            nama_debitur,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            alamat_debitur,
            no_ktp_debitur,
            besar_pinjaman,
            bunga_pinjaman,
            jangka_waktu_pinjaman,
            angsuran_pinjaman,
            tanggal_angsuran_pertama,
            nomor_rekening_pinjaman,
            tujuan_penggunaan,
            nama_penjamin,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            alamat_penjamin,
            no_ktp_penjamin,
            barang_elektronik,
            barang_furniture,
            barang_jaminan_lainnya,
            nama_penjamin_hubungan,
            is_submitted,
            userID
        })

        if (!newFLEKSI) {
            throw Error("Failed to create FLEKSI");
        }

        return createdResponse(res, newFLEKSI);
    }

    async put(req, res) {
        const { id } = req.params;
        let payload = req.body;

        const userID = req.app.locals.user
        payload.userID = userID
        const updatedFLEKSI = await FLEKSIService.update(id, payload);
        
        if (!updatedFLEKSI) {
            return res.status(404).json({ message: "FLEKSI not found" });
        }

        return successResponse(res, updatedFLEKSI);
    }

    async deleteById(req, res) {
        const { id } = req.params;
        const data = await FLEKSIService.deleteById(id);
        
        if (!data) {
            return res.status(404).json({ message: "FLEKSI not found" });
        }
        
        return successResponse(res, data);
    }
}

export default new FLEKSIController();