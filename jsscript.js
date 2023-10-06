// Задание 1

// 1. Поиск в интернете (бесплатные api примеры)
// 2. Найти любые данные, на произвольную тему
// 3. Установить расширение в браузер “JSON viewer”
// 4. Пример найденного json объекта

// Задание 2

// 1. Создать файл data.js
// 2. Создать переменную dataInfo
// 3. Добавить несколько данных в dataInfo

// import { dataInfo } from "./data.js";

// const data = JSON.parse(dataInfo);
// console.log(data);
// const divEl = document.createElement("div");
// const title = document.createElement("div");
// const titleDesc = document.createElement("h1");
// titleDesc.style.display = "flex";
// titleDesc.style.justifyContent = "center";
// titleDesc.style.alignItems = "center";
// titleDesc.textContent = "Witch Galley";
// document.body.appendChild(title);
// title.appendChild(titleDesc);
// document.body.appendChild(divEl);
// divEl.style.display = "flex";
// divEl.style.justifyContent = "center";
// divEl.style.flexWrap = "wrap";
// divEl.style.padding = "10px";
// divEl.style.margin = "10px";
// divEl.style.gap = "10px";

// data.forEach((element) => {
//   const elementImg = document.createElement("img");
//   elementImg.src = element.address;
//   elementImg.width = 300;
//   divEl.appendChild(elementImg);
// });

// Задания 3 и 4

// 1. Создать файл index.html
// 2. Подключить data.js
// 3. Добавить блок <div class="content"></div>
// 4. Создать переменную data и добавить в нее JSON parse данные из
// файла data.js
// 5. Вывести в консоль объект data
// 6. С помощью foreach обойти массив data
// 7. Вывести все изображения из данных

// 1. Создать все необходимые заголовки, параграфы изображения (из
//     данных json)
// 2. Добавить все содержимое в блок контент
// 3. Добавить стили при необходимости

// data.forEach(({ id, name, address, age }) => {
//   const cardBox = document.createElement("div");
//   cardBox.classList.add("card");
//   cardBox.style.marginRight = "10px";
//   cardBox.style.display = "inline-block";
//   cardBox.style.alignItems = "center";
//   cardBox.style.flexDirection = "row";
//   cardBox.style.border = "1px solid red";
//   cardBox.style.padding = "10px";
//   cardBox.style.gap = "10px";
//   cardBox.style.flexWrap = "nowrap";
//   cardBox.style.boxShadow = "15px 23px 20px rgba(0, 0, 0, 0.13)";
//   const cardImg = document.createElement("img");
//   cardImg.src = address;
//   cardImg.width = 300;
//   cardImg.height = 200;
//   const cardDesc = document.createElement("div");
//   const cardDescName = document.createElement("h3");
//   const cardDescAge = document.createElement("p");
//   const cardDescId = document.createElement("p");
//   cardDescName.textContent = `${name} : ${age}`;
//   cardDescName.style.margin = "0px 0px 10px";
//   //   cardDescAge.textContent = age;
//   cardDescId.textContent = `id:${id}`;
//   cardDesc.appendChild(cardDescId);
//   cardDesc.appendChild(cardDescName);
//   cardDesc.appendChild(cardDescAge);
//   cardBox.appendChild(cardImg);
//   cardBox.appendChild(cardDesc);
//   divEl.appendChild(cardBox);
// });

// HOMEWORK

import { dataInfo } from "./data.js";

const data = JSON.parse(dataInfo);
console.log(data);
const divEl = document.createElement("div");
divEl.classList.add("allCardsNImages");
const title = document.createElement("div");
title.classList.add("title");
const titleDesc = document.createElement("h1");
titleDesc.classList.add("titleDesc");
titleDesc.textContent = "WHO IS THE BEST?";
document.body.appendChild(title);
title.appendChild(titleDesc);
document.body.appendChild(divEl);

data.forEach(({ name, photo, age, city, hobbies }) => {
  const cardBox = document.createElement("div");
  cardBox.classList.add("card");
  const cardImg = document.createElement("img");
  cardImg.src = photo;
  cardImg.width = 300;
  cardImg.height = 200;
  const cardDesc = document.createElement("div");
  const cardDescName = document.createElement("h3");
  const cardDescAge = document.createElement("p");
  const cardDescCity = document.createElement("p");
  const cardDescHobbies = document.createElement("p");
  cardDescName.textContent = `${name} : ${age}`;
  cardDescName.style.margin = "0px 0px 10px";
  cardDescCity.textContent = `City:${city}`;
  cardDescHobbies.textContent = `Hobbies:${hobbies}`;
  cardDesc.append(cardDescCity, cardDescName, cardDescAge, cardDescHobbies);
  cardBox.appendChild(cardImg);
  cardBox.appendChild(cardDesc);
  divEl.appendChild(cardBox);
});
