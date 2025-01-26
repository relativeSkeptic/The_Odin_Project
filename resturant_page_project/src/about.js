let aboutPage = document.createElement("div");
aboutPage.style.display = "flex";
aboutPage.style.flexDirection = "column";
aboutPage.style.width = "50%";
aboutPage.style.justifyContent = "center";
aboutPage.style.backgroundColor = "#d97706";
aboutPage.style.borderRadius = "0.375rem";

let aboutContainer = document.createElement("div");
aboutContainer.style.display = "flex";
aboutContainer.style.justifyContent = "center";
aboutContainer.style.backgroundColor = "#713f12";
aboutContainer.style.margin = "1rem";
aboutContainer.style.padding = "1rem";
aboutContainer.style.borderRadius = "0.75rem";

aboutPage.appendChild(aboutContainer);

let aboutText = document.createElement("p");
aboutText.style.fontSize = "6rem";
aboutText.style.lineHeight = "1";
aboutText.textContent = "About";

aboutContainer.appendChild(aboutText);

let aboutSummary = document.createElement("div");
aboutSummary.style.display = "flex";
aboutSummary.style.flexDirection = "column";
aboutSummary.style.gap = "1rem";
aboutSummary.style.backgroundColor = "#a16207";
aboutSummary.style.margin = "1rem";
aboutSummary.style.padding = "1rem";
aboutSummary.style.borderRadius = "0.75rem";

aboutPage.appendChild(aboutSummary);

let aboutSummaryContainer = document.createElement("div");
aboutSummaryContainer.style.gap = "1rem";
aboutSummaryContainer.style.fontSize = "1.5rem";
aboutSummaryContainer.style.lineHeight = "2rem";
aboutSummaryContainer.style.textAlign = "center";

aboutSummary.appendChild(aboutSummaryContainer);

let aboutSummaryText = document.createElement("p");
aboutSummaryText.style.backgroundColor = "white";
aboutSummaryText.style.margin = "1rem";
aboutSummaryText.style.padding = "1rem";
aboutSummaryText.style.borderRadius = "0.75rem";
aboutSummaryText.style.overflowWrap = "break-words";
aboutSummaryText.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna eu libero fermentum volutpat vel et diam. Nullam vitae eros diam. Sed nibh lacus, dapibus quis mi ac, porta placerat lectus. Cras sed porttitor orci. Sed placerat vel nunc varius ornare. Nullam sit amet lacinia nibh. Morbi suscipit eu augue id scelerisque. Suspendisse et vestibulum tellus. Nam lorem metus, varius quis dictum in, auctor in mauris. Pellentesque luctus tellus neque, et venenatis libero luctus eu. Suspendisse ut augue tristique, gravida odio faucibus, efficitur diam.";

aboutSummaryContainer.appendChild(aboutSummaryText);

let contactContainer = document.createElement("div");
contactContainer.style.display = "flex";
contactContainer.style.justifyContent = "center";
contactContainer.style.backgroundColor = "#713f12";
contactContainer.style.margin = "1rem";
contactContainer.style.padding = "1rem";
contactContainer.style.borderRadius = "0.75rem";

aboutPage.appendChild(contactContainer);

let contactText = document.createElement("p");
contactText.style.fontSize = "6rem";
contactText.style.lineHeight = "1";
contactText.textContent = "Contact";

contactContainer.appendChild(contactText);

let contactSummary = document.createElement("div");
contactSummary.style.display = "flex";
contactSummary.style.flexDirection = "column";
contactSummary.style.gap = "1rem";
contactSummary.style.backgroundColor = "#a16207";
contactSummary.style.margin = "1rem";
contactSummary.style.padding = "1rem";
contactSummary.style.borderRadius = "0.75rem";

aboutPage.appendChild(contactSummary);

let contactSummaryContainer = document.createElement("div");
contactSummaryContainer.style.gap = "1rem";
contactSummaryContainer.style.fontSize = "1.5rem";
contactSummaryContainer.style.lineHeight = "2rem";
contactSummaryContainer.style.textAlign = "center";

contactSummary.appendChild(contactSummaryContainer);

let contactSummaryText1 = document.createElement("p");
contactSummaryText1.style.backgroundColor = "white";
contactSummaryText1.style.margin = "1rem";
contactSummaryText1.style.padding = "1rem";
contactSummaryText1.style.borderRadius = "0.75rem";
contactSummaryText1.style.overflowWrap = "break-words";
contactSummaryText1.textContent = "Phone Number: +1-234-567-8900";

contactSummaryContainer.appendChild(contactSummaryText1);

let contactSummaryText2 = document.createElement("p");
contactSummaryText2.style.backgroundColor = "white";
contactSummaryText2.style.margin = "1rem";
contactSummaryText2.style.padding = "1rem";
contactSummaryText2.style.borderRadius = "0.75rem";
contactSummaryText2.style.overflowWrap = "break-words";
contactSummaryText2.textContent = "Email: JohnWayne@gmail.com";

contactSummaryContainer.appendChild(contactSummaryText2);

let contactSummaryText3 = document.createElement("p");
contactSummaryText3.style.backgroundColor = "white";
contactSummaryText3.style.margin = "1rem";
contactSummaryText3.style.padding = "1rem";
contactSummaryText3.style.borderRadius = "0.75rem";
contactSummaryText3.style.overflowWrap = "break-words";
contactSummaryText3.textContent = "Facebook: www.facebook.com/JohnWayne";

contactSummaryContainer.appendChild(contactSummaryText3);

export { aboutPage };
