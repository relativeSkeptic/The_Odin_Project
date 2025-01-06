let menuPage = document.createElement('div');

let menuHero = document.createElement('div');
menuHero.style.display = 'flex';
menuHero.style.flexDirection = 'column';
menuHero.style.width = '50%';
menuHero.style.justifyContent = 'center';
menuHero.style.backgroundColor = '#D97706';
menuHero.style.borderRadius = '0.375rem';

menuPage.appendChild(menuHero);

let menuText = document.createElement('div');
menuText.style.display = 'flex';
menuText.style.justifyContent = 'center';
menuText.style.backgroundColor = '#713F12';
menuText.style.margin = '1rem';
menuText.style.padding = '1rem';
menuText.style.borderRadius = '0.75rem';

menuHero.appendChild(menuText);

let menuPara = document.createElement('p');
menuPara.style.fontSize = '6rem';
menuPara.style.lineHeight = '1';
menuPara.textContent = "Menu";

menuText.appendChild(menuPara);

let menuItems = document.createElement('div');

menuHero.appendChild(menuItems);

let itemOne = document.createElement('div');
itemOne.style.display = 'flex';
itemOne.style.flexDirection = 'column';
itemOne.style.gap = '1rem';
itemOne.style.backgroundColor = '#A16207';
itemOne.style.margin = '1rem';
itemOne.style.padding = '1rem';
itemOne.style.borderRadius = '0.75rem';

menuItems.appendChild(itemOne);

let itemOneText = document.createElement('p');
itemOneText.style.fontSize = '3rem';
itemOneText.style.lineHeight = '1';
itemOneText.style.textAlign = 'center';
itemOneText.textContent = "The Rootin Tootin Ready Spaghetti";

itemOne.appendChild(itemOneText);

let itemOneSummary = document.createElement('div');
itemOneSummary.style.display = 'flex';
itemOneSummary.style.gap = '1rem';
itemOneSummary.style.fontSize = '1.5rem';
itemOneSummary.style.lineHeight = '2rem';

itemOne.appendChild(itemOneSummary);

let itemOneSummaryText = document.createElement('p');
itemOneSummaryText.style.backgroundColor = 'white';
itemOneSummaryText.style.margin = '1rem';
itemOneSummaryText.style.padding = '1rem';
itemOneSummaryText.style.borderRadius = '0.75rem';
itemOneSummaryText.style.width = '50%';
itemOneSummaryText.style.overflowWrap = 'break-word';
itemOneSummaryText.textContent = "Summary of menu item";

export { menuPage };