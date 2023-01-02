/**
 * request data and updating pages
 * @param {*} table 
 */
function update_data(table) {
    $.ajax({
        url: `${request_url}/getData`,
        type: 'POST',
        dataType: 'json',
        data: {
            'table': table
        },
        success: function (data) {
            storage_card.classList.remove('animation');

            function load() {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (data.length === 0) {
                            storage_container.innerHTML = TEMPLATES.EMPTY_IMG;
                            return;
                        }

                        loading_data(data, table);
                        resolve(0);
                    }, 400);
                });
            }

            function start_animation() {
                return new Promise((resolve, reject) => {
                    setTimeout(function () {
                        start_storgeCard_animation();
                    }, 100);
                });
            }

            load().then(() => { start_animation() });
        },
        error: function (err) {
            create_popup(`${SVG.RE} 请求失败`, COLOR.ERROR);
            storage_container.innerHTML = TEMPLATES.EMPTY_IMG;
            console.error(err);
        }
    });
}

/**
 * add a tag. if the data category added is the current page, refresh the page.
 * @param {FormData} data 
 */
function add_tag(data) {
    if (data.get('table').trim() === FINAL.EMPTY
        || data.get('title').trim() === FINAL.EMPTY
        || (data.get('front').trim() === FINAL.EMPTY && data.get('reverse').trim() === FINAL.EMPTY)) {
        return;
    }

    $.ajax({
        url: `${request_url}/addTag`,
        type: 'POST',
        dataType: 'json',
        data: data,
        processData: false,
        contentType: false,
        success: function (rows) {
            create_popup(`${SVG.OK} 添加成功`, COLOR.SUCCESS);
            if (data.get('table') === view_category) {
                update_data(data.get('table'));
            }
        },
        error: function (err) {
            create_popup(`${SVG.RE} 添加失败`, COLOR.ERROR);
            console.error(err);
        }
    });
}

/**
 * delete a tag. if the data category added is the current page, refresh the page.
 * @param {String} table 
 * @param {String} id 
 */
function del_tag(table, id) {
    if (table.trim() === FINAL.EMPTY || id.trim() === FINAL.EMPTY) {
        return;
    }

    $.ajax({
        url: `${request_url}/delTag`,
        type: 'POST',
        dataType: 'json',
        data: {
            'table': table,
            'id': id,
        },
        success: function (rows) {
            create_popup(`${SVG.OK} 删除成功`, COLOR.SUCCESS);
            if (table === view_category) {
                update_data(table);
            }
        },
        error: function (err) {
            create_popup(`${SVG.RE} 删除失败`, COLOR.ERROR);
            console.error(err);
        }
    });
}

/**
 * search for `title` or `tags` with tag
 * @param {String} fuzzy 
 * @param {String} mode 
 */
function fuzzy_search(fuzzy, mode = SEARCH_MODE.TITLE) {
    $.ajax({
        url: `${request_url}/fuzzySearch`,
        type: 'POST',
        dataType: 'json',
        data: {
            'fuzzy': fuzzy,
            'mode': mode.toLowerCase()
        },
        success: function (data) {
            if (Object.keys(data).length === 0) {
                search_result.innerHTML = TEMPLATES.EMPTY_IMG;
                return;
            }

            add_search_result(data);
        },
        error: function (err) {
            create_popup(`${SVG.RE} 搜索失败`, COLOR.ERROR);
            search_result.innerHTML = TEMPLATES.EMPTY_IMG;
            console.error(err);
        }
    });
}

/**
 * bulk add data
 * @param {JSON} data 
 */
function bulkAdd(data) {
    if (Object.keys(data).length === 0) {
        return;
    }

    $.ajax({
        url: `${request_url}/bulkAdd`,
        type: 'POST',
        dataType: 'json',
        data: {
            'data': data
        },
        success: function (rows) {
            create_popup(`${SVG.OK} 成功插入 ${rows} 条`, COLOR.SUCCESS);
        },
        error: function (err) {
            create_popup(`${SVG.RE} 添加失败`, COLOR.ERROR);
            console.error(err);
        }
    });
}

/**
 * Operation configuration
 * @param {String} key 
 * @param {Object} value 
 * @param {String} operation default `FINAL.CONFIGOPERATION_GET`
 */
function config_operation(key, value, operation = FINAL.CONFIGOPERATION_GET) {
    $.ajax({
        url: `${request_url}/configOperation`,
        type: 'POST',
        dataType: 'json',
        data: {
            'key': key,
            'value': value,
            'operation': operation
        },
        success: function (data) {
            switch (key) {
                case CONFIG.APPEARANCE:
                    nightOperation(parseInt(data)); break;
                case CONFIG.LANGUAGE:
                    if (operation === FINAL.CONFIGOPERATION_GET) {
                        switch_languages(data)

                        languages.forEach(language => language.classList.remove('select'))
                        languages[language_list.indexOf(data)].classList.add('select')
                    }

                    global_lang = data

                    break;
            }
        },
        error: function (err) {
            create_popup(`${SVG.RE} 操作失败`, COLOR.ERROR);
            console.error(err)
        }
    })
}

/**
 * switch languages
 * @param {String} lang 
 */
function switch_languages(lang = 'zh_cn') {
    $.ajax({
        url: `lang/${lang}.json`,
        dataType: 'json',
        success: function (data) {
            func_switch_languages(data)
        },
        error: function (err) {
            console.error(err)
        }
    })
}
