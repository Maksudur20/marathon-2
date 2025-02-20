function selectcards(card) {
    document.getElementById("account").classList.toggle("active", card === "account");
    document.getElementById("password").classList.toggle("active", card === "password");
    document.getElementById("account_btn").classList.toggle("active", card === "account");
    document.getElementById("password_btn").classList.toggle("active", card === "password");
}
document.getElementById("account_btn").addEventListener("click", () => selectcards("account"));
document.getElementById("password_btn").addEventListener("click", () => selectcards("password"));
