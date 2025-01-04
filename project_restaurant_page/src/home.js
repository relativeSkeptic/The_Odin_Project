import image from "../images/john-wayne-portrait.jpg";

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
summaryImage.src = image;

summaryImageContainer.appendChild(summaryImage);

homePage.append(summary);

let hours = document.createElement('div');
hours.style.display = 'flex';
hours.style.flexDirection = 'column';
hours.style.gap = '1rem';
hours.style.backgroundColor = `#854d0e`;
hours.style.margin = '1rem';
hours.style.padding = '1rem';
hours.style.borderRadius = '0.75rem';

let hoursHeader = document.createElement('p');
hoursHeader.style.fontSize = '3.75rem';
hoursHeader.textContent = "Hours:"

hours.append(hoursHeader);

let hoursBody = document.createElement('div');
hoursBody.style.display = 'flex';
hoursBody.style.flexDirection = 'column';
hoursBody.style.fontSize = '2.25rem';
hoursBody.style.lineHeight = '2.5rem';
hoursBody.style.textAlign = 'center';

let hoursText_1 = document.createElement('p');
hoursText_1.textContent = "Sunday: 8am-8pm";

hoursBody.append(hoursText_1);

let hoursText_2 = document.createElement('p');
hoursText_2.textContent = "Monday: 8am-8pm";

hoursBody.append(hoursText_2);

let hoursText_3 = document.createElement('p');
hoursText_3.textContent = "Tuesday: 8am-8pm";

hoursBody.append(hoursText_3);

let hoursText_4 = document.createElement('p');
hoursText_4.textContent = "Wednesday: 8am-8pm";

hoursBody.append(hoursText_4);

let hoursText_5 = document.createElement('p');
hoursText_5.textContent = "Thursday: 8am-8pm";

hoursBody.append(hoursText_5);

let hoursText_6 = document.createElement('p');
hoursText_6.textContent = "Friday: 8am-8pm";

hoursBody.append(hoursText_6);

let hoursText_7 = document.createElement('p');
hoursText_7.textContent = "Saturday: 8am-8pm";

hoursBody.append(hoursText_7);

hours.append(hoursBody);

homePage.append(hours);

let location = document.createElement('div');
location.style.display = 'flex';
location.style.flexDirection = 'column';
location.style.gap = '2rem';
location.style.backgroundColor = `#ca8a04`;
location.style.margin = '1rem';
location.style.padding = '2rem';
location.style.borderRadius = '0.75rem';

let locationHeader = document.createElement('p');
locationHeader.style.fontSize = '3.75rem';
locationHeader.style.lineHeight = '1rem';
locationHeader.textContent = "Location:";

let locationBody = document.createElement('p');
locationBody.style.fontSize = '2.25rem';
locationBody.style.lineHeight = '2.5rem';
locationBody.textContent = "2501 Rodeo Plaza, Fort Worth, TX 76164";

location.append(locationHeader);

location.append(locationBody);

homePage.append(location);

export { homePage };