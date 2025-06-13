import BaseError from "../../base_classes/base-error.js";

import { generateVerifEmail } from "../../utils/bodyEmail.js";
import sendEmail from "../../utils/sendEmail.js";
import db from "../../config/db.js";
import { parseJWT, generateToken } from "../../utils/jwtTokenConfig.js";
import { matchPassword, hashPassword } from "../../utils/passwordConfig.js";

class KSSMService {
    async getAll(){
        const datas = await db.KSSM.findMany()
        return datas
    }

    async getById(id) {
        const data = await db.KSSM.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        return data;
    }

    async create({nama,
            jabatan, 
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_perintah_jalan,
            tanggal_surat_fasilitas_kredit,
            nomor_surat,
            nominal,
            tujuan_penggunaan,
            suku_bunga,
            jangka_waktu,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            tanggal_surat_kuasa_debet,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            no_ktp_debitur,
            tanggal_surat_kuasa_kendaraan,
            hari,
            tanggal_surat_perjanjian_kredit,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            no_ktp_penjamin,
            utang_atas_kredit,
            tenggat_mengangsur,
            nilai_mengangsur,
            tanggal_mengangsur_pertama,
            tanggal_mengangsur_terakhir,
            nominal_provisi,
            nominal_materai,
            nominal_asuransi_jiwa,
            jangka_asuransi_tlo,
            nominal_asuransi_tlo,
            nominal_administrasi,
            nominal_notaris,
            total_biaya,
            nama_barang,
            nik_debitur,
            jenis_kelamin_debitur,
            harga_jaminan,
            submitted_at,
        }){
        const newKSSM = await db.KSSM.create({
            data:{
            nama:nama,
            jabatan:jabatan,
            nama_debitur:nama_debitur,
            alamat_usaha_debitur:alamat_usaha_debitur,
            alamat_rumah_debitur:alamat_rumah_debitur,
            tanggal_surat_perintah_jalan:tanggal_surat_perintah_jalan?new Date(tanggal_surat_perintah_jalan):null,
            tanggal_surat_fasilitas_kredit:tanggal_surat_fasilitas_kredit?new Date(tanggal_surat_fasilitas_kredit):null,
            nomor_surat:nomor_surat,
            nominal:nominal,
            tujuan_penggunaan:tujuan_penggunaan,
            suku_bunga:suku_bunga,
            jangka_waktu:jangka_waktu,
            biaya_provisi:biaya_provisi,
            biaya_administrasi:biaya_administrasi,
            detail_jaminan:detail_jaminan,
            pekerjaan_debitur:pekerjaan_debitur,
            tanggal_surat_kuasa_debet:tanggal_surat_kuasa_debet?new Date(tanggal_surat_kuasa_debet):null,
            tempat_lahir_debitur:tempat_lahir_debitur,
            tanggal_lahir_debitur:tanggal_lahir_debitur?new Date(tanggal_lahir_debitur):null,
            no_ktp_debitur:no_ktp_debitur,
            tanggal_surat_kuasa_kendaraan:tanggal_surat_kuasa_kendaraan?new Date(tanggal_surat_kuasa_kendaraan):null,
            hari:hari,
            tanggal_surat_perjanjian_kredit:tanggal_surat_perjanjian_kredit?new Date(tanggal_surat_perjanjian_kredit):null,
            tempat_lahir_penjamin:tempat_lahir_penjamin,
            tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
            no_ktp_penjamin:no_ktp_penjamin,
            utang_atas_kredit:utang_atas_kredit,
            tenggat_mengangsur:tenggat_mengangsur,
            nilai_mengangsur:nilai_mengangsur,
            tanggal_mengangsur_pertama:tanggal_mengangsur_pertama?new Date(tanggal_mengangsur_pertama):null,
            tanggal_mengangsur_terakhir:tanggal_mengangsur_terakhir?new Date (tanggal_mengangsur_terakhir):null,
            nominal_provisi:nominal_provisi,
            nominal_materai:nominal_materai,
            nominal_asuransi_jiwa:nominal_asuransi_jiwa,
            jangka_asuransi_tlo:jangka_asuransi_tlo,
            nominal_asuransi_tlo:nominal_asuransi_tlo,
            nominal_administrasi:nominal_administrasi,
            nominal_notaris:nominal_notaris,
            total_biaya:total_biaya,
            nama_barang:nama_barang,
            nik_debitur:nik_debitur,
            jenis_kelamin_debitur:jenis_kelamin_debitur,
            harga_jaminan:harga_jaminan,
            submitted_at:new Date()
            }
        })
        if (!newKSSM) {
            throw new Error("Create KSSM failed");
        }
        return newKSSM
    }

    async update(id, {
        jabatan, 
        nama_debitur,
        alamat_usaha_debitur,
        alamat_rumah_debitur,
        tanggal_surat_perintah_jalan,
        tanggal_surat_fasilitas_kredit,
        nomor_surat,
        nominal,
        tujuan_penggunaan,
        suku_bunga,
        jangka_waktu,
        biaya_provisi,
        biaya_administrasi,
        detail_jaminan,
        pekerjaan_debitur,
        tanggal_surat_kuasa_debet,
        tempat_lahir_debitur,
        tanggal_lahir_debitur,
        no_ktp_debitur,
        tanggal_surat_kuasa_kendaraan,
        hari,
        tanggal_surat_perjanjian_kredit,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        no_ktp_penjamin,
        utang_atas_kredit,
        tenggat_mengangsur,
        nilai_mengangsur,
        tanggal_mengangsur_pertama,
        tanggal_mengangsur_terakhir,
        nominal_provisi,
        nominal_materai,
        nominal_asuransi_jiwa,
        jangka_asuransi_tlo,
        nominal_asuransi_tlo,
        nominal_administrasi,
        nominal_notaris,
        total_biaya,
        nama_barang,
        nik_debitur,
        jenis_kelamin_debitur,
        harga_jaminan,
        status,
        submitted_at,
    }) {
        const updatedKSSM = await db.KSSM.update({
            where: {
                id: parseInt(id)
            },
            data: {
                nama:nama,
                jabatan:jabatan,
                nama_debitur:nama_debitur,
                alamat_usaha_debitur:alamat_usaha_debitur,
                alamat_rumah_debitur:alamat_rumah_debitur,
                tanggal_surat_perintah_jalan:tanggal_surat_perintah_jalan?new Date(tanggal_surat_perintah_jalan):null,
                tanggal_surat_fasilitas_kredit:tanggal_surat_fasilitas_kredit?new Date(tanggal_surat_fasilitas_kredit):null,
                nomor_surat:nomor_surat,
                nominal:nominal,
                tujuan_penggunaan:tujuan_penggunaan,
                suku_bunga:suku_bunga,
                jangka_waktu:jangka_waktu,
                biaya_provisi:biaya_provisi,
                biaya_administrasi:biaya_administrasi,
                detail_jaminan:detail_jaminan,
                pekerjaan_debitur:pekerjaan_debitur,
                tanggal_surat_kuasa_debet:tanggal_surat_kuasa_debet?new Date(tanggal_surat_kuasa_debet):null,
                tempat_lahir_debitur:tempat_lahir_debitur,
                tanggal_lahir_debitur:tanggal_lahir_debitur?new Date(tanggal_lahir_debitur):null,
                no_ktp_debitur:no_ktp_debitur,
                tanggal_surat_kuasa_kendaraan:tanggal_surat_kuasa_kendaraan?new Date(tanggal_surat_kuasa_kendaraan):null,
                hari:hari,
                tanggal_surat_perjanjian_kredit:tanggal_surat_perjanjian_kredit?new Date(tanggal_surat_perjanjian_kredit):null,
                tempat_lahir_penjamin:tempat_lahir_penjamin,
                tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
                no_ktp_penjamin:no_ktp_penjamin,
                utang_atas_kredit:utang_atas_kredit,
                tenggat_mengangsur:tenggat_mengangsur,
                nilai_mengangsur:nilai_mengangsur,
                tanggal_mengangsur_pertama:tanggal_mengangsur_pertama?new Date(tanggal_mengangsur_pertama):null,
                tanggal_mengangsur_terakhir:tanggal_mengangsur_terakhir?new Date (tanggal_mengangsur_terakhir):null,
                nominal_provisi:nominal_provisi,
                nominal_materai:nominal_materai,
                nominal_asuransi_jiwa:nominal_asuransi_jiwa,
                jangka_asuransi_tlo:jangka_asuransi_tlo,
                nominal_asuransi_tlo:nominal_asuransi_tlo,
                nominal_administrasi:nominal_administrasi,
                nominal_notaris:nominal_notaris,
                total_biaya:total_biaya,
                nama_barang:nama_barang,
                nik_debitur:nik_debitur,
                jenis_kelamin_debitur:jenis_kelamin_debitur,
                harga_jaminan:harga_jaminan,
                status:status,
                updated_at: new Date(),
                submitted_at
            }
        });
        
        return updatedKSSM;
    }
}

export default new KSSMService();