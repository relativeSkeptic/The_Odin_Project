import spaghetti from "../images/spaghetti.jpg";
import casserole from "../images/casserole.jpg";
import wings from "../images/wings.jpg";

let menuPage = document.createElement("div");
menuPage.style.display = "flex";
menuPage.style.flexDirection = "column";
menuPage.style.width = "50%";
menuPage.style.justifyContent = "center";
menuPage.style.backgroundColor = "#D97706";
menuPage.style.borderRadius = "0.375rem";

let menuText = document.createElement("div");
menuText.style.display = "flex";
menuText.style.justifyContent = "center";
menuText.style.backgroundColor = "#854D0E";
menuText.style.margin = "1rem";
menuText.style.padding = "1rem";
menuText.style.borderRadius = "0.75rem";

menuPage.appendChild(menuText);

let menuPara = document.createElement("p");
menuPara.style.fontSize = "6rem";
menuPara.style.lineHeight = "1";
menuPara.textContent = "Menu";

menuText.appendChild(menuPara);

let menuItems = document.createElement("div");

menuPage.appendChild(menuItems);

let itemOne = document.createElement("div");
itemOne.style.display = "flex";
itemOne.style.flexDirection = "column";
itemOne.style.gap = "1rem";
itemOne.style.backgroundColor = "#A16207";
itemOne.style.margin = "1rem";
itemOne.style.padding = "1rem";
itemOne.style.borderRadius = "0.75rem";

menuItems.appendChild(itemOne);

let itemOneText = document.createElement("p");
itemOneText.style.fontSize = "3rem";
itemOneText.style.lineHeight = "1";
itemOneText.style.textAlign = "center";
itemOneText.textContent = "The Rootin Tootin Ready Spaghetti";

itemOne.appendChild(itemOneText);

let itemOneSummary = document.createElement("div");
itemOneSummary.style.display = "flex";
itemOneSummary.style.gap = "1rem";
itemOneSummary.style.fontSize = "1.5rem";
itemOneSummary.style.lineHeight = "2rem";

itemOne.appendChild(itemOneSummary);

let itemOneSummaryText = document.createElement("p");
itemOneSummaryText.style.backgroundColor = "white";
itemOneSummaryText.style.margin = "1rem";
itemOneSummaryText.style.padding = "1rem";
itemOneSummaryText.style.borderRadius = "0.75rem";
itemOneSummaryText.style.width = "50%";
itemOneSummaryText.style.overflowWrap = "break-word";
itemOneSummaryText.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna eu libero fermentum volutpat vel et diam. Nullam vitae eros diam. Sed nibh lacus, dapibus quis mi ac, porta placerat lectus. Cras sed porttitor orci. Sed placerat vel nunc varius ornare. Nullam sit amet lacinia nibh. Morbi suscipit eu augue id scelerisque. Suspendisse et vestibulum tellus. Nam lorem metus, varius quis dictum in, auctor in mauris. Pellentesque luctus tellus neque, et venenatis libero luctus eu. Suspendisse ut augue tristique, gravida odio faucibus, efficitur diam.";

itemOneSummary.appendChild(itemOneSummaryText);

let itemOneImageContainer = document.createElement("div");
itemOneImageContainer.style.width = "50%";
itemOneImageContainer.style.backgroundColor = "white";
itemOneImageContainer.style.margin = "1rem";
itemOneImageContainer.style.padding = "1rem";
itemOneImageContainer.style.borderRadius = "0.75rem";

itemOneSummary.appendChild(itemOneImageContainer);

let itemOneImage = document.createElement("img");
itemOneImage.src = spaghetti;

itemOneImageContainer.appendChild(itemOneImage);

let itemTwo = document.createElement("div");
itemTwo.style.display = "flex";
itemTwo.style.flexDirection = "column";
itemTwo.style.gap = "1rem";
itemTwo.style.backgroundColor = "#A16207";
itemTwo.style.margin = "1rem";
itemTwo.style.padding = "1rem";
itemTwo.style.borderRadius = "0.75rem";

menuItems.appendChild(itemTwo);

let itemTwoText = document.createElement("p");
itemTwoText.style.fontSize = "3rem";
itemTwoText.style.lineHeight = "1";
itemTwoText.style.textAlign = "center";
itemTwoText.textContent = "Cowboy Casserole";

itemTwo.appendChild(itemTwoText);

let itemTwoSummary = document.createElement("div");
itemTwoSummary.style.display = "flex";
itemTwoSummary.style.gap = "1rem";
itemTwoSummary.style.fontSize = "1.5rem";
itemTwoSummary.style.lineHeight = "2rem";

itemTwo.appendChild(itemTwoSummary);

let itemTwoSummaryText = document.createElement("p");
itemTwoSummaryText.style.backgroundColor = "white";
itemTwoSummaryText.style.margin = "1rem";
itemTwoSummaryText.style.padding = "1rem";
itemTwoSummaryText.style.borderRadius = "0.75rem";
itemTwoSummaryText.style.width = "50%";
itemTwoSummaryText.style.overflowWrap = "break-word";
itemTwoSummaryText.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna eu libero fermentum volutpat vel et diam. Nullam vitae eros diam. Sed nibh lacus, dapibus quis mi ac, porta placerat lectus. Cras sed porttitor orci. Sed placerat vel nunc varius ornare. Nullam sit amet lacinia nibh. Morbi suscipit eu augue id scelerisque. Suspendisse et vestibulum tellus. Nam lorem metus, varius quis dictum in, auctor in mauris. Pellentesque luctus tellus neque, et venenatis libero luctus eu. Suspendisse ut augue tristique, gravida odio faucibus, efficitur diam.";

itemTwoSummary.appendChild(itemTwoSummaryText);

let itemTwoImageContainer = document.createElement("div");
itemTwoImageContainer.style.width = "50%";
itemTwoImageContainer.style.backgroundColor = "white";
itemTwoImageContainer.style.margin = "1rem";
itemTwoImageContainer.style.padding = "1rem";
itemTwoImageContainer.style.borderRadius = "0.75rem";

itemTwoSummary.appendChild(itemTwoImageContainer);

let itemTwoImage = document.createElement("img");
itemTwoImage.src = casserole;

itemTwoImageContainer.appendChild(itemTwoImage);

let itemThree = document.createElement("div");
itemThree.style.display = "flex";
itemThree.style.flexDirection = "column";
itemThree.style.gap = "1rem";
itemThree.style.backgroundColor = "#A16207";
itemThree.style.margin = "1rem";
itemThree.style.padding = "1rem";
itemThree.style.borderRadius = "0.75rem";

menuItems.appendChild(itemThree);

let itemThreeText = document.createElement("p");
itemThreeText.style.fontSize = "3rem";
itemThreeText.style.lineHeight = "1";
itemThreeText.style.textAlign = "center";
itemThreeText.textContent = "Wild West Wings";

itemThree.appendChild(itemThreeText);

let itemThreeSummary = document.createElement("div");
itemThreeSummary.style.display = "flex";
itemThreeSummary.style.gap = "1rem";
itemThreeSummary.style.fontSize = "1.5rem";
itemThreeSummary.style.lineHeight = "2rem";

itemThree.appendChild(itemThreeSummary);

let itemThreeSummaryText = document.createElement("p");
itemThreeSummaryText.style.backgroundColor = "white";
itemThreeSummaryText.style.margin = "1rem";
itemThreeSummaryText.style.padding = "1rem";
itemThreeSummaryText.style.borderRadius = "0.75rem";
itemThreeSummaryText.style.width = "50%";
itemThreeSummaryText.style.overflowWrap = "break-word";
itemThreeSummaryText.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna eu libero fermentum volutpat vel et diam. Nullam vitae eros diam. Sed nibh lacus, dapibus quis mi ac, porta placerat lectus. Cras sed porttitor orci. Sed placerat vel nunc varius ornare. Nullam sit amet lacinia nibh. Morbi suscipit eu augue id scelerisque. Suspendisse et vestibulum tellus. Nam lorem metus, varius quis dictum in, auctor in mauris. Pellentesque luctus tellus neque, et venenatis libero luctus eu. Suspendisse ut augue tristique, gravida odio faucibus, efficitur diam.";

itemThreeSummary.appendChild(itemThreeSummaryText);

let itemThreeImageContainer = document.createElement("div");
itemThreeImageContainer.style.width = "50%";
itemThreeImageContainer.style.backgroundColor = "white";
itemThreeImageContainer.style.margin = "1rem";
itemThreeImageContainer.style.padding = "1rem";
itemThreeImageContainer.style.borderRadius = "0.75rem";

itemThreeSummary.appendChild(itemThreeImageContainer);

let itemThreeImage = document.createElement("img");
itemThreeImage.src = wings;

itemThreeImageContainer.appendChild(itemThreeImage);

export { menuPage };
