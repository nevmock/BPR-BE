import db from "../../config/db.js";
class KMSMService {
    async getAll(page, limit){
        let datas;
        if (page && limit){
            datas = await db.KMSM.findMany({
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
            datas = await db.KMSM.findMany({
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
        const data = await db.KMSM.findUnique({
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
        nama,
        jabatan,
        nama_debitur,
        status_debitur,
        nama_SHM,
        alamat_usaha_debitur,
        alamat_rumah_debitur,
        tanggal_surat_permohonan_kredit,
        tanggal_surat_persetujuan_kredit,
        nomor_surat,
        nominal,
        tujuan_penggunaan,
        suku_bunga,
        jangka_waktu,
        biaya_provisi,
        biaya_administrasi,
        detail_jaminan,
        pekerjaan_debitur,
        tanggal_lahir_debitur,
        no_ktp_debitur,
        tempat_lahir_debitur,
        hubungan_debitur_penjamin,
        nama_penjamin,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        no_ktp_penjamin,
        utang_atas_kredit,
        tenggat_mengangsur_tanggal,
        nilai_mengangsur,
        tanggal_mengangsur_pertama,
        tanggal_mengangsur_terakhir,
        biaya_provisi_sebesar,
        biaya_materai,
        biaya_asuransi_tlo,
        biaya_administrasi_sebesar,
        biaya_notaris,
        total_biaya,
        nama_barang,
        jenis_kelamin_debitur,
        harga_jaminan,
        submitted_at,
        userID,
    }){
        const newKMSM = await db.KMSM.create({
            data:{
                nama:nama,
                jabatan:jabatan,
                nama_debitur:nama_debitur,
                status_debitur:status_debitur,
                nama_SHM:nama_SHM,
                alamat_usaha_debitur:alamat_usaha_debitur,
                alamat_rumah_debitur:alamat_rumah_debitur,
                tanggal_surat_permohonan_kredit:tanggal_surat_permohonan_kredit?new Date(tanggal_surat_permohonan_kredit):null,
                tanggal_surat_persetujuan_kredit:tanggal_surat_persetujuan_kredit?new Date(tanggal_surat_persetujuan_kredit):null,
                nomor_surat:nomor_surat,
                nominal:nominal,
                tujuan_penggunaan:tujuan_penggunaan,
                suku_bunga:suku_bunga,
                jangka_waktu:jangka_waktu,
                biaya_provisi:biaya_provisi,
                biaya_administrasi:biaya_administrasi,
                detail_jaminan:detail_jaminan,
                pekerjaan_debitur:pekerjaan_debitur,
                tanggal_lahir_debitur:tanggal_lahir_debitur?new Date(tanggal_lahir_debitur):null,
                no_ktp_debitur:no_ktp_debitur,
                tempat_lahir_debitur:tempat_lahir_debitur,
                hubungan_debitur_penjamin:hubungan_debitur_penjamin,
                nama_penjamin:nama_penjamin,
                tempat_lahir_penjamin:tempat_lahir_penjamin,
                tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
                no_ktp_penjamin:no_ktp_penjamin,
                utang_atas_kredit:utang_atas_kredit,
                tenggat_mengangsur_tanggal:tenggat_mengangsur_tanggal,
                nilai_mengangsur:nilai_mengangsur,
                tanggal_mengangsur_pertama:tanggal_mengangsur_pertama?new Date(tanggal_mengangsur_pertama):null,
                tanggal_mengangsur_terakhir:tanggal_mengangsur_terakhir?new Date(tanggal_mengangsur_terakhir):null,
                biaya_provisi_sebesar:biaya_provisi_sebesar,
                biaya_materai:biaya_materai,
                biaya_asuransi_tlo:biaya_asuransi_tlo,
                biaya_administrasi_sebesar:biaya_administrasi_sebesar,
                biaya_notaris:biaya_notaris,
                total_biaya:total_biaya,
                nama_barang:nama_barang,
                jenis_kelamin_debitur:jenis_kelamin_debitur,
                harga_jaminan:harga_jaminan,
                submitted_at:new Date(),
                userID:userID,
            }
        })
        if (!newKMSM) {
            throw new Error("Create KMSM failed");
        }
        return newKMSM
    }

    async update(id, {
        nama,
        jabatan,
        nama_debitur,
        status_debitur,
        nama_SHM,
        alamat_usaha_debitur,
        alamat_rumah_debitur,
        tanggal_surat_permohonan_kredit,
        tanggal_surat_persetujuan_kredit,
        nomor_surat,
        nominal,
        tujuan_penggunaan,
        suku_bunga,
        jangka_waktu,
        biaya_provisi,
        biaya_administrasi,
        detail_jaminan,
        pekerjaan_debitur,
        tanggal_lahir_debitur,
        no_ktp_debitur,
        tempat_lahir_debitur,
        hubungan_debitur_penjamin,
        nama_penjamin,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        no_ktp_penjamin,
        utang_atas_kredit,
        tenggat_mengangsur_tanggal,
        nilai_mengangsur,
        tanggal_mengangsur_pertama,
        tanggal_mengangsur_terakhir,
        biaya_provisi_sebesar,
        biaya_materai,
        biaya_asuransi_tlo,
        biaya_administrasi_sebesar,
        biaya_notaris,
        total_biaya,
        nama_barang,
        jenis_kelamin_debitur,
        harga_jaminan,
        status,
        submitted_at,
        userID,
    }) {
        const updatedKMSM = await db.KMSM.update({
            where: {
                id: id
            },
            data: {
                nama:nama,
                jabatan:jabatan,
                nama_debitur:nama_debitur,
                status_debitur:status_debitur,
                nama_SHM:nama_SHM,
                alamat_usaha_debitur:alamat_usaha_debitur,
                alamat_rumah_debitur:alamat_rumah_debitur,
                tanggal_surat_permohonan_kredit:tanggal_surat_permohonan_kredit?new Date(tanggal_surat_permohonan_kredit):null,
                tanggal_surat_persetujuan_kredit:tanggal_surat_persetujuan_kredit?new Date(tanggal_surat_persetujuan_kredit):null,
                nomor_surat:nomor_surat,
                nominal:nominal,
                tujuan_penggunaan:tujuan_penggunaan,
                suku_bunga:suku_bunga,
                jangka_waktu:jangka_waktu,
                biaya_provisi:biaya_provisi,
                biaya_administrasi:biaya_administrasi,
                detail_jaminan:detail_jaminan,
                pekerjaan_debitur:pekerjaan_debitur,
                tanggal_lahir_debitur:tanggal_lahir_debitur?new Date(tanggal_lahir_debitur):null,
                no_ktp_debitur:no_ktp_debitur,
                tempat_lahir_debitur:tempat_lahir_debitur,
                hubungan_debitur_penjamin:hubungan_debitur_penjamin,
                nama_penjamin:nama_penjamin,
                tempat_lahir_penjamin:tempat_lahir_penjamin,
                tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
                no_ktp_penjamin:no_ktp_penjamin,
                utang_atas_kredit:utang_atas_kredit,
                tenggat_mengangsur_tanggal:tenggat_mengangsur_tanggal,
                nilai_mengangsur:nilai_mengangsur,
                tanggal_mengangsur_pertama:tanggal_mengangsur_pertama?new Date(tanggal_mengangsur_pertama):null,
                tanggal_mengangsur_terakhir:tanggal_mengangsur_terakhir?new Date(tanggal_mengangsur_terakhir):null,
                biaya_provisi_sebesar:biaya_provisi_sebesar,
                biaya_materai:biaya_materai,
                biaya_asuransi_tlo:biaya_asuransi_tlo,
                biaya_administrasi_sebesar:biaya_administrasi_sebesar,
                biaya_notaris:biaya_notaris,
                total_biaya:total_biaya,
                nama_barang:nama_barang,
                jenis_kelamin_debitur:jenis_kelamin_debitur,
                harga_jaminan:harga_jaminan,
                status:status,
                updated_at: new Date(),
                submitted_at,
                userID:userID,
            }
        });

        return updatedKMSM;
    }

    async deleteById(id) {
        const data = await db.KMSM.delete({
            where: {
                id: id
            }
        });
        return data;
    }
}

export default new KMSMService();