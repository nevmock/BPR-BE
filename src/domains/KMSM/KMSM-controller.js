import { createdResponse, successResponse } from "../../utils/response.js";
import KMSMService from "./KMSM-service.js";

class KMSMController {
    async get(req, res) {
        const datas = KMSMService.getAll()
        return successResponse(res, datas)
    }
    async post(req, res) {
        const {
            nama,
            jabatan,
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_perintah_jalan,
            tanggal_surat_pemberian_kredit,
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
            tanggal_lahir_debitur,
            no_ktp_debitur,
            tanggal_surat_kuasa_kendaraan,
            hari,
            tanggal_surat_perjanjian_kredit,
            tempat_lahir_debitur,
            hubungan_debitur_penjamin,
            nama_penjamin,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            no_ktp_penjamin,
            utang_atas_kredit,
            tenggat_mengangsur_tanggal,
            nilai_mengangsur,
            tanggal_mengangsur_pertama,
            tanggal_mengangsur_terakhir,
            biaya_provisi_sebesar,
            biaya_materai,
            waktu_asuransi_tlo,
            biaya_asuransi_tlo,
            biaya_administrasi_sebesar,
            biaya_notaris,
            total_biaya,
            nama_barang,
            tanggal_surat_penyerahan_jaminan,
            tanggal_surat_fasilitas_kredit,
            tanggal_surat_pernyataan,
            nik_debitur,
            jenis_kelamin_debitur,
            harga_jaminan,
            tanggal_surat_kuasa
        } = req.body;

        const newKMSM = await KMSMService.create({
            nama,
            jabatan,
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_perintah_jalan,
            tanggal_surat_pemberian_kredit,
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
            tanggal_lahir_debitur,
            no_ktp_debitur,
            tanggal_surat_kuasa_kendaraan,
            hari,
            tanggal_surat_perjanjian_kredit,
            tempat_lahir_debitur,
            hubungan_debitur_penjamin,
            nama_penjamin,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            no_ktp_penjamin,
            utang_atas_kredit,
            tenggat_mengangsur_tanggal,
            nilai_mengangsur,
            tanggal_mengangsur_pertama,
            tanggal_mengangsur_terakhir,
            biaya_provisi_sebesar,
            biaya_materai,
            waktu_asuransi_tlo,
            biaya_asuransi_tlo,
            biaya_administrasi_sebesar,
            biaya_notaris,
            total_biaya,
            nama_barang,
            tanggal_surat_penyerahan_jaminan,
            tanggal_surat_fasilitas_kredit,
            tanggal_surat_pernyataan,
            nik_debitur,
            jenis_kelamin_debitur,
            harga_jaminan,
            tanggal_surat_kuasa
        })

        if (!newKMSM) {
            throw Error("Failed to create KMSM");
        }

        return createdResponse(res, newKMSM);
    }
}

export default new KMSMController();