/*
  Warnings:

  - You are about to drop the column `hari` on the `KSSM` table. All the data in the column will be lost.
  - Added the required column `userID` to the `FLEKSI` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `KAR` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `KEF` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `KMM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `KMS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `KMSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `KRS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `KSM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `KSS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `PINEK` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `PROCIM` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FLEKSI" ADD COLUMN     "userID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "KAR" ADD COLUMN     "userID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "KEF" ADD COLUMN     "userID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "KMM" ADD COLUMN     "userID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "KMS" ADD COLUMN     "userID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "KMSM" ADD COLUMN     "userID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "KRS" ADD COLUMN     "userID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "KSM" ADD COLUMN     "userID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "KSS" ADD COLUMN     "userID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "KSSM" DROP COLUMN "hari";

-- AlterTable
ALTER TABLE "PINEK" ADD COLUMN     "userID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PROCIM" ADD COLUMN     "userID" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "KSS" ADD CONSTRAINT "KSS_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PINEK" ADD CONSTRAINT "PINEK_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "FLEKSI" ADD CONSTRAINT "FLEKSI_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PROCIM" ADD CONSTRAINT "PROCIM_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "KSM" ADD CONSTRAINT "KSM_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "KMSM" ADD CONSTRAINT "KMSM_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "KRS" ADD CONSTRAINT "KRS_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "KMM" ADD CONSTRAINT "KMM_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "KMS" ADD CONSTRAINT "KMS_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "KEF" ADD CONSTRAINT "KEF_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "KAR" ADD CONSTRAINT "KAR_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
