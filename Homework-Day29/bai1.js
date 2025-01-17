const menu = [
    { id: 1, name: 'Home', parentId: 0 },
    { id: 2, name: 'About', parentId: 0 },
    { id: 3, name: 'News', parentId: 0 },
    { id: 4, name: 'Products', parentId: 0 },
    { id: 5, name: 'Contact', parentId: 0 },
    { id: 6, name: 'T-Shirt', parentId: 4 },
    { id: 7, name: 'Jean', parentId: 4 },
    { id: 8, name: 'Skirt', parentId: 4 },
];
  
const buildMenu = (menu) => {
    if (!Array.isArray(menu) ) {
        console.log("Invalid value");
        return;
    }

    const map = menu.reduce((acc, cur) => {
        const temp = cur.parentId;
        if (!acc[temp]) {
            acc[temp] = [];
        }
        acc[temp].push(cur); 
        return acc;
    }, {});

    const createMenu = (parentId) => {
        const items = map[parentId] || [];
        if (items.length === 0) return ''; 

        let menuItem = `<ul>`;
        items.forEach(item => {
            const mainMenu = parentId === 0;
            const fontSize = mainMenu ? '24px' : '20px';

            menuItem += `<li><a style="font-size: ${fontSize}" href="#">${item.name}</a>`;
            menuItem += createMenu(item.id); 
            menuItem += `</li>`;
        });
        menuItem += `</ul>`; 
        return menuItem; 
    };

    return createMenu(0); 
};

const menuItem = buildMenu(menu);
document.body.innerHTML = menuItem;
