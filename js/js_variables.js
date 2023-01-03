/**
 * Tags
 */
class TAGS {
    static TEMPLATES = 'templates';
    static FRONT = 'front';
    static REVERSE = 'reverse';
    static HEADWEAR = 'headwear';
    static HANDWEAR = 'handwear';
    static DRESSES = 'dresses';
    static SKIRT = 'skirt';
    static PANTS = 'pants';
    static SOCKS = 'socks';
    static SHOES = 'shoes';
    static ITEMS = 'items';
    static HEAD = 'head';
    static CHEST = 'chest';
    static ARMS = 'arms';
    static LEGS = 'legs';
    static POSES = 'poses';
    static HAIR = 'hair';
    static EYES = 'eyes';
    static FACE = 'face';
    static EXPRESSION = 'expression';
    static BACKGROUND = 'background';
    static BUILDING = 'building';
    static STYLE = 'style';
    static ATTRIBUTES = 'attributes';
    static OTHER = 'other';
}

/**
 * config model
 */
class CONFIG {
    static APPEARANCE = 'appearance';
    static LANGUAGE = 'language';
}

/**
 * search model
 */
class SEARCH_MODE {
    static TITLE = 'TITLE';
    static TAGS = 'TAGS';
}

// Variables
var dark_mode = false;
var view_category = TAGS.TEMPLATES;
var fuzzy_search_model = SEARCH_MODE.TITLE;
var more_add_data = {};
var more_add_i = 0;
var more_button_prohibition = false;
const request_url = 'http://localhost:8080';
var global_lang = 'zh_cn';
const language_list = [
    'zh_cn', 'zh_tw', 'en_us', 'ja_jp'
];
const bulkDelList = [];

/**
 * Constants
 */
class FINAL {
    static EMPTY = '';
    static COPY = 'COPY';
    static CLEAR = 'CLEAR';
    static WRITE = 'WRITE';
    static FRONT = 'FRONT';
    static REVERSE = 'REVERSE';
    static BOTH = 'BOTH';
    static SEPARATOR = '::';
    static CONFIGOPERATION_GET = 'GET';
    static CONFIGOPERATION_SET = 'SET';
}

/**
 * toast
 */
class TOAST {
    static SUCCESS = 'success';
    static ERROR = 'error';
    static WARNING = 'warning';
    static INFO = 'info';
}

/**
 * Color
 */
class COLOR {
    static ERROR = '255, 64, 64' /* #ff4040 */;
    static SUCCESS = '107, 208, 137' /* #6bd089 */;
    static WARN = '255, 250, 153' /* #fffa99 */;
}

/**
 * Svg
 */
class SVG {
    static OK = '<svg class="fixed_small_svg" width="32px" height="32.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M512 22.144c-271.008 0-490.656 219.296-490.656 489.856s219.68 489.856 490.656 489.856 490.656-219.296 490.656-489.856c0-270.56-219.68-489.856-490.656-489.856l0 0zM781.792 394.592l-315.872 322.688c-14.528 14.816-38.112 14.816-52.64 0l-171.104-174.784c-14.56-14.88-14.56-38.944 0-53.792s38.112-14.88 52.64 0l144.768 147.904 289.568-295.84c14.56-14.848 38.08-14.848 52.64 0s14.528 38.944-0.032 53.792l0 0z" /></svg>';
    static RE = '<svg class="fixed_small_svg" width="32px" height="31.97px" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M513.344 0a512 512 0 1 0 0 1024 512 512 0 0 0 0-1024z m226.048 674.624l-54.528 56.896-171.52-164.928-171.392 164.928-54.592-56.896L456.576 512 287.36 349.312l54.592-56.768 171.392 164.8 171.52-164.8 54.528 56.768L570.176 512l169.216 162.624z" /></svg>';
    /**
     * @param {String[]} table_id 
     * @returns 
     */
    static CONFIRM_OK = function (table_id) {
        return `<a class="confirm-ok-button iconText_button flex1 flex2center" onclick="{remove_confirm(this.parentElement.parentElement); del_tag('${table_id[0]}', '${table_id[1]}');}">${this.OK}<span class="button_text">${getLanguage('confirm')}</span></a>`;
    }
    static CONFIRM_CANCEL = function () {
        return `<a class="confirm-cancel-button iconText_button error_button flex1 flex2center" onclick="remove_confirm(this.parentElement.parentElement)">${this.RE}<span class="button_text">${getLanguage('cancel')}</span></a>`;
    }
    static TAG_ITEM_REMARK = '<svg class="fixed_svg" width="32px" height="32.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m-32 192h64v64h-64v-64z m160 512H384v-64h96V458.4L400.8 480 384 418.4 511.2 384H544v320h96v64z" /></svg>';
    static TAG_ITEM_COPY = '<svg class="fixed_svg" width="32px" height="32.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M866.461538 39.384615H354.461538c-43.323077 0-78.769231 35.446154-78.76923 78.769231v39.384616h472.615384c43.323077 0 78.769231 35.446154 78.769231 78.76923v551.384616h39.384615c43.323077 0 78.769231-35.446154 78.769231-78.769231V118.153846c0-43.323077-35.446154-78.769231-78.769231-78.769231z m-118.153846 275.692308c0-43.323077-35.446154-78.769231-78.76923-78.769231H157.538462c-43.323077 0-78.769231 35.446154-78.769231 78.769231v590.769231c0 43.323077 35.446154 78.769231 78.769231 78.769231h512c43.323077 0 78.769231-35.446154 78.76923-78.769231V315.076923z m-354.461538 137.846154c0 11.815385-7.876923 19.692308-19.692308 19.692308h-157.538461c-11.815385 0-19.692308-7.876923-19.692308-19.692308v-39.384615c0-11.815385 7.876923-19.692308 19.692308-19.692308h157.538461c11.815385 0 19.692308 7.876923 19.692308 19.692308v39.384615z m157.538461 315.076923c0 11.815385-7.876923 19.692308-19.692307 19.692308H216.615385c-11.815385 0-19.692308-7.876923-19.692308-19.692308v-39.384615c0-11.815385 7.876923-19.692308 19.692308-19.692308h315.076923c11.815385 0 19.692308 7.876923 19.692307 19.692308v39.384615z m78.769231-157.538462c0 11.815385-7.876923 19.692308-19.692308 19.692308H216.615385c-11.815385 0-19.692308-7.876923-19.692308-19.692308v-39.384615c0-11.815385 7.876923-19.692308 19.692308-19.692308h393.846153c11.815385 0 19.692308 7.876923 19.692308 19.692308v39.384615z" /></svg>';
    static TAG_ITEM_ADD = '<svg class="fixed_svg" width="32px" height="32.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M948.313043 442.991304l-369.530435 0 0-369.530435c0-37.843478-31.165217-69.008696-69.008696-69.008696-37.843478 0-69.008696 31.165217-69.008696 69.008696l0 369.530435-369.530435 0c-37.843478 0-69.008696 31.165217-69.008696 69.008696 0 37.843478 31.165217 69.008696 69.008696 69.008696l369.530435 0 0 369.530435c0 37.843478 31.165217 69.008696 69.008696 69.008696 37.843478 0 69.008696-31.165217 69.008696-69.008696l0-369.530435 369.530435 0c37.843478 0 69.008696-31.165217 69.008696-69.008696C1017.321739 474.156522 988.382609 442.991304 948.313043 442.991304z" /></svg>';
    static TAG_ITEM_EMPTY = '<svg class="fixed_svg" width="32px" height="32.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M64 168V112c0-26.6 21.4-48 48-48h224l18.8-37.4c8-16.4 24.6-26.6 42.8-26.6h228.6c18.2 0 34.8 10.2 43 26.6L688 64h224c26.6 0 48 21.4 48 48v56c0 13.2-10.8 24-24 24H88C74.8 192 64 181.2 64 168z m832 112v648c0 53-43 96-96 96H224c-53 0-96-43-96-96V280c0-13.2 10.8-24 24-24h720c13.2 0 24 10.8 24 24z m-544 136c0-17.6-14.4-32-32-32s-32 14.4-32 32v448c0 17.6 14.4 32 32 32s32-14.4 32-32V416z m192 0c0-17.6-14.4-32-32-32s-32 14.4-32 32v448c0 17.6 14.4 32 32 32s32-14.4 32-32V416z m192 0c0-17.6-14.4-32-32-32s-32 14.4-32 32v448c0 17.6 14.4 32 32 32s32-14.4 32-32V416z" /></svg>';
    static TAG_ITEM_OTHER = '<svg class="fixed_svg" width="32px" height="32.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M158.531303 662.460503c82.856937 0 150.45948-67.602542 150.459479-150.45948s-67.602542-150.45948-150.459479-150.459479c-82.857961 0-150.45948 67.602542-150.45948 150.459479s67.602542 150.45948 150.45948 150.45948zM511.962138 662.460503c82.916289 0 150.519854-67.602542 150.519854-150.45948s-67.602542-150.45948-150.519854-150.459479c-82.842611 0-150.445153 67.602542-150.445154 150.459479s67.602542 150.45948 150.445154 150.45948zM865.467674 662.460503c82.857961 0 150.45948-67.602542 150.45948-150.45948s-67.602542-150.45948-150.45948-150.459479c-82.917312 0-150.519854 67.602542-150.519855 150.459479s67.602542 150.45948 150.519855 150.45948z" /></svg>';
    static TAG_ITEM_PIC = function (title, url) {
        return `<a class="text-pic onlyIcon_primary_button" onclick="add_pic_show(stringToNode(TEMPLATES.CREATE_PIC('${title}', '${url}'))); this.parentElement.previousElementSibling.classList.toggle('open'); this.parentElement.classList.toggle('open');"><svg class="fixed_svg" width="32px" height="32.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M853.333333 96c40.533333 0 74.666667 34.133333 74.666667 74.666667v682.666666c0 40.533333-34.133333 74.666667-74.666667 74.666667H170.666667c-40.533333 0-74.666667-34.133333-74.666667-74.666667V170.666667c0-40.533333 34.133333-74.666667 74.666667-74.666667h682.666666zM746.666667 469.333333c-10.666667-12.8-32-14.933333-44.8-2.133333L320 808.533333l-2.133333 2.133334c-19.2 19.2-4.266667 53.333333 23.466666 53.333333h492.8c17.066667-2.133333 29.866667-14.933333 29.866667-32v-196.266667c0-6.4-2.133333-10.666667-6.4-14.933333l-108.8-149.333333-2.133333-2.133334z m-394.666667-202.666666c-46.933333 0-85.333333 38.4-85.333333 85.333333s38.4 85.333333 85.333333 85.333333 85.333333-38.4 85.333333-85.333333-38.4-85.333333-85.333333-85.333333z" /></svg></a>`;
    }
    static SEARCH_RESULT_ARROW = '<a class="jump flex2center"><svg class="fixed_svg" width="32px" height="32.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M446.293333 768a95.146667 95.146667 0 0 1-38.826666-8.533333 75.093333 75.093333 0 0 1-44.8-67.84V332.373333A75.093333 75.093333 0 0 1 407.466667 264.533333a89.6 89.6 0 0 1 94.293333 11.093334l217.6 179.626666a72.533333 72.533333 0 0 1 0 113.493334l-217.6 179.626666a87.893333 87.893333 0 0 1-55.466667 19.626667z" /></svg></a>';
    static MORE_ADD_EDIT = '<a class="edit onlyIcon_primary_button" onclick="edit_more(this.parentElement);"><svg class="fixed_svg" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M400.042667 854.528l374.912-484.821333c20.352-26.112 27.605333-56.32 20.821333-87.125334-5.888-27.989333-23.082667-54.613333-48.896-74.752L683.946667 157.824c-54.784-43.562667-122.709333-38.997333-161.664 11.008l-42.069334 54.613333a16.128 16.128 0 0 0 2.688 22.442667l108.672 87.125333c7.253333 6.912 12.672 16.085333 14.08 27.093334a40.32 40.32 0 0 1-34.901333 44.458666 36.096 36.096 0 0 1-27.605333-7.765333l-111.829334-89.002667a13.354667 13.354667 0 0 0-18.133333 2.304L147.413333 654.08c-17.194667 21.546667-23.082667 49.536-17.194666 76.586667l33.962666 147.242666a17.066667 17.066667 0 0 0 16.725334 13.312l149.418666-1.834666a89.770667 89.770667 0 0 0 69.717334-34.858667z m209.237333-45.866667h243.626667c23.765333 0 43.093333 19.626667 43.093333 43.690667 0 24.106667-19.328 43.648-43.093333 43.648h-243.626667c-23.765333 0-43.093333-19.541333-43.093333-43.648s19.328-43.690667 43.093333-43.690667z" /></svg></a>';
    static MORE_ADD_REMOVE = '<a class="del onlyIcon_primary_button" onclick="remove_more(this.parentElement);"><svg class="fixed_svg" width="32px" height="32.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M64 168V112c0-26.6 21.4-48 48-48h224l18.8-37.4c8-16.4 24.6-26.6 42.8-26.6h228.6c18.2 0 34.8 10.2 43 26.6L688 64h224c26.6 0 48 21.4 48 48v56c0 13.2-10.8 24-24 24H88C74.8 192 64 181.2 64 168z m832 112v648c0 53-43 96-96 96H224c-53 0-96-43-96-96V280c0-13.2 10.8-24 24-24h720c13.2 0 24 10.8 24 24z m-544 136c0-17.6-14.4-32-32-32s-32 14.4-32 32v448c0 17.6 14.4 32 32 32s32-14.4 32-32V416z m192 0c0-17.6-14.4-32-32-32s-32 14.4-32 32v448c0 17.6 14.4 32 32 32s32-14.4 32-32V416z m192 0c0-17.6-14.4-32-32-32s-32 14.4-32 32v448c0 17.6 14.4 32 32 32s32-14.4 32-32V416z"></path></svg></a>';
}

/**
 * Templates
 */
class TEMPLATES {
    /**
     * confirmation box
     * @param {String} title 
     * @param {String} content 
     * @param {String[]} table_id
     * @returns {String} string node
     */
    static CONFIRM = function (title, content, table_id) {
        return `<div class="popup-confirm flex flexColumn absolute">
                    <span class="confirm-title flex1">${title}</span>
                    <p class="confirm-content">${content}</p>
                    <div class="confirm-button-group flex">
                        ${SVG.CONFIRM_OK(table_id)}
                        ${SVG.CONFIRM_CANCEL()}
                    </div>
                </div>`;
    }

    /**
     * storage card
     * @param {JSON} data 
     * @param {String} style 
     * @returns {String} string node
     */
    static STORAGE_CARD = function (data, style, index) {
        return `<li class="tag-item flex2center flexColumn ${style === FINAL.REVERSE ? style : ''}" style="--item-order: ${index + 1};">
                    <h3 class="tag-title" onclick="bulkDel_select(this.parentElement);">${data.title}</h3>
                    <span class="tag-tags">${data.tags}</span>
                    <div class="tag-buttonGroup flex2center relative">`
            + (style !== FINAL.BOTH ? `
                        <a class="text-copy onlyIcon_primary_button"
                            onclick="{copyToClipborad(this.parentElement.parentElement.querySelector('.tag-tags').innerHTML);}">
                            ${SVG.TAG_ITEM_COPY}
                        </a>`: '') + `
                        <a class="text-add onlyIcon_primary_button">
                            ${SVG.TAG_ITEM_ADD}
                        </a>
                        <a class="text-other onlyIcon_primary_button" onclick="this.nextElementSibling.classList.toggle('open'); this.classList.toggle('open');">
                            ${SVG.TAG_ITEM_OTHER}
                        </a>
                        <div class="text-other-button flex2center absolute">
                            ${data.url === undefined || data.url === FINAL.EMPTY ? '' : SVG.TAG_ITEM_PIC(data.title, data.url)}`
            + (data.remark.trim() !== FINAL.EMPTY ? `
                            <a class="text-remark onlyIcon_primary_button"
                                onclick="popup_remark(this.parentElement.parentElement.parentElement.querySelector('.tag-title').innerHTML, '${data.remark}')">
                                ${SVG.TAG_ITEM_REMARK}
                            </a>` : '') + `
                            <a class="text-empty onlyIcon_primary_button" style="--color-primary: var(--color-error);" table-id="${data.table}-${data.id}">
                                ${SVG.TAG_ITEM_EMPTY}
                            </a>
                        </div>
                    </div>
                </li>`;
    }

    /**
     * search result
     * @param {String} title 
     * @param {String} table 
     * @returns {String} string node
     */
    static SEARCH_RESULT = function (title, table) {
        return `<div class="result flex flex-aic relative" onclick="jumpToTabs('${table}')">
                    <span class="title flex1">${title}</span>
                    ${SVG.SEARCH_RESULT_ARROW}
                </div>`;
    }

    /**
     * empty img
     * @returns {String} string node
     */
    static EMPTY_IMG = `<div class="empty flex2center">
                            <img src="img/empty.png" alt="empty">
                        </div>`;

    /**
     * more_add area item
     * @param {String} title 
     * @param {String} table 
     * @returns {String} string node
     */
    static MORE_ADD = function (id, title, table) {
        return `<div class="more-info flex flex-aic" numb="${id}">
                    <h4 class="more-title flex1">${title}</h4>
                    <span class="more-info-table">${table}</span>
                    ${SVG.MORE_ADD_EDIT}
                    ${SVG.MORE_ADD_REMOVE}
                </div>`;
    }

    /**
     * 
     * @param {String} title 
     * @param {String} url 
     * @returns {String} string node
     */
    static CREATE_PIC = function (title, url) {
        return `<div class="pic-window flex flexColumn absolute">
                    <div class="dragging-top flex flex-aic closing">
                        <h3 class="dragging-title flex1">${title}</h3>
                        <a class="pic-close close_icon_button" onclick="remove_pic_show(this.parentElement.parentElement);">
                            <svg class="fixed_small_svg" width="24px" height="24px" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor"
                                    d="M934.184927 199.723787 622.457206 511.452531l311.727721 311.703161c14.334473 14.229073 23.069415 33.951253 23.069415 55.743582 0 43.430138-35.178197 78.660524-78.735226 78.660524-21.664416 0-41.361013-8.865925-55.642275-23.069415L511.149121 622.838388 199.420377 934.490384c-14.204513 14.20349-33.901111 23.069415-55.642275 23.069415-43.482327 0-78.737272-35.230386-78.737272-78.660524 0-21.792329 8.864902-41.513486 23.094998-55.743582l311.677579-311.703161L88.135828 199.723787c-14.230096-14.255679-23.094998-33.92567-23.094998-55.642275 0-43.430138 35.254945-78.762855 78.737272-78.762855 21.741163 0 41.437761 8.813736 55.642275 23.069415l311.727721 311.727721L822.876842 88.389096c14.281261-14.255679 33.977859-23.069415 55.642275-23.069415 43.557028 0 78.735226 35.332716 78.735226 78.762855C957.254342 165.798117 948.5194 185.468109 934.184927 199.723787" />
                            </svg>
                        </a>
                    </div>
                    <div class="pic-area flex1 relative">
                        <img class="absolute" src="${url}" alt="${title}-pic">
                    </div>
                </div>`;
    }
}

/**
 * get values for the corresponding language
 * @param {String} key_lang 
 * @returns 
 */
function getLanguage(key_lang) {
    let value;

    $.ajax({
        url: `lang/${global_lang}.json`,
        dataType: 'json',
        async: false,
        success: function (data) {
            value = data[key_lang]
        },
        error: function (err) {
            console.error(err)
        }
    })

    return value;
}

// body
const body = document.querySelector('body');

// sidebar
const categoryBtns = document.querySelectorAll('.categoryBtn');
const sub_sidebars = document.querySelectorAll('.sub_sidebar');

// textarea
const front_textarea = document.querySelector('#front');
const reverse_textarea = document.querySelector('#reverse');

// storage
const storage_card = document.querySelector('.storage-card');
const storage_container = storage_card.querySelector('.storage-container');
const storage_info = document.querySelector('.storage-info');
const storage_info_numbs = storage_info.querySelector('.info-numbs');
const storage_grid_button = storage_info.querySelector('.grid_button');
const storage_column_button = storage_info.querySelector('.column_button');
const bulkDel_numbs = storage_info.querySelector('.bulkDel-numbs');
const bulkDel_button = storage_info.querySelector('.bulkDel_button');
var storage_adds;
var storage_dels;

// search
const search_body = document.querySelector('.search-body');
const search_result = search_body.querySelector('.search-result');
const search_expand = search_body.querySelector('.search-switch-button');
const search_input = search_body.querySelector('#search');
const search_clear = search_body.querySelector('.search-input-clear');
const search_model = search_body.querySelector('.search-model');
const search_radios = search_model.querySelectorAll('.input-radio');

// mask
const mask = document.querySelector('.mask');

// popup remark
const remark = mask.querySelector('.popup-remark');

// popup add form
const addForm = mask.querySelector('.popup-addTagForm');
const addForm_close = addForm.querySelector('.popup-title-col .addTagForm-close');
const addForm_cancel = addForm.querySelector('.button-group .tag-cancel-button');
const addForm_confirm = addForm.querySelector('.button-group .tag-confirm-button');
const addForm_select = addForm.querySelector('.select-group .tagSelect #tagSelect');
const addForm_select_options = addForm.querySelectorAll('.select-group .tagSelect .tagOptions .tagOption');

// popup add form / input and textarea
const addForm_title = addForm.querySelector('.title-group #tagTitle');
const addForm_category = addForm.querySelector('.select-group #tagSelect');
const addForm_front = addForm.querySelector('.tag-group #addFront');
const addForm_reverse = addForm.querySelector('.tag-group #addReverse');
const addForm_file = addForm.querySelector('.upload-group #tagPic');
const addForm_picPath = addForm.querySelector('.upload-group #picPath');
const addForm_remark = addForm.querySelector('.remark-group #tagRemark');
const addForm_uploadGroup = addForm.querySelector('.upload-group');

// popup more add
const more_add_switch = addForm.querySelector('.more-add-switch');
const tagForm_storage = addForm.querySelector('.tagForm-storage');
const tag_add_button = addForm.querySelector('.tag-add-button');
const more_add_numbs = addForm.querySelector('.more-add-numbs');

// popup-area
const popup_area = document.querySelector('.popup-area');

// toast
const notifications = document.querySelector('.notifications');

// pic show
const pic_show = document.querySelector('.pic-show');

// right click menu
const rightClickContext = document.querySelector('.right-click-menu')
const hasSubMenu = rightClickContext.querySelectorAll('.sub-menu');
const languages = rightClickContext.querySelectorAll('.language .sub-menu .item')
const appearances = rightClickContext.querySelectorAll('.appearance .sub-menu .item')
