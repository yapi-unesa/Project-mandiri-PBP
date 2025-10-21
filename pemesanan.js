document.addEventListener("DOMContentLoaded", () => {
  const produk = JSON.parse(localStorage.getItem("produkDipilih"));

  if (produk) {
    document.getElementById("produkNama").textContent = produk.nama;
    document.getElementById(
      "produkHarga"
    ).textContent = `Rp ${produk.harga.toLocaleString("id-ID")}`;
    document.getElementById("produkGambar").src = produk.gambar;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector("select");
  const ongkirEl = document.getElementById("ongkir");
  const totalEl = document.getElementById("totalBayar");
  const bayarBtn = document.getElementById("bayarBtn");

  let hargaProduk = 259000;

  select.addEventListener("change", () => {
    let ongkir = 0;
    if (select.value === "jne") ongkir = 15000;
    else if (select.value === "j&t") ongkir = 18000;
    else if (select.value === "gosend") ongkir = 25000;

    ongkirEl.textContent = "Rp " + ongkir.toLocaleString("id-ID");
    totalEl.textContent =
      "Rp " + (hargaProduk + ongkir).toLocaleString("id-ID");
  });

  
  bayarBtn.addEventListener("click", () => {
    alert("✅ Pembayaran berhasil! Terima kasih telah berbelanja di Bati(k)u.");
    window.location.href = "index.html";
  });
});
