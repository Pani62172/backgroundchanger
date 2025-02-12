document.querySelectorAll(".color-btn").forEach(button => {
    button.addEventListener("click", () => {
        let color = button.classList[1]; // Get the color from class name
        document.body.style.backgroundColor = color; // Change background

        // Reset all buttons
        document.querySelectorAll(".color-btn").forEach(btn => {
            btn.classList.remove("active");
            btn.style.color = "white";
            btn.style.backgroundColor = btn.classList[1];
        });

        // Change clicked button style
        button.classList.add("active");
        button.style.color = color;
    });
});