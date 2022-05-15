let win1 = document.getElementById("win1");
let win2 = document.getElementById("win2");
win1.addEventListener("scroll", () => {
    win2.scrollLeft = win1.scrollLeft;
    win2.scrollTop = win1.scrollTop;
});

win2.addEventListener("scroll", () => {
    win1.scrollLeft = win2.scrollLeft;
    win1.scrollTop = win2.scrollTop;
});
let select_num = document.getElementById("select_num");
let btn = document.getElementById("summit");
let im1 = document.getElementById("imshow1");
let im2 = document.getElementById("imshow2");
btn.addEventListener("click", () => {
    let num = select_num.value
    let im1_str = "./Images/A_" + select_num.value.toString()
    let im2_str = "./Images/B_" + select_num.value.toString()
    im1.src = im1_str;
    im2.src = im2_str;
    im1.alt = "No File #" + select_num.value.toString()
    im2.alt = "No File #" + select_num.value.toString()
})
