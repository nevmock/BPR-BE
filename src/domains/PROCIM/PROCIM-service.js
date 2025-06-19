import db from "../../config/db.js";
class PROCIMService {
    async getAll(){
        const datas = await db.PROCIM.findMany({
            include:{
                User:{
                    select:{
                        id:true,
                        username:true,
                        role:true,
                        created_at:true,
                        updated_at:true
                    }
                }
            }
        })
        return datas
    }

    async getById(id) {
        const data = await db.PROCIM.findUnique({
            where: {
                id: id
            },
            include:{
                User:{
                    select:{
                        id:true,
                        username:true,
                        role:true,
                        created_at:true,
                        updated_at:true
                    }
                }
            }
        });
        return data;
    }

    async create({
        nomor_surat,
        tanggal_surat_persetujuan_kredit,
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
        nomor_rekening_pinjaman,
        nama_penjamin,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        alamat_penjamin,
        no_ktp_penjamin,
        barang_elektronik,
        barang_furniture,
        barang_jaminan_lainnya,
        submitted_at,
        userID
    }){
        const newPROCIM = await db.PROCIM.create({
            data:{
            nomor_surat:nomor_surat,
            tanggal_surat_persetujuan_kredit:tanggal_surat_persetujuan_kredit?new Date(tanggal_surat_persetujuan_kredit):null,
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
            nomor_rekening_pinjaman:nomor_rekening_pinjaman,
            nama_penjamin:nama_penjamin,
            tempat_lahir_penjamin:tempat_lahir_penjamin,
            tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
            alamat_penjamin:alamat_penjamin,
            no_ktp_penjamin:no_ktp_penjamin,
            barang_elektronik:barang_elektronik,
            barang_furniture:barang_furniture,
            barang_jaminan_lainnya:barang_jaminan_lainnya,
            submitted_at:new Date(),
            userID:userID
            }
        })
        if (!newPROCIM) {
            throw new Error("Create PROCIM failed");
        }
        return newPROCIM
    }

    async update(id, {
        nomor_surat,
        tanggal_surat_persetujuan_kredit,
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
        nomor_rekening_pinjaman,
        nama_penjamin,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        alamat_penjamin,
        no_ktp_penjamin,
        barang_elektronik,
        barang_furniture,
        barang_jaminan_lainnya,
        status,
        submitted_at,
        userID
    }) {
        const updatedPROCIM = await db.PROCIM.update({
            where: {
                id: id
            },
            data: {
            nomor_surat:nomor_surat,
            tanggal_surat_persetujuan_kredit:tanggal_surat_persetujuan_kredit?new Date(tanggal_surat_persetujuan_kredit):null,
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
            nomor_rekening_pinjaman:nomor_rekening_pinjaman,
            nama_penjamin:nama_penjamin,
            tempat_lahir_penjamin:tempat_lahir_penjamin,
            tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
            alamat_penjamin:alamat_penjamin,
            no_ktp_penjamin:no_ktp_penjamin,
            barang_elektronik:barang_elektronik,
            barang_furniture:barang_furniture,
            barang_jaminan_lainnya:barang_jaminan_lainnya,
            status:status,
            updated_at: new Date(),
            submitted_at,
            userID:userID
            }
        });

        return updatedPROCIM;
    }

    async deleteById(id) {
        const data = await db.PROCIM.delete({
            where: {
                id: id
            }
        });
        return data;
    }
}

export default new PROCIMService();