/**
 * Created by CUI on 2016/8/11.
 */
$(document).ready(function () {
//            alert("OK");
    $("input").keydown(function (event) {
        switch (event.which) {
            case 37:
                btn_move_left();
                break;
            case 39:
                btn_move_right();
                break;
            default:
                //alert("Key:" + event.which);
        }
    });
});
window.onload = main;
var brick_width = 50;
var brick_height = 20;
var move_speed = 10;
var min_btn_position = 0;
var max_btn_position = getWidth();
function main() {
    //获得页面的宽度和高度，计算出方块的数量
    var brick_row_num = parseInt(getWidth() / brick_width);
    //初始化页面 生成方块
//            var brick_line_num = parseInt(50);
    var board = $(".board");
    var ii = 0;
    var jj = 0;
    for (; ii < 10; ii++) {
        var row_brick = $(document.createElement("div"));
        row_brick.addClass("rowbrick");
        for (jj = 0; jj < 10; jj++) {
            var j_brick = $(document.createElement("span"));
            j_brick.addClass("red block float_left");
            row_brick.append(j_brick);
        }
        board.append(row_brick);
    }
    board.addClass("black");
    show_info(getWidth(), getHeight(), brick_row_num);
}
function getWidth() {
    return document.body.clientWidth;
}
function getHeight() {
    return document.body.clientHeight;
}
function show_info(width, height, brick_num) {
    document.getElementById("client_width").innerHTML = "" + width;
    document.getElementById("client_height").innerHTML = "" + height;
    document.getElementById("brick_num").innerHTML = "" + brick_num;
}

function btn_move_left() {
    var button = document.getElementById("button");
    var btn_x = button.offsetLeft - move_speed;
    if (btn_x < 0)btn_x = min_btn_position;
    button.style.left = btn_x + "px";
}
function btn_move_right() {
    var button = document.getElementById("button");
    var btn_x = button.offsetLeft + move_speed;
    if (btn_x > 1699)btn_x = max_btn_position - 200;
    button.style.left = btn_x + "px";
}
