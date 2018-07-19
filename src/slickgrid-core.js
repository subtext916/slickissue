

export class SlickgridCore {

    constructor(Slickgrid, container) {
        this._grid = null;
        this._width = null;
        this._height = null;
        this.slickgrid = Slickgrid;
        this.container = container;
    }

    addTable(data, options) {
        this._grid = new this.slickgrid.Grid(this.container, data.rowData, data.headerData, options);
        this._grid.onColumnsReordered.subscribe(function (e, args) {
            console.info('columns reordered');
        });
    }

    setSize(width, height) {
        if (width) this.container.style.width = `${parseInt(width)}px`;
        if (height) this.container.style.height = `${parseInt(height)}px`;
        if (this._grid) {
            // Update grid
            this._grid.resizeCanvas();
            this._grid.autosizeColumns();
        }
    }
}
