

// kartu produk -> buka modal
const productCard = document.querySelector('.product-card');
const productModalEl = document.getElementById('productModal');
const productModal = new bootstrap.Modal(productModalEl);

productCard.addEventListener('click', () => {
  productModal.show();
});

document.querySelectorAll('.gallery-thumb').forEach(img => {
  img.addEventListener('click', () => {
    document.getElementById('mainProductImage').src = img.src;
  });
});

  // === Tambah ke Keranjang ===
document.addEventListener('DOMContentLoaded', () => {
  const addToCartBtn = document.querySelector('.add-to-cart-btn');
  const buyNowBtn = document.querySelector('.buy-now-btn');
  const cartAlert = document.getElementById('cartAlert');

  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      // tampilkan pesan sukses
      cartAlert.style.display = 'block';
      cartAlert.textContent = '✅ Produk berhasil ditambahkan ke keranjang!';
      setTimeout(() => {
        cartAlert.style.display = 'none';
      }, 3000);
    });
  }
});
  
  function beliSekarang(nama, harga, gambar) {
    const produk = {
      nama: nama,
      harga: harga,
      gambar: gambar
    };
    localStorage.setItem('produkDipilih', JSON.stringify(produk));
    window.location.href = 'pesan.html';
  }






















  // === Beli Sekarang ===
  // if (buyNowBtn) {
  //   buyNowBtn.addEventListener('click', () => {
  //     // simulasi checkout
  //     const modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
  //     modal.hide();

  //     // tampilkan pop-up konfirmasi pembelian
  //     const confirmModal = document.createElement('div');
  //     confirmModal.className = 'modal fade';
  //     confirmModal.innerHTML = `
  //       <div class="modal-dialog modal-dialog-centered">
  //         <div class="modal-content text-center p-4">
  //           <h5 class="fw-bold mb-3">🛍️ Pesanan Anda Siap Diproses</h5>
  //           <p class="text-muted mb-4">Terima kasih telah berbelanja di <b>batik(k)u</b>.<br>
  //           Anda akan diarahkan ke halaman pembayaran.</p>
  //           <button class="btn btn-dark" data-bs-dismiss="modal">Lanjut ke Pembayaran</button>
  //         </div>
  //       </div>
  //     `;
  //     document.body.appendChild(confirmModal);
  //     new bootstrap.Modal(confirmModal).show();
  //   });
  // }

// // pesan
// document.addEventListener("DOMContentLoaded", () => {
//   const beliSekarangBtns = document.querySelectorAll(".buy-now-btn");

//   beliSekarangBtns.forEach(btn => {
//     btn.addEventListener("click", (e) => {
//       e.preventDefault();

//       const card = btn.closest(".product-card");
//       const nama = card.querySelector(".card-title").textContent.trim();
//       const harga = card.querySelector(".text-danger.fw-bold").textContent.trim();
//       const gambar = card.querySelector("img").src;

//       const produk = { nama, harga, gambar };
//       localStorage.setItem("produkCheckout", JSON.stringify(produk));

//       // tutup modal dulu lalu arahkan
//       const modalEl = document.getElementById("productModal");
//       const modal = bootstrap.Modal.getInstance(modalEl);
//       modal.hide();

//       setTimeout(() => {
//         window.location.href = "pesan.html";
//       }, 300);
//     });
//   });
// });


