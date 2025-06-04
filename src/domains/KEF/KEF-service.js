import db from "../../config/db.js";
class KEFService {
    async getAll(){
        const datas = await db.KEF.findMany()
        return datas
    }

    async create({
        nomor_surat,
        hari,
        tanggal_surat_perjanjian_kredit,
        nama_debitur,
        tempat_lahir_debitur,
        tanggal_lahir_debitur,
        alamat_rumah_debitur,
        no_ktp_debitur,
        telah_mendapat_persetujuan,
        nama_penjamin,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        no_ktp_penjamin,
        bertempat_tinggal_dengan,
        nama_barang,
        nama_toko,
        alamat_toko,
        harga_barang,
        bunga_pinjaman,
        total_pinjaman,
        jangka_waktu,
        tanggal_angsuran_berakhir,
        tenggat_mengangsur_pada,
        tanggal_angsuran_pertama,
        nilai_mengangsur,
        biaya_provisi_sebesar,
        biaya_administrasi_sebesar,
        biaya_materai_sebesar,
        biaya_fidusia_sebesar,
        total_biaya,
        pekerjaan_debitur,
        tanggal_surat_kuasa_debet,
        nik_debitur,
        jenis_kelamin_debitur,
        detail_jaminan,
        harga_jaminan,
        tanggal_surat_kuasa,
        no_hp_debitur,
        hari_pembuatan_surat,
        tanggal_surat_perjanjian_sewabeli,
        total_harga_keseluruhan_barang
    }){
        const newKEF = await db.KEF.create({
            data:{
            nomor_surat:nomor_surat,
            hari:hari,
            tanggal_surat_perjanjian_kredit:new Date(tanggal_surat_perjanjian_kredit).toISOString(),
            nama_debitur:nama_debitur,
            tempat_lahir_debitur:tempat_lahir_debitur,
            tanggal_lahir_debitur:new Date(tanggal_lahir_debitur).toISOString(),
            alamat_rumah_debitur:alamat_rumah_debitur,
            no_ktp_debitur:no_ktp_debitur,
            telah_mendapat_persetujuan:telah_mendapat_persetujuan,
            nama_penjamin:nama_penjamin,
            tempat_lahir_penjamin:tempat_lahir_penjamin,
            tanggal_lahir_penjamin:new Date(tanggal_lahir_penjamin).toISOString(),
            no_ktp_penjamin:no_ktp_penjamin,
            bertempat_tinggal_dengan:bertempat_tinggal_dengan,
            nama_barang:nama_barang,
            nama_toko:nama_toko,
            alamat_toko:alamat_toko,
            harga_barang:harga_barang,
            bunga_pinjaman:bunga_pinjaman,
            total_pinjaman:total_pinjaman,
            jangka_waktu:jangka_waktu,
            tanggal_angsuran_berakhir:new Date(tanggal_angsuran_berakhir).toISOString(),
            tenggat_mengangsur_pada:tenggat_mengangsur_pada,
            tanggal_angsuran_pertama:new Date(tanggal_angsuran_pertama).toISOString(),
            nilai_mengangsur:nilai_mengangsur,
            biaya_provisi_sebesar:biaya_provisi_sebesar,
            biaya_administrasi_sebesar:biaya_administrasi_sebesar,
            biaya_materai_sebesar:biaya_materai_sebesar,
            biaya_fidusia_sebesar:biaya_fidusia_sebesar,
            total_biaya:total_biaya,
            pekerjaan_debitur:pekerjaan_debitur,
            tanggal_surat_kuasa_debet:new Date(tanggal_surat_kuasa_debet).toISOString(),
            nik_debitur:nik_debitur,
            jenis_kelamin_debitur:jenis_kelamin_debitur,
            detail_jaminan:detail_jaminan,
            harga_jaminan:harga_jaminan,
            tanggal_surat_kuasa:new Date(tanggal_surat_kuasa).toISOString(),
            no_hp_debitur:no_hp_debitur,
            hari_pembuatan_surat:hari_pembuatan_surat,
            tanggal_surat_perjanjian_sewabeli:new Date(tanggal_surat_perjanjian_sewabeli).toISOString(),
            total_harga_keseluruhan_barang:total_harga_keseluruhan_barang
            }
        })
        if (!newKEF) {
            throw new Error("Create KEF failed");
        }
        return newKEF
    }
}

export default new KEFService();