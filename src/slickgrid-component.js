

import Slickgrid from 'slickgrid-es6';
import StyleBuilder from './styling';
import {SlickgridCore} from './slickgrid-core';

class SlickGridComponent extends HTMLElement {

    // Not supported yet, but this is the eventual spec...
    constructor() {
        super();
        this._init();
    }

    _init() {

        let builder = new StyleBuilder();
        let styleTag = document.createElement('style');
        styleTag.innerHTML = builder.build();
        styleTag.setAttribute('scoped', '');
        this.appendChild(styleTag);

        this.container = document.createElement('div');
        this.appendChild(this.container);
        this._core = new SlickgridCore(Slickgrid, this.container);
    }

    addTable(data, options) {
        this._core.addTable(data, options);
    }

    setSize(width, height) {
        this._core.setSize(width, height);
    }

    createdCallback() {
        this._init();
    }
}
document.registerElement('slick-grid', SlickGridComponent);
