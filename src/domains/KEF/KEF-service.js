import db from "../../config/db.js";
class KEFService {
    async getAll(){
        const datas = await db.KEF.findMany({
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
        const data = await db.KEF.findUnique({
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
        alamat_rumah_debitur,
        no_ktp_debitur,
        telah_mendapat_persetujuan,
        nama_penjamin,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        no_ktp_penjamin,
        bertempat_tinggal_dengan,
        tanggal_surat_permohonan_kredit,
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
        jenis_kelamin_debitur,
        detail_jaminan,
        no_hp_debitur,
        submitted_at,
        userID,
    }){
        const newKEF = await db.KEF.create({
            data:{
            nomor_surat:nomor_surat,
            tanggal_surat_persetujuan_kredit:tanggal_surat_persetujuan_kredit?new Date(tanggal_surat_persetujuan_kredit):null,
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
            tanggal_surat_permohonan_kredit:tanggal_surat_permohonan_kredit?new Date(tanggal_surat_permohonan_kredit):null,
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
            jenis_kelamin_debitur:jenis_kelamin_debitur,
            detail_jaminan:detail_jaminan,
            no_hp_debitur:no_hp_debitur,
            submitted_at:new Date(),
            userID:userID
            }
        })
        if (!newKEF) {
            throw new Error("Create KEF failed");
        }
        return newKEF
    }

    async update(id, {
        nomor_surat,
        tanggal_surat_persetujuan_kredit,
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
        tanggal_surat_permohonan_kredit,
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
        jenis_kelamin_debitur,
        detail_jaminan,
        no_hp_debitur,
        status,
        submitted_at,
        userID,
    }) {
        const updatedKEF = await db.KEF.update({
            where: {
                id: id
            },
            data: {
                nomor_surat:nomor_surat,
                tanggal_surat_persetujuan_kredit:tanggal_surat_persetujuan_kredit?new Date(tanggal_surat_persetujuan_kredit):null,
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
                tanggal_surat_permohonan_kredit:tanggal_surat_permohonan_kredit?new Date(tanggal_surat_permohonan_kredit):null,
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
                jenis_kelamin_debitur:jenis_kelamin_debitur,
                detail_jaminan:detail_jaminan,
                no_hp_debitur:no_hp_debitur,
                status:status,
                updated_at: new Date(),
                submitted_at,
                userID:userID,
            }
        });

        return updatedKEF;
    }

    async deleteById(id) {
        const data = await db.KEF.delete({
            where: {
                id: id
            }
        });
        return data;
    }
}

export default new KEFService();