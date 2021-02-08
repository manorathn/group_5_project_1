var modalBtn = document.querySelectorAll(".modal-open");

modalBtn.forEach(function (btn) {
    btn.onclick = function () {
        var modal = btn.getAttribute("data-modal");

        document.getElementById(modal).style.display = "block";
    };
});

var closeBtn = document.querySelectorAll(".modal-close");

closeBtn.forEach(function (btn) {
    btn.onclick = (function () {
        var modal = btn.closest('.modal').style.display = 'none'
    });
});

