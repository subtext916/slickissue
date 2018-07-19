
export default class StyleBuilder {

    constructor(){
    }

    /**
     * Builds theme css
     */
    build(){
        return `
       
       /*
IMPORTANT:
In order to preserve the uniform grid appearance, all cell styles need to have padding, margin and border sizes.
No built-in (selected, editable, highlight, flashing, invalid, loading, :focus) or user-specified CSS
classes should alter those!
*/

.slick-header-columns {
  border-bottom: 1px solid #c1c6c8;
}

.slick-header-column {
  border-right: 1px solid #c1c6c8;
}

.slick-header-column:hover, .slick-header-column-active {

}

.slick-headerrow {

}

.slick-headerrow-column {
  border-bottom: 0;
  height: 100%;
}

.slick-row.ui-state-active {

}

.slick-row {
  position: absolute;
  background: #ffffff;
  border: 0px;
  line-height: 20px;
}

.slick-row.selected {
  z-index: 10;
  background: #ffffff;
}

.slick-cell {
  padding-left: 4px;
  padding-right: 4px;
}

.slick-group {
  border-bottom: 2px solid #c1c6c8
}

.slick-group-toggle {
  width: 9px;
  height: 9px;
  margin-right: 5px;
}

.slick-group-toggle.expanded {
  background: url('data:image/gif;base64,R0lGODlhCQAJAPcAAAFGeoCAgNXz/+v5/+v6/+z5/+36//L7//X8//j9/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAACQAJAAAIMwADCBxIUIDBgwIEChgwwECBAgQUFjBAkaJCABgxGlB4AGHCAAIQiBypEEECkScJqgwQEAA7') no-repeat center center;
}

.slick-group-toggle.collapsed {
  background: url('data:image/gif;base64,R0lGODlhCQAJAPcAAAFGeoCAgNXz/+v5/+v6/+z5/+36//L7//X8//j9/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAACQAJAAAIOAADCBxIUIDBgwIEChgwAECBAgQUFjAAQIABAwoBaNSIMYCAAwIqGlSIAEHFkiQTIBCgkqDLAAEBADs=') no-repeat center center;
}

.slick-group-totals {
  color: gray;
  background: #ffffff;
}

.slick-group-select-checkbox {
  width: 13px;
  height: 13px;
  margin: 3px 10px 0 0;
  display: inline-block;
}
.slick-cell.selected {
    font-weight: bold;
    color: #333333;
    background-color: #a5c7d2;
}

.slick-cell.active {
  border-color: gray;
  border-style: solid;
}

.slick-sortable-placeholder {
  background: silver !important;
}

.slick-row.odd {
  background: #fafafa;
}

.slick-row.ui-state-active {

}

.slick-row.loading {
  opacity: 0.5;
  filter: alpha(opacity = 50);
}

.slick-cell.invalid {
  border-color: #ff3c52;
  -moz-animation-duration: 0.2s;
  -webkit-animation-duration: 0.2s;
  -moz-animation-name: slickgrid-invalid-hilite;
  -webkit-animation-name: slickgrid-invalid-hilite;  
}

@-moz-keyframes slickgrid-invalid-hilite {
  from { box-shadow: 0 0 6px red; }
  to { box-shadow: none; }
}

@-webkit-keyframes slickgrid-invalid-hilite {
  from { box-shadow: 0 0 6px #ff3c52; }
  to { box-shadow: none; }
}
/*
IMPORTANT:
In order to preserve the uniform grid appearance, all cell styles need to have padding, margin and border sizes.
No built-in (selected, editable, highlight, flashing, invalid, loading, :focus) or user-specified CSS
classes should alter those!
*/

.slick-header.ui-state-default, .slick-headerrow.ui-state-default, .slick-footerrow.ui-state-default, .slick-top-panel-scroller.ui-state-default {
  width: 100%;
  overflow: auto;
  position: relative;
  border-left: 0px !important;
}

.slick-header.ui-state-default {
  overflow: inherit;
}

.slick-header::-webkit-scrollbar,  .slick-headerrow::-webkit-scrollbar, .slick-footerrow::-webkit-scrollbar {
  display: none
}

.slick-header-columns, .slick-headerrow-columns, .slick-footerrow-columns {
  position: relative;
  white-space: nowrap;
  cursor: default;
  overflow: hidden;
}

.slick-header-column.ui-state-default {
  position: relative;
  display: inline-block;
 /*box-sizing: content-box !important; use this for Firefox! */ 
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  height: 16px;
  line-height: 16px;
  margin: 0;
  padding: 4px;
  border-right: 1px solid #c1c6c8
  border-left: 0px !important;
  border-top: 0px !important;
  border-bottom: 0px !important;
  float: left;
}

.slick-headerrow-column.ui-state-default, .slick-footerrow-column.ui-state-default {
  padding: 4px;
}

.slick-header-column-sorted {
  font-style: italic;
}

.slick-sort-indicator {
  display: inline-block;
  width: 8px;
  height: 5px;
  margin-left: 4px;
  margin-top: 6px;
  float: left;
}

.slick-sort-indicator-numbered {
  display: inline-block;
  width: 8px;
  height: 5px;
  margin-left: 4px;
  margin-top: 0;
  line-height: 20px;
  float: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  color: #ffffff;
}

.slick-sort-indicator-desc {
  background: url('data:image/gif;base64,R0lGODlhDQAFAIcAAGGQzUD/QOPu+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAMAAAEALAAAAAANAAUAAAgeAAUAGEgQgIAACBEKLHgwYcKFBh1KFNhQosOKEgMCADs=');
}

.slick-sort-indicator-asc {
  background: url('data:image/gif;base64,R0lGODlhDQAFAIcAAGGQzUD/QOPu+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAMAAAEALAAAAAANAAUAAAgbAAMIDABgoEGDABIeRJhQ4cKGEA8KmEiRosGAADs=');
}

.slick-resizable-handle {
  position: absolute;
  font-size: 0.1px;
  display: block;
  cursor: col-resize;
  width: 9px;
  right: -5px;
  top: 0;
  height: 100%;
  z-index: 1;
}

.slick-sortable-placeholder {
  background: #c1c6c8
}

.grid-canvas {
  position: relative;
  outline: 0;
}

.slick-row.ui-widget-content, .slick-row.ui-state-active {
  position: absolute;
  border: 0px;
  width: 100%;
}

.slick-cell, .slick-headerrow-column , .slick-footerrow-column{
  position: absolute;
  border: 1px solid transparent;
  border-right: 1px dotted #c1c6c8
  border-bottom-color: #c1c6c8
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  vertical-align: middle;
  z-index: 1;
  padding: 1px 2px 2px 1px;
  margin: 0;
  white-space: nowrap;
  cursor: default;
}
.slick-cell, .slick-headerrow-column{
  border-bottom-color: #c1c6c8
}
.slick-footerrow-column {
  border-top-color: #c1c6c8
}
 
.slick-group {
}

.slick-group-toggle {
  display: inline-block;
}

.slick-cell.highlighted {
  background: #ffffff;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.slick-cell.flashing {
  border: 1px solid #ff3c52 !important;
}
.interact-can-drop {
    background: #c1c6c8
}
.slick-cell.editable {
  z-index: 11;
  overflow: visible;
  background: #ffffff;
  border-color: black;
  border-style: solid;
}

.slick-cell:focus {
  outline: none;
}

.slick-reorder-proxy {
  display: inline-block;
  background: #c1c6c8
  cursor: move;
}

.slick-reorder-guide {
  display: inline-block;
  height: 2px;
  background: #c1c6c8
}

.slick-selection {
  z-index: 10;
  position: absolute;
  border: 2px dashed #000000;
}

.grid-header {
  border: 1px solid #c1c6c8
  border-bottom: 0;
  border-top: 0;
  color: #000000;
  height: 24px;
  line-height: 24px;
}

.grid-header label {
  display: inline-block;
  font-weight: bold;
  margin: auto auto auto 6px;
}

.grid-header .ui-icon {
  margin: 4px 4px auto 6px;
  background-color: transparent;
  border-color: transparent;
}

.grid-header .ui-icon.ui-state-hover {
  background-color: #ffffff;
}

.grid-header #txtSearch {
  margin: 0 4px 0 4px;
  padding: 2px 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border: 1px solid #c1c6c8
}

.options-panel {
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border: 1px solid #c1c6c8
  background: #f0f0f0;
  padding: 4px;
  margin-bottom: 20px;
  width: 320px;
  position: absolute;
  top: 0px;
  left: 650px;
}

/* Individual cell styles */
.slick-cell.task-name {
  font-weight: bold;
  text-align: right;
}

.slick-cell.task-percent {
  text-align: right;
}

.slick-cell.cell-move-handle {
  font-weight: bold;
  text-align: right;
  border-right: solid #c1c6c8

  cursor: move;
}

.cell-move-handle:hover {
  background: #c1c6c8
}

.slick-row.selected .cell-move-handle {
  background: green;
}

.slick-row .cell-actions {
  text-align: left;
}

.slick-row.complete {
  
}

      
        `;
    }
}
