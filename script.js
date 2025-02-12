document.querySelectorAll(".color-btn").forEach(button => {
    button.addEventListener("click", () => {
        let color = button.classList[1]; 
        document.body.style.backgroundColor = color;
        document.querySelectorAll(".color-btn").forEach(btn => {
            btn.classList.remove("active");
            btn.style.color = "white";
            btn.style.backgroundColor = btn.classList[1];
        });
        button.classList.add("active");
        button.style.color = color;
    });
});
