-- AlterTable
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'Admin';

-- CreateTable
CREATE TABLE "KSSM" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "jabatan" TEXT NOT NULL,
    "nama_debitur" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KSSM_pkey" PRIMARY KEY ("id")
);
