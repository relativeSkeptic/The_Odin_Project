let homePage = document.createElement('div');
homePage.style.display = 'flex';
homePage.style.flexDirection = 'column';
homePage.style.width = '50%';
homePage.style.justifyContent = 'center';
homePage.style.backgroundColor = 'white';
homePage.style.borderRadius = '0.375rem';

let name = document.createElement('div');
name.style.display = 'flex';
name.style.textAlign = 'center';
name.style.backgroundColor = `#854d0e`;
name.style.margin = '1rem';
name.style.padding = '1rem';
name.style.borderRadius = '0.75rem';

let mainText = document.createElement('p');
mainText.style.fontSize = '6rem';
mainText.style.lineHeight = '1';
mainText.textContent = "John Wayne's Western Saloon";

name.appendChild(mainText);

homePage.appendChild(name);

let summary = document.createElement('div');
summary.style.display = 'flex';
summary.style.flexDirection = 'column';
summary.style.gap = '1rem';
summary.style.backgroundColor = `#ca8a04`;
summary.style.margin = '1rem';
summary.style.padding = '1rem';
summary.style.borderRadius = '0.75rem';

let summaryHeader = document.createElement('p');
summaryHeader.style.fontSize = '3.75rem';
summaryHeader.style.lineHeight = '1';
summaryHeader.textContent = 'Summary:';

summary.appendChild(summaryHeader);

let summaryContainer = document.createElement('div');
summaryContainer.style.display = 'flex';
summaryContainer.style.gap = '1rem';

summary.appendChild(summaryContainer);

let summaryTextContainer = document.createElement('div');
summaryTextContainer.style.display = 'flex';
summaryTextContainer.style.flexDirection = 'column';
summaryTextContainer.style.gap = '1rem';

summaryContainer.appendChild(summaryTextContainer);

let summaryText_1 = document.createElement('p');
summaryText_1.textContent = "The John Wayne Saloon is a classic Western-themed restaurant that transports guests to the rugged,adventurous days of the American frontier. Inspired by the iconic actor John Wayne, known for his roles in Western films, the restaurant embraces the old saloon style with a rustic, cowboy charm. The interior features warm wooden tables, leather booths, and vintage saloon decor, including brass chandeliers, cowboy hats, and old-western wanted posters. The walls are adorned with photos and memorabilia of John Wayne, celebrating his legendary status in Western cinema.";

summaryTextContainer.appendChild(summaryText_1);

let summaryText_2 = document.createElement('p');
summaryText_2.textContent = "The menu is hearty and robust, offering traditional American fare like steaks, BBQ ribs, and chicken fried steak, all prepared with a Western twist. For drinks, guests can enjoy classic saloon cocktails such as whiskey sours, bourbon, and beer served in mason jars. The ambiance is lively with country music and occasional live performances, creating an atmosphere where patrons feel like they're stepping back into the Wild West. The John Wayne Saloon is not just a dining experience; it's an immersive journey into the rugged spirit of the West, where guests can channel the spirit of John Wayne while enjoying a hearty meal.";

summaryTextContainer.appendChild(summaryText_2);

let summaryImageContainer = document.createElement('div');
summaryImageContainer.style.display = 'flex';
summaryImageContainer.style.backgroundColor = `#854d0e`;
summaryImageContainer.style.padding = '0.5rem';
summaryImageContainer.style.borderRadius = '0.5rem';

summaryContainer.appendChild(summaryImageContainer);

let summaryImage = document.createElement('img');
summaryImage.style.objectFit = 'cover';
summaryImage.src = '../images/john-wayne-portrait.jpg'

summaryImageContainer.appendChild(summaryImage);

homePage.append(summary);

export { homePage };