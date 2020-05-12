const navs = document.querySelectorAll(".nav_link");
const judul_konten = document.querySelector('.judul_konten');
const gambar = document.querySelector('.gambar-konten');
const al_1 = document.querySelector('.al-1');
const al_2 = document.querySelector('.al-2');
const al_3 = document.querySelector('.al-3');


let hal = {
    judul: null,
    al_1: null,
    al_2: null,
    al_3: null
};
let html = {
    judul: "HTML",
    gbr: 'image/html.png',
    al_1: "HTML bukan bahasa pemrogaman. HTML merupakan bahasa markup. HTML berada di sisi client. HTML di awali dengan tag html. Di dalam tag html ada header dan body.",
    al_2: "Header memiliki peranan sebagai link css juga memiliki tag title untuk membuat judul halaman.",
    al_3: "saat ini kebanyakan website tidak hanya berisi html tetapi juga berisi css dan javascript."
};
let css = {
    judul: "CSS",
    gbr: 'image/css.png',
    al_1: 'CSS juga bukan merupakan bahasa pemrogaman. CSS memiliki kemampuan styling pada halaman html. Lebih tepatnya CSS digunakan untuk mempercantik halaman HTML. Misalnya untuk mengubah jenis font pada huruf HTML CSS dapat melakukan itu.',
    al_2: 'CSS dapat menyatu ataupun terpisah dari halaman HTML. Yaitu dengan menggunakan tag link pada header HTML CSS dapat dipisahkan dari halaman HTML.',
    al_3: 'Sampai saat ini yang terbaru CSS yaitu CSS 3 dengan fitur yang diperbaharui juga.'
};
let js = {
    judul: "JavaScript",
    gbr: 'image/Javascript.jpg',
    al_1: 'JavaScript atau biasa disingkat JS merupakan bahasa pemrogaman untuk client side. JS bisa digunakan sebagai logic pada halaman HTML CSS.',
    al_2: 'JS digunakan untuk membuat halaman HTML CSS tampak lebih menarik',
    al_3: 'JS memiliki kemampuan yang luar biasa untuk bahasa pemrogaman web'
};

judul_konten.innerText = html.judul;
al_1.innerText = html.al_1;
al_2.innerText = html.al_2;
al_3.innerText = html.al_3;

for (let nav of navs) {
    nav.addEventListener('click', function (e) {
        let target = e.target;

        switch (target.innerText) {
            case 'HTML':
                judul_konten.innerText = html.judul;
                gambar.src = html.gbr;
                al_1.innerText = html.al_1;
                al_2.innerText = html.al_2;
                al_3.innerText = html.al_3;
                break;
            case 'CSS':
                judul_konten.innerText = css.judul;
                gambar.src = css.gbr;
                al_1.innerText = css.al_1;
                al_2.innerText = css.al_2;
                al_3.innerText = css.al_3;
                break;
            case 'JavaScript':
                judul_konten.innerText = js.judul;
                gambar.src = js.gbr;
                al_1.innerText = js.al_1;
                al_2.innerText = js.al_2;
                al_3.innerText = js.al_3;
                break;
        }


    });
}