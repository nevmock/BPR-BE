import { createdResponse, successResponse } from "../../utils/response.js";
import KSSMService from "./KSSM-service.js";
import tryCatch from "../../utils/tryCatcher.js";
import express from 'express';
import path from 'path';
import ejs from 'ejs';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

class KSSMController {
    async get(req, res) {
        const datas = await KSSMService.getAll()
        return successResponse(res, datas)
    }

    async getById(req, res) {
        const { id } = req.params;
        const data = await KSSMService.getById(id);

        if (!data) {
            return res.status(404).json({ message: "KSSM not found" });
        }
        
        return successResponse(res, data);
    }

    async post(req, res) {
        const {nama,
            jabatan, 
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_permohonan_kredit,
            tanggal_surat_keputusan_kredit,
            nomor_surat,
            nominal,
            tujuan_penggunaan,
            suku_bunga,
            jangka_waktu,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            no_ktp_debitur,
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
            is_submitted,
        } = req.body;

        const userID = req.app.locals.user

        const newKSSM = await KSSMService.create({nama,
            jabatan, 
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_permohonan_kredit,
            tanggal_surat_keputusan_kredit,
            nomor_surat,
            nominal,
            tujuan_penggunaan,
            suku_bunga,
            jangka_waktu,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            no_ktp_debitur,
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
            is_submitted,
            userID
        });
        
        
        if (!newKSSM) {
            throw Error("Failed to create KSSM");
        }

        return createdResponse(res, newKSSM);
    }

    async generatePDF(req, res) {
      // try {
      //   const { nama, 
      //       jabatan,
      //       nama_debitur,
      //       alamat_usaha_debitur,
      //       alamat_rumah_debitur,
      //       tanggal_surat_permohonan_kredit,
      //       tanggal_surat_keputusan_kredit,
      //       nomor_surat,
      //       nominal,
      //       tujuan_penggunaan,
      //       suku_bunga,
      //       jangka_waktu,
      //       biaya_provisi,
      //       biaya_administrasi,
      //       detail_jaminan,
      //    } = req.body;

      //   const __filename = fileURLToPath(import.meta.url);
      //   const __dirname = dirname(__filename);

      //   const html = await ejs.renderFile(
      //     path.join(__dirname, '../../templates/KSSM.ejs'),
      //     {
      //         nama:nama,
      //         jabatan:jabatan,
      //         nama_debitur:nama_debitur,
      //         alamat_usaha_debitur:alamat_usaha_debitur,
      //         alamat_rumah_debitur:alamat_rumah_debitur,
      //         tanggal_surat_permohonan_kredit:tanggal_surat_permohonan_kredit,
      //         tanggal_surat_keputusan_kredit:tanggal_surat_keputusan_kredit,
      //         nomor_surat:nomor_surat,
      //         nominal:nominal,
      //         tujuan_penggunaan:tujuan_penggunaan,
      //         suku_bunga:suku_bunga,
      //         jangka_waktu:jangka_waktu,
      //         biaya_provisi:biaya_provisi,
      //         biaya_administrasi:biaya_administrasi,
      //         detail_jaminan:detail_jaminan,
      //     }
      //   );

      //   const browser = await puppeteer.launch({
      //     args: ['--no-sandbox', '--disable-setuid-sandbox']
      //   });

      //   const page = await browser.newPage();
      //   await page.setContent(html, { waitUntil: 'domcontentloaded' });

      //   const pdfBuffer = await page.pdf({
      //     format: 'A4',
      //     printBackground: true
      //   });

      //   await browser.close();

      //   const filePath = path.join('C:', 'Users', 'LEGION', 'Downloads', 'test.pdf');
      //   fs.writeFileSync(filePath, pdfBuffer);

      //   res.set({
      //     'Content-Type': 'application/pdf',
      //     'Content-Disposition': 'attachment; filename="surat_kredit.pdf"',
      //     'Content-Length': pdfBuffer.length,
      //     'Cache-Control': 'no-cache'
      //   });

      //   res.send(pdfBuffer);

      // } catch (err) {
      //   console.error('[PDF ERROR]', err);
      //   res.status(500).json({ message: 'Failed to generate PDF', error: err.message });
      // }
    }


    async put(req, res) {
        const { id } = req.params;
        let payload = req.body;

        const userID = req.app.locals.user
        payload.userID = userID
        const updatedKSSM = await KSSMService.update(id, payload);
        
        if (!updatedKSSM) {
            return res.status(404).json({ message: "KSSM not found" });
        }

        return successResponse(res, updatedKSSM);
    }

    async deleteById(req, res) {
        const { id } = req.params;
        const data = await KSSMService.deleteById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KSSM not found" });
        }
        
        return successResponse(res, data);
    }

}

export default new KSSMController();