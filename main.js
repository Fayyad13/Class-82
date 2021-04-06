var mouseEvent="empty";
var last_point_of_x_position, last_point_of_y_position;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d")

canvas.addEventListener("mousedown", my_mouseDown);

function my_mouseDown(e) {
    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove", my_mouseMove);

function my_mouseMove(e){
    var current_position_of_X = e.clientX - canvas.offsetLeft;
    var current_position_of_Y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.moveTo (last_point_of_x_position, last_point_of_y_position);
        ctx.lineTo (current_position_of_X, current_position_of_Y);
        ctx.stroke();
    }
    last_point_of_x_position = current_position_of_X;
    last_point_of_y_position = current_position_of_Y;

}
canvas.addEventListener("mouseup", my_mouseUp);
function my_mouseUp(e) {
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseLeave);
function my_mouseLeave(e){
    mouseEvent = "mouseleave";
}