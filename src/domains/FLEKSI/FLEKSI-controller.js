import { createdResponse, successResponse } from "../../utils/response.js";
import FLEKSIService from "./FLEKSI-service.js";

class FLEKSIController {
    async get(req, res) {
        const datas = FLEKSIService.getAll()
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
        nomor_surat_perjanjian_kredit,
        hari,
        tanggal_surat_perjanjian_kredit,
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
        hari_pembayaran_angsuran,
        tanggal_pencairan,
        nomor_rekening_pinjaman,
        tujuan_penggunaan,
        nama_penjamin,
        nomor_surat_pernyataan_jaminan,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        alamat_penjamin,
        no_ktp_penjamin,
        barang_elektronik,
        barang_furniture,
        barang_jaminan_lainnya,
        tanggal_surat_pernyataan_jaminan,
        nama_penjamin_hubungan,
        tanggal_surat_penyerahan_jaminan,
        is_submitted,
        } = req.body;

        const newFLEKSI = await FLEKSIService.create({
            nomor_surat_perjanjian_kredit,
            hari,
            tanggal_surat_perjanjian_kredit,
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
            hari_pembayaran_angsuran,
            tanggal_pencairan,
            nomor_rekening_pinjaman,
            tujuan_penggunaan,
            nama_penjamin,
            nomor_surat_pernyataan_jaminan,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            alamat_penjamin,
            no_ktp_penjamin,
            barang_elektronik,
            barang_furniture,
            barang_jaminan_lainnya,
            tanggal_surat_pernyataan_jaminan,
            nama_penjamin_hubungan,
            tanggal_surat_penyerahan_jaminan,
            is_submitted
        })

        if (!newFLEKSI) {
            throw Error("Failed to create FLEKSI");
        }

        return createdResponse(res, newFLEKSI);
    }

    async put(req, res) {
        const { id } = req.params;
        const payload = {
            nomor_surat_perjanjian_kredit,
            hari,
            tanggal_surat_perjanjian_kredit,
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
            hari_pembayaran_angsuran,
            tanggal_pencairan,
            nomor_rekening_pinjaman,
            tujuan_penggunaan,
            nama_penjamin,
            nomor_surat_pernyataan_jaminan,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            alamat_penjamin,
            no_ktp_penjamin,
            barang_elektronik,
            barang_furniture,
            barang_jaminan_lainnya,
            tanggal_surat_pernyataan_jaminan,
            nama_penjamin_hubungan,
            tanggal_surat_penyerahan_jaminan,
            status,
        } = req.body;

        const updatedFLEKSI = await FLEKSIService.update(id, payload);
        
        if (!updatedFLEKSI) {
            return res.status(404).json({ message: "FLEKSI not found" });
        }

        return successResponse(res, updatedKSSM);
    }
}

export default new FLEKSIController();