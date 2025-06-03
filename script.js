function displaygreeting() {
    let name = document.getElementById("nameinput").value;
    let message = name ? `Hello, ${name}! Welcome!` : "Please enter your name.";
    console.log(message); 
}