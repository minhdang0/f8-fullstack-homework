const categories = [
    {
      id: 1,
      name: "Electronics",
      slugs: "electronics",
      children: [
        {
          id: 2,
          name: "Laptops",
          slugs: "laptops",
          children: [
            {
              id: 3,
              name: "Apple",
              slugs: "apple",
            },
            {
              id: 4,
              name: "Dell",
              slugs: "dell",
            },
          ],
        },
        {
          id: 5,
          name: "Headphones",
          slug: "headphones",
        },
      ],
    },
    {
      id: 6,
      name: "Books",
      slugs: "books",
      children: [
        {
          id: 7,
          name: "Fiction",
          slugs: "fiction",
          children: [
            {
              id: 8,
              name: "Thrillers",
              slug: "thrillers",
            },
            {
              id: 9,
              name: "Mystery",
              slug: "mystery",
            },
          ],
        },
        {
          id: 10,
          name: "Non-Fiction",
          slug: "non-fiction",
        },
      ],
    },
  ];
  

function createMenu(categories, parentElement) {
    categories.forEach(category => {
        let li = document.createElement("li");
        li.textContent = category.name;
        li.onclick = (e) => {
            e.stopPropagation();
            window.location.href = `http://localhost:5500/${category.slugs}`;
        };
        
        if (category.children) {
            let ul = document.createElement("ul");
            ul.classList.add("submenu");
            createMenu(category.children, ul);
            li.appendChild(ul);
        }
        parentElement.appendChild(li);
    });
}

const menuElement = document.getElementById("categoryMenu");
createMenu(categories, menuElement);