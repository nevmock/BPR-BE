import db from "../../config/db.js";
class KEFService {
    async getAll(){
        const datas = await db.KEF.findMany()
        return datas
    }

    async getById(id) {
        const data = await db.KEF.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        return data;
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
        total_harga_keseluruhan_barang,
        submitted_at,
    }){
        const newKEF = await db.KEF.create({
            data:{
            nomor_surat:nomor_surat,
            hari:hari,
            tanggal_surat_perjanjian_kredit:tanggal_surat_perjanjian_kredit?new Date(tanggal_surat_perjanjian_kredit):null,
            nama_debitur:nama_debitur,
            tempat_lahir_debitur:tempat_lahir_debitur,
            tanggal_lahir_debitur:tanggal_lahir_debitur?new Date(tanggal_lahir_debitur):null,
            alamat_rumah_debitur:alamat_rumah_debitur,
            no_ktp_debitur:no_ktp_debitur,
            telah_mendapat_persetujuan:telah_mendapat_persetujuan,
            nama_penjamin:nama_penjamin,
            tempat_lahir_penjamin:tempat_lahir_penjamin,
            tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
            no_ktp_penjamin:no_ktp_penjamin,
            bertempat_tinggal_dengan:bertempat_tinggal_dengan,
            nama_barang:nama_barang,
            nama_toko:nama_toko,
            alamat_toko:alamat_toko,
            harga_barang:harga_barang,
            bunga_pinjaman:bunga_pinjaman,
            total_pinjaman:total_pinjaman,
            jangka_waktu:jangka_waktu,
            tanggal_angsuran_berakhir:tanggal_angsuran_berakhir?new Date(tanggal_angsuran_berakhir):null,
            tenggat_mengangsur_pada:tenggat_mengangsur_pada,
            tanggal_angsuran_pertama:tanggal_angsuran_pertama?new Date(tanggal_angsuran_pertama):null,
            nilai_mengangsur:nilai_mengangsur,
            biaya_provisi_sebesar:biaya_provisi_sebesar,
            biaya_administrasi_sebesar:biaya_administrasi_sebesar,
            biaya_materai_sebesar:biaya_materai_sebesar,
            biaya_fidusia_sebesar:biaya_fidusia_sebesar,
            total_biaya:total_biaya,
            pekerjaan_debitur:pekerjaan_debitur,
            tanggal_surat_kuasa_debet:tanggal_surat_kuasa_debet?new Date(tanggal_surat_kuasa_debet):null,
            nik_debitur:nik_debitur,
            jenis_kelamin_debitur:jenis_kelamin_debitur,
            detail_jaminan:detail_jaminan,
            harga_jaminan:harga_jaminan,
            tanggal_surat_kuasa:tanggal_surat_kuasa?new Date(tanggal_surat_kuasa):null,
            no_hp_debitur:no_hp_debitur,
            hari_pembuatan_surat:hari_pembuatan_surat,
            tanggal_surat_perjanjian_sewabeli:tanggal_surat_perjanjian_sewabeli?new Date(tanggal_surat_perjanjian_sewabeli):null,
            total_harga_keseluruhan_barang:total_harga_keseluruhan_barang,
            submitted_at:new Date()
            }
        })
        if (!newKEF) {
            throw new Error("Create KEF failed");
        }
        return newKEF
    }

    async update(id, {
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
        total_harga_keseluruhan_barang,
        status,
        submitted_at,
    }) {
        const updatedKEF = await db.KEF.update({
            where: {
                id: parseInt(id)
            },
            data: {
                nomor_surat:nomor_surat,
                hari:hari,
                tanggal_surat_perjanjian_kredit:tanggal_surat_perjanjian_kredit?new Date(tanggal_surat_perjanjian_kredit):null,
                nama_debitur:nama_debitur,
                tempat_lahir_debitur:tempat_lahir_debitur,
                tanggal_lahir_debitur:tanggal_lahir_debitur?new Date(tanggal_lahir_debitur):null,
                alamat_rumah_debitur:alamat_rumah_debitur,
                no_ktp_debitur:no_ktp_debitur,
                telah_mendapat_persetujuan:telah_mendapat_persetujuan,
                nama_penjamin:nama_penjamin,
                tempat_lahir_penjamin:tempat_lahir_penjamin,
                tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
                no_ktp_penjamin:no_ktp_penjamin,
                bertempat_tinggal_dengan:bertempat_tinggal_dengan,
                nama_barang:nama_barang,
                nama_toko:nama_toko,
                alamat_toko:alamat_toko,
                harga_barang:harga_barang,
                bunga_pinjaman:bunga_pinjaman,
                total_pinjaman:total_pinjaman,
                jangka_waktu:jangka_waktu,
                tanggal_angsuran_berakhir:tanggal_angsuran_berakhir?new Date(tanggal_angsuran_berakhir):null,
                tenggat_mengangsur_pada:tenggat_mengangsur_pada,
                tanggal_angsuran_pertama:tanggal_angsuran_pertama?new Date(tanggal_angsuran_pertama):null,
                nilai_mengangsur:nilai_mengangsur,
                biaya_provisi_sebesar:biaya_provisi_sebesar,
                biaya_administrasi_sebesar:biaya_administrasi_sebesar,
                biaya_materai_sebesar:biaya_materai_sebesar,
                biaya_fidusia_sebesar:biaya_fidusia_sebesar,
                total_biaya:total_biaya,
                pekerjaan_debitur:pekerjaan_debitur,
                tanggal_surat_kuasa_debet:tanggal_surat_kuasa_debet?new Date(tanggal_surat_kuasa_debet):null,
                nik_debitur:nik_debitur,
                jenis_kelamin_debitur:jenis_kelamin_debitur,
                detail_jaminan:detail_jaminan,
                harga_jaminan:harga_jaminan,
                tanggal_surat_kuasa:tanggal_surat_kuasa?new Date(tanggal_surat_kuasa):null,
                no_hp_debitur:no_hp_debitur,
                hari_pembuatan_surat:hari_pembuatan_surat,
                tanggal_surat_perjanjian_sewabeli:tanggal_surat_perjanjian_sewabeli?new Date(tanggal_surat_perjanjian_sewabeli):null,
                total_harga_keseluruhan_barang:total_harga_keseluruhan_barang,
                status:status,
                updated_at: new Date(),
                submitted_at
            }
        });

        return updatedKEF;
    }
}

export default new KEFService();