//Fill a 16x16 container with squares
function initialCanva(){
for (let index = 0; index < 16 * 16; index++) {
    const div = document.createElement("div");
    div.classList.add("grid-square");
    div.addEventListener("mouseover", () => {
        div.classList.add("trace");
    });
    document.getElementById("container").appendChild(div);
}
};

//Generate a brand new canvas customized by user's input
document.getElementById("processButton").addEventListener("click", () => {
    document.getElementById("container").innerHTML = "";
    let size = document.getElementById("numberInput").value;
    let n = parseInt(size);
    if (n > 0 && n <= 100) {
        for (let index = 0; index < n * n; index++) {
            const div = document.createElement("div");
            div.classList.add("grid-square");
            div.style.width = `calc(100%/${n})`;
            div.style.height = `calc(100%/${n})`;
            document.getElementById("container").appendChild(div);
            div.addEventListener("mouseover", () => {
                div.classList.add("trace");
            });
        }
    } else {
        alert("Please, select a number between 0-100");
        initialCanva();
    }
});

initialCanva();