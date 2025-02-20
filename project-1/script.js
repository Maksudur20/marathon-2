document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.querySelector(".btn");
    const closeModalBtn = document.querySelector(".close-btn");
    const modalSection = document.querySelector("section");

    openModalBtn.addEventListener("click", function () {
        modalSection.classList.add("active");
    });

    closeModalBtn.addEventListener("click", function () {
        modalSection.classList.remove("active");
    });

    // Close modal when clicking outside the modal
    document.querySelector(".new-message").addEventListener("click", function () {
        modalSection.classList.remove("active");
    });
});
