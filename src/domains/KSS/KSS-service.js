import db from "../../config/db.js";


class KSSService {
    async getAll(){
        const datas = await db.KSS.findMany()
        return datas
    }

    async getById(id) {
        const data = await db.KSS.findUnique({
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
        submitted_at,
    }){
        const newKSS = await db.KSS.create({
            data:{
            nama:nama,
            jabatan:jabatan,
            nama_debitur:nama_debitur,
            alamat_usaha_debitur:alamat_usaha_debitur,
            alamat_rumah_debitur:alamat_rumah_debitur,
            tanggal_surat_perintah_jalan:tanggal_surat_perintah_jalan?new Date(tanggal_surat_perintah_jalan):null,
            tanggal_surat_fasilitas_kredit:tanggal_surat_fasilitas_kredit?new Date(tanggal_surat_fasilitas_kredit):null,
            nomor_surat:nomor_surat,
            plaford:plaford,
            jangka_waktu:jangka_waktu,
            suku_bunga:suku_bunga,
            biaya_provisi:biaya_provisi,
            biaya_administrasi:biaya_administrasi,
            detail_jaminan:detail_jaminan,
            pekerjaan_debitur:pekerjaan_debitur,
            tanggal_surat_kuasa_debet:tanggal_surat_kuasa_debet?new Date(tanggal_surat_kuasa_debet):null,
            nama_penjamin:nama_penjamin,
            alamat_penjamin:alamat_penjamin,
            no_ktp_penjamin:no_ktp_penjamin,
            tanggal_surat_pernyataan:tanggal_surat_pernyataan?new Date(tanggal_surat_pernyataan):null,
            hari:hari,
            tanggal_surat_perjanjian_kredit:tanggal_surat_perjanjian_kredit?new Date(tanggal_surat_perjanjian_kredit):null,
            no_ktp_debitur:no_ktp_debitur,
            persetujuan_dari:persetujuan_dari,
            tempat_lahir_penjamin:tempat_lahir_penjamin,
            tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
            tinggal_sama_dengan:tinggal_sama_dengan,
            jumlah_bank_menyerahkan_uang:jumlah_bank_menyerahkan_uang,
            bunga_pinjaman:bunga_pinjaman,
            tujuan_penggunaan_kredit:tujuan_penggunaan_kredit,
            total_seluruh_pinjaman:total_seluruh_pinjaman,
            tanggal_angsuran_dimulai:tanggal_angsuran_dimulai?new Date(tanggal_angsuran_dimulai):null,
            tanggal_angsuran_terakhir:tanggal_angsuran_terakhir?new Date(tanggal_angsuran_terakhir):null,
            angsuran_tiap_bulan:angsuran_tiap_bulan,
            nominal_provisi:nominal_provisi,
            nominal_administrasi:nominal_administrasi,
            nama_asuransi:nama_asuransi,
            jangka_asuransi:jangka_asuransi,
            biaya_asuransi:biaya_asuransi,
            biaya_materai:biaya_materai,
            biaya_notaris:biaya_notaris,
            total_biaya:total_biaya,
            tanggal_surat_penyerahan_jaminan:tanggal_surat_penyerahan_jaminan?new Date(tanggal_surat_penyerahan_jaminan):null,
            nama_shm:nama_shm,
            tanggal_surat_fasilitas_kredit_1:tanggal_surat_fasilitas_kredit_1?new Date(tanggal_surat_fasilitas_kredit_1):null,
            submitted_at:new Date()
            }
        })
        if (!newKSS) {
            throw new Error("Create KSS failed");
        }
        return newKSS
    }

    async update(id, {
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
        submitted_at,
    }) {
        const updatedKSS = await db.KSS.update({
            where: {
                id: parseInt(id)
            },
            data: {
                nama:nama,
                jabatan:jabatan,
                nama_debitur:nama_debitur,
                alamat_usaha_debitur:alamat_usaha_debitur,
                alamat_rumah_debitur:alamat_rumah_debitur,
                tanggal_surat_perintah_jalan:new Date(tanggal_surat_perintah_jalan),
                tanggal_surat_fasilitas_kredit:new Date(tanggal_surat_fasilitas_kredit),
                nomor_surat:nomor_surat,
                plaford:plaford,
                jangka_waktu:jangka_waktu,
                suku_bunga:suku_bunga,
                biaya_provisi:biaya_provisi,
                biaya_administrasi:biaya_administrasi,
                detail_jaminan:detail_jaminan,
                pekerjaan_debitur:pekerjaan_debitur,
                tanggal_surat_kuasa_debet:new Date(tanggal_surat_kuasa_debet),
                nama_penjamin:nama_penjamin,
                alamat_penjamin:alamat_penjamin,
                no_ktp_penjamin:no_ktp_penjamin,
                tanggal_surat_pernyataan:new Date(tanggal_surat_pernyataan),
                hari:hari,
                tanggal_surat_perjanjian_kredit:new Date(tanggal_surat_perjanjian_kredit),
                no_ktp_debitur:no_ktp_debitur,
                persetujuan_dari:persetujuan_dari,
                tempat_lahir_penjamin:tempat_lahir_penjamin,
                tanggal_lahir_penjamin:new Date(tanggal_lahir_penjamin),
                tinggal_sama_dengan:tinggal_sama_dengan,
                jumlah_bank_menyerahkan_uang:jumlah_bank_menyerahkan_uang,
                bunga_pinjaman:bunga_pinjaman,
                tujuan_penggunaan_kredit:tujuan_penggunaan_kredit,
                total_seluruh_pinjaman:total_seluruh_pinjaman,
                tanggal_angsuran_dimulai:new Date(tanggal_angsuran_dimulai),
                tanggal_angsuran_terakhir:new Date(tanggal_angsuran_terakhir),
                angsuran_tiap_bulan:angsuran_tiap_bulan,
                nominal_provisi:nominal_provisi,
                nominal_administrasi:nominal_administrasi,
                nama_asuransi:nama_asuransi,
                jangka_asuransi:jangka_asuransi,
                biaya_asuransi:biaya_asuransi,
                biaya_materai:biaya_materai,
                biaya_notaris:biaya_notaris,
                total_biaya:total_biaya,
                tanggal_surat_penyerahan_jaminan:new Date(tanggal_surat_penyerahan_jaminan),
                nama_shm:nama_shm,
                tanggal_surat_fasilitas_kredit_1:new Date(tanggal_surat_fasilitas_kredit_1),
                status:status,
                updated_at: new Date(),
                submitted_at
            }
        });

        return updatedKSS;
    }
}

export default new KSSService();