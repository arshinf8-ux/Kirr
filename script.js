// دکمه شروع یادگیری

function startLearning() {

    document.querySelector(".languages").scrollIntoView({
        behavior: "smooth"
    });

}


function openLanguage(language) {

    window.location.href =
        "course.html?language=" +
        encodeURIComponent(language);

}


// تغییر حالت شب و روشن

const themeBtn = document.getElementById("themeBtn");

let darkMode = true;


themeBtn.addEventListener("click", function () {

    darkMode = !darkMode;


    if (darkMode) {

        document.body.style.background = "#080b16";

        themeBtn.innerText = "🌙";

    } else {

        document.body.style.background = "#f4f6ff";

        document.body.style.color = "#111";

        themeBtn.innerText = "☀️";

    }

});