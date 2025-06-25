import { createdResponse, successResponse } from "../../utils/response.js";
import KEFService from "./KEF-service.js";
import path from 'path';
import fs from 'fs';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { exec } from "child_process";
import { __dirname, __filename } from "../../utils/path.js";

class KEFController {
    async get(req, res) {
        const {page, limit} = req.query
        const datas = await KEFService.getAll(page, limit)
        return successResponse(res, datas)
    }

    async getById(req, res) {
        const { id } = req.params;
        const data = await KEFService.getById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KEF not found" });
        }
        
        return successResponse(res, data);
    }

    async post(req, res) {
        const {
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
            is_submitted,
        } = req.body;

        const userID = req.app.locals.user

        const newKEF = await KEFService.create({
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
            is_submitted,
            userID
        });

        if (!newKEF) {
            throw Error("Failed to create KEF");
        }

        return createdResponse(res, newKEF);
    }

    async generatePDF(req, res) {
      try {
        const { id } = req.params;
        const dbData = await KEFService.getById(id);

        if (!dbData) {
          return res.status(404).json({ message: "KEF not found" });
        }

        const tanggal = new Date(dbData.tanggal_surat_persetujuan_kredit);
        const tanggal1 = new Date(dbData.tanggal_lahir_debitur);
        const tanggal2 = new Date(dbData.tanggal_lahir_penjamin);
        const tanggal3 = new Date(dbData.tanggal_surat_permohonan_kredit);
        const tanggal4 = new Date(dbData.tanggal_angsuran_berakhir);
        const tanggal5 = new Date(dbData.tanggal_angsuran_pertama);
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
            tempat_lahir_debitur: dbData.tempat_lahir_debitur,
            tanggal_lahir_debitur: formattedTanggal1,
            alamat_rumah_debitur: dbData.alamat_rumah_debitur,
            no_ktp_debitur: dbData.no_ktp_debitur,
            telah_mendapat_persetujuan: dbData.telah_mendapat_persetujuan,
            nama_penjamin: dbData.nama_penjamin,
            tempat_lahir_penjamin: dbData.tempat_lahir_penjamin,
            tanggal_lahir_penjamin: formattedTanggal2,
            no_ktp_penjamin: dbData.no_ktp_penjamin,
            bertempat_tinggal_dengan: dbData.bertempat_tinggal_dengan,
            tanggal_surat_permohonan_kredit: formattedTanggal3,
            nama_barang: dbData.nama_barang,
            nama_toko: dbData.nama_toko,
            alamat_toko: dbData.alamat_toko,
            harga_barang: dbData.harga_barang,
            bunga_pinjaman: dbData.bunga_pinjaman,
            total_pinjaman: dbData.total_pinjaman,
            jangka_waktu: dbData.jangka_waktu,
            tanggal_angsuran_berakhir: formattedTanggal4,
            tenggat_mengangsur_pada: dbData.tenggat_mengangsur_pada,
            tanggal_angsuran_pertama: formattedTanggal5,
            nilai_mengangsur: dbData.nilai_mengangsur,
            biaya_provisi_sebesar: dbData.biaya_provisi_sebesar,
            biaya_administrasi_sebesar: dbData.biaya_administrasi_sebesar,
            biaya_materai_sebesar: dbData.biaya_materai_sebesar,
            biaya_fidusia_sebesar: dbData.biaya_fidusia_sebesar,
            total_biaya: dbData.total_biaya,
            pekerjaan_debitur: dbData.pekerjaan_debitur,
            jenis_kelamin_debitur: dbData.jenis_kelamin_debitur,
            detail_jaminan: dbData.detail_jaminan,
            no_hp_debitur: dbData.no_hp_debitur,
        };

        const templatePath = path.resolve("src/templates/", "KEF.docx");

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
        const docxFilename = `KEF_${id}_${timestamp}.docx`;
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
        const updatedKEF = await KEFService.update(id, payload);
        
        if (!updatedKEF) {
            return res.status(404).json({ message: "KEF not found" });
        }

        return successResponse(res, updatedKEF);
    }

    async deleteById(req, res) {
        const { id } = req.params;
        const data = await KEFService.deleteById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KEF not found" });
        }
        
        return successResponse(res, data);
    }
}

export default new KEFController();