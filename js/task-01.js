const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.children.length}`);
[...list.children].forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});

// const categoriesList = document.querySelector('#categories');
// const categoriesItems = categoriesList.querySelectorAll('.item');

// console.log(`В списке ${categoriesItems.length} категории.`);

// categoriesItems.forEach(item => {
//   const itemTitle = item.querySelector('h2').textContent;
//   const itemElements = item.querySelectorAll('li').length;

//   console.log(`Категория: ${itemTitle} / Количество элементов: ${itemElements}`);
// });

