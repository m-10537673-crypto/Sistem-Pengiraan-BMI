// JavaScript kode untuk mengira BMI dan memaparkan keputusan

// Menukar tinggi kepada meter jika perlu
// Nilai lebih daripada 3 dianggap sentimeter (cm)
function tukarKeMeter(tinggi) {
  if (tinggi > 3) {
    return tinggi / 100; // cm -> m
  }
  return tinggi; // sudah dalam meter
}

function kiraBMI() {
  // Mendapatkan nilai berat dan tinggi dari input
  const beratInput = document.getElementById('berat').value;
  const tinggiInput = document.getElementById('tinggi').value;

  // Menukar input kepada nombor
  const berat = parseFloat(beratInput);
  let tinggi = parseFloat(tinggiInput);

  // Memeriksa jika input adalah sah
  if (!berat || !tinggi || tinggi <= 0 || berat <= 0) {
    alert("Sila masukkan nilai berat dan tinggi yang sah.");
    return;
  }

  // Menukar tinggi kepada meter (mesti sebelum pengiraan BMI)
  tinggi = tukarKeMeter(tinggi);

  // Mengira BMI
  const bmi = berat / (tinggi * tinggi);
  const bmiFormatted = bmi.toFixed(2);

  // Menentukan kategori BMI dan warna kelas
  let keputusan = "";
  let classColor = "";

  if (bmi < 18.5) {
    keputusan = "KURUS";
    classColor = "kurus";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    keputusan = "NORMAL";
    classColor = "normal";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    keputusan = "TERLEBIH BERAT";
    classColor = "terlebih_berat";
  } else {
    keputusan = "OBESITI";
    classColor = "obesiti";
  }

  // Memaparkan keputusan dalam jadual (tinggi dalam meter)
  document.getElementById('resBerat').innerText = berat + "kg";
  document.getElementById('resTinggi').innerText = tinggi.toFixed(2) + "m";
  document.getElementById('resBMI').innerText = bmiFormatted;

  // Memaparkan keputusan dan menetapkan kelas warna
  const cellKeputusan = document.getElementById('resKeputusan');
  cellKeputusan.innerText = keputusan;
  cellKeputusan.className = classColor;
}

function resetForm() {

  // Mengosongkan input dan keputusan
  document.getElementById('berat').value = "";
  document.getElementById('tinggi').value = "";

  // Mengosongkan keputusan dalam jadual
  document.getElementById('resBerat').innerText = "-";
  document.getElementById('resTinggi').innerText = "-";
  document.getElementById('resBMI').innerText = "-";

  // Mengosongkan keputusan dan menetapkan kelas warna kepada kosong
  const cellKeputusan = document.getElementById('resKeputusan');
  cellKeputusan.innerText = "-";
  cellKeputusan.className = "";
}