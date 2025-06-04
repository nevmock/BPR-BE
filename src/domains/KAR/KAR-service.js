import db from "../../config/db.js";

class KARService {
    async getAll(){
        const datas = await db.KAR.findMany()
        return datas
    }
    async create({
        nama,
        jabatan,
        nama_debitur,
        alamat_usaha_debitur,
        alamat_rumah_debitur,
        tanggal_surat_perintah_jalan,
        tanggal_surat_persetujuan_kredit,
        nomor_surat,
        nominal,
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
        hubungan_debitur_penjamin,
        nama_penjamin,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        no_ktp_penjamin,
        utang_atas_kredit_sebesar,
        tenggat_mengangsur_tiap_bulan,
        nilai_mengangsur,
        tanggal_mengangsur_pertama,
        tanggal_mengangsur_terakhir,
        biaya_provisi_sebesar,
        biaya_materai_sebesar,
        biaya_asuransi_jiwa_sebesar,
        biaya_administrasi_sebesar,
        biaya_notaris_sebesar,
        total_biaya,
        nama_barang,
        tanggal_surat_penyerahan_jaminan,
        tanggal_surat_fasilitas_kredit,
        tanggal_surat_pernyataan,
        tanggal_surat_pemotongan_gaji,
    }){
        const newKAR = await db.KAR.create({
            data:{
            nama:nama,
            jabatan:jabatan,
            nama_debitur:nama_debitur,
            alamat_usaha_debitur:alamat_usaha_debitur,
            alamat_rumah_debitur:alamat_rumah_debitur,
            tanggal_surat_perintah_jalan:new Date(tanggal_surat_perintah_jalan).toISOString(),
            tanggal_surat_persetujuan_kredit:new Date(tanggal_surat_persetujuan_kredit).toISOString(),
            nomor_surat:nomor_surat,
            nominal:nominal,
            suku_bunga:suku_bunga,
            jangka_waktu:jangka_waktu,
            biaya_provisi:biaya_provisi,
            biaya_administrasi:biaya_administrasi,
            detail_jaminan:detail_jaminan,
            pekerjaan_debitur:pekerjaan_debitur,
            tanggal_surat_kuasa_debet:new Date(tanggal_surat_kuasa_debet).toISOString(),
            tempat_lahir_debitur:tempat_lahir_debitur,
            tanggal_lahir_debitur:new Date(tanggal_lahir_debitur).toISOString(),
            no_ktp_debitur:no_ktp_debitur,
            tanggal_surat_kuasa_kendaraan:new Date(tanggal_surat_kuasa_kendaraan).toISOString(),
            hari:hari,
            tanggal_surat_perjanjian_kredit:new Date(tanggal_surat_perjanjian_kredit).toISOString(),
            hubungan_debitur_penjamin:hubungan_debitur_penjamin,
            nama_penjamin:nama_penjamin,
            tempat_lahir_penjamin:tempat_lahir_penjamin,
            tanggal_lahir_penjamin:new Date(tanggal_lahir_penjamin).toISOString(),
            no_ktp_penjamin:no_ktp_penjamin,
            utang_atas_kredit_sebesar:utang_atas_kredit_sebesar,
            tenggat_mengangsur_tiap_bulan:tenggat_mengangsur_tiap_bulan,
            nilai_mengangsur:nilai_mengangsur,
            tanggal_mengangsur_pertama:new Date(tanggal_mengangsur_pertama).toISOString(),
            tanggal_mengangsur_terakhir:new Date(tanggal_mengangsur_terakhir).toISOString(),
            biaya_provisi_sebesar:biaya_provisi_sebesar,
            biaya_materai_sebesar:biaya_materai_sebesar,
            biaya_asuransi_jiwa_sebesar:biaya_asuransi_jiwa_sebesar,
            biaya_administrasi_sebesar:biaya_administrasi_sebesar,
            biaya_notaris_sebesar:biaya_notaris_sebesar,
            total_biaya:total_biaya,
            nama_barang:nama_barang,
            tanggal_surat_penyerahan_jaminan:new Date(tanggal_surat_penyerahan_jaminan).toISOString(),
            tanggal_surat_fasilitas_kredit:new Date(tanggal_surat_fasilitas_kredit).toISOString(),
            tanggal_surat_pernyataan:new Date(tanggal_surat_pernyataan).toISOString(),
            tanggal_surat_pemotongan_gaji:new Date(tanggal_surat_pemotongan_gaji).toISOString(),
            }
        })
        if (!newKAR) {
            throw new Error("Create KAR failed");
        }
        return newKAR
    }
}

export default new KARService();