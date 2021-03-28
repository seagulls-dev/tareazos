import {
    AfterViewInit,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewChildren,
    ViewEncapsulation,
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { FusePerfectScrollbarDirective } from "@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive";
import { EcommerceProductService } from "../taskInfo/product.service";

@Component({
    selector: "chat-view",
    templateUrl: "./chat-view.component.html",
    styleUrls: ["./chat-view.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class ChatViewComponent implements OnInit, OnDestroy, AfterViewInit {
    dialog: any;
    authorid: any;
    authorname: any;

    @ViewChild(FusePerfectScrollbarDirective)
    directiveScroll: FusePerfectScrollbarDirective;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ChatService} _chatService
     */
    constructor(private _ecommerceProductService: EcommerceProductService) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this._ecommerceProductService.onRequestChanged.subscribe((request) => {
            if (request.data) {
                this.authorid = request.data.authorid;
                this.authorname = request.data.authorname;
                this.dialog = request.data.chat;
            }
        });
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void {}

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Check if the given message is the first message of a group
     *
     * @param message
     * @param i
     * @returns {boolean}
     */
    isFirstMessageOfGroup(message, i): boolean {
        return (
            i === 0 ||
            (this.dialog[i - 1] && this.dialog[i - 1].who !== message.who)
        );
    }

    /**
     * Check if the given message is the last message of a group
     *
     * @param message
     * @param i
     * @returns {boolean}
     */
    isLastMessageOfGroup(message, i): boolean {
        return (
            i === this.dialog.length - 1 ||
            (this.dialog[i + 1] && this.dialog[i + 1].who !== message.who)
        );
    }

    /**
     * Scroll to the bottom
     *
     * @param {number} speed
     */
    scrollToBottom(speed?: number): void {
        speed = speed || 400;
        if (this.directiveScroll) {
            this.directiveScroll.update();

            setTimeout(() => {
                this.directiveScroll.scrollToBottom(0, speed);
            });
        }
    }
}
