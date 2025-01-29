function addDropDownEventListener(menu, content) {
    content.className = 'dropdown-content';
    menu.onmouseenter = ()=> {
        content.style.display = 'block';
    }
    menu.onmouseleave = ()=> {
        content.style.display = 'none';
    }

    let home = document.getElementById('home');
    let about = document.getElementById('about');
    let settings = document.getElementById('settings');

    home.onclick = ()=> {
        alert('home');
    }
    about.onclick = ()=> {
        alert('about');
    }
    settings.onclick = ()=> {
        alert('settings');
    }
}

export { addDropDownEventListener };