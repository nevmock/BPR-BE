import db from "../../config/db.js";


class KSSService {
    async getAll(){
        const datas = await db.KSS.findMany({
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
        const data = await db.KSS.findUnique({
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
        plaford,
        jangka_waktu,
        suku_bunga,
        biaya_provisi,
        biaya_administrasi,
        detail_jaminan,
        pekerjaan_debitur,
        nama_penjamin,
        alamat_penjamin,
        no_ktp_penjamin,
        no_ktp_debitur,
        persetujuan_dari,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        tinggal_sama_dengan,
        jumlah_bank_menyerahkan_uang,
        bunga_pinjaman,
        tujuan_penggunaan_kredit,
        total_seluruh_pinjaman,
        tanggal_angsuran_dimulai,
        tanggal_angsuran_terakhir,
        angsuran_tiap_bulan,
        nominal_provisi,
        nominal_administrasi,
        nama_asuransi,
        jangka_asuransi,
        biaya_asuransi,
        biaya_materai,
        biaya_notaris,
        total_biaya,
        nama_shm,
        submitted_at,
        userID
    }){
        const newKSS = await db.KSS.create({
            data:{
            nama:nama,
            jabatan:jabatan,
            nama_debitur:nama_debitur,
            alamat_usaha_debitur:alamat_usaha_debitur,
            alamat_rumah_debitur:alamat_rumah_debitur,
            tanggal_surat_permohonan_kredit:tanggal_surat_permohonan_kredit?new Date(tanggal_surat_permohonan_kredit):null,
            tanggal_surat_persetujuan_kredit:tanggal_surat_persetujuan_kredit?new Date(tanggal_surat_persetujuan_kredit):null,
            nomor_surat:nomor_surat,
            plaford:plaford,
            jangka_waktu:jangka_waktu,
            suku_bunga:suku_bunga,
            biaya_provisi:biaya_provisi,
            biaya_administrasi:biaya_administrasi,
            detail_jaminan:detail_jaminan,
            pekerjaan_debitur:pekerjaan_debitur,
            nama_penjamin:nama_penjamin,
            alamat_penjamin:alamat_penjamin,
            no_ktp_penjamin:no_ktp_penjamin,
            no_ktp_debitur:no_ktp_debitur,
            persetujuan_dari:persetujuan_dari,
            tempat_lahir_penjamin:tempat_lahir_penjamin,
            tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
            tinggal_sama_dengan:tinggal_sama_dengan,
            jumlah_bank_menyerahkan_uang:jumlah_bank_menyerahkan_uang,
            bunga_pinjaman:bunga_pinjaman,
            tujuan_penggunaan_kredit:tujuan_penggunaan_kredit,
            total_seluruh_pinjaman:total_seluruh_pinjaman,
            tanggal_angsuran_dimulai:tanggal_angsuran_dimulai?new Date(tanggal_angsuran_dimulai):null,
            tanggal_angsuran_terakhir:tanggal_angsuran_terakhir?new Date(tanggal_angsuran_terakhir):null,
            angsuran_tiap_bulan:angsuran_tiap_bulan,
            nominal_provisi:nominal_provisi,
            nominal_administrasi:nominal_administrasi,
            nama_asuransi:nama_asuransi,
            jangka_asuransi:jangka_asuransi,
            biaya_asuransi:biaya_asuransi,
            biaya_materai:biaya_materai,
            biaya_notaris:biaya_notaris,
            total_biaya:total_biaya,
            nama_shm:nama_shm,
            submitted_at:new Date(),
            userID:userID
            }
        })
        if (!newKSS) {
            throw new Error("Create KSS failed");
        }
        return newKSS
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
        plaford,
        jangka_waktu,
        suku_bunga,
        biaya_provisi,
        biaya_administrasi,
        detail_jaminan,
        pekerjaan_debitur,
        nama_penjamin,
        alamat_penjamin,
        no_ktp_penjamin,
        no_ktp_debitur,
        persetujuan_dari,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        tinggal_sama_dengan,
        jumlah_bank_menyerahkan_uang,
        bunga_pinjaman,
        tujuan_penggunaan_kredit,
        total_seluruh_pinjaman,
        tanggal_angsuran_dimulai,
        tanggal_angsuran_terakhir,
        angsuran_tiap_bulan,
        nominal_provisi,
        nominal_administrasi,
        nama_asuransi,
        jangka_asuransi,
        biaya_asuransi,
        biaya_materai,
        biaya_notaris,
        total_biaya,
        nama_shm,
        status,
        submitted_at,
        userID,
    }) {
        const updatedKSS = await db.KSS.update({
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
            plaford:plaford,
            jangka_waktu:jangka_waktu,
            suku_bunga:suku_bunga,
            biaya_provisi:biaya_provisi,
            biaya_administrasi:biaya_administrasi,
            detail_jaminan:detail_jaminan,
            pekerjaan_debitur:pekerjaan_debitur,
            nama_penjamin:nama_penjamin,
            alamat_penjamin:alamat_penjamin,
            no_ktp_penjamin:no_ktp_penjamin,
            no_ktp_debitur:no_ktp_debitur,
            persetujuan_dari:persetujuan_dari,
            tempat_lahir_penjamin:tempat_lahir_penjamin,
            tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
            tinggal_sama_dengan:tinggal_sama_dengan,
            jumlah_bank_menyerahkan_uang:jumlah_bank_menyerahkan_uang,
            bunga_pinjaman:bunga_pinjaman,
            tujuan_penggunaan_kredit:tujuan_penggunaan_kredit,
            total_seluruh_pinjaman:total_seluruh_pinjaman,
            tanggal_angsuran_dimulai:tanggal_angsuran_dimulai?new Date(tanggal_angsuran_dimulai):null,
            tanggal_angsuran_terakhir:tanggal_angsuran_terakhir?new Date(tanggal_angsuran_terakhir):null,
            angsuran_tiap_bulan:angsuran_tiap_bulan,
            nominal_provisi:nominal_provisi,
            nominal_administrasi:nominal_administrasi,
            nama_asuransi:nama_asuransi,
            jangka_asuransi:jangka_asuransi,
            biaya_asuransi:biaya_asuransi,
            biaya_materai:biaya_materai,
            biaya_notaris:biaya_notaris,
            total_biaya:total_biaya,
            nama_shm:nama_shm,
            status:status,
            updated_at: new Date(),
            submitted_at,
            userID:userID,
            }
        });

        return updatedKSS;
    }

    async deleteById(id) {
        const data = await db.KSS.delete({
            where: {
                id: id
            }
        });
        return data;
    }
}

export default new KSSService();