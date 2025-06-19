import db from "../../config/db.js";
class KRSService {
    async getAll(){
        const datas = await db.KRS.findMany({
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
        const data = await db.KRS.findUnique({
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
        tanggal_surat_persetujuan_kredit,
        nomor_surat,
        tujuan_penggunaan,
        plafond,
        jangka_waktu,
        suku_bunga,
        biaya_provisi,
        biaya_administrasi,
        detail_jaminan,
        pekerjaan_debitur,
        no_ktp_debitur,
        tempat_lahir_debitur,
        tanggal_lahir_debitur,
        telah_persetujuan_dari,
        nama_penjamin,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        no_ktp_penjamin,
        bertempat_tinggal_sama_dengan,
        debitur_pemilik_rekening,
        melunasi_hutang_sebesar,
        jangka_waktu_angsuran,
        tanggal_mengangsur_terakhir,
        tanggal_mengangsur_paling_lambat,
        tanggal_mengangsur_pertama,
        nominal_angsuran,
        biaya_provisi_sebesar,
        biaya_administrasi_sebesar,
        waktu_asuransi_jiwa,
        biaya_asuransi_jiwa,
        biaya_materai_sebesar,
        biaya_jumlah,
        submitted_at,
        userID
    }){
        const newKRS = await db.KRS.create({
            data:{
            nama:nama,
            jabatan:jabatan,
            nama_debitur:nama_debitur,
            alamat_usaha_debitur:alamat_usaha_debitur,
            alamat_rumah_debitur:alamat_rumah_debitur,
            tanggal_surat_permohonan_kredit:tanggal_surat_permohonan_kredit?new Date(tanggal_surat_permohonan_kredit):null,
            tanggal_surat_persetujuan_kredit:tanggal_surat_persetujuan_kredit?new Date(tanggal_surat_persetujuan_kredit):null,
            nomor_surat:nomor_surat,
            tujuan_penggunaan:tujuan_penggunaan,
            plafond:plafond,
            jangka_waktu:jangka_waktu,
            suku_bunga:suku_bunga,
            biaya_provisi:biaya_provisi,
            biaya_administrasi:biaya_administrasi,
            detail_jaminan:detail_jaminan,
            pekerjaan_debitur:pekerjaan_debitur,
            no_ktp_debitur:no_ktp_debitur,
            tempat_lahir_debitur:tempat_lahir_debitur,
            tanggal_lahir_debitur:tanggal_lahir_debitur?new Date(tanggal_lahir_debitur):null,
            telah_persetujuan_dari:telah_persetujuan_dari,
            nama_penjamin:nama_penjamin,
            tempat_lahir_penjamin:tempat_lahir_penjamin,
            tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
            no_ktp_penjamin:no_ktp_penjamin,
            bertempat_tinggal_sama_dengan:bertempat_tinggal_sama_dengan,
            debitur_pemilik_rekening:debitur_pemilik_rekening,
            melunasi_hutang_sebesar:melunasi_hutang_sebesar,
            jangka_waktu_angsuran:jangka_waktu_angsuran,
            tanggal_mengangsur_terakhir:tanggal_mengangsur_terakhir?new Date(tanggal_mengangsur_terakhir):null,
            tanggal_mengangsur_paling_lambat:tanggal_mengangsur_paling_lambat,
            tanggal_mengangsur_pertama:tanggal_mengangsur_pertama?new Date(tanggal_mengangsur_pertama):null,
            nominal_angsuran:nominal_angsuran,
            biaya_provisi_sebesar:biaya_provisi_sebesar,
            biaya_administrasi_sebesar:biaya_administrasi_sebesar,
            waktu_asuransi_jiwa:waktu_asuransi_jiwa,
            biaya_asuransi_jiwa:biaya_asuransi_jiwa,
            biaya_materai_sebesar:biaya_materai_sebesar,
            biaya_jumlah:biaya_jumlah,
            submitted_at:new Date(),
            userID:userID,
            }
        })
        if (!newKRS) {
            throw new Error("Create KRS failed");
        }
        return newKRS
    }

    async update(id, {
        nama,
        jabatan,
        nama_debitur,
        alamat_usaha_debitur,
        alamat_rumah_debitur,
        tanggal_surat_permohonan_kredit,
        tanggal_surat_persetujuan_kredit,
        nomor_surat,
        tujuan_penggunaan,
        plafond,
        jangka_waktu,
        suku_bunga,
        biaya_provisi,
        biaya_administrasi,
        detail_jaminan,
        pekerjaan_debitur,
        no_ktp_debitur,
        tempat_lahir_debitur,
        tanggal_lahir_debitur,
        telah_persetujuan_dari,
        nama_penjamin,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        no_ktp_penjamin,
        bertempat_tinggal_sama_dengan,
        debitur_pemilik_rekening,
        melunasi_hutang_sebesar,
        jangka_waktu_angsuran,
        tanggal_mengangsur_terakhir,
        tanggal_mengangsur_paling_lambat,
        tanggal_mengangsur_pertama,
        nominal_angsuran,
        biaya_provisi_sebesar,
        biaya_administrasi_sebesar,
        waktu_asuransi_jiwa,
        biaya_asuransi_jiwa,
        biaya_materai_sebesar,
        biaya_jumlah,
        status,
        submitted_at,
        userID,
    }) {
        const updatedKRS = await db.KRS.update({
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
                tanggal_surat_persetujuan_kredit:tanggal_surat_persetujuan_kredit?new Date(tanggal_surat_persetujuan_kredit):null,
                nomor_surat:nomor_surat,
                tujuan_penggunaan:tujuan_penggunaan,
                plafond:plafond,
                jangka_waktu:jangka_waktu,
                suku_bunga:suku_bunga,
                biaya_provisi:biaya_provisi,
                biaya_administrasi:biaya_administrasi,
                detail_jaminan:detail_jaminan,
                pekerjaan_debitur:pekerjaan_debitur,
                no_ktp_debitur:no_ktp_debitur,
                tempat_lahir_debitur:tempat_lahir_debitur,
                tanggal_lahir_debitur:tanggal_lahir_debitur?new Date(tanggal_lahir_debitur):null,
                telah_persetujuan_dari:telah_persetujuan_dari,
                nama_penjamin:nama_penjamin,
                tempat_lahir_penjamin:tempat_lahir_penjamin,
                tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
                no_ktp_penjamin:no_ktp_penjamin,
                bertempat_tinggal_sama_dengan:bertempat_tinggal_sama_dengan,
                debitur_pemilik_rekening:debitur_pemilik_rekening,
                melunasi_hutang_sebesar:melunasi_hutang_sebesar,
                jangka_waktu_angsuran:jangka_waktu_angsuran,
                tanggal_mengangsur_terakhir:tanggal_mengangsur_terakhir?new Date(tanggal_mengangsur_terakhir):null,
                tanggal_mengangsur_paling_lambat:tanggal_mengangsur_paling_lambat,
                tanggal_mengangsur_pertama:tanggal_mengangsur_pertama?new Date(tanggal_mengangsur_pertama):null,
                nominal_angsuran:nominal_angsuran,
                biaya_provisi_sebesar:biaya_provisi_sebesar,
                biaya_administrasi_sebesar:biaya_administrasi_sebesar,
                waktu_asuransi_jiwa:waktu_asuransi_jiwa,
                biaya_asuransi_jiwa:biaya_asuransi_jiwa,
                biaya_materai_sebesar:biaya_materai_sebesar,
                biaya_jumlah:biaya_jumlah,
                status:status,
                updated_at: new Date(),
                submitted_at,
                userID:userID,
            }
        });

        return updatedKRS;
    }

    async deleteById(id) {
        const data = await db.KRS.delete({
            where: {
                id: id
            }
        });
        return data;
    }
}

export default new KRSService();