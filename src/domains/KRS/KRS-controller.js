import { createdResponse, successResponse } from "../../utils/response.js";
import KRSService from "./KRS-service.js";
import path from 'path';
import fs from 'fs';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { exec } from "child_process";
import { __dirname, __filename } from "../../utils/path.js";

class KRSController {
    async get(req, res) {
        const {page, limit} = req.query
        const datas = await KRSService.getAll(page, limit)
        return successResponse(res, datas)
    }

    async getById(req, res) {
        const { id } = req.params;
        const data = await KRSService.getById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KRS not found" });
        }
        
        return successResponse(res, data);
    }

    async post(req, res) {
        const {
            nama,
            jabatan,
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_permohonan_kredit,
            tanggal_surat_persetujuan_kredit,
            nomor_surat,
            tujuan_penggunaan,
            plafond,
            jangka_waktu,
            suku_bunga,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            no_ktp_debitur,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            telah_persetujuan_dari,
            nama_penjamin,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            no_ktp_penjamin,
            bertempat_tinggal_sama_dengan,
            debitur_pemilik_rekening,
            melunasi_hutang_sebesar,
            tanggal_mengangsur_terakhir,
            tanggal_mengangsur_paling_lambat,
            tanggal_mengangsur_pertama,
            nominal_angsuran,
            biaya_provisi_sebesar,
            biaya_administrasi_sebesar,
            biaya_asuransi_jiwa,
            biaya_materai_sebesar,
            biaya_jumlah,
            is_submitted,
        } = req.body;

        const userID = req.app.locals.user

        const newKRS = await KRSService.create({
            nama,
            jabatan,
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_permohonan_kredit,
            tanggal_surat_persetujuan_kredit,
            nomor_surat,
            tujuan_penggunaan,
            plafond,
            jangka_waktu,
            suku_bunga,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            no_ktp_debitur,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            telah_persetujuan_dari,
            nama_penjamin,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            no_ktp_penjamin,
            bertempat_tinggal_sama_dengan,
            debitur_pemilik_rekening,
            melunasi_hutang_sebesar,
            tanggal_mengangsur_terakhir,
            tanggal_mengangsur_paling_lambat,
            tanggal_mengangsur_pertama,
            nominal_angsuran,
            biaya_provisi_sebesar,
            biaya_administrasi_sebesar,
            biaya_asuransi_jiwa,
            biaya_materai_sebesar,
            biaya_jumlah,
            is_submitted,
            userID
        });

        if (!newKRS) {
            throw Error("Failed to create KRS");
        }

        return createdResponse(res, newKRS);
    }

    async generatePDF(req, res) {
      try {
        const { id } = req.params;
        const dbData = await KRSService.getById(id);

        if (!dbData) {
          return res.status(404).json({ message: "KRS not found" });
        }

        const tanggal = new Date(dbData.tanggal_surat_permohonan_kredit);
        const tanggal1 = new Date(dbData.tanggal_surat_persetujuan_kredit);
        const tanggal2 = new Date(dbData.tanggal_lahir_debitur);
        const tanggal3 = new Date(dbData.tanggal_lahir_penjamin);
        const tanggal4 = new Date(dbData.tanggal_mengangsur_terakhir);
        const tanggal5 = new Date(dbData.tanggal_mengangsur_pertama);
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
            tanggal_surat_persetujuan_kredit: formattedTanggal1,
            nomor_surat: dbData.nomor_surat,
            tujuan_penggunaan: dbData.tujuan_penggunaan,
            plafond: dbData.plafond,
            jangka_waktu: dbData.jangka_waktu,
            suku_bunga: dbData.suku_bunga,
            biaya_provisi: dbData.biaya_provisi,
            biaya_administrasi: dbData.biaya_administrasi,
            detail_jaminan: dbData.detail_jaminan,
            pekerjaan_debitur: dbData.pekerjaan_debitur,
            no_ktp_debitur: dbData.no_ktp_debitur,
            tempat_lahir_debitur: dbData.tempat_lahir_debitur,
            tanggal_lahir_debitur: formattedTanggal2,
            telah_persetujuan_dari: dbData.telah_persetujuan_dari,
            nama_penjamin: dbData.nama_penjamin,
            tempat_lahir_penjamin: dbData.tempat_lahir_penjamin,
            tanggal_lahir_penjamin: formattedTanggal3,
            no_ktp_penjamin: dbData.no_ktp_penjamin,
            bertempat_tinggal_sama_dengan: dbData.bertempat_tinggal_sama_dengan,
            debitur_pemilik_rekening: dbData.debitur_pemilik_rekening,
            melunasi_hutang_sebesar: dbData.melunasi_hutang_sebesar,
            tanggal_mengangsur_terakhir: formattedTanggal4,
            tanggal_mengangsur_paling_lambat: dbData.tanggal_mengangsur_paling_lambat,
            tanggal_mengangsur_pertama: formattedTanggal5,
            nominal_angsuran: dbData.nominal_angsuran,
            biaya_provisi_sebesar: dbData.biaya_provisi_sebesar,
            biaya_administrasi_sebesar: dbData.biaya_administrasi_sebesar,
            biaya_asuransi_jiwa: dbData.biaya_asuransi_jiwa,
            biaya_materai_sebesar: dbData.biaya_materai_sebesar,
            biaya_jumlah: dbData.biaya_jumlah,
        };

        const templatePath = path.resolve("src/templates/", "KRS.docx");

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
        const docxFilename = `KRS_${id}_${timestamp}.docx`;
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
        const dbData = await KRSService.getById(id);

        if (!dbData) {
          return res.status(404).json({ message: "KRS not found" });
        }

        const tanggal = new Date(dbData.tanggal_surat_permohonan_kredit);
        const tanggal1 = new Date(dbData.tanggal_surat_persetujuan_kredit);
        const tanggal2 = new Date(dbData.tanggal_lahir_debitur);
        const tanggal3 = new Date(dbData.tanggal_lahir_penjamin);
        const tanggal4 = new Date(dbData.tanggal_mengangsur_terakhir);
        const tanggal5 = new Date(dbData.tanggal_mengangsur_pertama);
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
            tanggal_surat_persetujuan_kredit: formattedTanggal1,
            nomor_surat: dbData.nomor_surat,
            tujuan_penggunaan: dbData.tujuan_penggunaan,
            plafond: dbData.plafond,
            jangka_waktu: dbData.jangka_waktu,
            suku_bunga: dbData.suku_bunga,
            biaya_provisi: dbData.biaya_provisi,
            biaya_administrasi: dbData.biaya_administrasi,
            detail_jaminan: dbData.detail_jaminan,
            pekerjaan_debitur: dbData.pekerjaan_debitur,
            no_ktp_debitur: dbData.no_ktp_debitur,
            tempat_lahir_debitur: dbData.tempat_lahir_debitur,
            tanggal_lahir_debitur: formattedTanggal2,
            telah_persetujuan_dari: dbData.telah_persetujuan_dari,
            nama_penjamin: dbData.nama_penjamin,
            tempat_lahir_penjamin: dbData.tempat_lahir_penjamin,
            tanggal_lahir_penjamin: formattedTanggal3,
            no_ktp_penjamin: dbData.no_ktp_penjamin,
            bertempat_tinggal_sama_dengan: dbData.bertempat_tinggal_sama_dengan,
            debitur_pemilik_rekening: dbData.debitur_pemilik_rekening,
            melunasi_hutang_sebesar: dbData.melunasi_hutang_sebesar,
            tanggal_mengangsur_terakhir: formattedTanggal4,
            tanggal_mengangsur_paling_lambat: dbData.tanggal_mengangsur_paling_lambat,
            tanggal_mengangsur_pertama: formattedTanggal5,
            nominal_angsuran: dbData.nominal_angsuran,
            biaya_provisi_sebesar: dbData.biaya_provisi_sebesar,
            biaya_administrasi_sebesar: dbData.biaya_administrasi_sebesar,
            biaya_asuransi_jiwa: dbData.biaya_asuransi_jiwa,
            biaya_materai_sebesar: dbData.biaya_materai_sebesar,
            biaya_jumlah: dbData.biaya_jumlah,
        };

        const templatePath = path.resolve("src/templates/", "KRS.docx");

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
        const docxFilename = `KRS_${id}_${timestamp}.docx`;

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
        const updatedKRS = await KRSService.update(id, payload);
        
        if (!updatedKRS) {
            return res.status(404).json({ message: "KRS not found" });
        }

        return successResponse(res, updatedKRS);
    }

    async deleteById(req, res) {
        const { id } = req.params;
        const data = await KRSService.deleteById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KRS not found" });
        }
        
        return successResponse(res, data);
    }
}

export default new KRSController();