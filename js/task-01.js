

const itemEl = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach((elem, i) => {
    const title = elem.querySelector("h2");
    console.log("");
    console.dir(title.textContent);
    const liItemEl = elem.querySelectorAll("li");
    console.dir(`Element: ${liItemEl.length}`);
});



// const categoriesList = document.querySelector('#categories');
// const categoriesItems = categoriesList.querySelectorAll('.item');

// console.log(`В списке ${categoriesItems.length} категории.`);

// categoriesItems.forEach(item => {
//   const itemTitle = item.querySelector('h2').textContent;
//   const itemElements = item.querySelectorAll('li').length;

//   console.log(`Категория: ${itemTitle} / Количество элементов: ${itemElements}`);
// });

