import FLEKSIService from "../FLEKSI/FLEKSI-service.js";
import KARService from "../KAR/KAR-service.js";
import KEFService from "../KEF/KEF-service.js";
import KMMService from "../KMM/KMM-service.js";
import KMSService from "../KMS/KMS-service.js";
import KMSMService from "../KMSM/KMSM-service.js";
import KRSService from "../KRS/KRS-service.js";
import KSMService from "../KSM/KSM-service.js";
import KSSMService from "../KSSM/KSSM-service.js";
// ...add remaining services as needed

class DashboardService {
  async getAllProductStats() {
    const now = new Date();
    const startOfThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

    const getStat = async (Service, nama_produk) => {
      const thisMonth = await Service.countUniqueKTP({
        from: startOfThisMonth,
        to: now
      });

      const lastMonth = await Service.countUniqueKTP({
        from: startOfLastMonth,
        to: endOfLastMonth
      });

      const increase = lastMonth === 0
        ? 100
        : ((thisMonth - lastMonth) / lastMonth) * 100;

      return {
        nama_produk,
        unique_nasabah: thisMonth,
        increase_nasabah: parseFloat(increase.toFixed(2))
      };
    };

    return Promise.all([
      getStat(FLEKSIService, "FLEKSI"),
      getStat(KARService, "KAR"),
      getStat(KEFService, "KEF"),
      getStat(KMMService, "KMM"),
      getStat(KMSService, "KMS"),
      getStat(KMSMService, "KMSM"),
      getStat(KRSService, "KRS"),
      getStat(KSMService, "KSM"),
      getStat(KSSMService, "KSSM"),
      // ...add remaining products
    ]);
  }
}

export default new DashboardService();
