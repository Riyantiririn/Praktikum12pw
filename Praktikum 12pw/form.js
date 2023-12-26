function validateForm(event) {
    event.preventDefault();

    const namaInput = document.getElementById('nama');
    const emailInput = document.getElementById('email');
    const jamInput = document.getElementById('jam');
    const tujuanInput = document.getElementById('tujuan');
    const jumlahInput = document.getElementById('jumlah');
    const resultDiv = document.getElementById('result');

    // Reset previous error styles
    resetErrorStyles();

    // Validation logic
    let isValid = true;

    if (!isValidName(namaInput.value)) {
        showError(namaInput, 'Nama harus diisi dan maksimum 30 karakter');
        isValid = false;
    }

    if (!isValidEmail(emailInput.value)) {
        showError(emailInput, 'Email harus diisi dengan format yang benar');
        isValid = false;
    }

    if (!isValidJam(jamInput.value)) {
        showError(jamInput, 'Jam keberangkatan harus diisi dengan format HH.MM antara 00.00 - 23.59');
        isValid = false;
    }

    if (!isValidTujuan(tujuanInput.value)) {
        showError(tujuanInput, 'Tujuan keberangkatan harus diisi');
        isValid = false;
    }

    if (!isValidJumlah(jumlahInput.value)) {
        showError(jumlahInput, 'Jumlah tiket harus diisi dengan bilangan bulat antara 1 - 10');
        isValid = false;
    }

    // Display result
    if (isValid) {
        resultDiv.innerHTML = `
            <p>Data Form:</p>
            <p>Nama Pelanggan: ${namaInput.value}</p>
            <p>Email: ${emailInput.value}</p>
            <p>Jam Keberangkatan: ${jamInput.value}</p>
            <p>Tujuan Keberangkatan: ${tujuanInput.value}</p>
            <p>Jumlah Tiket: ${jumlahInput.value}</p>
        `;
    } else {
        resultDiv.innerHTML = ''; // Clear result if there are validation errors
    }
}

function resetErrorStyles() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.style.border = '1px solid #ccc';
    });
}

function showError(input, message) {
    input.style.border = '1px solid red';
    alert(message);
}

function isValidName(name) {
    return name.trim() !== '' && name.length <= 30;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidJam(jam) {
    const jamRegex = /^(0[0-9]|1[0-9]|2[0-3])\.[0-5][0-9]$/;
    return jamRegex.test(jam);
}

function isValidTujuan(tujuan) {
    return tujuan.trim() !== '';
}

function isValidJumlah(jumlah) {
    const jumlahInt = parseInt(jumlah, 10);
    return !isNaN(jumlahInt) && jumlahInt >= 1 && jumlahInt <= 10;
}