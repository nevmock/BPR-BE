import { createdResponse, successResponse } from "../../utils/response.js";
import KSSService from "./KSS-service.js";

class KSSController {
    async get(req, res) {
        const datas = KSSService.getAll()
        return successResponse(res, datas)
    }

    async getById(req, res) {
        const { id } = req.params;
        const data = await KSSService.getById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KSS not found" });
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
            tanggal_surat_perintah_jalan,
            tanggal_surat_fasilitas_kredit,
            nomor_surat,
            plaford,
            jangka_waktu,
            suku_bunga,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            tanggal_surat_kuasa_debet,
            nama_penjamin,
            alamat_penjamin,
            no_ktp_penjamin,
            tanggal_surat_pernyataan,
            hari,
            tanggal_surat_perjanjian_kredit,
            no_ktp_debitur,
            persetujuan_dari,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            tinggal_sama_dengan,
            jumlah_bank_menyerahkan_uang,
            bunga_pinjaman,
            tujuan_penggunaan_kredit,
            total_seluruh_pinjaman,
            tanggal_angsuran_dimulai,
            tanggal_angsuran_terakhir,
            angsuran_tiap_bulan,
            nominal_provisi,
            nominal_administrasi,
            nama_asuransi,
            jangka_asuransi,
            biaya_asuransi,
            biaya_materai,
            biaya_notaris,
            total_biaya,
            tanggal_surat_penyerahan_jaminan,
            nama_shm,
            tanggal_surat_fasilitas_kredit_1,
            is_submitted,
        } = req.body;

        const newKSS = await KSSService.create({
            nama,
            jabatan,
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_perintah_jalan,
            tanggal_surat_fasilitas_kredit,
            nomor_surat,
            plaford,
            jangka_waktu,
            suku_bunga,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            tanggal_surat_kuasa_debet,
            nama_penjamin,
            alamat_penjamin,
            no_ktp_penjamin,
            tanggal_surat_pernyataan,
            hari,
            tanggal_surat_perjanjian_kredit,
            no_ktp_debitur,
            persetujuan_dari,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            tinggal_sama_dengan,
            jumlah_bank_menyerahkan_uang,
            bunga_pinjaman,
            tujuan_penggunaan_kredit,
            total_seluruh_pinjaman,
            tanggal_angsuran_dimulai,
            tanggal_angsuran_terakhir,
            angsuran_tiap_bulan,
            nominal_provisi,
            nominal_administrasi,
            nama_asuransi,
            jangka_asuransi,
            biaya_asuransi,
            biaya_materai,
            biaya_notaris,
            total_biaya,
            tanggal_surat_penyerahan_jaminan,
            nama_shm,
            tanggal_surat_fasilitas_kredit_1,
            is_submitted
        });

        if (!newKSS) {
            throw Error("Failed to create KSS");
        }

        return createdResponse(res, newKSS);
    }

    async put(req, res) {
        const { id } = req.params;
        const payload = {
            nama,
            jabatan,
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_perintah_jalan,
            tanggal_surat_fasilitas_kredit,
            nomor_surat,
            plaford,
            jangka_waktu,
            suku_bunga,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            tanggal_surat_kuasa_debet,
            nama_penjamin,
            alamat_penjamin,
            no_ktp_penjamin,
            tanggal_surat_pernyataan,
            hari,
            tanggal_surat_perjanjian_kredit,
            no_ktp_debitur,
            persetujuan_dari,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            tinggal_sama_dengan,
            jumlah_bank_menyerahkan_uang,
            bunga_pinjaman,
            tujuan_penggunaan_kredit,
            total_seluruh_pinjaman,
            tanggal_angsuran_dimulai,
            tanggal_angsuran_terakhir,
            angsuran_tiap_bulan,
            nominal_provisi,
            nominal_administrasi,
            nama_asuransi,
            jangka_asuransi,
            biaya_asuransi,
            biaya_materai,
            biaya_notaris,
            total_biaya,
            tanggal_surat_penyerahan_jaminan,
            nama_shm,
            tanggal_surat_fasilitas_kredit_1,
            status,
        } = req.body;

        const updatedKSS = await KSSService.update(id, payload);
        
        if (!updatedKSS) {
            return res.status(404).json({ message: "KSS not found" });
        }

        return successResponse(res, updatedKSS);
    }
}

export default new KSSController();