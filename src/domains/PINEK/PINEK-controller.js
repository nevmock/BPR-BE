import { createdResponse, successResponse } from "../../utils/response.js";
import PINEKService from "./PINEK-service.js"

class PINEKController {
    async get(req, res) {
        const datas = PINEKService.getAll();
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
        hari,
        tanggal_surat_perjanjian_kredit,
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
        tanggal_surat_kuasa_debet,
        tanggal_surat_pemotongan_gaji,
        tanggal_surat_dokumen_agunan,
        tanggal_surat_pernyataan,
        is_submitted,
        } = req.body;

        const newPINEK = await PINEKService.create({
        nomor_surat,
        hari,
        tanggal_surat_perjanjian_kredit,
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
        tanggal_surat_kuasa_debet,
        tanggal_surat_pemotongan_gaji,
        tanggal_surat_dokumen_agunan,
        tanggal_surat_pernyataan,
        is_submitted
        });

        if (!newPINEK) {
            throw Error("Failed to create PINEK");
        }

        return createdResponse(res, newPINEK);
    }

    async put(req, res) {
        const { id } = req.params;
        const payload = {
            nomor_surat,
            hari,
            tanggal_surat_perjanjian_kredit,
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
            tanggal_surat_kuasa_debet,
            tanggal_surat_pemotongan_gaji,
            tanggal_surat_dokumen_agunan,
            tanggal_surat_pernyataan,
            status
        } = req.body;

        const updatedPINEK = await PINEKService.update(id, payload);

        if (!updatedPINEK) {
            return res.status(404).json({ message: "PINEK not found" });
        }

        return successResponse(res, updatedPINEK);
    }
}

export default new PINEKController();