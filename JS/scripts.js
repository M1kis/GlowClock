const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = menu.querySelectorAll('li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        toggleDropdown(select, caret, menu);
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            if (option.id === "wallpaper-menu" || option.id === "font-menu") {
                updateSelectedOption(option, select, caret, menu, options);
                
                if (option.id === "wallpaper-menu") {
                    applyBackground(option.getAttribute('data-value'));
                } else if (option.id === "font-menu") {
                    applyFont(option.getAttribute('data-value'));
                }
            }
        });
    });
});

function toggleDropdown(select, caret, menu) {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
}

function updateSelectedOption(option, select, caret, menu, options) {
    select.classList.remove('select-clicked');
    caret.classList.remove('caret-rotate');
    menu.classList.remove('menu-open');

    options.forEach(o => o.classList.remove('active'));
    option.classList.add('active');
}

function applyBackground(value) {
    const body = document.getElementById('body');
    const aboutMe = document.getElementById('about-me');
    const select = document.querySelector('.select');
    const menu = document.querySelector('.menu');

    const styles = {
        "solid-color": {
            body: { backgroundColor: '#1a1a2e', backgroundImage: 'none' },
            aboutMe: { color: 'white' },
            select: { backgroundColor: '#1f1f36', border: '1px solid #1f1f36', color: 'white' },
            menu: { backgroundColor: '#2c2c4d', border: '1px solid #2c2c4d' }
        },
        "abstract": {
            body: { backgroundColor: 'transparent', backgroundImage: 'url("./img/1080p/abstract-background-1080.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' },
            aboutMe: { color: 'white' },
            select: { backgroundColor: '#48b6ff', border: '1px solid #48b6ff', color: 'white' },
            menu: { backgroundColor: '#3887bb', border: '1px solid #3887bb' }
        },
        "topographic": {
            body: { backgroundColor: 'transparent', backgroundImage: 'url("./img/1080p/topographic-background-1080.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' },
            aboutMe: { color: 'white' },
            select: { backgroundColor: '#32747c', border: '1px solid #32747c', color: 'white' },
            menu: { backgroundColor: '#609fa6', border: '1px solid #609fa6' }
        }
    };

    const style = styles[value];

    Object.assign(body.style, style.body);
    Object.assign(aboutMe.style, style.aboutMe);
    Object.assign(select.style, style.select);
    Object.assign(menu.style, style.menu);
}

function applyFont(value) {
    const body = document.getElementById('body');
    const fonts = {
        "montserrat": 'Montserrat, sans-serif',
        "pacifico": 'Pacifico, cursive',
        "sankofa": 'Sankofa Display, sans-serif'
    };

    body.style.fontFamily = fonts[value] || 'inherit';
    console.log('Font applied:', value);
}