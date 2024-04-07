export const menuPage = () => {
    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.classList.add('page');
    const mezeHead = document.createElement('h2');
    const mezeList = document.createElement('ul');
    const soupHead = document.createElement('h2');
    const soupList = document.createElement('ul');
    const mainHead = document.createElement('h2');
    const mainList = document.createElement('ul');
    const desertHead = document.createElement('h2');
    const desertList = document.createElement('ul');

    const meze = [
        'Grilovani kozji sir - 150 gr.................................................790 RSD',
        'Šumadijsko meze - 150 gr................................................1.090 RSD',
        'Pohovane paprike - 220 gr..................................................840 RSD',
        'Leskovačka moča - 220 gr..................................................530 RSD',
        'Grilovano povrće/pečurke - 250 gr......................................550 RSD',
    ]

    const soup = [
        'Kokošja supa....................................................................320 RSD',
        'Riblja čorba.....................................................................420 RSD',
        'Teleća čorba.....................................................................450 RSD',
    ]

    const main = [
        'Ćevapi - 300 gr..............................................................1.130 RSD',
        'Pljeskavica - 300 gr........................................................1.100 RSD',
        'Pirotski uštipci 6 kom. - 320 gr........................................1.350 RSD',
        'Sarma - 380 gr................................................................1.650 RSD',
        'Mućkalica - 400 gr..........................................................1.650 RSD',
        'Balkanski mix roštilja sa ćumura - 900 gr..........................2.970 RSD',
    ]

    const desert = [
        'Princes krofna...................................................................350 RSD',
        'Baklava.............................................................................390 RSD',
        'Čokoladni tart sa malinama i bademom.................................450 RSD',
    ]

    mezeHead.textContent = 'Meze(Starters)';
    soupHead.textContent = 'Soup';
    mainHead.textContent = 'Main';
    desertHead.textContent = 'Desert';

    meze.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        mezeList.appendChild(li);
    });

    soup.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        soupList.appendChild(li);
    });

    main.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        mainList.appendChild(li);
    });

    desert.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        desertList.appendChild(li);
    });

    menu.appendChild(mezeHead);
    menu.appendChild(mezeList);
    menu.appendChild(soupHead);
    menu.appendChild(soupList);
    menu.appendChild(mainHead);
    menu.appendChild(mainList);
    menu.appendChild(desertHead);
    menu.appendChild(desertList);
    content.appendChild(menu);
}