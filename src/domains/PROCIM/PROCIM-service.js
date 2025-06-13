import db from "../../config/db.js";
class PROCIMService {
    async getAll(){
        const datas = await db.PROCIM.findMany()
        return datas
    }

    async getById(id) {
        const data = await db.PROCIM.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        return data;
    }

    async create({
        nomor_perjanjian_kredit,
        hari,
        tanggal_surat_perjanjian_kredit,
        nama_debitur,
        tempat_lahir_debitur,
        tanggal_lahir_debitur,
        alamat_debitur,
        no_ktp_debitur,
        nominal_plafond,
        suku_bunga_pinjaman,
        jangka_waktu_pinjaman,
        angsuran_pinjaman,
        tanggal_angsuran_pertama,
        hari_pembayaran_angsuran,
        tanggal_pencairan,
        nomor_rekening_pinjaman,
        nama_penjamin,
        nomor_surat_pernyataan_jaminan,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        alamat_penjamin,
        no_ktp_penjamin,
        barang_elektronik,
        barang_furniture,
        barang_jaminan_lainnya,
        tanggal_surat_pernyataan_jaminan,
        tanggal_surat_penyerahan_jaminan,
        submitted_at,
    }){
        const newPROCIM = await db.PROCIM.create({
            data:{
            nomor_perjanjian_kredit:nomor_perjanjian_kredit,
            hari:hari,
            tanggal_surat_perjanjian_kredit:tanggal_surat_perjanjian_kredit?new Date(tanggal_surat_perjanjian_kredit):null,
            nama_debitur:nama_debitur,
            tempat_lahir_debitur:tempat_lahir_debitur,
            tanggal_lahir_debitur:tanggal_lahir_debitur?new Date(tanggal_lahir_debitur):null,
            alamat_debitur:alamat_debitur,
            no_ktp_debitur:no_ktp_debitur,
            nominal_plafond:nominal_plafond,
            suku_bunga_pinjaman:suku_bunga_pinjaman,
            jangka_waktu_pinjaman:jangka_waktu_pinjaman,
            angsuran_pinjaman:angsuran_pinjaman,
            tanggal_angsuran_pertama:tanggal_angsuran_pertama?new Date(tanggal_angsuran_pertama):null,
            hari_pembayaran_angsuran:hari_pembayaran_angsuran,
            tanggal_pencairan:tanggal_pencairan?new Date(tanggal_pencairan):null,
            nomor_rekening_pinjaman:nomor_rekening_pinjaman,
            nama_penjamin:nama_penjamin,
            nomor_surat_pernyataan_jaminan:nomor_surat_pernyataan_jaminan,
            tempat_lahir_penjamin:tempat_lahir_penjamin,
            tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
            alamat_penjamin:alamat_penjamin,
            no_ktp_penjamin:no_ktp_penjamin,
            barang_elektronik:barang_elektronik,
            barang_furniture:barang_furniture,
            barang_jaminan_lainnya:barang_jaminan_lainnya,
            tanggal_surat_pernyataan_jaminan:tanggal_surat_pernyataan_jaminan?new Date(tanggal_surat_pernyataan_jaminan):null,
            tanggal_surat_penyerahan_jaminan:tanggal_surat_penyerahan_jaminan?new Date(tanggal_surat_penyerahan_jaminan):null,
            submitted_at:new Date()
            }
        })
        if (!newPROCIM) {
            throw new Error("Create PROCIM failed");
        }
        return newPROCIM
    }

    async update(id, {
        nomor_perjanjian_kredit,
        hari,
        tanggal_surat_perjanjian_kredit,
        nama_debitur,
        tempat_lahir_debitur,
        tanggal_lahir_debitur,
        alamat_debitur,
        no_ktp_debitur,
        nominal_plafond,
        suku_bunga_pinjaman,
        jangka_waktu_pinjaman,
        angsuran_pinjaman,
        tanggal_angsuran_pertama,
        hari_pembayaran_angsuran,
        tanggal_pencairan,
        nomor_rekening_pinjaman,
        nama_penjamin,
        nomor_surat_pernyataan_jaminan,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        alamat_penjamin,
        no_ktp_penjamin,
        barang_elektronik,
        barang_furniture,
        barang_jaminan_lainnya,
        tanggal_surat_pernyataan_jaminan,
        tanggal_surat_penyerahan_jaminan,
        status,
        submitted_at,
    }) {
        const updatedPROCIM = await db.PROCIM.update({
            where: {
                id: parseInt(id)
            },
            data: {
            nomor_perjanjian_kredit:nomor_perjanjian_kredit,
            hari:hari,
            tanggal_surat_perjanjian_kredit:tanggal_surat_perjanjian_kredit?new Date(tanggal_surat_perjanjian_kredit):null,
            nama_debitur:nama_debitur,
            tempat_lahir_debitur:tempat_lahir_debitur,
            tanggal_lahir_debitur:tanggal_lahir_debitur?new Date(tanggal_lahir_debitur):null,
            alamat_debitur:alamat_debitur,
            no_ktp_debitur:no_ktp_debitur,
            nominal_plafond:nominal_plafond,
            suku_bunga_pinjaman:suku_bunga_pinjaman,
            jangka_waktu_pinjaman:jangka_waktu_pinjaman,
            angsuran_pinjaman:angsuran_pinjaman,
            tanggal_angsuran_pertama:tanggal_angsuran_pertama?new Date(tanggal_angsuran_pertama):null,
            hari_pembayaran_angsuran:hari_pembayaran_angsuran,
            tanggal_pencairan:tanggal_pencairan?new Date(tanggal_pencairan):null,
            nomor_rekening_pinjaman:nomor_rekening_pinjaman,
            nama_penjamin:nama_penjamin,
            nomor_surat_pernyataan_jaminan:nomor_surat_pernyataan_jaminan,
            tempat_lahir_penjamin:tempat_lahir_penjamin,
            tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
            alamat_penjamin:alamat_penjamin,
            no_ktp_penjamin:no_ktp_penjamin,
            barang_elektronik:barang_elektronik,
            barang_furniture:barang_furniture,
            barang_jaminan_lainnya:barang_jaminan_lainnya,
            tanggal_surat_pernyataan_jaminan:tanggal_surat_pernyataan_jaminan?new Date(tanggal_surat_pernyataan_jaminan):null,
            tanggal_surat_penyerahan_jaminan:tanggal_surat_penyerahan_jaminan?new Date(tanggal_surat_penyerahan_jaminan):null,
            status:status,
            updated_at: new Date(),
            submitted_at
            }
        });

        return updatedPROCIM;
    }
}

export default new PROCIMService();