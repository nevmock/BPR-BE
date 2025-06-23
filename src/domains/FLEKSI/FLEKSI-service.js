import db from "../../config/db.js";
class FLEKSIService {
    async getAll(){
        const datas = await db.FLEKSI.findMany({
            include:{
                User:{
                    select:{
                        id:true,
                        username:true,
                        role:true,
                        created_at:true,
                        updated_at:true
                    }
                },
                barang_elektronik: true,   
                barang_furniture: true 
            }
        })
        return datas
    }

    async getById(id) {
        const data = await db.FLEKSI.findUnique({
          where: {
            id: id
          },
          include: {
            User: {
              select: {
                id: true,
                username: true,
                role: true,
                created_at: true,
                updated_at: true
              }
            },
            barang_elektronik: true,   
            barang_furniture: true     
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
        alamat_debitur,
        no_ktp_debitur,
        besar_pinjaman,
        bunga_pinjaman,
        jangka_waktu_pinjaman,
        angsuran_pinjaman,
        tanggal_angsuran_pertama,
        nomor_rekening_pinjaman,
        tujuan_penggunaan,
        nama_penjamin,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        alamat_penjamin,
        no_ktp_penjamin,
        barang_elektronik,
        barang_furniture,
        barang_jaminan_lainnya,
        nama_penjamin_hubungan,
        submitted_at,
        userID
    }){
        const newFLEKSI = await db.FLEKSI.create({
          data: {
            nomor_surat:nomor_surat,
            tanggal_surat_persetujuan_kredit: tanggal_surat_persetujuan_kredit ? new Date(tanggal_surat_persetujuan_kredit) : null,
            nama_debitur:nama_debitur,
            tempat_lahir_debitur:tempat_lahir_debitur,
            tanggal_lahir_debitur: tanggal_lahir_debitur ? new Date(tanggal_lahir_debitur) : null,
            alamat_debitur:alamat_debitur,
            no_ktp_debitur:no_ktp_debitur,
            besar_pinjaman:besar_pinjaman,
            bunga_pinjaman:bunga_pinjaman,
            jangka_waktu_pinjaman:jangka_waktu_pinjaman,
            angsuran_pinjaman:angsuran_pinjaman,
            tanggal_angsuran_pertama: tanggal_angsuran_pertama ? new Date(tanggal_angsuran_pertama) : null,
            nomor_rekening_pinjaman:nomor_rekening_pinjaman,
            tujuan_penggunaan:tujuan_penggunaan,
            nama_penjamin:nama_penjamin,
            tempat_lahir_penjamin:tempat_lahir_penjamin,
            tanggal_lahir_penjamin: tanggal_lahir_penjamin ? new Date(tanggal_lahir_penjamin) : null,
            alamat_penjamin:alamat_penjamin,
            no_ktp_penjamin:no_ktp_penjamin,
            barang_elektronik: {
              create: barang_elektronik?.map(item => ({
                nama_barang: item.nama_barang,
                tipe: item.tipe,
                harga: item.harga
              }))
            },
            barang_furniture: {
              create: barang_furniture?.map(item => ({
                nama_barang: item.nama_barang,
                tipe: item.tipe,
                harga: item.harga
              }))
            },
            barang_jaminan_lainnya:barang_jaminan_lainnya,
            nama_penjamin_hubungan:nama_penjamin_hubungan,
            submitted_at: new Date(),
            userID
          },
          include: {
            barang_elektronik: true,
            barang_furniture: true
          }
        });

        if (!newFLEKSI) {
            throw new Error("Create FLEKSI failed");
        }
        return newFLEKSI
    }

    async update(id, {
        nomor_surat,
        tanggal_surat_persetujuan_kredit,
        nama_debitur,
        tempat_lahir_debitur,
        tanggal_lahir_debitur,
        alamat_debitur,
        no_ktp_debitur,
        besar_pinjaman,
        bunga_pinjaman,
        jangka_waktu_pinjaman,
        angsuran_pinjaman,
        tanggal_angsuran_pertama,
        nomor_rekening_pinjaman,
        tujuan_penggunaan,
        nama_penjamin,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        alamat_penjamin,
        no_ktp_penjamin,
        barang_elektronik,
        barang_furniture,
        barang_jaminan_lainnya,
        nama_penjamin_hubungan,
        status,
        submitted_at,
        userID,
    }) {
        // First delete related records
          await db.fleksiBarangElektronik.deleteMany({
              where: { fleksi_id: id }
          });

          await db.fleksiBarangFurniture.deleteMany({
              where: { fleksi_id: id }
          });
          const updatedFLEKSI = await db.FLEKSI.update({
              where: {
                  id: id
            },
            data: {
                nomor_surat:nomor_surat,
                tanggal_surat_persetujuan_kredit:tanggal_surat_persetujuan_kredit?new Date(tanggal_surat_persetujuan_kredit):null,
                nama_debitur:nama_debitur,
                tempat_lahir_debitur:tempat_lahir_debitur,
                tanggal_lahir_debitur:tanggal_lahir_debitur?new Date(tanggal_lahir_debitur):null,
                alamat_debitur:alamat_debitur,
                no_ktp_debitur:no_ktp_debitur,
                besar_pinjaman:besar_pinjaman,
                bunga_pinjaman:bunga_pinjaman,
                jangka_waktu_pinjaman:jangka_waktu_pinjaman,
                angsuran_pinjaman:angsuran_pinjaman,
                tanggal_angsuran_pertama:tanggal_angsuran_pertama?new Date(tanggal_angsuran_pertama):null,
                nomor_rekening_pinjaman:nomor_rekening_pinjaman,
                tujuan_penggunaan:tujuan_penggunaan,
                nama_penjamin:nama_penjamin,
                tempat_lahir_penjamin:tempat_lahir_penjamin,
                tanggal_lahir_penjamin:tanggal_lahir_penjamin?new Date(tanggal_lahir_penjamin):null,
                alamat_penjamin:alamat_penjamin,
                no_ktp_penjamin:no_ktp_penjamin,
                barang_elektronik: {
                create: barang_elektronik?.map(item => ({
                    nama_barang: item.nama_barang,
                    tipe: item.tipe,
                    harga: item.harga
                }))
                },
                barang_furniture: {
                create: barang_furniture?.map(item => ({
                    nama_barang: item.nama_barang,
                    tipe: item.tipe,
                    harga: item.harga
                }))
                },
                barang_jaminan_lainnya:barang_jaminan_lainnya,
                nama_penjamin_hubungan:nama_penjamin_hubungan,
                status:status,
                updated_at: new Date(),
                submitted_at,
                userID:userID,
            },
            include: {
            barang_elektronik: true,
            barang_furniture: true
          }
        });

        return updatedFLEKSI;
    }

    async deleteById(id) {
        await db.fleksiBarangElektronik.deleteMany({
            where: { fleksi_id: id },
        });

        await db.fleksiBarangFurniture.deleteMany({
            where: { fleksi_id: id },
        });
        const data = await db.FLEKSI.delete({
            where: {
                id: id
            }
        });
        return data;
    }
}

export default new FLEKSIService();