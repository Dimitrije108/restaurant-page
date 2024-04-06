export const initPageLoad = () => {
    const content = document.querySelector('#content');

    const homepage = document.createElement('div');
    homepage.classList.add('homepage');
    const h1 = document.createElement('h1');
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');

    h1.textContent = 'KAFANA';
    para1.textContent = 'Kafana is a distinct type of local bistro (or tavern), common in former Yugoslav countries, which primarily serves alcoholic beverages and coffee, and often also light snacks (meze) and other food. Many kafanas feature live music performances.';
    para2.textContent = 'The concept of a social gathering place for men to drink alcoholic beverages and coffee originated in the Ottoman Empire and spread to Southeast Europe during Ottoman rule, further evolving into the contemporary kafana.';

    homepage.appendChild(h1);
    homepage.appendChild(para1);
    homepage.appendChild(para2);
    content.appendChild(homepage);
}