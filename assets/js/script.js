let selm = document.getElementById("screen");
let ctx = selm.getContext("2d");

calcLightIntens = (x, y) => {
    let res = Math.sqrt(Math.pow(x - 10, 2) + Math.pow(y - 10, 2)) / 100;
    if (res > 1.0) { res = 1.0; }
    if (res < 0.0) { res = 0.0; }
    return 1.0 - res;
}

drawScreen = () => {
    let red = 0;
    let green = 0;
    let blue = 0;
    let intens = 0.0;

    for (let x = 0; x < 200; x++) {
        for (let y = 0; y < 200; y++) {
            intens = calcLightIntens(x, y);
            red = 255 * intens + x;
            green = 255 * intens - y;
            blue = 255 * intens + y;
            ctx.fillStyle = "RGB(" + red + ", " + green + ", " + blue + ")";
            ctx.fillRect(x, y, 1, 1);
        }
    }
}

drawScreen();