import {
    AfterViewInit,
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    QueryList,
    ViewChild,
    ViewChildren,
    ViewEncapsulation,
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { FuseSidebarService } from "@fuse/components/sidebar/sidebar.service";
import { FusePerfectScrollbarDirective } from "@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive";
import { ChatPanelService } from "app/layout/components/chat-panel/chat-panel.service";
import { AuthService } from "app/services/auth.service";

@Component({
    selector: "chat-panel",
    templateUrl: "./chat-panel.component.html",
    styleUrls: ["./chat-panel.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class ChatPanelComponent implements OnInit, AfterViewInit, OnDestroy {
    contacts: any[];
    chat: any;
    selectedContact: any;
    sidebarFolded: boolean;
    user: any;
    receivedId: any;
    contact: any;
    unread: number = 0;
    count: number;
    @ViewChild("replyForm")
    private _replyForm: NgForm;
    @ViewChild("messages")
    messages: ElementRef;
    @ViewChild("replyInput")
    private _replyInput: ElementRef;

    @ViewChildren(FusePerfectScrollbarDirective)
    private _fusePerfectScrollbarDirectives: QueryList<
        FusePerfectScrollbarDirective
    >;

    // Private
    private _chatViewScrollbar: FusePerfectScrollbarDirective;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ChatPanelService} _chatPanelService
     * @param {HttpClient} _httpClient
     * @param {FuseSidebarService} _fuseSidebarService
     */
    constructor(
        private _chatPanelService: ChatPanelService,
        private _httpClient: HttpClient,
        private _fuseSidebarService: FuseSidebarService,
        private authService: AuthService
    ) {
        // Set the defaults
        this.selectedContact = null;
        this.sidebarFolded = true;

        // Set the private defaults
        this._unsubscribeAll = new Subject();
        this.authService.currentMessage.subscribe((res) => {
     
                this.user = this.authService.user;
            
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.contacts = [];
        // Load the contacts

        this._chatPanelService.loadContacts().then(() => {
             this.contacts = this._chatPanelService.contacts;
            this.user = this._chatPanelService.user;
         console.log(this.user);
        });

        // Subscribe to the foldedChanged observable
        this._fuseSidebarService
            .getSidebar("chatPanel")
            .foldedChanged.pipe(takeUntil(this._unsubscribeAll))
            .subscribe((folded) => {
                this.sidebarFolded = folded;
            });

        this._chatPanelService.getUsers().subscribe((r) => {
            let data = r.map((e) => {
                return {
                    id: e.payload.doc.id,
                    name: e.payload.doc.data()["name"],
                    lastname: e.payload.doc.data()["lastname"],
                    email: e.payload.doc.data()["email"],
                    phone: e.payload.doc.data()["phone"],
                    unread: e.payload.doc.data()["unread"],
                };
            });
            this.contacts = data;
            // console.log("here is user Data: ", this.contacts);
        });
        setInterval(() => {}, 500);
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void {
        this._chatViewScrollbar = this._fusePerfectScrollbarDirectives.find(
            (directive) => {
                return directive.elementRef.nativeElement.id === "messages";
            }
        );

        this.authService.currentMessage.subscribe((res) => {
            this.user = this.authService.user;
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Prepare the chat for the replies
     */
    private _prepareChatForReplies(): void {
        setTimeout(() => {
            // Focus to the reply input
            // this._replyInput.nativeElement.focus();

            // Scroll to the bottom of the messages list
            if (this._chatViewScrollbar) {
                this._chatViewScrollbar.update();

                setTimeout(() => {
                    this._chatViewScrollbar.scrollToBottom(0);
                });
            }
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Fold the temporarily unfolded sidebar back
     */
    foldSidebarTemporarily(): void {
        this._fuseSidebarService.getSidebar("chatPanel").foldTemporarily();
    }

    /**
     * Unfold the sidebar temporarily
     */
    unfoldSidebarTemporarily(): void {
        this._fuseSidebarService.getSidebar("chatPanel").unfoldTemporarily();
    }

    /**
     * Toggle sidebar opened status
     */
    toggleSidebarOpen(): void {
        this._fuseSidebarService.getSidebar("chatPanel").toggleOpen();
    }

    /**
     * Decide whether to show or not the contact's avatar in the message row
     *
     * @param message
     * @param i
     * @returns {boolean}
     */
    shouldShowContactAvatar(message, i): boolean {
        return (
            message.who === this.selectedContact.id &&
            ((this.chat.dialog[i + 1] &&
                this.chat.dialog[i + 1].who !== this.selectedContact.id) ||
                !this.chat.dialog[i + 1])
        );
    }

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
            (this.chat.dialog[i - 1] &&
                this.chat.dialog[i - 1].who !== message.who)
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
            i === this.chat.dialog.length - 1 ||
            (this.chat.dialog[i + 1] &&
                this.chat.dialog[i + 1].who !== message.who)
        );
    }

    /**
     * Toggle chat with the contact
     *
     * @param contact
     */
    toggleChat(contact): void {
        // If the contact equals to the selectedContact,
        // that means we will deselect the contact and
        // unload the chat
        if (this.selectedContact && contact.id === this.selectedContact.id) {
            // Reset
            this.resetChat();
        }
        // Otherwise, we will select the contact, open
        // the sidebar and start the chat
        else {
            // Unfold the sidebar temporarily
            this.unfoldSidebarTemporarily();

            // Set the selected contact
            this.selectedContact = contact;

            // Load the chat
            this._chatPanelService.getChat(contact.id).then((chat) => {
                // Set the chat
                this.chat = chat;

                // Prepare the chat for the replies
                this._prepareChatForReplies();
            });
        }
        this.contact = contact;
        this.receivedId = contact.id;
        this._chatPanelService
            .getThread(this.user.uid, contact.id)
            .subscribe((r) => {
                this.chat.dialog = r;
            });
    }

    /**
     * Remove the selected contact and unload the chat
     */
    resetChat(): void {
        // Set the selected contact as null
        this.selectedContact = null;

        // Set the chat as null
        this.chat = null;
    }

    /**
     * Reply
     */
    reply(event): void {
        event.preventDefault();

        if (!this._replyForm.form.value.message) {
            return;
        }
        // document.getElementById("messages").scrollIntoView();
        // console.log(document.getElementById("messages"));

        // Message
        this.unread = this.unread + 1;
        const message = {
            who: this.user.uid,
            message: this._replyForm.form.value.message,
            time: new Date().toISOString(),
            unread: this.unread,
        };
        this._chatPanelService
            .createMessage(message, this.user.uid, this.receivedId)
            .then((res) => {
                // this._chatPanelService
                //     .getCount(this.user.uid, this.receivedId, res.id)
                //     .subscribe((r: any) => {
                //         this.count = r.unread;
                //         console.log(r.unread);
                //     });
            });

        // Add the message to the chat
        // this.chat.dialog.push(message);

        // Reset the reply form
        this._replyForm.reset();

        // Update the server
        // this._chatPanelService
        //     .updateChat(this.chat.id, this.chat.dialog)
        //     .then((response) => {
        //         // Prepare the chat for the replies
        //         this._prepareChatForReplies();
        //     });
        setTimeout(() => {
            const el: HTMLDivElement = this.messages.nativeElement;
            el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight);
        }, 500);
    }
}
