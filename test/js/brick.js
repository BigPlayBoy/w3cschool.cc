/**
 * Created by CUI on 2016/8/12.
 */
//这里面写方块对小球的判断
//$(document).ready=in_brick();
function in_brick() {
    //判断小球的位置是不是在方块所在区域
    //方块所在区域是 0 0 770 200
    //alert("brick.js is ok!");
    var ball = document.getElementById("ball");
    var ball_left = ball.offsetLeft;
    var ball_top = ball.offsetTop;
    var ball_right = ball_left + 50;
    var ball_bottom = ball_top + 50;
    var brick_id = 0;
    show_brick_info("NUL111L", brick_id, ball_left, ball_top);

    if (ball_top <= 200) {
        //alert("at if");
        //小球到达方块所在区域
        //根据小球位置求出所在方块的id值
        var brick_i = parseInt(ball_top / 40) + 1;
        var brick_j = parseInt(ball_left / 70) + 1;
        brick_id = brick_i * 10 + brick_j + 1;
        $("#brick_id").removeClass("red");
        show_brick_info("NUL111L", brick_id, ball_left, ball_top);
    } else {
        show_brick_info("NUL111L", brick_id, ball_left, ball_top);
    }
    setTimeout("in_brick()", 100);
}
function show_brick_info(myinfo, brick_id, ball_left, ball_top) {
    document.getElementById("is_in_brick").innerHTML = " " + myinfo;
    document.getElementById("brick_id").innerHTML = " " + brick_id;
    document.getElementById("ball_left").innerHTML = " " + ball_left;
    document.getElementById("ball_top").innerHTML = " " + ball_top;

}