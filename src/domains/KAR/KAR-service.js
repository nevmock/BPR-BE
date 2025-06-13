import db from "../../config/db.js";

class KARService {
    async getAll(){
        const datas = await db.KAR.findMany()
        return datas
    }

    async getById(id) {
        const data = await db.KAR.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        return data;
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
        submitted_at,
    }){
        const newKAR = await db.KAR.create({
            data:{
            nama:nama,
            jabatan:jabatan,
            nama_debitur:nama_debitur,
            alamat_usaha_debitur:alamat_usaha_debitur,
            alamat_rumah_debitur:alamat_rumah_debitur,
            tanggal_surat_perintah_jalan:tanggal_surat_perintah_jalan?new Date(tanggal_surat_perintah_jalan):null,
            tanggal_surat_persetujuan_kredit:tanggal_surat_persetujuan_kredit?new Date(tanggal_surat_persetujuan_kredit):null,
            nomor_surat:nomor_surat,
            nominal:nominal,
            suku_bunga:suku_bunga,
            jangka_waktu:jangka_waktu,
            biaya_provisi:biaya_provisi,
            biaya_administrasi:biaya_administrasi,
            detail_jaminan:detail_jaminan,
            pekerjaan_debitur:pekerjaan_debitur,
            tanggal_surat_kuasa_debet:tanggal_surat_kuasa_debet?new Date(tanggal_surat_kuasa_debet):null,
            tempat_lahir_debitur:tempat_lahir_debitur,
            tanggal_lahir_debitur:tanggal_lahir_debitur?new Date(tanggal_lahir_debitur):null,
            no_ktp_debitur:no_ktp_debitur,
            tanggal_surat_kuasa_kendaraan:tanggal_surat_kuasa_kendaraan?new Date(tanggal_surat_kuasa_kendaraan):null,
            hari:hari,
            tanggal_surat_perjanjian_kredit:tanggal_surat_perjanjian_kredit?new Date(tanggal_surat_perjanjian_kredit):null,
            hubungan_debitur_penjamin:hubungan_debitur_penjamin,
            nama_penjamin:nama_penjamin,
            tempat_lahir_penjamin:tempat_lahir_penjamin,
            tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
            no_ktp_penjamin:no_ktp_penjamin,
            utang_atas_kredit_sebesar:utang_atas_kredit_sebesar,
            tenggat_mengangsur_tiap_bulan:tenggat_mengangsur_tiap_bulan,
            nilai_mengangsur:nilai_mengangsur,
            tanggal_mengangsur_pertama:tanggal_mengangsur_pertama?new Date(tanggal_mengangsur_pertama):null,
            tanggal_mengangsur_terakhir:tanggal_mengangsur_terakhir?new Date(tanggal_mengangsur_terakhir):null,
            biaya_provisi_sebesar:biaya_provisi_sebesar,
            biaya_materai_sebesar:biaya_materai_sebesar,
            biaya_asuransi_jiwa_sebesar:biaya_asuransi_jiwa_sebesar,
            biaya_administrasi_sebesar:biaya_administrasi_sebesar,
            biaya_notaris_sebesar:biaya_notaris_sebesar,
            total_biaya:total_biaya,
            nama_barang:nama_barang,
            tanggal_surat_penyerahan_jaminan:tanggal_surat_penyerahan_jaminan?new Date(tanggal_surat_penyerahan_jaminan):null,
            tanggal_surat_fasilitas_kredit:tanggal_surat_fasilitas_kredit?new Date(tanggal_surat_fasilitas_kredit):null,
            tanggal_surat_pernyataan:tanggal_surat_pernyataan?new Date(tanggal_surat_pernyataan):null,
            tanggal_surat_pemotongan_gaji:tanggal_surat_pemotongan_gaji?new Date(tanggal_surat_pemotongan_gaji):null,
            submitted_at:new Date()
            }
        })
        if (!newKAR) {
            throw new Error("Create KAR failed");
        }
        return newKAR
    }

    async update(id, {
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
        status,
        submitted_at,
    }) {
        const updatedKAR = await db.KAR.update({
            where: {
                id: parseInt(id)
            },
            data: {
                nama:nama,
                jabatan:jabatan,
                nama_debitur:nama_debitur,
                alamat_usaha_debitur:alamat_usaha_debitur,
                alamat_rumah_debitur:alamat_rumah_debitur,
                tanggal_surat_perintah_jalan:tanggal_surat_perintah_jalan?new Date(tanggal_surat_perintah_jalan):null,
                tanggal_surat_persetujuan_kredit:tanggal_surat_persetujuan_kredit?new Date(tanggal_surat_persetujuan_kredit):null,
                nomor_surat:nomor_surat,
                nominal:nominal,
                suku_bunga:suku_bunga,
                jangka_waktu:jangka_waktu,
                biaya_provisi:biaya_provisi,
                biaya_administrasi:biaya_administrasi,
                detail_jaminan:detail_jaminan,
                pekerjaan_debitur:pekerjaan_debitur,
                tanggal_surat_kuasa_debet:tanggal_surat_kuasa_debet?new Date(tanggal_surat_kuasa_debet):null,
                tempat_lahir_debitur:tempat_lahir_debitur,
                tanggal_lahir_debitur:tanggal_lahir_debitur?new Date(tanggal_lahir_debitur):null,
                no_ktp_debitur:no_ktp_debitur,
                tanggal_surat_kuasa_kendaraan:tanggal_surat_kuasa_kendaraan?new Date(tanggal_surat_kuasa_kendaraan):null,
                hari:hari,
                tanggal_surat_perjanjian_kredit:tanggal_surat_perjanjian_kredit?new Date(tanggal_surat_perjanjian_kredit):null,
                hubungan_debitur_penjamin:hubungan_debitur_penjamin,
                nama_penjamin:nama_penjamin,
                tempat_lahir_penjamin:tempat_lahir_penjamin,
                tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
                no_ktp_penjamin:no_ktp_penjamin,
                utang_atas_kredit_sebesar:utang_atas_kredit_sebesar,
                tenggat_mengangsur_tiap_bulan:tenggat_mengangsur_tiap_bulan,
                nilai_mengangsur:nilai_mengangsur,
                tanggal_mengangsur_pertama:tanggal_mengangsur_pertama?new Date(tanggal_mengangsur_pertama):null,
                tanggal_mengangsur_terakhir:tanggal_mengangsur_terakhir?new Date(tanggal_mengangsur_terakhir):null,
                biaya_provisi_sebesar:biaya_provisi_sebesar,
                biaya_materai_sebesar:biaya_materai_sebesar,
                biaya_asuransi_jiwa_sebesar:biaya_asuransi_jiwa_sebesar,
                biaya_administrasi_sebesar:biaya_administrasi_sebesar,
                biaya_notaris_sebesar:biaya_notaris_sebesar,
                total_biaya:total_biaya,
                nama_barang:nama_barang,
                tanggal_surat_penyerahan_jaminan:tanggal_surat_penyerahan_jaminan?new Date(tanggal_surat_penyerahan_jaminan):null,
                tanggal_surat_fasilitas_kredit:tanggal_surat_fasilitas_kredit?new Date(tanggal_surat_fasilitas_kredit):null,
                tanggal_surat_pernyataan:tanggal_surat_pernyataan?new Date(tanggal_surat_pernyataan):null,
                tanggal_surat_pemotongan_gaji:tanggal_surat_pemotongan_gaji?new Date(tanggal_surat_pemotongan_gaji):null,
                status:status,
                updated_at: new Date(),
                submitted_at
            }
        });

        return updatedKAR;
    }
}

export default new KARService();