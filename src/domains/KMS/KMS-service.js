import db from "../../config/db.js";

class KMSService {
    async getAll(){
        const datas = await db.KMS.findMany()
        return datas
    }
    async create({
        nama,
        jabatan,
        nama_debitur,
        alamat_usaha_debitur,
        alamat_rumah_debitur,
        tanggal_surat_perintah_jalan,
        tanggal_surat_penawaran_kredit,
        nomor_surat,
        tujuan,
        plafond,
        jangka_waktu,
        suku_bunga,
        pekerjaan_debitur,
        tanggal_surat_kuasa_debet,
        nama_penjamin,
        alamat_penjamin,
        no_ktp_penjamin,
        detail_jaminan,
        tanggal_surat_pernyataan,
        hari,
        tanggal_surat_perjanjian_kredit,
        telah_persetujuan_dari,
        nama_penjamin_1,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        no_ktp_penjamin_1,
        bertempat_sama_dengan,
        debitur_adalah_pemilik_rekening,
        melunasi_hutang_sebesar,
        tanggal_mengangsur_terakhir,
        tanggal_mengangsur_tiap_bulan,
        tanggal_mengangsur_pertama,
        nominal_angsuran,
        biaya_provisi_sebesar,
        biaya_administrasi_sebesar,
        nama_asuransi_jiwa,
        waktu_asuransi_jiwa,
        biaya_asuransi_jiwa_sebesar,
        biaya_materai_sebesar,
        biaya_notaris_sebesar,
        biaya_jumlah,
        tanggal_surat_penyerahan_jaminan,
        tanggal_surat_fasilitas_kredit,
        tanggal_surat_pernyataan_1
    }){
        const newKMS = await db.KMS.create({
            data:{
            nama:nama,
            jabatan:jabatan,
            nama_debitur:nama_debitur,
            alamat_usaha_debitur:alamat_usaha_debitur,
            alamat_rumah_debitur:alamat_rumah_debitur,
            tanggal_surat_perintah_jalan:new Date(tanggal_surat_perintah_jalan).toISOString(),
            tanggal_surat_penawaran_kredit:new Date(tanggal_surat_penawaran_kredit).toISOString(),
            nomor_surat:nomor_surat,
            tujuan:tujuan,
            plafond:plafond,
            jangka_waktu:jangka_waktu,
            suku_bunga:suku_bunga,
            pekerjaan_debitur:pekerjaan_debitur,
            tanggal_surat_kuasa_debet:new Date(tanggal_surat_kuasa_debet).toISOString(),
            nama_penjamin:nama_penjamin,
            alamat_penjamin:alamat_penjamin,
            no_ktp_penjamin:no_ktp_penjamin,
            detail_jaminan:detail_jaminan,
            tanggal_surat_pernyataan:new Date(tanggal_surat_pernyataan).toISOString(),
            hari:hari,
            tanggal_surat_perjanjian_kredit:new Date(tanggal_surat_perjanjian_kredit).toISOString(),
            telah_persetujuan_dari:telah_persetujuan_dari,
            nama_penjamin_1:nama_penjamin_1,
            tempat_lahir_penjamin:tempat_lahir_penjamin,
            tanggal_lahir_penjamin:new Date(tanggal_lahir_penjamin).toISOString(),
            no_ktp_penjamin_1:no_ktp_penjamin_1,
            bertempat_sama_dengan:bertempat_sama_dengan,
            debitur_adalah_pemilik_rekening:debitur_adalah_pemilik_rekening,
            melunasi_hutang_sebesar:melunasi_hutang_sebesar,
            tanggal_mengangsur_terakhir:new Date(tanggal_mengangsur_terakhir).toISOString(),
            tanggal_mengangsur_tiap_bulan:new Date(tanggal_mengangsur_tiap_bulan).toISOString(),
            tanggal_mengangsur_pertama:new Date(tanggal_mengangsur_pertama).toISOString(),
            nominal_angsuran:nominal_angsuran,
            biaya_provisi_sebesar:biaya_provisi_sebesar,
            biaya_administrasi_sebesar:biaya_administrasi_sebesar,
            nama_asuransi_jiwa:nama_asuransi_jiwa,
            waktu_asuransi_jiwa:waktu_asuransi_jiwa,
            biaya_asuransi_jiwa_sebesar:biaya_asuransi_jiwa_sebesar,
            biaya_materai_sebesar:biaya_materai_sebesar,
            biaya_notaris_sebesar:biaya_notaris_sebesar,
            biaya_jumlah:biaya_jumlah,
            tanggal_surat_penyerahan_jaminan:new Date(tanggal_surat_penyerahan_jaminan).toISOString(),
            tanggal_surat_fasilitas_kredit:new Date(tanggal_surat_fasilitas_kredit).toISOString(),
            tanggal_surat_pernyataan_1:new Date(tanggal_surat_pernyataan_1).toISOString()
            }
        })
        if (!newKMS) {
            throw new Error("Create KMS failed");
        }
        return newKMS
    }
}

export default new KMSService();