let selm = document.getElementById("screen");
let ctx = selm.getContext("2d");

drawScreen = () => {
    for (let x = 0; x < 100; x++) {
        for (let y = 0; y < 100; y++) {
            ctx.fillStyle = "RGB(255, 0, 0)";
            ctx.fillRect(x, y, 1, 1);
        }
    }
}

drawScreen();