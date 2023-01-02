search_expand.addEventListener('click', () => {
    search_body.classList.toggle('expand');
});

search_clear.addEventListener('click', () => {
    search_result.innerHTML = TEMPLATES.EMPTY_IMG;
    search_input.value = FINAL.EMPTY;
    search_clear.style.display = 'none';
    search_input.select();
});

search_input.addEventListener('input', debounce(function () {
    if (search_input.value.trim() === FINAL.EMPTY) {
        return;
    }

    
    if (fuzzy_search_model === SEARCH_MODE.TITLE) {
        fuzzy_search(search_input.value, SEARCH_MODE.TITLE);
    }

    if (fuzzy_search_model === SEARCH_MODE.TAGS) {
        fuzzy_search(search_input.value, SEARCH_MODE.TAGS);
    }
}, 1000));

search_input.addEventListener('keyup', () => {
    if (search_input.value.trim() == FINAL.EMPTY) {
        search_result.innerHTML = TEMPLATES.EMPTY_IMG;

        search_clear.style.display = 'none';
        return;
    }

    search_clear.style.display = 'block';
});

function jumpToTabs(tab) {
    for (var index = 0; index < categoryBtns.length; index++) {
        if (categoryBtns[index].getAttribute('tagName') === tab) {
            categoryBtns[index].click();
            break;
        }
    }
}

search_radios.forEach((radio, index) => {
    radio.addEventListener('click', () => {
        search_radios.forEach(radio => { radio.classList.remove('checked') });

        radio.classList.add('checked');

        if (index === 0) {
            fuzzy_search_model = SEARCH_MODE.TITLE;
        }

        if (index === 1) {
            fuzzy_search_model = SEARCH_MODE.TAGS;
        }

        // re-search
        if (search_input.value.trim() === FINAL.EMPTY) {
            return;
        }

        if (fuzzy_search_model === SEARCH_MODE.TITLE) {
            fuzzy_search(search_input.value, SEARCH_MODE.TITLE);
        }

        if (fuzzy_search_model === SEARCH_MODE.TAGS) {
            fuzzy_search(search_input.value, SEARCH_MODE.TAGS);
        }
    });
});