"use strict"

// 彈窗按鈕
var modal_1 = document.getElementById("mymodal_amenities");
var modal_2 = document.getElementById("mymodal_reservation");

var btn1 = document.getElementById("btn_a1");
var btn2 = document.getElementById("btn_a2");
var btn3 = document.getElementById("btn_a3");
var btn4 = document.getElementById("btn_r1");
var btn5 = document.getElementById("btn_r2");
var btn6 = document.getElementById("btn_r3");

var span_1 = document.getElementsByClassName("close")[0];
var span_2 = document.getElementsByClassName("close")[1];

btn1.onclick = function() {
    modal_1.style.display = "block";
}
btn2.onclick = function() {
    modal_1.style.display = "block";
}
btn3.onclick = function() {
    modal_1.style.display = "block";
}
btn4.onclick = function() {
    modal_2.style.display = "block";
}
btn5.onclick = function() {
    modal_2.style.display = "block";
}
btn6.onclick = function() {
    modal_2.style.display = "block";
}

span_1.onclick = function() {
    modal_1.style.display = "none";
}
span_2.onclick = function() {
    modal_2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal_1) {
        modal_1.style.display = "none";
    } else if (event.target == modal_2) {
        modal_2.style.display = "none";
    }
}

// 圖片輪播