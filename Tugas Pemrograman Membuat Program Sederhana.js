// Program ini menghitung keliling lingkaran
// Rumus keliling lingkaran: 2 * π * jari-jari

function hitungKelilingLingkaran(jariJari) {
    const keliling = 2 * Math.PI * jariJari;
    return keliling;
  }
  
  // Contoh penggunaan:
  let jariJari = 7;
  let keliling = hitungKelilingLingkaran(jariJari);
  console.log("Keliling lingkaran dengan jari-jari " + jariJari + " adalah: " + keliling);
  

  // Program ini menghitung luas persegi panjang
// Rumus luas persegi panjang: panjang * lebar

function hitungLuasPersegiPanjang(panjang, lebar) {
    const luas = panjang * lebar;
    return luas;
  }
  
  // Contoh penggunaan:
  let panjang = 10;
  let lebar = 5;
  let luas = hitungLuasPersegiPanjang(panjang, lebar);
  console.log("Luas persegi panjang dengan panjang " + panjang + " dan lebar " + lebar + " adalah: " + luas);

  
  // Program ini menghitung volume kubus
// Rumus volume kubus: sisi * sisi * sisi (atau sisi^3)

function hitungVolumeKubus(sisi) {
    const volume = sisi * sisi * sisi; // Atau bisa juga menggunakan Math.pow(sisi, 3)
    return volume;
  }
  
  // Contoh penggunaan:
  let sisi = 4;
  let volume = hitungVolumeKubus(sisi);
  console.log("Volume kubus dengan sisi " + sisi + " adalah: " + volume);

  
  // Program ini mengonversi suhu dari Celcius ke Fahrenheit
// Rumus: Fahrenheit = (Celcius * 9/5) + 32

function konversiCelciusKeFahrenheit(celcius) {
    const fahrenheit = (celcius * 9/5) + 32;
    return fahrenheit;
  }
  
  // Meminta input dari pengguna
  let suhuCelcius = prompt("Masukkan suhu dalam Celcius:");
  
  // Mengonversi input ke angka
  suhuCelcius = parseFloat(suhuCelcius);
  
  // Menghitung suhu dalam Fahrenheit
  let suhuFahrenheit = konversiCelciusKeFahrenheit(suhuCelcius);
  
  // Menampilkan hasil
  console.log("Suhu dalam Fahrenheit adalah: " + suhuFahrenheit);

  
  // Harga telur per kilo
const hargaPerKilo = 28000;

// Meminta input jumlah telur dalam kilo dari pengguna
let jumlahTelurKg = parseFloat(prompt("Masukkan jumlah telur (kg):"));

// Menghitung total biaya
let totalBiaya = jumlahTelurKg * hargaPerKilo;

// Meminta input uang yang dibayarkan oleh pengguna
let uangBayar = parseFloat(prompt("Masukkan jumlah uang yang dibayarkan:"));

// Menghitung uang kembalian
let uangKembalian = uangBayar - totalBiaya;

// Menampilkan hasil
console.log("Jumlah Telur (kg): " + jumlahTelurKg);
console.log("Total Bayar: " + totalBiaya);
console.log("Uang Kembalian: " + uangKembalian);


