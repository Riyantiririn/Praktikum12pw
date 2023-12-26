function showImage() {
    var selectElement = document.getElementById("imageSelect");
    var selectedValue = selectElement.options[selectElement.selectedIndex].value;
    var selectedImage = document.getElementById("selectedImage");
    var alertBox = document.getElementById("alertBox");

    // Set source attribute of the image based on the selected value
    selectedImage.src = "images/" + selectedValue + ".jpg";

    // Display alert box with image file name
    alertBox.innerHTML = "Nama File Gambar: " + selectedValue + ".jpg";
    alertBox.style.display = "block";
}

