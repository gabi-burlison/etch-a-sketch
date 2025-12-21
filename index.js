//Fills the 16x16 container with squares
for (let index = 0; index < 16 * 16; index++) {
    const div = document.createElement("div");
    div.classList.add("grid-square");
    document.getElementById("container").appendChild(div);
} 
