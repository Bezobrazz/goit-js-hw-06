const allItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${allItems.length}`);

allItems.forEach((el) => {
  const categorieTitle = el.querySelector("h2");
  const categorieList = el.querySelectorAll("li");

  console.log(`Category: ${categorieTitle.textContent} `);
  console.log(`Elements: ${categorieList.length}`);
});
