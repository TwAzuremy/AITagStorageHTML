document.addEventListener('contextmenu', e => {
    e.preventDefault();

    // 获取鼠标坐标
    let x = e.clientX,
        y = e.clientY,
        // 获取浏览器窗口 宽度 / 高度
        winWidth = window.innerWidth,
        winHeight = window.innerHeight,
        // 获取菜单 宽度 / 高度
        cmWidth = rightClickContext.offsetWidth,
        cmHeight = rightClickContext.offsetHeight;

    hasSubMenu.forEach(has => {
        // 二级菜单防越界
        if (x > (winWidth - cmWidth - has.offsetWidth)) {
            has.style.left = `-${has.offsetWidth - 2}px`;
        } else {
            has.style.left = "100%";
        }
    })

    // 菜单防越界
    x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight : y;

    // 跟随鼠标位置
    rightClickContext.style.left = `${x}px`;
    rightClickContext.style.top = `${y}px`;
    rightClickContext.classList.add('visible');
})

document.addEventListener('click', () => {
    rightClickContext.classList.remove('visible');
})

languages.forEach((language, index) => {
    language.addEventListener('click', () => {
        languages.forEach(language => language.classList.remove('select'))
        language.classList.add('select')

        global_lang = language_list[index]
        config_operation(CONFIG.LANGUAGE, global_lang, FINAL.CONFIGOPERATION_SET)
        switch_languages(global_lang)
    })
})

appearances.forEach((appearance, index) => {
    appearance.addEventListener('click', () => {
        config_operation(CONFIG.APPEARANCE, index, FINAL.CONFIGOPERATION_SET)
    })
})

settings.addEventListener('click', () => {
    let url_p = window.location.origin + window.location.pathname + '#/settings'

    window.history.pushState(null, null, url_p);
    location.reload()
})
