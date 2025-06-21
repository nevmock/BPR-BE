import { createdResponse, successResponse } from "../../utils/response.js";
import PINEKService from "./PINEK-service.js"
import path from 'path';
import fs from 'fs';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { exec } from "child_process";

class PINEKController {
    async get(req, res) {
        const datas = await PINEKService.getAll();
        return successResponse(res, datas)
    }

    async getById(req, res) {
        const { id } = req.params;
        const data = await PINEKService.getById(id);
        
        if (!data) {
            return res.status(404).json({ message: "PINEK not found" });
        }
        
        return successResponse(res, data);
    }

    async post(req, res) {
        const {
        nomor_surat,
        tanggal_surat_persetujuan_kredit,
        nama_debitur,
        pekerjaan_debitur,
        tempat_lahir_debitur,
        tanggal_lahir_debitur,
        tempat_tinggal_debitur,
        no_ktp_debitur,
        mendapat_persetujuan,
        nama_penjamin,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        no_ktp_penjamin,
        tempat_tinggal_penjamin,
        tanggal_permohonan_kredit,
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
        is_submitted,
        } = req.body;

        const userID = req.app.locals.user

        const newPINEK = await PINEKService.create({
        nomor_surat,
        tanggal_surat_persetujuan_kredit,
        nama_debitur,
        pekerjaan_debitur,
        tempat_lahir_debitur,
        tanggal_lahir_debitur,
        tempat_tinggal_debitur,
        no_ktp_debitur,
        mendapat_persetujuan,
        nama_penjamin,
        tempat_lahir_penjamin,
        tanggal_lahir_penjamin,
        no_ktp_penjamin,
        tempat_tinggal_penjamin,
        tanggal_permohonan_kredit,
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
        is_submitted,
        userID
        });

        if (!newPINEK) {
            throw Error("Failed to create PINEK");
        }

        return createdResponse(res, newPINEK);
    }

    async generatePDF(req, res) {
      try {
        const { id } = req.params;
        const dbData = await PINEKService.getById(id);

        if (!dbData) {
          return res.status(404).json({ message: "PINEK not found" });
        }

        const tanggal = new Date(dbData.tanggal_surat_persetujuan_kredit);
        const tanggal1 = new Date(dbData.tanggal_lahir_debitur);
        const tanggal2 = new Date(dbData.tanggal_lahir_penjamin);
        const tanggal3 = new Date(dbData.tanggal_permohonan_kredit);
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
          nomor_surat: dbData.nomor_surat,
            tanggal_surat_persetujuan_kredit: formattedTanggal,
            nama_debitur: dbData.nama_debitur,
            pekerjaan_debitur: dbData.pekerjaan_debitur,
            tempat_lahir_debitur: dbData.tempat_lahir_debitur,
            tanggal_lahir_debitur: formattedTanggal1,
            tempat_tinggal_debitur: dbData.tempat_tinggal_debitur,
            no_ktp_debitur: dbData.no_ktp_debitur,
            mendapat_persetujuan: dbData.mendapat_persetujuan,
            nama_penjamin: dbData.nama_penjamin,
            tempat_lahir_penjamin: dbData.tempat_lahir_penjamin,
            tanggal_lahir_penjamin: formattedTanggal2,
            no_ktp_penjamin: dbData.no_ktp_penjamin,
            tempat_tinggal_penjamin: dbData.tempat_tinggal_penjamin,
            tanggal_permohonan_kredit: formattedTanggal3,
            debitur_menerima_pinjaman: dbData.debitur_menerima_pinjaman,
            dikenakan_bunga: dbData.dikenakan_bunga,
            total_seluruh_hutang: dbData.total_seluruh_hutang,
            jangka_waktu_hutang: dbData.jangka_waktu_hutang,
            mengangsur_paling_lambat: dbData.mengangsur_paling_lambat,
            pemotongan_gaji: dbData.pemotongan_gaji,
            tanggal_mengangsur_pertama: formattedTanggal4,
            tanggal_mengangsur_terakhir: formattedTanggal5,
            biaya: dbData.biaya,
            total_biaya: dbData.total_biaya,
        };

        const templatePath = path.resolve("src/templates/", "PINEK.docx");

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

        const outputDir = path.resolve("../../../output");
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir);
        }

        const timestamp = Date.now();
        const docxFilename = `PINEK_${id}_${timestamp}.docx`;
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

    async put(req, res) {
        const { id } = req.params;
        let payload = req.body;

        const userID = req.app.locals.user
        payload.userID = userID
        const updatedPINEK = await PINEKService.update(id, payload);

        if (!updatedPINEK) {
            return res.status(404).json({ message: "PINEK not found" });
        }

        return successResponse(res, updatedPINEK);
    }

    async deleteById(req, res) {
        const { id } = req.params;
        const data = await PINEKService.deleteById(id);
        
        if (!data) {
            return res.status(404).json({ message: "PINEK not found" });
        }
        
        return successResponse(res, data);
    }
}

export default new PINEKController();