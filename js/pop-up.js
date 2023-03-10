
let elements = document.querySelectorAll(".gift");

let pp = document.querySelector("#test_p");
let emty = document.querySelector("#emty_img");
let xxx = document.querySelector("#elem_modal_img");
let empty_tyt = document.querySelector("#empty_tytle");

let myModal = document.querySelector("#myModal");
let cont = document.querySelector(".modal");
var buttonClose = document.querySelector(".close");

var btns = document.getElementsByClassName('dift_image');
var par = document.getElementsByClassName('emty_gift');


let list = {
    1: ['1 февраля', 'На фоне лиса, и нет, она не грустит... Она пытается осознать, что 8 марта через 38 дней ', 'image/days/1.jpeg'],
    2: ['2 февраля', 'Этот праздник ждут везде, даже там, где нет снега', 'image/days/2.jpeg'],
    3: ['3 февраля', 'Самое время вспомнить свои летние деньки... Как вы купались в море, ели мягкое мороженое, гуляли под теплыми лучами солнца...  ', 'image/days/3.jpeg'],
    4: ['4 февраля', '4 февраля отмечается интересный праздник – Праздник хорошего настроения. Улыбнитесь :) ', 'image/days/4.jpg'],
    5: ['5 февраля', 'Задание на день - слепить 3 снеговика, иначе 8 марта не наступит', 'image/days/5.jpg'],
    6: ['6 февраля', 'Можете выпить чашечку кофе) ', 'image/days/6.jpg'],
    7: ['7 февраля', 'А вы знали, что далматины рождаются без своих фирменных чёрных пятен ', 'image/days/7.jpg'],
    8: ['8 февраля', 'Осталось 30 дней, а пока можете подумать, что подарить', 'image/days/8.jpg'],
    9: ['9 февраля', 'А сколько книг в этом году вы уже прочли? ', 'image/days/9.jpg'],
    10: ['10 февраля', 'Именно сегодня в Крыму основали Севастополь', 'image/days/10.jpg'],
    11: ['11 февраля', 'Ой, а скоро же 23 февраля...', 'image/days/11.jpg'],
    12: ['12 февраля', 'Конкурс - "кто сделает больше фото за февраль" объявляю открытым!', 'image/days/12.jpeg'],
    13: ['13 февраля', 'Снова понедельник и снова на работу/учебу', 'image/days/13.jpeg'],
    14: ['14 февраля', 'Сходите в поход', 'image/days/14.jpeg'],
    15: ['15 февраля', 'По мнению британских исследователей, среда считается самым здоровым днем недели ', 'image/days/15.jpg'],
    16: ['16 февраля', 'А вы когда-нибудь видели северное сияние вживую?', 'image/days/17.jpeg'],
    17: ['17 февраля', 'Ура! Пятница! Можно и отдохнуть', 'image/days/16.jpeg'],
    18: ['18 февраля', 'Съездите в путешествие!', 'image/days/18.jpeg'],
    19: ['19 февраля', 'Скарлетт О’Хара завела собачку?', 'image/days/19-2.jpg'],
    20: ['20 февраля', 'Институт цвета Pantone выбрал главным цветом 2023 года карминовый красный оттенок 18-1750 Viva Magenta', 'image/days/20.jpg'],
    21: ['21 февраля', '"С 9 до 10 утра – оптимальные часы для работы с информацией и статистикой" - берем на заметку', 'image/days/21.jpg'],
    22: ['22 февраля', 'Как предпочитаете отдыхать весной?', 'image/days/22.jpeg'],
    23: ['23 февраля', 'С 23 февраля, мужчины!', 'image/days/23.jpg'],
    24: ['24 февраля', 'Извините, слишком много отмотал назад ', 'image/days/24.jpg'],
    25: ['25 февраля', 'Остается уже совсем чуть-чуть! ', 'image/days/25.jpg'],
    26: ['26 февраля', 'Сходите в музей', 'image/days/26.jpg'],
    27: ['27 февраля', 'На земном шаре произрастает 258 650+ видов - и не менее 50 000 000 000 000 штук - цветов', 'image/days/27.jpg'],
    28: ['28 февраля', 'Уже завтра будет весна!!', 'image/days/28.jpg'],
    29: ['1 марта', 'Раньше Новый год в России начинался с марта до 1492 года', 'image/days/31.jpg'],
    30: ['2 марта', 'Просили печеньки?', 'image/days/30.jpeg'],
    31: ['3 марта', 'До лета осталось 90 дней!', 'image/days/3-3.jpg'],
    32: ['4 марта', 'А вы знали, что цвет субботы - фиолетовый', 'image/days/4-4.jpg'],
    33: ['5 марта', 'Орхидея «Золото Кинабалу» — самый дорогой цветок в мире. Растет исключительно на горе Кинабалу, что на острове Борнео', 'image/days/5-5.jpg'],
    34: ['6 марта', 'Уже приготовили подарки своей второй половинке?', 'image/days/6-6.jpg'],
    35: ['7 марта', 'Внимание! Срочно скупаем все тюльпаны!" ', 'image/days/7-7.jpg'],
    36: ['8 марта', 'Сегодня самый прекрасный праздник самых прекрасных созданий на этой планете. <br> С 8 марта дорогие девушки 🌷🌷🌷!', 'image/days/8-8.jpg'],
}

function test(i) {
    myModal.style.display = "block";
    console.log(i);
    xxx.src = list[i][2];
    pp.innerHTML = list[i][1];
    empty_tyt.innerHTML = list[i][0];


    btns[i - 1].classList.add('none')
    par[i - 1].classList.remove('none')
    par[i - 1].classList.add('block')
}
// document.querySelectorAll(".check")[i].src =  list[i][2];

buttonClose.onclick = function () {
    myModal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == cont) {
        cont.style.display = "none";
    }
};

for (let elem of elements) {
    elem.addEventListener("click", (e) => {
        test(elem.dataset.num);
})
}
