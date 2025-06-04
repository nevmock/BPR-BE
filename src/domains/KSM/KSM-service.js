import db from "../../config/db.js";
class KSMService {
    async getAll(){
        const datas = await db.KSM.findMany()
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

    async create({
        nama,
        jabatan,
        nama_debitur,
        alamat_usaha_debitur,
        alamat_rumah_debitur,
        tanggal_surat_perintah_jalan,
        tanggal_surat_pemberian_fasilitas_kredit,
        nomor_surat,
        nominal,
        tujuan_penggunaan,
        suku_bunga,
        provisi,
        jangka_waktu,
        detail_jaminan,
        pekerjaan_debitur,
        tanggal_surat_kuasa_debet,
        tempat_lahir_debitur,
        tanggal_lahir_debitur,
        no_ktp_debitur,
        tanggal_surat_kuasa_kendaraan,
        hari,
        tanggal_surat_perjanjian_kredit,
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
        tanggal_surat_pengikatan_jaminan,
        nama_barang,
        tanggal_surat_penyerahan_jaminan,
        tanggal_surat_fasilitas_kredit,
        tanggal_surat_pernyataan,
        nik_debitur,
        jenis_kelamin_debitur,
        harga_jaminan_saat_ini,
        tanggal_surat_kuasa,
        tanggal_pencairan,
        tanggal_surat_pernyataan_2
    }){
        const newKSM = await db.KSM.create({
            data:{
                nama:nama,
                jabatan:jabatan,
                nama_debitur:nama_debitur,
                alamat_usaha_debitur:alamat_usaha_debitur,
                alamat_rumah_debitur:alamat_rumah_debitur,
                tanggal_surat_perintah_jalan:new Date(tanggal_surat_perintah_jalan).toISOString(),
                tanggal_surat_pemberian_fasilitas_kredit:new Date(tanggal_surat_pemberian_fasilitas_kredit).toISOString(),
                nomor_surat:nomor_surat,
                nominal:nominal,
                tujuan_penggunaan:tujuan_penggunaan,
                suku_bunga:suku_bunga,
                provisi:provisi,
                jangka_waktu:jangka_waktu,
                detail_jaminan:detail_jaminan,
                pekerjaan_debitur:pekerjaan_debitur,
                tanggal_surat_kuasa_debet:new Date(tanggal_surat_kuasa_debet).toISOString(),
                tempat_lahir_debitur:tempat_lahir_debitur,
                tanggal_lahir_debitur:new Date(tanggal_lahir_debitur).toISOString(),
                no_ktp_debitur:no_ktp_debitur,
                tanggal_surat_kuasa_kendaraan:new Date(tanggal_surat_kuasa_kendaraan).toISOString(),
                hari:hari,
                tanggal_surat_perjanjian_kredit:new Date(tanggal_surat_perjanjian_kredit).toISOString(),
                mendapat_persetujuan_dari:mendapat_persetujuan_dari,
                nama_penjamin:nama_penjamin,
                tempat_lahir_penjamin:tempat_lahir_penjamin,
                tanggal_lahir_penjamin:new Date(tanggal_lahir_penjamin).toISOString(),
                tempat_tinggal_sama_dengan:tempat_tinggal_sama_dengan,
                no_ktp_penjamin:no_ktp_penjamin,
                seluruh_hutang_sebesar:seluruh_hutang_sebesar,
                tanggal_mengangsur_paling_lambat:tanggal_mengangsur_paling_lambat,
                biaya_angsuran:biaya_angsuran,
                tanggal_mengangsur_pertama:new Date(tanggal_mengangsur_pertama).toISOString(),
                tanggal_mengangsur_terakhir:new Date(tanggal_mengangsur_terakhir).toISOString(),
                biaya_provisi:biaya_provisi,
                biaya_materai:biaya_materai,
                biaya_asuransi:biaya_asuransi,
                biaya_asuransi_tlo:biaya_asuransi_tlo,
                biaya_administrasi:biaya_administrasi,
                biaya_notaris:biaya_notaris,
                total_biaya:total_biaya,
                tanggal_surat_pengikatan_jaminan:new Date(tanggal_surat_pengikatan_jaminan).toISOString(),
                nama_barang:nama_barang,
                tanggal_surat_penyerahan_jaminan:new Date(tanggal_surat_penyerahan_jaminan).toISOString(),
                tanggal_surat_fasilitas_kredit:new Date(tanggal_surat_fasilitas_kredit).toISOString(),
                tanggal_surat_pernyataan:new Date(tanggal_surat_pernyataan).toISOString(),
                nik_debitur:nik_debitur,
                jenis_kelamin_debitur:jenis_kelamin_debitur,
                harga_jaminan_saat_ini:harga_jaminan_saat_ini,
                tanggal_surat_kuasa:new Date(tanggal_surat_kuasa).toISOString(),
                tanggal_pencairan:new Date(tanggal_pencairan).toISOString(),
                tanggal_surat_pernyataan_2:new Date(tanggal_surat_pernyataan_2).toISOString()
            }
        })
        if (!newKSM) {
            throw new Error("Create KSM failed");
        }
        return newKSM
    }
}

export default new KSMService();