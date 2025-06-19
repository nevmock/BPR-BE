import { createdResponse, successResponse } from "../../utils/response.js";
import KSSService from "./KSS-service.js";

class KSSController {
    async get(req, res) {
        const datas = await KSSService.getAll()
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
            tanggal_surat_permohonan_kredit,
            tanggal_surat_persetujuan_kredit,
            nomor_surat,
            plaford,
            jangka_waktu,
            suku_bunga,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            nama_penjamin,
            alamat_penjamin,
            no_ktp_penjamin,
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
            nama_shm,
            is_submitted,
        } = req.body;

        const userID = req.app.locals.user

        const newKSS = await KSSService.create({
            nama,
            jabatan,
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_permohonan_kredit,
            tanggal_surat_persetujuan_kredit,
            nomor_surat,
            plaford,
            jangka_waktu,
            suku_bunga,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            nama_penjamin,
            alamat_penjamin,
            no_ktp_penjamin,
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
            nama_shm,
            is_submitted,
            userID
        });

        if (!newKSS) {
            throw Error("Failed to create KSS");
        }

        return createdResponse(res, newKSS);
    }

    async put(req, res) {
        const { id } = req.params;
        let payload = req.body;

        const userID = req.app.locals.user
        payload.userID = userID
        const updatedKSS = await KSSService.update(id, payload);
        
        if (!updatedKSS) {
            return res.status(404).json({ message: "KSS not found" });
        }

        return successResponse(res, updatedKSS);
    }

    async deleteById(req, res) {
        const { id } = req.params;
        const data = await KSSService.deleteById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KSS not found" });
        }
        
        return successResponse(res, data);
    }
}

export default new KSSController();