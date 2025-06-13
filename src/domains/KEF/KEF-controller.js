import { createdResponse, successResponse } from "../../utils/response.js";
import KEFService from "./KEF-service.js";

class KEFController {
    async get(req, res) {
        const datas = KEFService.getAll()
        return successResponse(res, datas)
    }

    async getById(req, res) {
        const { id } = req.params;
        const data = await KEFService.getById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KEF not found" });
        }
        
        return successResponse(res, data);
    }

    async post(req, res) {
        const {
            nomor_surat,
            hari,
            tanggal_surat_perjanjian_kredit,
            nama_debitur,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            alamat_rumah_debitur,
            no_ktp_debitur,
            telah_mendapat_persetujuan,
            nama_penjamin,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            no_ktp_penjamin,
            bertempat_tinggal_dengan,
            nama_barang,
            nama_toko,
            alamat_toko,
            harga_barang,
            bunga_pinjaman,
            total_pinjaman,
            jangka_waktu,
            tanggal_angsuran_berakhir,
            tenggat_mengangsur_pada,
            tanggal_angsuran_pertama,
            nilai_mengangsur,
            biaya_provisi_sebesar,
            biaya_administrasi_sebesar,
            biaya_materai_sebesar,
            biaya_fidusia_sebesar,
            total_biaya,
            pekerjaan_debitur,
            tanggal_surat_kuasa_debet,
            nik_debitur,
            jenis_kelamin_debitur,
            detail_jaminan,
            harga_jaminan,
            tanggal_surat_kuasa,
            no_hp_debitur,
            hari_pembuatan_surat,
            tanggal_surat_perjanjian_sewabeli,
            total_harga_keseluruhan_barang,
            is_submitted,
        } = req.body;

        const newKEF = await KEFService.create({
            nomor_surat,
            hari,
            tanggal_surat_perjanjian_kredit,
            nama_debitur,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            alamat_rumah_debitur,
            no_ktp_debitur,
            telah_mendapat_persetujuan,
            nama_penjamin,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            no_ktp_penjamin,
            bertempat_tinggal_dengan,
            nama_barang,
            nama_toko,
            alamat_toko,
            harga_barang,
            bunga_pinjaman,
            total_pinjaman,
            jangka_waktu,
            tanggal_angsuran_berakhir,
            tenggat_mengangsur_pada,
            tanggal_angsuran_pertama,
            nilai_mengangsur,
            biaya_provisi_sebesar,
            biaya_administrasi_sebesar,
            biaya_materai_sebesar,
            biaya_fidusia_sebesar,
            total_biaya,
            pekerjaan_debitur,
            tanggal_surat_kuasa_debet,
            nik_debitur,
            jenis_kelamin_debitur,
            detail_jaminan,
            harga_jaminan,
            tanggal_surat_kuasa,
            no_hp_debitur,
            hari_pembuatan_surat,
            tanggal_surat_perjanjian_sewabeli,
            total_harga_keseluruhan_barang,
            is_submitted,
        });

        if (!newKEF) {
            throw Error("Failed to create KEF");
        }

        return createdResponse(res, newKEF);
    }

    async put(req, res) {
        const { id } = req.params;
        const payload = {
            nomor_surat,
            hari,
            tanggal_surat_perjanjian_kredit,
            nama_debitur,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            alamat_rumah_debitur,
            no_ktp_debitur,
            telah_mendapat_persetujuan,
            nama_penjamin,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            no_ktp_penjamin,
            bertempat_tinggal_dengan,
            nama_barang,
            nama_toko,
            alamat_toko,
            harga_barang,
            bunga_pinjaman,
            total_pinjaman,
            jangka_waktu,
            tanggal_angsuran_berakhir,
            tenggat_mengangsur_pada,
            tanggal_angsuran_pertama,
            nilai_mengangsur,
            biaya_provisi_sebesar,
            biaya_administrasi_sebesar,
            biaya_materai_sebesar,
            biaya_fidusia_sebesar,
            total_biaya,
            pekerjaan_debitur,
            tanggal_surat_kuasa_debet,
            nik_debitur,
            jenis_kelamin_debitur,
            detail_jaminan,
            harga_jaminan,
            tanggal_surat_kuasa,
            no_hp_debitur,
            hari_pembuatan_surat,
            tanggal_surat_perjanjian_sewabeli,
            total_harga_keseluruhan_barang,
            status,
        } = req.body;

        const updatedKEF = await KEFService.update(id, payload);
        
        if (!updatedKEF) {
            return res.status(404).json({ message: "KEF not found" });
        }

        return successResponse(res, updatedKEF);
    }
}

export default new KEFController();