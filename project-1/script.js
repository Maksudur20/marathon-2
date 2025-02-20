document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.querySelector(".btn");
    const closeModalBtn = document.querySelector(".close-btn");
    const confirmBtn = document.querySelector(".confirm-btn"); // Select Confirm button
    const modalSection = document.querySelector("section");

    // Open modal when "Open Modal" button is clicked
    openModalBtn.addEventListener("click", function () {
        modalSection.classList.add("active");
    });

    // Close modal when "Cancel" button is clicked
    closeModalBtn.addEventListener("click", function () {
        modalSection.classList.remove("active");
    });

    // Close modal when "Confirm" button is clicked
    confirmBtn.addEventListener("click", function () {
        modalSection.classList.remove("active");
    });

    // Close modal when clicking outside the modal
    document.querySelector(".new-message").addEventListener("click", function () {
        modalSection.classList.remove("active");
    });
});
