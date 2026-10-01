// ========================================
// 1 OCTOBER MY GIRL
// ========================================


// ================= PIN =================

// GANTI PIN DI SINI
// PIN hanya menggunakan angka 1-5
const PIN_BENAR = "1524";

let pin = "";

const dots =
    document.querySelectorAll(".pin-dots span");

const error =
    document.getElementById("pinError");


function pressKey(number) {

    if (pin.length >= 4) {
        return;
    }

    pin += number;

    updateDots();

    if (pin.length === 4) {

        setTimeout(() => {

            checkPin();

        }, 250);

    }

}


function updateDots() {

    dots.forEach((dot, index) => {

        if (index < pin.length) {

            dot.classList.add("active");

        } else {

            dot.classList.remove("active");

        }

    });

}


function hapus() {

    pin =
        pin.slice(0, -1);

    error.textContent = "";

    updateDots();

}


function checkPin() {

    if (pin === PIN_BENAR) {

        error.textContent =
            "PIN benar 💗";

        setTimeout(() => {

            nextPage(2);

            startMusic();

        }, 600);

    } else {

        error.textContent =
            "PIN salah, coba lagi 💕";

        pin = "";

        setTimeout(() => {

            updateDots();

        }, 300);

    }

}


// ================= PAGE =================

function nextPage(number) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });

    const page =
        document.getElementById(
            "page" + number
        );

    page.classList.add("active");

}


// ================= MUSIK =================

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");


async function startMusic() {

    try {

        await music.play();

        musicButton
            .classList.add("playing");

    } catch (error) {

        console.log(
            "Browser memblokir autoplay."
        );

    }

}


function toggleMusic() {

    if (music.paused) {

        music.play();

        musicButton
            .classList.add("playing");

    } else {

        music.pause();

        musicButton
            .classList.remove("playing");

    }

}


// ================= FINISH =================

function finishWebsite() {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });

    const ending =
        document.getElementById("ending");

    ending.classList.add("show");

    const credits =
        document.getElementById("credits");

    credits.style.animation = "none";

    void credits.offsetWidth;

    credits.style.animation =
        "creditsMove 22s linear forwards";


    // Setelah tulisan selesai,
    // munculkan foto terakhir.

    setTimeout(() => {

        document
            .getElementById("final-screen")
            .classList.add("show");

    }, 23000);

}


// ================= KELUAR =================

function closeWebsite() {

    try {

        window.close();

    } catch (error) {

        console.log(error);

    }

    // Kalau browser tidak mengizinkan
    // window.close(), ubah tulisan.

    setTimeout(() => {

        document
            .querySelector("#final-screen h1")
            .textContent =
            "Selamat 1 October, My Girl 💗";

    }, 500);

}


// ================= KEYBOARD =================

document.addEventListener(
    "keydown",
    function(event) {

        if (/^[0-9]$/.test(event.key)) {

            pressKey(event.key);

        }

        if (event.key === "Backspace") {

            hapus();

        }

    }
);