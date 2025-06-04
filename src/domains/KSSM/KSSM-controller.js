import { createdResponse, successResponse } from "../../utils/response.js";
import KSSMService from "./KSSM-service.js";

class KSSMController {
    async get(req, res) {
        const datas = KSSMService.getAll()
        return successResponse(res, datas)
    }

    async getById(req, res) {
        const { id } = req.params;
        const data = await KSSMService.getById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KSSM not found" });
        }
        
        return successResponse(res, data);
    }

    async post(req, res) {
        const {nama,
            jabatan, 
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_perintah_jalan,
            tanggal_surat_fasilitas_kredit,
            nomor_surat,
            nominal,
            tujuan_penggunaan,
            suku_bunga,
            jangka_waktu,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            tanggal_surat_kuasa_debet,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            no_ktp_debitur,
            tanggal_surat_kuasa_kendaraan,
            hari,
            tanggal_surat_perjanjian_kredit,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            no_ktp_penjamin,
            utang_atas_kredit,
            tenggat_mengangsur,
            nilai_mengangsur,
            tanggal_mengangsur_pertama,
            tanggal_mengangsur_terakhir,
            nominal_provisi,
            nominal_materai,
            nominal_asuransi_jiwa,
            jangka_asuransi_tlo,
            nominal_asuransi_tlo,
            nominal_administrasi,
            nominal_notaris,
            total_biaya,
            nama_barang,
            nik_debitur,
            jenis_kelamin_debitur,
            harga_jaminan,
            is_submitted,
        } = req.body;

        const newKSSM = await KSSMService.create({nama,
            jabatan, 
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_perintah_jalan,
            tanggal_surat_fasilitas_kredit,
            nomor_surat,
            nominal,
            tujuan_penggunaan,
            suku_bunga,
            jangka_waktu,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            tanggal_surat_kuasa_debet,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            no_ktp_debitur,
            tanggal_surat_kuasa_kendaraan,
            hari,
            tanggal_surat_perjanjian_kredit,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            no_ktp_penjamin,
            utang_atas_kredit,
            tenggat_mengangsur,
            nilai_mengangsur,
            tanggal_mengangsur_pertama,
            tanggal_mengangsur_terakhir,
            nominal_provisi,
            nominal_materai,
            nominal_asuransi_jiwa,
            jangka_asuransi_tlo,
            nominal_asuransi_tlo,
            nominal_administrasi,
            nominal_notaris,
            total_biaya,
            nama_barang,
            nik_debitur,
            jenis_kelamin_debitur,
            harga_jaminan,
            is_submitted});
        
        if (!newKSSM) {
            throw Error("Failed to create KSSM");
        }

        return createdResponse(res, newKSSM);
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
            nominal,
            tujuan_penggunaan,
            suku_bunga,
            jangka_waktu,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            tanggal_surat_kuasa_debet,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            no_ktp_debitur,
            tanggal_surat_kuasa_kendaraan,
            hari,
            tanggal_surat_perjanjian_kredit,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            no_ktp_penjamin,
            utang_atas_kredit,
            tenggat_mengangsur,
            nilai_mengangsur,
            tanggal_mengangsur_pertama,
            tanggal_mengangsur_terakhir,
            nominal_provisi,
            nominal_materai,
            nominal_asuransi_jiwa,
            jangka_asuransi_tlo,
            nominal_asuransi_tlo,
            nominal_administrasi,
            nominal_notaris,
            total_biaya,
            nama_barang,
            nik_debitur,
            jenis_kelamin_debitur,
            harga_jaminan,
            status,
        } = req.body;

        const updatedKSSM = await KSSMService.update(id, payload);
        
        if (!updatedKSSM) {
            return res.status(404).json({ message: "KSSM not found" });
        }

        return successResponse(res, updatedKSSM);
    }
}

export default new KSSMController();