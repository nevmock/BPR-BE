import db from "../../config/db.js";
class KRSService {
    async getAll(){
        const datas = await db.KRS.findMany()
        return datas
    }

    async create({
        nama,
        jabatan,
        nama_debitur,
        alamat_usaha_debitur,
        alamat_rumah_debitur,
        tanggal_surat_perintah_jalan,
        tanggal_surat_persetujuan_fasilitas_kredit,
        nomor_surat,
        tujuan_penggunaan,
        plafond,
        jangka_waktu,
        suku_bunga,
        biaya_provisi,
        biaya_administrasi,
        detail_jaminan,
        pekerjaan_debitur,
        tanggal_surat_kuasa_debet,
        no_ktp_debitur,
        tanggal_surat_pernyataan,
        hari,
        tanggal_surat_perjanjian_kredit,
        tempat_lahir_debitur,
        tanggal_lahir_debitur,
        telah_persetujuan_dari,
        nama_penjamin,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        no_ktp_penjamin,
        bertempat_tinggal_sama_dengan,
        debitur_pemilik_rekening,
        melunasi_hutang_sebesar,
        jangka_waktu_angsuran,
        tanggal_mengangsur_terakhir,
        tanggal_mengangsur_paling_lambat,
        tanggal_mengangsur_pertama,
        nominal_angsuran,
        biaya_provisi_sebesar,
        biaya_administrasi_sebesar,
        waktu_asuransi_jiwa,
        biaya_asuransi_jiwa,
        biaya_materai_sebesar,
        biaya_jumlah,
        tanggal_surat_penyerahan_jaminan,
        tanggal_surat_terima_fasilitas_kredit,
        tanggal_surat_pernyataan_1
    }){
        const newKRS = await db.KRS.create({
            data:{
                nama:nama,
                jabatan:jabatan,
                nama_debitur:nama_debitur,
                alamat_usaha_debitur:alamat_usaha_debitur,
                alamat_rumah_debitur:alamat_rumah_debitur,
                tanggal_surat_perintah_jalan:new Date(tanggal_surat_perintah_jalan).toISOString(),
                tanggal_surat_persetujuan_fasilitas_kredit:new Date(tanggal_surat_persetujuan_fasilitas_kredit).toISOString(),
                nomor_surat:nomor_surat,
                tujuan_penggunaan:tujuan_penggunaan,
                plafond:plafond,
                jangka_waktu:jangka_waktu,
                suku_bunga:suku_bunga,
                biaya_provisi:biaya_provisi,
                biaya_administrasi:biaya_administrasi,
                detail_jaminan:detail_jaminan,
                pekerjaan_debitur:pekerjaan_debitur,
                tanggal_surat_kuasa_debet:new Date(tanggal_surat_kuasa_debet).toISOString(),
                no_ktp_debitur:no_ktp_debitur,
                tanggal_surat_pernyataan:new Date(tanggal_surat_pernyataan).toISOString(),
                hari:hari,
                tanggal_surat_perjanjian_kredit:new Date(tanggal_surat_perjanjian_kredit).toISOString(),
                tempat_lahir_debitur:tempat_lahir_debitur,
                tanggal_lahir_debitur:new Date(tanggal_lahir_debitur).toISOString(),
                telah_persetujuan_dari:telah_persetujuan_dari,
                nama_penjamin:nama_penjamin,
                tempat_lahir_penjamin:tempat_lahir_penjamin,
                tanggal_lahir_penjamin:new Date(tanggal_lahir_penjamin).toISOString(),
                no_ktp_penjamin:no_ktp_penjamin,
                bertempat_tinggal_sama_dengan:bertempat_tinggal_sama_dengan,
                debitur_pemilik_rekening:debitur_pemilik_rekening,
                melunasi_hutang_sebesar:melunasi_hutang_sebesar,
                jangka_waktu_angsuran:jangka_waktu_angsuran,
                tanggal_mengangsur_terakhir:new Date(tanggal_mengangsur_terakhir).toISOString(),
                tanggal_mengangsur_paling_lambat:new Date(tanggal_mengangsur_paling_lambat).toISOString(),
                tanggal_mengangsur_pertama:new Date(tanggal_mengangsur_pertama).toISOString(),
                nominal_angsuran:nominal_angsuran,
                biaya_provisi_sebesar:biaya_provisi_sebesar,
                biaya_administrasi_sebesar:biaya_administrasi_sebesar,
                waktu_asuransi_jiwa:waktu_asuransi_jiwa,
                biaya_asuransi_jiwa:biaya_asuransi_jiwa,
                biaya_materai_sebesar:biaya_materai_sebesar,
                biaya_jumlah:biaya_jumlah,
                tanggal_surat_penyerahan_jaminan:new Date(tanggal_surat_penyerahan_jaminan).toISOString(),
                tanggal_surat_terima_fasilitas_kredit:new Date(tanggal_surat_terima_fasilitas_kredit).toISOString(),
                tanggal_surat_pernyataan_1:new Date(tanggal_surat_pernyataan_1).toISOString()
            }
        })
        if (!newKRS) {
            throw new Error("Create KRS failed");
        }
        return newKRS
    }
}

export default new KRSService();