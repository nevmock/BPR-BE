import { createdResponse, successResponse } from "../../utils/response.js";
import PROCIMService from "./PROCIM-service.js";

class PROCIMController {
    async get(req, res) {
        const datas = PROCIMService.getAll()
        return successResponse(res, datas)
    }
    async post(req, res) {
        const {
            nomor_perjanjian_kredit,
            hari,
            tanggal_surat_perjanjian_kredit,
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
            hari_pembayaran_angsuran,
            tanggal_pencairan,
            nomor_rekening_pinjaman,
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
            tanggal_surat_penyerahan_jaminan
        } = req.body;

        const newPROCIM = await PROCIMService.create({
            nomor_perjanjian_kredit,
            hari,
            tanggal_surat_perjanjian_kredit,
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
            hari_pembayaran_angsuran,
            tanggal_pencairan,
            nomor_rekening_pinjaman,
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
            tanggal_surat_penyerahan_jaminan
        })

        if (!newPROCIM) {
            throw Error("Failed to create PROCIM");
        }

        return createdResponse(res, newPROCIM);
    }
}

export default new PROCIMController();