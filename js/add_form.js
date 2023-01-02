addForm_select.addEventListener('click', () => {
    addForm_select.classList.toggle('open');
})

addForm_select_options.forEach((addForm_select_option, index) => {
    addForm_select_option.addEventListener('click', () => {
        addForm_category.value = addForm_select_option.innerHTML;
        addForm_category.setAttribute('tagName', addForm_select_option.getAttribute('tagName'));
        addForm_select.click();
    });
});

addForm_close.addEventListener('click', () => {
    toggle_mask();
    addForm_popup();
});

addForm_cancel.addEventListener('click', () => {
    addForm_close.click();
    addForm_remove_allError();
    addForm_clear();
    clear_more();
});

addForm_picPath.addEventListener('click', () => {
    addForm_file.click();
});

addForm_file.addEventListener('change', (e) => {
    addForm_picPath.value = addForm_file.value;
});

addForm_confirm.addEventListener('click', () => {
    addForm_remove_allError();
    var integrity = true;

    if (Object.keys(more_add_data).length > 0) {
        bulkAdd(more_add_data);
        addForm_cancel.click();

        return;
    }

    if (addForm_title.value.trim() === '') {
        addForm_title.classList.add('error');
        integrity = false;
    }

    if (addForm_category.value.trim() === '') {
        addForm_category.classList.add('error');
        integrity = false;
    }

    if (addForm_front.value.trim() === '' && addForm_reverse.value.trim() === '') {
        addForm_front.classList.add('error');
        addForm_reverse.classList.add('error');
        integrity = false;
    }

    if (integrity) {
        const formData = new FormData();
        formData.append('table', addForm_category.getAttribute('tagName'));
        formData.append('title', addForm_title.value);
        formData.append('front', addForm_front.value);
        formData.append('reverse', addForm_reverse.value);
        formData.append('remark', addForm_remark.value);
        formData.append('file', addForm_file.files[0]);

        add_tag(formData);

        addForm_cancel.click();
    }
});

/**
 * clear the `error` on the className of the node
 */
function addForm_remove_allError() {
    addForm_title.classList.remove('error');
    addForm_category.classList.remove('error');
    addForm_front.classList.remove('error');
    addForm_reverse.classList.remove('error');
}

/**
 * clear input
 */
function addForm_clear() {
    addForm_title.value = FINAL.EMPTY;
    addForm_category.value = FINAL.EMPTY;
    addForm_front.value = FINAL.EMPTY;
    addForm_reverse.value = FINAL.EMPTY;
    addForm_remark.value = FINAL.EMPTY;
    addForm_file.value = FINAL.EMPTY;
    addForm_picPath.value = FINAL.EMPTY;
}

more_add_switch.addEventListener('click', () => {
    addForm.classList.toggle('more');
});

// more
tag_add_button.addEventListener('click', () => {
    if (more_button_prohibition) {
        return;
    }

    addForm_remove_allError();
    var integrity = true;

    if (addForm_title.value.trim() === '') {
        addForm_title.classList.add('error');
        integrity = false;
    }

    if (addForm_category.value.trim() === '') {
        addForm_category.classList.add('error');
        integrity = false;
    }

    if (addForm_front.value.trim() === '' && addForm_reverse.value.trim() === '') {
        addForm_front.classList.add('error');
        addForm_reverse.classList.add('error');
        integrity = false;
    }

    if (integrity) {
        add_more({
            'table': addForm_category.value,
            'table_eng': addForm_category.getAttribute('tagName'),
            'title': addForm_title.value,
            'front': addForm_front.value,
            'reverse': addForm_reverse.value,
            'remark': addForm_remark.value
        }, getNumb() + 1);

        addForm_clear();
        setting_more_numbs();
    }
});

function clear_more() {
    more_add_data = {};
    tagForm_storage.innerHTML = FINAL.EMPTY;
    setting_more_numbs();
}

/**
 * del the node and clear the data
 * @param {Node} node 
 */
function remove_more(node) {
    tagForm_storage.removeChild(node);
    delete more_add_data[node.getAttribute('numb')];

    setting_more_numbs();
}

/**
 * edit data
 * @param {Node} node 
 */
function edit_more(node) {
    const data = more_add_data[node.getAttribute('numb')];

    addForm_title.value = data.title;
    addForm_category.value = data.table;
    addForm_front.value = data.front;
    addForm_reverse.value = data.reverse;
    addForm_remark.value = data.remark;

    remove_more(node);
    setting_more_numbs();
}

/**
 * add more items
 * @param {JSON} data 
 * @param {Number} id 
 */
function add_more(data, id) {
    more_add_data[id] = data;

    tagForm_storage.innerHTML += TEMPLATES.MORE_ADD(id, data.title, data.table);
    addForm_clear();
}

function setting_more_numbs() {
    const numb = getNumb();
    more_add_numbs.innerHTML = numb + ' / 100';

    if (numb >= 100) {
        tag_add_button.classList.add('prohibition');
        more_button_prohibition = true;
    } else {
        tag_add_button.classList.remove('prohibition');
        more_button_prohibition = false;
    }
}

function getNumb() {
    return tagForm_storage.querySelectorAll('.more-info').length;
}