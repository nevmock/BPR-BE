function format(angka) {
  return 'Rp. ' + angka.toLocaleString('id-ID') + ',-';
}

export function formatRupiah(angka) {
  if (typeof angka !== 'number' || isNaN(angka)) {
    throw new Error('Parameter harus berupa angka.');
  }

  const formattedAngka = format(angka);
  return `${formattedAngka}`;
}