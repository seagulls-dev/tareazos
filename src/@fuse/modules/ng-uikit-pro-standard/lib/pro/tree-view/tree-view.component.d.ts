import { EventEmitter, OnInit, ChangeDetectorRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class MdbTreeComponent implements OnInit {
    private _cdRef;
    checked: EventEmitter<{}>;
    checkedKeys: EventEmitter<{}>;
    nodesChanged: EventEmitter<{}>;
    nodes: any;
    textField: string;
    childrenField: string;
    checkboxesField: string;
    expandAll: boolean;
    checkboxes: boolean;
    toggleOnTitleClick: boolean;
    private _expandAll;
    checkedValues: string[];
    toggle: any;
    constructor(_cdRef: ChangeDetectorRef);
    ngOnInit(): void;
    toggleExpandAll(): void;
    expandAllNodes(): void;
    closeAllNodes(): void;
    private _expandAllChildren;
    private _closeAllChildren;
    private _setInitialCheckedKeys;
    private _hasInitialCheckedKeysChildren;
    toggleByNode(i: string): void;
    private _childrenToggleByNode;
    onKeydownCheckbox(e: KeyboardEvent, node: any, i: string): void;
    onKeydown(e: KeyboardEvent, i: string): void;
    checkNodes(node: any): void;
    private _checkChildNodes;
    updateNodesCheckedValues(node: any, idx: string): void;
    private _updateChildNodesCheckedValues;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdbTreeComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MdbTreeComponent, "mdb-tree", never, {
    "checkboxes": "checkboxes";
    "toggleOnTitleClick": "toggleOnTitleClick";
    "expandAll": "expandAll";
    "nodes": "nodes";
    "textField": "textField";
    "childrenField": "childrenField";
    "checkboxesField": "checkboxesField";
}, {
    "checked": "checked";
    "checkedKeys": "checkedKeys";
    "nodesChanged": "nodesChanged";
}, never>;
}

//# sourceMappingURL=tree-view.component.d.ts.map