const categories = [
    {
      id: 1,
      name: "Chuyên mục 1",
      parent: 0,
      slug: "chuyen-muc-1",
    },
    {
      id: 2,
      name: "Chuyên mục 2",
      parent: 0,
      slug: "chuyen-muc-2",
    },
    {
      id: 3,
      name: "Chuyên mục 3",
      parent: 0,
      slug: "chuyen-muc-3",
    },
    {
      id: 4,
      name: "Chuyên mục 2.1",
      parent: 2,
      slug: "chuyen-muc-2-1",
    },
    {
      id: 5,
      name: "Chuyên mục 2.2",
      parent: 2,
      slug: "chuyen-muc-2-2",
    },
    {
      id: 6,
      name: "Chuyên mục 2.3",
      parent: 2,
      slug: "chuyen-muc-2-3",
    },
    {
      id: 7,
      name: "Chuyên mục 3.1",
      parent: 3,
      slug: "chuyen-muc-3-1",
    },
    {
      id: 8,
      name: "Chuyên mục 3.2",
      parent: 3,
      slug: "chuyen-muc-3-2",
    },
    {
      id: 9,
      name: "Chuyên mục 3.3",
      parent: 3,
      slug: "chuyen-muc-3-3",
    },
    {
      id: 10,
      name: "Chuyên mục 2.2.1",
      parent: 5,
      slug: "chuyen-muc-2-2-1",
    },
    {
      id: 11,
      name: "Chuyên mục 2.2.2",
      parent: 5,
      slug: "chuyen-muc-2-2-2",
    },
  ];
  
const createSubmenu = (parentId) => {
    const submenu = document.createElement("ul");
    submenu.classList.add("submenu");

    categories.filter(category => category.parent === parentId).forEach(category => {
        const submenuItem = document.createElement("li");
        submenuItem.textContent = category.name;
        submenuItem.classList.add("submenu-item");
        submenuItem.setAttribute("data-slug", category.slug);

        submenuItem.addEventListener("click", function (e) {
            e.stopPropagation();
            window.location.href = `/${category.slug}`;
        });

        const childMenu = createSubmenu(category.id);
        if (childMenu.childNodes.length > 0) {
            submenuItem.appendChild(childMenu);
        }

        submenu.appendChild(submenuItem);
    });

    return submenu;
};

const createMenu = () => {
    const menuContainer = document.getElementById("menu");
    const menu = document.createElement("ul");

    categories.filter(category => category.parent === 0).forEach(category => {
        const menuItem = document.createElement("li");
        menuItem.textContent = category.name;
        menuItem.classList.add("menu-item");
        menuItem.setAttribute("data-slug", category.slug);

        menuItem.addEventListener("click", function (e) {
            e.stopPropagation();
            window.location.href = `/${category.slug}`;
        });

        const submenu = createSubmenu(category.id);
        if (submenu.childNodes.length > 0) {
            menuItem.appendChild(submenu);
        }

        menu.appendChild(menuItem);
    });

    menuContainer.appendChild(menu);
};

createMenu();
