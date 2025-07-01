import db from "../../config/db.js";
class PINEKService {
    async getAll(page, limit){
        let datas;
        if (page && limit){
            datas = await db.PINEK.findMany({
            take: limit,
            skip: (page - 1) * limit,
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
        } else {
            datas = await db.PINEK.findMany({
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
        }
        return datas
    }
    async getById(id) {
        const data = await db.PINEK.findUnique({
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
        status_debitur,
        nama_SHM,
        pekerjaan_debitur,
        tempat_lahir_debitur,
        tanggal_lahir_debitur,
        tempat_tinggal_debitur,
        no_ktp_debitur,
        mendapat_persetujuan,
        nama_penjamin,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        no_ktp_penjamin,
        tempat_tinggal_penjamin,
        tanggal_permohonan_kredit,
        debitur_menerima_pinjaman,
        dikenakan_bunga,
        total_seluruh_hutang,
        jangka_waktu_hutang,
        mengangsur_paling_lambat,
        pemotongan_gaji,
        tanggal_mengangsur_pertama,
        tanggal_mengangsur_terakhir,
        biaya,
        total_biaya,
        submitted_at,
        userID
    }){
        const newPINEK = await db.PINEK.create({
            data:{
                nomor_surat:nomor_surat,
                tanggal_surat_persetujuan_kredit:tanggal_surat_persetujuan_kredit?new Date(tanggal_surat_persetujuan_kredit):null,
                nama_debitur:nama_debitur,
                status_debitur:status_debitur,
                nama_SHM:nama_SHM,
                pekerjaan_debitur:pekerjaan_debitur,
                tempat_lahir_debitur:tempat_lahir_debitur,
                tanggal_lahir_debitur:tanggal_lahir_debitur?new Date(tanggal_lahir_debitur):null,
                tempat_tinggal_debitur:tempat_tinggal_debitur,
                no_ktp_debitur:no_ktp_debitur,
                mendapat_persetujuan:mendapat_persetujuan,
                nama_penjamin:nama_penjamin,
                tempat_lahir_penjamin:tempat_lahir_penjamin,
                tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
                no_ktp_penjamin:no_ktp_penjamin,
                tempat_tinggal_penjamin:tempat_tinggal_penjamin,
                tanggal_permohonan_kredit:tanggal_permohonan_kredit?new Date(tanggal_permohonan_kredit):null,
                debitur_menerima_pinjaman:debitur_menerima_pinjaman,
                dikenakan_bunga:dikenakan_bunga,
                total_seluruh_hutang:total_seluruh_hutang,
                jangka_waktu_hutang:jangka_waktu_hutang,
                mengangsur_paling_lambat:mengangsur_paling_lambat,
                pemotongan_gaji:pemotongan_gaji,
                tanggal_mengangsur_pertama:tanggal_mengangsur_pertama?new Date(tanggal_mengangsur_pertama):null,
                tanggal_mengangsur_terakhir:tanggal_mengangsur_terakhir?new Date(tanggal_mengangsur_terakhir):null,
                biaya:biaya,
                total_biaya:total_biaya,
                submitted_at:new Date(),
                userID:userID
            }
        })
        if (!newPINEK) {
            throw new Error("Create PINEK failed");
        }
        return newPINEK
    }
    async update(id, {
        nomor_surat,
        tanggal_surat_persetujuan_kredit,
        nama_debitur,
        status_debitur,
        nama_SHM,
        pekerjaan_debitur,
        tempat_lahir_debitur,
        tanggal_lahir_debitur,
        tempat_tinggal_debitur,
        no_ktp_debitur,
        mendapat_persetujuan,
        nama_penjamin,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        no_ktp_penjamin,
        tempat_tinggal_penjamin,
        tanggal_permohonan_kredit,
        debitur_menerima_pinjaman,
        dikenakan_bunga,
        total_seluruh_hutang,
        jangka_waktu_hutang,
        mengangsur_paling_lambat,
        pemotongan_gaji,
        tanggal_mengangsur_pertama,
        tanggal_mengangsur_terakhir,
        biaya,
        total_biaya,
        status,
        submitted_at,
        userID
    }) {
        const updatedPINEK = await db.PINEK.update({
            where: {
                id: id
            },
            data: {
                nomor_surat:nomor_surat,
                tanggal_surat_persetujuan_kredit:tanggal_surat_persetujuan_kredit?new Date(tanggal_surat_persetujuan_kredit):null,
                nama_debitur:nama_debitur,
                status_debitur:status_debitur,
                nama_SHM:nama_SHM,
                pekerjaan_debitur:pekerjaan_debitur,
                tempat_lahir_debitur:tempat_lahir_debitur,
                tanggal_lahir_debitur:tanggal_lahir_debitur?new Date(tanggal_lahir_debitur):null,
                tempat_tinggal_debitur:tempat_tinggal_debitur,
                no_ktp_debitur:no_ktp_debitur,
                mendapat_persetujuan:mendapat_persetujuan,
                nama_penjamin:nama_penjamin,
                tempat_lahir_penjamin:tempat_lahir_penjamin,
                tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
                no_ktp_penjamin:no_ktp_penjamin,
                tempat_tinggal_penjamin:tempat_tinggal_penjamin,
                tanggal_permohonan_kredit:tanggal_permohonan_kredit?new Date(tanggal_permohonan_kredit):null,
                debitur_menerima_pinjaman:debitur_menerima_pinjaman,
                dikenakan_bunga:dikenakan_bunga,
                total_seluruh_hutang:total_seluruh_hutang,
                jangka_waktu_hutang:jangka_waktu_hutang,
                mengangsur_paling_lambat:mengangsur_paling_lambat,
                pemotongan_gaji:pemotongan_gaji,
                tanggal_mengangsur_pertama:tanggal_mengangsur_pertama?new Date(tanggal_mengangsur_pertama):null,
                tanggal_mengangsur_terakhir:tanggal_mengangsur_terakhir?new Date(tanggal_mengangsur_terakhir):null,
                biaya:biaya,
                total_biaya:total_biaya,
                status:status,
                updated_at: new Date(),
                submitted_at,
                userID:userID
            }
        });

        return updatedPINEK;
    }

    async deleteById(id) {
        const data = await db.PINEK.delete({
            where: {
                id: id
            }
        });
        return data;
    }
}

export default new PINEKService();