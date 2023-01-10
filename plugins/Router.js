import { pages } from "../pages/pages.js";

class Router {
    constructor() {
        this.routes = {};
        this.curUrl = '';
    }

    route(path, callback) {
        this.routes[path] = callback || function () { };
    }

    refresh() {
        this.curUrl = location.hash.slice(1) || '/';

        this.routes[isExists(this.curUrl) ? this.curUrl : '/404']();
    }

    init() {
        window.addEventListener('load', this.refresh.bind(this), false);
        window.addEventListener('hashchange', this.refresh.bind(this), false);
    }
}

function isExists(pageName) {
    for (let i = 0; i < pages.length; i++) {
        if (pages[i].location == pageName) {
            return true;
        }
    }

    return false;
}

const load = function (location) {
    $(document).ready(function () {
        $('#app').load(location)
    })
}

var R = new Router()
R.init()

pages.forEach(page => {
    R.route(page.location, function () {
        load(page.html)
    })
})