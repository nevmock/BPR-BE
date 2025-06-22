import db from "../../config/db.js";

class KMSService {
    async getAll(){
        const datas = await db.KMS.findMany({
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
        const data = await db.KMS.findUnique({
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
        tujuan,
        plafond,
        jangka_waktu,
        suku_bunga,
        pekerjaan_debitur,
        nama_penjamin,
        alamat_penjamin,
        no_ktp_penjamin,
        detail_jaminan,
        no_ktp_debitur,
        telah_persetujuan_dari,
        nama_penjamin_1,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        no_ktp_penjamin_1,
        bertempat_sama_dengan,
        debitur_adalah_pemilik_rekening,
        melunasi_hutang_sebesar,
        tanggal_mengangsur_terakhir,
        tanggal_mengangsur_tiap_bulan,
        tanggal_mengangsur_pertama,
        nominal_angsuran,
        biaya_provisi_sebesar,
        biaya_administrasi_sebesar,
        nama_asuransi_jiwa,
        biaya_asuransi_jiwa_sebesar,
        biaya_materai_sebesar,
        biaya_notaris_sebesar,
        biaya_jumlah,
        submitted_at,
        userID
    }){
        const newKMS = await db.KMS.create({
            data:{
            nama:nama,
            jabatan:jabatan,
            nama_debitur:nama_debitur,
            alamat_usaha_debitur:alamat_usaha_debitur,
            alamat_rumah_debitur:alamat_rumah_debitur,
            tanggal_surat_permohonan_kredit:tanggal_surat_permohonan_kredit?new Date(tanggal_surat_permohonan_kredit):null,
            tanggal_surat_persetujuan_kredit:tanggal_surat_persetujuan_kredit?new Date(tanggal_surat_persetujuan_kredit):null,
            nomor_surat:nomor_surat,
            tujuan:tujuan,
            plafond:plafond,
            jangka_waktu:jangka_waktu,
            suku_bunga:suku_bunga,
            pekerjaan_debitur:pekerjaan_debitur,
            nama_penjamin:nama_penjamin,
            alamat_penjamin:alamat_penjamin,
            no_ktp_penjamin:no_ktp_penjamin,
            detail_jaminan:detail_jaminan,
            no_ktp_debitur:no_ktp_debitur,
            telah_persetujuan_dari:telah_persetujuan_dari,
            nama_penjamin_1:nama_penjamin_1,
            tempat_lahir_penjamin:tempat_lahir_penjamin,
            tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
            no_ktp_penjamin_1:no_ktp_penjamin_1,
            bertempat_sama_dengan:bertempat_sama_dengan,
            debitur_adalah_pemilik_rekening:debitur_adalah_pemilik_rekening,
            melunasi_hutang_sebesar:melunasi_hutang_sebesar,
            tanggal_mengangsur_terakhir:tanggal_mengangsur_terakhir?new Date(tanggal_mengangsur_terakhir):null,
            tanggal_mengangsur_tiap_bulan:tanggal_mengangsur_tiap_bulan,
            tanggal_mengangsur_pertama:tanggal_mengangsur_pertama?new Date(tanggal_mengangsur_pertama):null,
            nominal_angsuran:nominal_angsuran,
            biaya_provisi_sebesar:biaya_provisi_sebesar,
            biaya_administrasi_sebesar:biaya_administrasi_sebesar,
            nama_asuransi_jiwa:nama_asuransi_jiwa,
            biaya_asuransi_jiwa_sebesar:biaya_asuransi_jiwa_sebesar,
            biaya_materai_sebesar:biaya_materai_sebesar,
            biaya_notaris_sebesar:biaya_notaris_sebesar,
            biaya_jumlah:biaya_jumlah,
            submitted_at:new Date(),
            userID:userID,
            }
        })
        if (!newKMS) {
            throw new Error("Create KMS failed");
        }
        return newKMS
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
        tujuan,
        plafond,
        jangka_waktu,
        suku_bunga,
        pekerjaan_debitur,
        nama_penjamin,
        alamat_penjamin,
        no_ktp_penjamin,
        detail_jaminan,
        no_ktp_debitur,
        telah_persetujuan_dari,
        nama_penjamin_1,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        no_ktp_penjamin_1,
        bertempat_sama_dengan,
        debitur_adalah_pemilik_rekening,
        melunasi_hutang_sebesar,
        tanggal_mengangsur_terakhir,
        tanggal_mengangsur_tiap_bulan,
        tanggal_mengangsur_pertama,
        nominal_angsuran,
        biaya_provisi_sebesar,
        biaya_administrasi_sebesar,
        nama_asuransi_jiwa,
        biaya_asuransi_jiwa_sebesar,
        biaya_materai_sebesar,
        biaya_notaris_sebesar,
        biaya_jumlah,
        status,
        submitted_at,
        userID,
    }) {
        const updatedKMS = await db.KMS.update({
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
                tujuan:tujuan,
                plafond:plafond,
                jangka_waktu:jangka_waktu,
                suku_bunga:suku_bunga,
                pekerjaan_debitur:pekerjaan_debitur,
                nama_penjamin:nama_penjamin,
                alamat_penjamin:alamat_penjamin,
                no_ktp_penjamin:no_ktp_penjamin,
                detail_jaminan:detail_jaminan,
                no_ktp_debitur:no_ktp_debitur,
                telah_persetujuan_dari:telah_persetujuan_dari,
                nama_penjamin_1:nama_penjamin_1,
                tempat_lahir_penjamin:tempat_lahir_penjamin,
                tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
                no_ktp_penjamin_1:no_ktp_penjamin_1,
                bertempat_sama_dengan:bertempat_sama_dengan,
                debitur_adalah_pemilik_rekening:debitur_adalah_pemilik_rekening,
                melunasi_hutang_sebesar:melunasi_hutang_sebesar,
                tanggal_mengangsur_terakhir:tanggal_mengangsur_terakhir?new Date(tanggal_mengangsur_terakhir):null,
                tanggal_mengangsur_tiap_bulan:tanggal_mengangsur_tiap_bulan,
                tanggal_mengangsur_pertama:tanggal_mengangsur_pertama?new Date(tanggal_mengangsur_pertama):null,
                nominal_angsuran:nominal_angsuran,
                biaya_provisi_sebesar:biaya_provisi_sebesar,
                biaya_administrasi_sebesar:biaya_administrasi_sebesar,
                nama_asuransi_jiwa:nama_asuransi_jiwa,
                biaya_asuransi_jiwa_sebesar:biaya_asuransi_jiwa_sebesar,
                biaya_materai_sebesar:biaya_materai_sebesar,
                biaya_notaris_sebesar:biaya_notaris_sebesar,
                biaya_jumlah:biaya_jumlah,
                status:status,
                updated_at: new Date(),
                submitted_at,
                userID:userID
            }
        });

        return updatedKMS;
    }

    async deleteById(id) {
        const data = await db.KMS.delete({
            where: {
                id: id
            }
        });
        return data;
    }
}

export default new KMSService();