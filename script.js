function WhereMouse(evt) {

    evt = !evt ? event : evt

    var Mouse_X = evt.clientX;
    var Mouse_Y = evt.clientY;

    var scroll_x = document.body.scrollLeft || document.documentElement.scrollLeft;
    var scroll_y = document.body.scrollTop || document.documentElement.scrollTop;

    Mouse_X += scroll_x;
    Mouse_Y += scroll_y;
    console.log(Mouse_X,Mouse_Y);
    let b = document.getElementById("int")
    b.style.top = Mouse_Y
    b.style.left = Mouse_X

}
typeof window.addEventListener == 'undefined' ? document.attachEvent("onmousemove", WhereMouse) : document.addEventListener('mousemove', WhereMouse, false);

