document.getElementById("colorButton").addEventListener("click", function() {
    const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFD700", "#00FFFF", "#FF1493"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
});
