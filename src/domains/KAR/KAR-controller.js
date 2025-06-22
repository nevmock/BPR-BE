import { createdResponse, successResponse } from "../../utils/response.js";
import KARService from "./KAR-service.js";
import path from 'path';
import fs from 'fs';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { exec } from "child_process";
import { __dirname, __filename } from "../../utils/path.js";

class KARController {
    async get(req, res) {
        const datas = await KARService.getAll()
        return successResponse(res, datas)
    }

    async getById(req, res) {
        const { id } = req.params;
        const data = await KARService.getById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KAR not found" });
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
            nominal,
            suku_bunga,
            jangka_waktu,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            no_ktp_debitur,
            hubungan_debitur_penjamin,
            nama_penjamin,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            bertempat_tinggal_sama,
            no_ktp_penjamin,
            utang_atas_kredit_sebesar,
            tenggat_mengangsur_tiap_bulan,
            nilai_mengangsur,
            tanggal_mengangsur_pertama,
            tanggal_mengangsur_terakhir,
            biaya_provisi_sebesar,
            biaya_materai_sebesar,
            biaya_asuransi_jiwa_sebesar,
            biaya_notaris_sebesar,
            total_biaya,
            nama_barang,
            is_submitted,
        } = req.body;

        const userID = req.app.locals.user

        const newKAR = await KARService.create({
            nama,
            jabatan,
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_permohonan_kredit,
            tanggal_surat_persetujuan_kredit,
            nomor_surat,
            nominal,
            suku_bunga,
            jangka_waktu,
            biaya_provisi,
            biaya_administrasi,
            detail_jaminan,
            pekerjaan_debitur,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            no_ktp_debitur,
            hubungan_debitur_penjamin,
            nama_penjamin,
            tempat_lahir_penjamin,
            tanggal_lahir_penjamin,
            bertempat_tinggal_sama,
            no_ktp_penjamin,
            utang_atas_kredit_sebesar,
            tenggat_mengangsur_tiap_bulan,
            nilai_mengangsur,
            tanggal_mengangsur_pertama,
            tanggal_mengangsur_terakhir,
            biaya_provisi_sebesar,
            biaya_materai_sebesar,
            biaya_asuransi_jiwa_sebesar,
            biaya_notaris_sebesar,
            total_biaya,
            nama_barang,
            is_submitted,
            userID
        });

        if (!newKAR) {
            throw Error("Failed to create KAR");
        }

        return createdResponse(res, newKAR);
    }

    async generatePDF(req, res) {
      try {
        const { id } = req.params;
        const dbData = await KARService.getById(id);

        if (!dbData) {
          return res.status(404).json({ message: "KAR not found" });
        }

        const tanggal = new Date(dbData.tanggal_surat_permohonan_kredit);
        const tanggal1 = new Date(dbData.tanggal_surat_persetujuan_kredit);
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
            tanggal_surat_persetujuan_kredit: formattedTanggal1,
            nomor_surat: dbData.nomor_surat,
            nominal: dbData.nominal,
            suku_bunga: dbData.suku_bunga,
            jangka_waktu: dbData.jangka_waktu,
            biaya_provisi: dbData.biaya_provisi,
            biaya_administrasi: dbData.biaya_administrasi,
            detail_jaminan: dbData.detail_jaminan,
            pekerjaan_debitur: dbData.pekerjaan_debitur,
            tempat_lahir_debitur: dbData.tempat_lahir_debitur,
            tanggal_lahir_debitur: formattedTanggal2,
            no_ktp_debitur: dbData.no_ktp_debitur,
            hubungan_debitur_penjamin: dbData.hubungan_debitur_penjamin,
            nama_penjamin: dbData.nama_penjamin,
            tempat_lahir_penjamin: dbData.tempat_lahir_penjamin,
            tanggal_lahir_penjamin: formattedTanggal3,
            bertempat_tinggal_sama: dbData.bertempat_tinggal_sama,
            no_ktp_penjamin: dbData.no_ktp_penjamin,
            utang_atas_kredit_sebesar: dbData.utang_atas_kredit_sebesar,
            tenggat_mengangsur_tiap_bulan: dbData.tenggat_mengangsur_tiap_bulan,
            nilai_mengangsur: dbData.nilai_mengangsur,
            tanggal_mengangsur_pertama: formattedTanggal4,
            tanggal_mengangsur_terakhir: formattedTanggal5,
            biaya_provisi_sebesar: dbData.biaya_provisi_sebesar,
            biaya_materai_sebesar: dbData.biaya_materai_sebesar,
            biaya_asuransi_jiwa_sebesar: dbData.biaya_asuransi_jiwa_sebesar,
            biaya_notaris_sebesar: dbData.biaya_notaris_sebesar,
            total_biaya: dbData.total_biaya,
            nama_barang: dbData.nama_barang,
        };

        const templatePath = path.resolve("src/templates/", "KAR.docx");

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
        const docxFilename = `KAR_${id}_${timestamp}.docx`;
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
        const updatedKAR = await KARService.update(id, payload);
        
        if (!updatedKAR) {
            return res.status(404).json({ message: "KAR not found" });
        }

        return successResponse(res, updatedKAR);
    }

    async deleteById(req, res) {
        const { id } = req.params;
        const data = await KARService.deleteById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KAR not found" });
        }
        
        return successResponse(res, data);
    }
}

export default new KARController();