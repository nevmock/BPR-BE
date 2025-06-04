import db from "../../config/db.js";
class PINEKService {
    async getAll(){
        const datas = await db.PINEK.findMany()
        return datas
    }
    async getById(id) {
        const data = await db.PINEK.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        return data;
    }
    async create({
        nomor_surat,
        hari,
        tanggal_surat_perjanjian_kredit,
        nama_debitur,
        pekerjaan_debitur,
        tempat_lahir_debitur,
        tanggal_lahir_debitur,
        tempat_tinggal_debitur,
        mendapat_persetujuan,
        nama_penjamin,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        tempat_tinggal_penjamin,
        tanggal_pengajuan_kredit,
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
        tanggal_surat_kuasa_debet,
        tanggal_surat_pemotongan_gaji,
        tanggal_surat_dokumen_agunan,
        tanggal_surat_pernyataan,
        submitted_at,
    }){
        const newPINEK = await db.PINEK.create({
            data:{
                nomor_surat:nomor_surat,
                hari:hari,
                tanggal_surat_perjanjian_kredit:tanggal_surat_perjanjian_kredit?new Date(tanggal_surat_perjanjian_kredit):null,
                nama_debitur:nama_debitur,
                pekerjaan_debitur:pekerjaan_debitur,
                tempat_lahir_debitur:tempat_lahir_debitur,
                tanggal_lahir_debitur:tanggal_lahir_debitur?new Date(tanggal_lahir_debitur):null,
                tempat_tinggal_debitur:tempat_tinggal_debitur,
                mendapat_persetujuan:mendapat_persetujuan,
                nama_penjamin:nama_penjamin,
                tempat_lahir_penjamin:tempat_lahir_penjamin,
                tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
                tempat_tinggal_penjamin:tempat_tinggal_penjamin,
                tanggal_pengajuan_kredit:tanggal_pengajuan_kredit?new Date(tanggal_pengajuan_kredit):null,
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
                tanggal_surat_kuasa_debet:tanggal_surat_kuasa_debet?new Date(tanggal_surat_kuasa_debet):null,
                tanggal_surat_pemotongan_gaji:tanggal_surat_pemotongan_gaji?new Date(tanggal_surat_pemotongan_gaji):null,
                tanggal_surat_dokumen_agunan:tanggal_surat_dokumen_agunan?new Date(tanggal_surat_dokumen_agunan):null,
                tanggal_surat_pernyataan:tanggal_surat_pernyataan?new Date(tanggal_surat_pernyataan):null,
                submitted_at:new Date()
            }
        })
        if (!newPINEK) {
            throw new Error("Create PINEK failed");
        }
        return newPINEK
    }
    async update(id, {
        nomor_surat,
        hari,
        tanggal_surat_perjanjian_kredit,
        nama_debitur,
        pekerjaan_debitur,
        tempat_lahir_debitur,
        tanggal_lahir_debitur,
        tempat_tinggal_debitur,
        mendapat_persetujuan,
        nama_penjamin,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        tempat_tinggal_penjamin,
        tanggal_pengajuan_kredit,
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
        tanggal_surat_kuasa_debet,
        tanggal_surat_pemotongan_gaji,
        tanggal_surat_dokumen_agunan,
        tanggal_surat_pernyataan,
        status,
        submitted_at,
    }) {
        const updatedKSSM = await db.PINEK.update({
            where: {
                id: parseInt(id)
            },
            data: {
                nomor_surat:nomor_surat,
                hari:hari,
                tanggal_surat_perjanjian_kredit:tanggal_surat_perjanjian_kredit?new Date(tanggal_surat_perjanjian_kredit):null,
                nama_debitur:nama_debitur,
                pekerjaan_debitur:pekerjaan_debitur,
                tempat_lahir_debitur:tempat_lahir_debitur,
                tanggal_lahir_debitur:tanggal_lahir_debitur?new Date(tanggal_lahir_debitur):null,
                tempat_tinggal_debitur:tempat_tinggal_debitur,
                mendapat_persetujuan:mendapat_persetujuan,
                nama_penjamin:nama_penjamin,
                tempat_lahir_penjamin:tempat_lahir_penjamin,
                tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
                tempat_tinggal_penjamin:tempat_tinggal_penjamin,
                tanggal_pengajuan_kredit:tanggal_pengajuan_kredit?new Date(tanggal_pengajuan_kredit):null,
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
                tanggal_surat_kuasa_debet:tanggal_surat_kuasa_debet?new Date(tanggal_surat_kuasa_debet):null,
                tanggal_surat_pemotongan_gaji:tanggal_surat_pemotongan_gaji?new Date(tanggal_surat_pemotongan_gaji):null,
                tanggal_surat_dokumen_agunan:tanggal_surat_dokumen_agunan?new Date(tanggal_surat_dokumen_agunan):null,
                tanggal_surat_pernyataan:tanggal_surat_pernyataan?new Date(tanggal_surat_pernyataan):null,
                status:status,
                updated_at: new Date(),
                submitted_at
            }
        });

        return updatedPINEK;
    }
}

export default new PINEKService();