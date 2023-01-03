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
 * putting strings into the clipborad
 * @param {String} text 
 */
function copyToClipborad(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            createToast(TOAST.SUCCESS, getLanguage('copySuccess'));
        }).catch(err => {
            createToast(TOAST.ERROR, getLanguage('copyFailure'));
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
        createToast(TOAST.SUCCESS, `${getLanguage('appearance')}-${layout_color}`)
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
    }

    bulkDel_numbs.innerHTML = allSelect.length + ' selected';
}

const toastDetails = {
    timer: 5000,
    success: {
        svg: `<svg class="success_icon" width="32px" height="32.00px" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor"
                    d="M512 53.248c129.707008 3.412992 237.739008 48.299008 324.096 134.656S967.339008 382.292992 970.752 512c-3.412992 129.707008-48.299008 237.739008-134.656 324.096S641.707008 967.339008 512 970.752c-129.707008-3.412992-237.739008-48.299008-324.096-134.656S56.660992 641.707008 53.248 512c3.412992-129.707008 48.299008-237.739008 134.656-324.096S382.292992 56.660992 512 53.248z m-57.344 548.864l-101.376-101.376c-8.192-7.508992-17.579008-11.264-28.16-11.264-10.580992 0-19.796992 3.924992-27.648 11.776-7.851008 7.851008-11.776 16.896-11.776 27.136s3.755008 19.456 11.264 27.648l130.048 130.048c7.508992 7.508992 16.724992 11.264 27.648 11.264 10.923008 0 20.139008-3.755008 27.648-11.264l269.312-269.312c10.24-10.24 13.483008-22.699008 9.728-37.376-3.755008-14.676992-12.971008-23.892992-27.648-27.648-14.676992-3.755008-27.136-0.512-37.376 9.728L454.656 602.112z" />
            </svg>`,
        text: 'Success: ',
        color: '--success'
    },
    error: {
        svg: `<svg class="error_icon" width="32px" height="32.00px" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor"
                    d="M512 64c126.677333 3.328 232.192 47.146667 316.501333 131.498667C912.853333 279.808 956.672 385.28 960 512c-3.328 126.677333-47.146667 232.192-131.498667 316.501333C744.192 912.853333 638.72 956.672 512 960c-126.677333-3.328-232.192-47.146667-316.501333-131.498667C111.146667 744.192 67.328 638.72 64 512c3.328-126.677333 47.146667-232.192 131.498667-316.501333C279.808 111.146667 385.28 67.328 512 64z m0 394.026667L407.978667 354.005333a37.802667 37.802667 0 0 0-27.477334-11.989333 37.034667 37.034667 0 0 0-27.008 11.52c-7.68 7.637333-11.52 16.64-11.477333 26.965333 0 10.368 4.010667 19.541333 11.989333 27.52L458.026667 512l-104.021334 104.021333a37.802667 37.802667 0 0 0-11.989333 27.477334c0 10.325333 3.84 19.328 11.52 27.008 7.637333 7.68 16.64 11.52 26.965333 11.477333a37.930667 37.930667 0 0 0 27.52-11.989333L512 565.973333l104.021333 104.021334c10.666667 9.984 22.954667 13.184 36.992 9.514666a34.773333 34.773333 0 0 0 26.453334-26.496 37.205333 37.205333 0 0 0-9.472-36.992L565.973333 512l104.021334-104.021333a37.802667 37.802667 0 0 0 11.989333-27.477334 37.034667 37.034667 0 0 0-11.52-27.008 36.778667 36.778667 0 0 0-26.965333-11.477333 37.930667 37.930667 0 0 0-27.52 11.989333L512 458.026667z"
                    fill-opacity=".96" />
            </svg>`,
        text: 'Error: ',
        color: '--error'
    },
    warning: {
        svg: `<svg class="warning_icon" width="32px" height="32.00px" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor"
                    d="M934.4 770.133333L605.866667 181.333333C586.666667 147.2 550.4 128 512 128s-74.666667 21.333333-93.866667 53.333333L89.6 770.133333c-19.2 34.133333-19.2 76.8 0 110.933334S145.066667 938.666667 183.466667 938.666667h657.066666c40.533333 0 74.666667-21.333333 93.866667-57.6 19.2-34.133333 19.2-76.8 0-110.933334zM480 362.666667c0-17.066667 14.933333-32 32-32s29.866667 12.8 32 29.866666V640c0 17.066667-14.933333 32-32 32s-29.866667-12.8-32-29.866667V362.666667zM512 832c-23.466667 0-42.666667-19.2-42.666667-42.666667s19.2-42.666667 42.666667-42.666666 42.666667 19.2 42.666667 42.666666-19.2 42.666667-42.666667 42.666667z" />
            </svg>`,
        text: 'Warning: ',
        color: '--warning'
    },
    info: {
        svg: `<svg class="info_icon" width="32px" height="32.00px" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor"
                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272z m-32-344c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" />
            </svg>`,
        text: 'Info: ',
        color: '--info'
    }
}

const removeToast = (toast) => {
    toast.classList.add('hide')
    if (toast.timeoutId) clearTimeout(toast.timeoutId)
    setTimeout(() => toast.remove(), 600);
}

const createToast = (id, content) => {
    const { svg, text, color } = toastDetails[id];
    const toast = document.createElement('li');
    toast.className = `toast ${id}`;
    toast.style = `--color: var(${color});`;
    toast.innerHTML = `<div class="column">
                            ${svg}
                            <span>${text + content}</span>
                        </div>
                        <svg onclick="removeToast(this.parentElement)" class="close_icon" width="32px" height="32.00px" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor"
                                d="M662.869333 723.2L512 572.330667 361.130667 723.2a42.794667 42.794667 0 0 1-60.330667 0 42.794667 42.794667 0 0 1 0-60.330667L451.669333 512 300.8 361.130667a42.794667 42.794667 0 0 1 0-60.330667 42.794667 42.794667 0 0 1 60.330667 0L512 451.669333l150.869333-150.869333a42.794667 42.794667 0 0 1 60.330667 0 42.794667 42.794667 0 0 1 0 60.330667L572.330667 512l150.869333 150.869333a42.794667 42.794667 0 0 1 0 60.330667 42.794667 42.794667 0 0 1-60.330667 0z" />
                        </svg>`
    notifications.appendChild(toast);
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer)
}