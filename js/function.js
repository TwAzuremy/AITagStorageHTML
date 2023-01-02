/**
 * input debounce
 * @param {Function} fn 
 * @param {Int16Array} delay 
 * @returns 
 */
function debounce(fn, delay = 1000) {
    let timer = null;
    return function () {
        if (timer !== null) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            fn.call(this);
        }, delay);
    }
}

/**
 * add `animation` start animation
 */
function start_storgeCard_animation() {
    storage_card.classList.add('animation');
}

/**
 * switch `mask`
 */
function toggle_mask() {
    mask.classList.toggle('open');
}

/**
 * switch `remark`
 */
function remark_popup() {
    remark.classList.toggle('open');
}

/**
 * switch `add form`
 */
function addForm_popup() {
    addForm.classList.toggle('open');
}

/**
 * switch `addForm_uploadGroup`
 */
function uploadGroup_show() {
    addForm_uploadGroup.classList.toggle('not-allowed');
    addForm_uploadGroup.querySelector('#picPath').classList.toggle('pointEvenNone')
}

/**
 * open `remark popup`
 * @param {String} title 
 * @param {String} content 
 */
function popup_remark(title, content) {
    toggle_mask();
    remark_popup();

    remark.querySelector('.remark-title').innerHTML = title;
    remark.querySelector('.remark-content').innerHTML = content;
}

/**
 * select or clear the content of `textarea`
 * @param {Node} elemnt `textarea node`
 * @param {String} operation `FINAL.COPY`, `FINAL.CLEAR` or `FINAL.WRITE
 * @param {String} text default `EMPTY`
 */
function operation_textarea(elemnt, operation, text = FINAL.EMPTY) {
    if (operation === FINAL.COPY) {
        elemnt.select();
    }

    if (operation === FINAL.CLEAR) {
        elemnt.value = FINAL.EMPTY;
    }

    if (operation === FINAL.WRITE) {
        if (text.trim() === FINAL.EMPTY) {
            return;
        }

        if (elemnt.value.trim() === FINAL.EMPTY) {
            elemnt.value = text;
        } else {
            elemnt.value += `, ${text}`;
        }
    }
}

/**
 * create popup
 * @param {String} text 
 * @param {String} rgb_text default `0, 0, 0'
 */
function create_popup(text, rgb_text = '0, 0, 0') {
    let node = stringToNode(`<a class="popup relative flex2center eject" style="--color: ${rgb_text};">${text}</a>`);
    popup_area.appendChild(node);

    // start the countdown to close
    node.onload = popup_comeout(node);
}

/**
 * string to node
 * @param {String} string 
 * @returns {Node}
 */
function stringToNode(string) {
    const temporary = document.createElement('div');
    temporary.innerHTML = string;

    return temporary.childNodes[0];
}

/**
 * popup window lag time
 * @param {Node} element 
 */
function popup_comeout(element) {
    function remove_eject() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                element.classList.remove('eject');
                resolve(0)
            }, 2000);
        });
    }

    function remove_element() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                popup_area.removeChild(element)
            }, 300);
        });
    }

    remove_eject().then(() => { remove_element() });
}

/**
 * putting strings into the clipborad
 * @param {String} text 
 */
function copyToClipborad(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            create_popup(`${SVG.OK} ${getLanguage('copySuccess')}`, COLOR.SUCCESS);
        }).catch(err => {
            create_popup(`${SVG.RE} ${getLanguage('copyFailure')}`, COLOR.ERROR);
            console.error(err);
        });
}

/**
 * create confirmation box
 * @param {String} title 
 * @param {String} content 
 */
function add_confirm(title, content, table_id) {
    toggle_mask();
    mask.appendChild(stringToNode(TEMPLATES.CONFIRM(title, content, table_id)));
}

/**
 * remove confirmation box
 * @param {Node} element 
 */
function remove_confirm(element) {
    toggle_mask();
    mask.removeChild(element);
}

/**
 * java returned data
 * @param {JSON} data 
 * @param {String} table 
 */
function loading_data(data, table) {
    storage_container.innerHTML = FINAL.EMPTY;
    data.forEach((d, i) => {
        let style = FINAL.EMPTY;
        let tags = FINAL.EMPTY;

        if ((d.front).trim() !== FINAL.EMPTY) {
            tags += d.front;
            style = FINAL.FRONT;
        }

        if ((d.reverse).trim() !== FINAL.EMPTY) {
            tags += (tags.trim() !== FINAL.EMPTY ? FINAL.SEPARATOR : '') + d.reverse;
            style = style === FINAL.FRONT ? FINAL.BOTH : FINAL.REVERSE;
        }

        if (!(d.preImg === undefined)) {
            d.preImg = request_url + '/uploadPic/' + d.preImg
        }

        const d1 = {
            table: table,
            id: d.id,
            title: d.title,
            tags: tags,
            remark: d.remark,
            url: d.preImg
        }

        // max animation speed, to prevent long animation times
        if (i >= 30) {
            i = 30;
        }

        storage_container.innerHTML += TEMPLATES.STORAGE_CARD(d1, style, i);
    });

    storage_info_numbs.innerHTML = data.length + ' tags';
    update_storage_card_listener();
}

/**
 * update the `storage card` listener
 */
function update_storage_card_listener() {
    storage_adds = document.querySelectorAll('.text-add');
    storage_dels = document.querySelectorAll('.tag-buttonGroup .text-empty');

    storage_adds.forEach((storage_add, index) => {
        storage_add.addEventListener('click', () => {
            const isReverse = storage_add.parentElement.parentElement.className.indexOf(FINAL.REVERSE);
            const text = storage_add.parentElement.previousElementSibling.innerHTML;

            if (isReverse !== -1) {
                operation_textarea(reverse_textarea, FINAL.WRITE, text);
                return;
            }

            if (!text.indexOf(FINAL.SEPARATOR)) {
                operation_textarea(front_textarea, FINAL.WRITE, text);
                return;
            }

            let separation = text.split(FINAL.SEPARATOR);
            operation_textarea(front_textarea, FINAL.WRITE, separation[0]);
            operation_textarea(reverse_textarea, FINAL.WRITE, separation[1]);
        });
    });

    storage_dels.forEach((storage_del, index) => {
        storage_del.addEventListener('click', () => {
            add_confirm(
                getLanguage('delTagConfirmTitle'),
                getLanguage('delTagConfirmContext'),
                storage_del.getAttribute('table-id').split('-')
            );
        });
    });
}

/**
 * add result to `search_result`
 * @param {Map} data 
 */
function add_search_result(data) {
    search_result.innerHTML = FINAL.EMPTY;

    for (const key in data) {
        search_result.innerHTML += TEMPLATES.SEARCH_RESULT(key, data[key]);
    }
}

function nightOperation(mode, isPopup = true) {
    var layout_color = getLanguage('lightMode');

    if (mode === 2) {
        // system
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.querySelector('.categoryBtn').classList.add('dark');
            document.querySelector('body').classList.add('dark');
            dark_mode = true;
        }

        layout_color = getLanguage('system');
    }

    if (mode === 0) {
        // day
        document.querySelector('.categoryBtn').classList.remove('dark');
        document.querySelector('body').classList.remove('dark');
        dark_mode = false;

        layout_color = getLanguage('lightMode');
    }

    if (mode === 1) {
        // night
        document.querySelector('.categoryBtn').classList.add('dark');
        document.querySelector('body').classList.add('dark');
        dark_mode = true;

        layout_color = getLanguage('darkMode');
    }

    appearances.forEach(appearance => appearance.classList.remove('select'));
    appearances[mode].classList.add('select');

    if (isPopup) {
        create_popup(`✔ ${getLanguage('appearance')}: ${layout_color}`, COLOR.SUCCESS);
    }
}

function func_switch_languages(data) {
    const hasLangElements = document.querySelectorAll('[data-lang]');

    hasLangElements.forEach(element => {
        var operation = true;
        let value = data[element.dataset.lang]

        if (value == undefined) {
            operation = false;
        }

        if (operation && (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA')) {
            element.setAttribute('placeholder', data[element.dataset.lang])
        } else if (operation) {
            element.innerHTML = data[element.dataset.lang]
        }
    })
}

function bulkDel_select(element = undefined) {
    storage_info.classList.remove('bulkDelShow')

    if (element != undefined) {
        element.classList.toggle('bulkDel');
    } else {
        return;
    }

    const allSelect = document.querySelectorAll('.tag-item.bulkDel');

    if (allSelect.length > 0) {
        storage_info.classList.add('bulkDelShow')

        bulkDel_numbs.innerHTML = allSelect.length + ' selected';
    }
}