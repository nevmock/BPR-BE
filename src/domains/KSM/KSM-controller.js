import { createdResponse, successResponse } from "../../utils/response.js";
import KSMService from "./KSM-service.js";
import path from 'path';
import fs from 'fs';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { exec } from "child_process";

class KSMController {
    async get(req, res) {
        const datas = await KSMService.getAll()
        return successResponse(res, datas)
    }

    async getById(req, res) {
        const { id } = req.params;
        const data = await KSMService.getById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KSM not found" });
        }
        
        return successResponse(res, data);
    }

    async post(req, res) {
        const{
            nama,
            jabatan,
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_permohonan_kredit,
            tanggal_surat_perjanjian_kredit,
            nomor_surat,
            nominal,
            tujuan_penggunaan,
            suku_bunga,
            provisi,
            jangka_waktu,
            detail_jaminan,
            pekerjaan_debitur,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            no_ktp_debitur,
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
            nama_barang,
            jenis_kelamin_debitur,
            harga_jaminan_saat_ini,
            is_submitted,
        } = req.body;

        const userID = req.app.locals.user

        const newKSM = await KSMService.create({
            nama,
            jabatan,
            nama_debitur,
            alamat_usaha_debitur,
            alamat_rumah_debitur,
            tanggal_surat_permohonan_kredit,
            tanggal_surat_perjanjian_kredit,
            nomor_surat,
            nominal,
            tujuan_penggunaan,
            suku_bunga,
            provisi,
            jangka_waktu,
            detail_jaminan,
            pekerjaan_debitur,
            tempat_lahir_debitur,
            tanggal_lahir_debitur,
            no_ktp_debitur,
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
            nama_barang,
            jenis_kelamin_debitur,
            harga_jaminan_saat_ini,
            is_submitted,
            userID
        });

        if (!newKSM) {
            throw Error("Failed to create KSM");
        }

        return createdResponse(res, newKSM);
    }

    async generatePDF(req, res) {
      try {
        const { id } = req.params;
        const dbData = await KSMService.getById(id);

        if (!dbData) {
          return res.status(404).json({ message: "KSM not found" });
        }

        const tanggal = new Date(dbData.tanggal_surat_permohonan_kredit);
        const tanggal1 = new Date(dbData.tanggal_surat_perjanjian_kredit);
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
            tanggal_surat_perjanjian_kredit: formattedTanggal1,
            nomor_surat: dbData.nomor_surat,
            nominal: dbData.nominal,
            tujuan_penggunaan: dbData.tujuan_penggunaan,
            suku_bunga: dbData.suku_bunga,
            provisi: dbData.provisi,
            jangka_waktu: dbData.jangka_waktu,
            detail_jaminan: dbData.detail_jaminan,
            pekerjaan_debitur: dbData.pekerjaan_debitur,
            tempat_lahir_debitur: dbData.tempat_lahir_debitur,
            tanggal_lahir_debitur: formattedTanggal2,
            no_ktp_debitur: dbData.no_ktp_debitur,
            mendapat_persetujuan_dari: dbData.mendapat_persetujuan_dari,
            nama_penjamin: dbData.nama_penjamin,
            tempat_lahir_penjamin: dbData.tempat_lahir_penjamin,
            tanggal_lahir_penjamin: formattedTanggal3,
            tempat_tinggal_sama_dengan: dbData.tempat_tinggal_sama_dengan,
            no_ktp_penjamin: dbData.no_ktp_penjamin,
            seluruh_hutang_sebesar: dbData.seluruh_hutang_sebesar,
            tanggal_mengangsur_paling_lambat: dbData.tanggal_mengangsur_paling_lambat,
            biaya_angsuran: dbData.biaya_angsuran,
            tanggal_mengangsur_pertama: formattedTanggal4,
            tanggal_mengangsur_terakhir: formattedTanggal5,
            biaya_provisi: dbData.biaya_provisi,
            biaya_materai: dbData.biaya_materai,
            biaya_asuransi: dbData.biaya_asuransi,
            biaya_asuransi_tlo: dbData.biaya_asuransi_tlo,
            biaya_administrasi: dbData.biaya_administrasi,
            biaya_notaris: dbData.biaya_notaris,
            total_biaya: dbData.total_biaya,
            nama_barang: dbData.nama_barang,
            jenis_kelamin_debitur: dbData.jenis_kelamin_debitur,
            harga_jaminan_saat_ini: dbData.harga_jaminan_saat_ini,
        };

        const templatePath = path.resolve("src/templates/", "KSM.docx");

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
        const docxFilename = `KSM_${id}_${timestamp}.docx`;
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
        const updatedKSM = await KSMService.update(id, payload);
        
        if (!updatedKSM) {
            return res.status(404).json({ message: "KSM not found" });
        }

        return successResponse(res, updatedKSM);
    }

    async deleteById(req, res) {
        const { id } = req.params;
        const data = await KSMService.deleteById(id);
        
        if (!data) {
            return res.status(404).json({ message: "KSM not found" });
        }
        
        return successResponse(res, data);
    }
}

export default new KSMController();