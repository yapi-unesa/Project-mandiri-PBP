const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let valid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const messageError = document.getElementById('messageError');

  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";

  if (name.value.trim() === "") {
    nameError.textContent = "Nama wajib diisi.";
    valid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    emailError.textContent = "Masukkan email yang valid.";
    valid = false;
  }

  if (subject.value.trim() === "") {
    subjectError.textContent = "Subjek wajib diisi.";
    valid = false;
  }

  if (message.value.trim().length < 5) {
    messageError.textContent = "Pesan minimal 5 karakter.";
    valid = false;
  }

  if (!valid) return;

  document.getElementById('successMessage').style.display = 'block';
  form.reset();

  setTimeout(() => {
    document.getElementById('successMessage').style.display = 'none';
  }, 4000);
});
