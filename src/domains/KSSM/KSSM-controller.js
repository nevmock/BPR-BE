import { createdResponse, successResponse } from "../../utils/response.js";
import KSSMService from "./KSSM-service.js";
import tryCatch from "../../utils/tryCatcher.js";
import express from 'express';
import path from 'path';
import ejs from 'ejs';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import fs from 'fs';
import mammoth from 'mammoth';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { renderAsync } from 'docx-preview';
import { JSDOM } from 'jsdom';
import docxConverter from 'docx-pdf';
import { exec } from "child_process";
import { __dirname, __filename } from "../../utils/path.js";

class KSSMController {
    async get(req, res) {
        const {page, limit} = req.query
        const datas = await KSSMService.getAll(page, limit)
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
            persetujuan_dari,
            nama_penjamin,
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
            persetujuan_dari,
            nama_penjamin,
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
      try {
        const { id } = req.params;
        const dbData = await KSSMService.getById(id);

        if (!dbData) {
          return res.status(404).json({ message: "KSSM not found" });
        }

        const tanggal = new Date(dbData.tanggal_surat_permohonan_kredit);
        const tanggal1 = new Date(dbData.tanggal_surat_keputusan_kredit);
        const tanggal2 = new Date(dbData.tanggal_lahir_debitur);
        const tanggal3 = new Date(dbData.tanggal_lahir_penjamin);
        const tanggal4 = new Date(dbData.tanggal_mengangsur_pertama);
        const tanggal5 = new Date(dbData.tanggal_mengangsur_terakhir);
        const bulanIndonesia = [
         "Januari", "Februari", "Maret", "April", "Mei", "Juni",
         "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];
        const formattedTanggal = `${tanggal.getDate()} ${bulanIndonesia[tanggal.getMonth()]} ${tanggal.getFullYear()}`;
        const formattedTanggal1 = `${tanggal1.getDate()} ${bulanIndonesia[tanggal.getMonth()]} ${tanggal.getFullYear()}`;
        const formattedTanggal2 = `${tanggal2.getDate()} ${bulanIndonesia[tanggal.getMonth()]} ${tanggal.getFullYear()}`;
        const formattedTanggal3 = `${tanggal3.getDate()} ${bulanIndonesia[tanggal.getMonth()]} ${tanggal.getFullYear()}`;
        const formattedTanggal4 = `${tanggal4.getDate()} ${bulanIndonesia[tanggal.getMonth()]} ${tanggal.getFullYear()}`;
        const formattedTanggal5 = `${tanggal5.getDate()} ${bulanIndonesia[tanggal.getMonth()]} ${tanggal.getFullYear()}`;

        const data = {
          nama: dbData.nama,
          jabatan: dbData.jabatan,
          nama_debitur: dbData.nama_debitur,
          alamat_usaha_debitur: dbData.alamat_usaha_debitur,
          alamat_rumah_debitur: dbData.alamat_rumah_debitur,
          tanggal_surat_permohonan_kredit: formattedTanggal,
          tanggal_surat_keputusan_kredit: formattedTanggal1,
          nomor_surat: dbData.nomor_surat,
          nominal: dbData.nominal,
          tujuan_penggunaan: dbData.tujuan_penggunaan,
          suku_bunga: dbData.suku_bunga,
          jangka_waktu: dbData.jangka_waktu,
          biaya_provisi: dbData.biaya_provisi,
          biaya_administrasi: dbData.biaya_administrasi,
          detail_jaminan: dbData.detail_jaminan,
          pekerjaan_debitur: dbData.pekerjaan_debitur,
          tempat_lahir_debitur: dbData.tempat_lahir_debitur,
          tanggal_lahir_debitur: formattedTanggal2,
          no_ktp_debitur: dbData.no_ktp_debitur,
          persetujuan_dari: dbData.persetujuan_dari,
          nama_penjamin: dbData.nama_penjamin,
          tempat_lahir_penjamin: dbData.tempat_lahir_penjamin,
          tanggal_lahir_penjamin: formattedTanggal3,
          no_ktp_penjamin: dbData.no_ktp_penjamin,
          utang_atas_kredit: dbData.utang_atas_kredit,
          tenggat_mengangsur: dbData.tenggat_mengangsur,
          nilai_mengangsur: dbData.nilai_mengangsur,
          tanggal_mengangsur_pertama: formattedTanggal4,
          tanggal_mengangsur_terakhir: formattedTanggal5,
          nominal_provisi: dbData.nominal_provisi,
          nominal_materai: dbData.nominal_materai,
          nominal_asuransi_jiwa: dbData.nominal_asuransi_jiwa,
          jangka_asuransi_tlo: dbData.jangka_asuransi_tlo,
          nominal_asuransi_tlo: dbData.nominal_asuransi_tlo,
          nominal_administrasi: dbData.nominal_administrasi,
          nominal_notaris: dbData.nominal_notaris,
          total_biaya: dbData.total_biaya,
          nama_barang: dbData.nama_barang,
          nik_debitur: dbData.nik_debitur,
          jenis_kelamin_debitur: dbData.jenis_kelamin_debitur,
          harga_jaminan: dbData.harga_jaminan,
        };

        const templatePath = path.resolve("src/templates/", "KSSM.docx");

        if (!fs.existsSync(templatePath)) {
          return res.status(404).json({
            error: "Template file tidak ditemukan",
            path: templatePath,
          });
        }

        const content = fs.readFileSync(templatePath, "binary");
        const zip = new PizZip(content);

        const doc = new Docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true,
          delimiters: {
            start: "{{",
            end: "}}",
          },
        });

        doc.setData(data);

        try {
          doc.render();
        } catch (renderError) {
          return res.status(400).json({
            error: "Template rendering failed",
            message: renderError.message,
            details: renderError.properties?.errors || [],
          });
        }

        const buf = doc.getZip().generate({ type: "nodebuffer" });
        
        const outputDir = path.resolve(`output`);
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir);
        }

        const timestamp = Date.now();
        const docxFilename = `KSSM_${id}_${timestamp}.docx`;
        const pdfFilename = docxFilename.replace(".docx", ".pdf");

        const docxPath = path.join(outputDir, docxFilename);
        const pdfPath = path.join(outputDir, pdfFilename);

        fs.writeFileSync(docxPath, buf);

        // Convert DOCX to PDF using LibreOffice
        const convertToPdfWithSoffice = (inputPath, outputPath) => {
          return new Promise((resolve, reject) => {
            const cmd = `soffice --headless --convert-to pdf --outdir "${outputDir}" "${inputPath}"`;
            exec(cmd, (error, stdout, stderr) => {
              if (error) {
                return reject(new Error(`LibreOffice error: ${stderr || stdout}`));
              }

              fs.readFile(outputPath, (err, pdfBuffer) => {
                if (err) {
                  return reject(new Error(`Gagal membaca PDF: ${outputPath}`));
                }
                resolve(pdfBuffer);
              });
            });
          });
        };

        try {
          const pdfBuffer = await convertToPdfWithSoffice(docxPath, pdfPath);

          res.set({
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename="${pdfFilename}"`,
            "Content-Length": pdfBuffer.length,
          });

          res.send(pdfBuffer);

          fs.unlinkSync(docxPath);
          fs.unlinkSync(pdfPath);
        } catch (pdfError) {
          console.error("Gagal konversi ke PDF:", pdfError);
          return res.status(500).json({
            error: "PDF conversion failed",
            message: pdfError.message,
          });
        }
      } catch (error) {
        console.error("Gagal generate PDF:", error);
        res.status(500).json({
          error: "Failed to generate PDF",
          message: error.message,
          timestamp: new Date().toISOString(),
        });
      }
    }

    async generateDOCX(req, res) {
      try {
        const { id } = req.params;
        const dbData = await KSSMService.getById(id);

        if (!dbData) {
          return res.status(404).json({ message: "KSSM not found" });
        }

        const tanggal = new Date(dbData.tanggal_surat_permohonan_kredit);
        const tanggal1 = new Date(dbData.tanggal_surat_keputusan_kredit);
        const tanggal2 = new Date(dbData.tanggal_lahir_debitur);
        const tanggal3 = new Date(dbData.tanggal_lahir_penjamin);
        const tanggal4 = new Date(dbData.tanggal_mengangsur_pertama);
        const tanggal5 = new Date(dbData.tanggal_mengangsur_terakhir);
        const bulanIndonesia = [
         "Januari", "Februari", "Maret", "April", "Mei", "Juni",
         "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];
        const formattedTanggal = `${tanggal.getDate()} ${bulanIndonesia[tanggal.getMonth()]} ${tanggal.getFullYear()}`;
        const formattedTanggal1 = `${tanggal1.getDate()} ${bulanIndonesia[tanggal.getMonth()]} ${tanggal.getFullYear()}`;
        const formattedTanggal2 = `${tanggal2.getDate()} ${bulanIndonesia[tanggal.getMonth()]} ${tanggal.getFullYear()}`;
        const formattedTanggal3 = `${tanggal3.getDate()} ${bulanIndonesia[tanggal.getMonth()]} ${tanggal.getFullYear()}`;
        const formattedTanggal4 = `${tanggal4.getDate()} ${bulanIndonesia[tanggal.getMonth()]} ${tanggal.getFullYear()}`;
        const formattedTanggal5 = `${tanggal5.getDate()} ${bulanIndonesia[tanggal.getMonth()]} ${tanggal.getFullYear()}`;

        const data = {
          nama: dbData.nama,
          jabatan: dbData.jabatan,
          nama_debitur: dbData.nama_debitur,
          alamat_usaha_debitur: dbData.alamat_usaha_debitur,
          alamat_rumah_debitur: dbData.alamat_rumah_debitur,
          tanggal_surat_permohonan_kredit: formattedTanggal,
          tanggal_surat_keputusan_kredit: formattedTanggal1,
          nomor_surat: dbData.nomor_surat,
          nominal: dbData.nominal,
          tujuan_penggunaan: dbData.tujuan_penggunaan,
          suku_bunga: dbData.suku_bunga,
          jangka_waktu: dbData.jangka_waktu,
          biaya_provisi: dbData.biaya_provisi,
          biaya_administrasi: dbData.biaya_administrasi,
          detail_jaminan: dbData.detail_jaminan,
          pekerjaan_debitur: dbData.pekerjaan_debitur,
          tempat_lahir_debitur: dbData.tempat_lahir_debitur,
          tanggal_lahir_debitur: formattedTanggal2,
          no_ktp_debitur: dbData.no_ktp_debitur,
          persetujuan_dari: dbData.persetujuan_dari,
          nama_penjamin: dbData.nama_penjamin,
          tempat_lahir_penjamin: dbData.tempat_lahir_penjamin,
          tanggal_lahir_penjamin: formattedTanggal3,
          no_ktp_penjamin: dbData.no_ktp_penjamin,
          utang_atas_kredit: dbData.utang_atas_kredit,
          tenggat_mengangsur: dbData.tenggat_mengangsur,
          nilai_mengangsur: dbData.nilai_mengangsur,
          tanggal_mengangsur_pertama: formattedTanggal4,
          tanggal_mengangsur_terakhir: formattedTanggal5,
          nominal_provisi: dbData.nominal_provisi,
          nominal_materai: dbData.nominal_materai,
          nominal_asuransi_jiwa: dbData.nominal_asuransi_jiwa,
          jangka_asuransi_tlo: dbData.jangka_asuransi_tlo,
          nominal_asuransi_tlo: dbData.nominal_asuransi_tlo,
          nominal_administrasi: dbData.nominal_administrasi,
          nominal_notaris: dbData.nominal_notaris,
          total_biaya: dbData.total_biaya,
          nama_barang: dbData.nama_barang,
          nik_debitur: dbData.nik_debitur,
          jenis_kelamin_debitur: dbData.jenis_kelamin_debitur,
          harga_jaminan: dbData.harga_jaminan,
        };

        const templatePath = path.resolve("src/templates/", "KSSM.docx");

        if (!fs.existsSync(templatePath)) {
          return res.status(404).json({
            error: "Template file tidak ditemukan",
            path: templatePath,
          });
        }

        const content = fs.readFileSync(templatePath, "binary");
        const zip = new PizZip(content);

        const doc = new Docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true,
          delimiters: {
            start: "{{",
            end: "}}",
          },
        });

        doc.setData(data);

        try {
          doc.render();
        } catch (renderError) {
          return res.status(400).json({
            error: "Template rendering failed",
            message: renderError.message,
            details: renderError.properties?.errors || [],
          });
        }

        const buf = doc.getZip().generate({ type: "nodebuffer" });
        const timestamp = Date.now();
        const docxFilename = `KSSM_${id}_${timestamp}.docx`;

        res.set({
          "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "Content-Disposition": `attachment; filename="${docxFilename}"`,
          "Content-Length": buf.length,
        });

        res.send(buf);

      } catch (err) {
        console.error("Gagal generate DOCX:", err);
        res.status(500).json({ error: "Failed to generate Word document", message: err.message });
      }
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