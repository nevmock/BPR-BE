import db from "../../config/db.js";
class KSMService {
    async getAll(page, limit){
        let datas;
        if (page && limit){
            datas = await db.KSM.findMany({
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
            datas = await db.KSM.findMany({
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
        const data = await db.KSM.findUnique({
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
        alamat_usaha_debitur,
        alamat_rumah_debitur,
        tanggal_surat_permohonan_kredit,
        tanggal_surat_perjanjian_kredit,
        nomor_surat,
        nominal,
        tujuan_penggunaan,
        suku_bunga,
        provisi,
        jangka_waktu,
        detail_jaminan,
        pekerjaan_debitur,
        tempat_lahir_debitur,
        tanggal_lahir_debitur,
        no_ktp_debitur,
        mendapat_persetujuan_dari,
        nama_penjamin,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        tempat_tinggal_sama_dengan,
        no_ktp_penjamin,
        seluruh_hutang_sebesar,
        tanggal_mengangsur_paling_lambat,
        biaya_angsuran,
        tanggal_mengangsur_pertama,
        tanggal_mengangsur_terakhir,
        biaya_provisi,
        biaya_materai,
        biaya_asuransi,
        biaya_asuransi_tlo,
        biaya_administrasi,
        biaya_notaris,
        total_biaya,
        nama_barang,
        jenis_kelamin_debitur,
        harga_jaminan_saat_ini,
        submitted_at,
        userID
    }){
        const newKSM = await db.KSM.create({
            data:{
                nama:nama,
                jabatan:jabatan,
                nama_debitur:nama_debitur,
                alamat_usaha_debitur:alamat_usaha_debitur,
                alamat_rumah_debitur:alamat_rumah_debitur,
                tanggal_surat_permohonan_kredit:tanggal_surat_permohonan_kredit?new Date(tanggal_surat_permohonan_kredit):null,
                tanggal_surat_perjanjian_kredit:tanggal_surat_perjanjian_kredit?new Date(tanggal_surat_perjanjian_kredit):null,
                nomor_surat:nomor_surat,
                nominal:nominal,
                tujuan_penggunaan:tujuan_penggunaan,
                suku_bunga:suku_bunga,
                provisi:provisi,
                jangka_waktu:jangka_waktu,
                detail_jaminan:detail_jaminan,
                pekerjaan_debitur:pekerjaan_debitur,
                tempat_lahir_debitur:tempat_lahir_debitur,
                tanggal_lahir_debitur:tanggal_lahir_debitur?new Date(tanggal_lahir_debitur):null,
                no_ktp_debitur:no_ktp_debitur,
                mendapat_persetujuan_dari:mendapat_persetujuan_dari,
                nama_penjamin:nama_penjamin,
                tempat_lahir_penjamin:tempat_lahir_penjamin,
                tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
                tempat_tinggal_sama_dengan:tempat_tinggal_sama_dengan,
                no_ktp_penjamin:no_ktp_penjamin,
                seluruh_hutang_sebesar:seluruh_hutang_sebesar,
                tanggal_mengangsur_paling_lambat:tanggal_mengangsur_paling_lambat,
                biaya_angsuran:biaya_angsuran,
                tanggal_mengangsur_pertama:tanggal_mengangsur_pertama?new Date(tanggal_mengangsur_pertama):null,
                tanggal_mengangsur_terakhir:tanggal_mengangsur_terakhir?new Date(tanggal_mengangsur_terakhir):null,
                biaya_provisi:biaya_provisi,
                biaya_materai:biaya_materai,
                biaya_asuransi:biaya_asuransi,
                biaya_asuransi_tlo:biaya_asuransi_tlo,
                biaya_administrasi:biaya_administrasi,
                biaya_notaris:biaya_notaris,
                total_biaya:total_biaya,
                nama_barang:nama_barang,
                jenis_kelamin_debitur:jenis_kelamin_debitur,
                harga_jaminan_saat_ini:harga_jaminan_saat_ini,
                submitted_at:new Date(),
                userID:userID
            }
        })
        if (!newKSM) {
            throw new Error("Create KSM failed");
        }
        return newKSM
    }

    async update(id, {
        nama,
        jabatan,
        nama_debitur,
        alamat_usaha_debitur,
        alamat_rumah_debitur,
        tanggal_surat_permohonan_kredit,
        tanggal_surat_perjanjian_kredit,
        nomor_surat,
        nominal,
        tujuan_penggunaan,
        suku_bunga,
        provisi,
        jangka_waktu,
        detail_jaminan,
        pekerjaan_debitur,
        tempat_lahir_debitur,
        tanggal_lahir_debitur,
        no_ktp_debitur,
        mendapat_persetujuan_dari,
        nama_penjamin,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        tempat_tinggal_sama_dengan,
        no_ktp_penjamin,
        seluruh_hutang_sebesar,
        tanggal_mengangsur_paling_lambat,
        biaya_angsuran,
        tanggal_mengangsur_pertama,
        tanggal_mengangsur_terakhir,
        biaya_provisi,
        biaya_materai,
        biaya_asuransi,
        biaya_asuransi_tlo,
        biaya_administrasi,
        biaya_notaris,
        total_biaya,
        nama_barang,
        jenis_kelamin_debitur,
        harga_jaminan_saat_ini,
        status,
        submitted_at,
        userID,
    }) {
        const updatedKSM = await db.KSM.update({
            where: {
                id: id
            },
            data: {
                nama:nama,
                jabatan:jabatan,
                nama_debitur:nama_debitur,
                alamat_usaha_debitur:alamat_usaha_debitur,
                alamat_rumah_debitur:alamat_rumah_debitur,
                tanggal_surat_permohonan_kredit:tanggal_surat_permohonan_kredit?new Date(tanggal_surat_permohonan_kredit):null,
                tanggal_surat_perjanjian_kredit:tanggal_surat_perjanjian_kredit?new Date(tanggal_surat_perjanjian_kredit):null,
                nomor_surat:nomor_surat,
                nominal:nominal,
                tujuan_penggunaan:tujuan_penggunaan,
                suku_bunga:suku_bunga,
                provisi:provisi,
                jangka_waktu:jangka_waktu,
                detail_jaminan:detail_jaminan,
                pekerjaan_debitur:pekerjaan_debitur,
                tempat_lahir_debitur:tempat_lahir_debitur,
                tanggal_lahir_debitur:tanggal_lahir_debitur?new Date(tanggal_lahir_debitur):null,
                no_ktp_debitur:no_ktp_debitur,
                mendapat_persetujuan_dari:mendapat_persetujuan_dari,
                nama_penjamin:nama_penjamin,
                tempat_lahir_penjamin:tempat_lahir_penjamin,
                tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
                tempat_tinggal_sama_dengan:tempat_tinggal_sama_dengan,
                no_ktp_penjamin:no_ktp_penjamin,
                seluruh_hutang_sebesar:seluruh_hutang_sebesar,
                tanggal_mengangsur_paling_lambat:tanggal_mengangsur_paling_lambat,
                biaya_angsuran:biaya_angsuran,
                tanggal_mengangsur_pertama:tanggal_mengangsur_pertama?new Date(tanggal_mengangsur_pertama):null,
                tanggal_mengangsur_terakhir:tanggal_mengangsur_terakhir?new Date(tanggal_mengangsur_terakhir):null,
                biaya_provisi:biaya_provisi,
                biaya_materai:biaya_materai,
                biaya_asuransi:biaya_asuransi,
                biaya_asuransi_tlo:biaya_asuransi_tlo,
                biaya_administrasi:biaya_administrasi,
                biaya_notaris:biaya_notaris,
                total_biaya:total_biaya,
                nama_barang:nama_barang,
                jenis_kelamin_debitur:jenis_kelamin_debitur,
                harga_jaminan_saat_ini:harga_jaminan_saat_ini,
                status:status,
                updated_at: new Date(),
                submitted_at,
                userID:userID
            }
        });

        return updatedKSM;
    }

    async deleteById(id) {
        const data = await db.KSM.delete({
            where: {
                id: id
            }
        });
        return data;
    }
}

export default new KSMService();