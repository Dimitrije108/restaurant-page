export const aboutPage = () => {
    const content = document.querySelector('#content');
    const about = document.createElement('div');
    about.classList.add('page');

    const h2 = document.createElement('h2');
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');

    h2.textContent = 'Our Story';
    para1.textContent = 'Tradicionalna balkanska kuhinja je kod nas obnovljena raznim trendovima iz skoro svih regija Balkana. U našoj raznovrsnoj ponudi dominira srpska kuhinja, sa svojim jedinstvenim notama i aromama koje vas vode na nezaboravno kulinarsko putovanje. Naš cilj je da obnovimo stare vrednosti balkanske kuhinje i da vam ponudimo ono što svi volimo da jedemo.';
    para2.textContent = 'Traditional Balkan cuisine has been renewed in our Kafana with various trends from almost all regions of the Balkans. Our diverse offer is dominated by Serbian cuisine, with its unique notes and aromas that take you on an unforgettable culinary journey. Our goal is to restore the old values ​​of Balkan cuisine and offer you what we all love to eat.';

    about.appendChild(h2);
    about.appendChild(para1);
    about.appendChild(para2);
    content.appendChild(about);
}