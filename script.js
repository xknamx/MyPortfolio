function toggleMenu() {
    var navList = document.getElementById("nav-list");
    var overlay = document.getElementById("overlay");

    // メニューが開いているかどうかを確認して、開閉をトグル
    if (navList.classList.contains("open")) {
        navList.classList.remove("open");
        overlay.style.display = "none";
    } else {
        navList.classList.add("open");
        overlay.style.display = "block";
    }
}
