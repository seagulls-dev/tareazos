import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
    AngularFirestore,
    AngularFirestoreDocument,
} from "angularfire2/firestore";
import { FuseUtils } from "@fuse/utils";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable()
export class ChatPanelService {
    contacts: any[];
    chats: any[];
    user: any;
    unread: number = 0;
    public chatrooms: Observable<any>;
    public changeChatroom: BehaviorSubject<string | null> = new BehaviorSubject(
        null
    );
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient,
        private db: AngularFirestore
    ) {}

    /**
     * Loader
     *
     * @returns {Promise<any> | any}
     */
    loadContacts(): Promise<any> | any {
        return new Promise((resolve, reject) => {
            Promise.all([this.getContacts(), this.getUser()]).then(
                ([contacts, user]) => {
                    this.contacts = contacts;
                    this.user = user;
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get chat
     *
     * @param contactId
     * @returns {Promise<any>}
     */
    getChat(contactId): Promise<any> {
        const chatItem = this.user.chatList.find((item) => {
            return item.contactId === contactId;
        });

        // Get the chat
        return new Promise((resolve, reject) => {
            // If there is a chat with this user, return that.
            if (chatItem) {
                this._httpClient
                    .get("api/chat-panel-chats/" + chatItem.chatId)
                    .subscribe((chat) => {
                        // Resolve the promise
                        resolve(chat);
                    }, reject);
            }
            // If there is no chat with this user, create one...
            else {
                this.createNewChat(contactId).then(() => {
                    // and then recall the getChat method
                    this.getChat(contactId).then((chat) => {
                        resolve(chat);
                    });
                });
            }
        });
    }

    /**
     * Create new chat
     *
     * @param contactId
     * @returns {Promise<any>}
     */
    createNewChat(contactId): Promise<any> {
        return new Promise((resolve, reject) => {
            // Generate a new id
            const chatId = FuseUtils.generateGUID();

            // Prepare the chat object
            const chat = {
                id: chatId,
                dialog: [],
            };

            // Prepare the chat list entry
            const chatListItem = {
                chatId: chatId,
                contactId: contactId,
                lastMessageTime: "2017-02-18T10:30:18.931Z",
            };

            // Add new chat list item to the user's chat list
            this.user.chatList.push(chatListItem);

            // Post the created chat to the server
            this._httpClient
                .post("api/chat-panel-chats", { ...chat })
                .subscribe(() => {
                    // Post the updated user data to the server
                    this._httpClient
                        .post("api/chat-panel-user/" + this.user.id, this.user)
                        .subscribe(() => {
                            // Resolve the promise
                            resolve();
                        });
                }, reject);
        });
    }

    /**
     * Update the chat
     *
     * @param chatId
     * @param dialog
     * @returns {Promise<any>}
     */
    updateChat(chatId, dialog): Promise<any> {
        return new Promise((resolve, reject) => {
            const newData = {
                id: chatId,
                dialog: dialog,
            };

            this._httpClient
                .post("api/chat-panel-chats/" + chatId, newData)
                .subscribe((updatedChat) => {
                    resolve(updatedChat);
                }, reject);
        });
    }

    /**
     * Get contacts
     *
     * @returns {Promise<any>}
     */
    getContacts(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient
                .get("api/chat-panel-contacts")
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    /**
     * Get user
     *
     * @returns {Promise<any>}
     */
    getUser(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient
                .get("api/chat-panel-user")
                .subscribe((response: any) => {
                    resolve(response[0]);
                }, reject);
        });
    }

    createMessage(messsage, userId, contactId) {
        if (userId > contactId) {
            return this.db
                .collection(`chatrooms/${userId + contactId}/messages`)
                .add(messsage);
        } else {
            return this.db
                .collection(`chatrooms/${contactId + userId}/messages`)
                .add(messsage);
        }
    }
    userUpdate(contact, userId) {
        this.unread = this.unread + 1;
        return this.db.collection("userData").doc(userId).update({
            email: contact.email,
            phone: contact.phone,
            name: contact.name,
            lastname: contact.name,
            unread: this.unread,
        });
    }
    getUsers() {
        return this.db.collection("userData").snapshotChanges();
    }
    getThread(userId, contactId) {
        if (userId > contactId) {
            return this.db
                .collection(
                    `chatrooms/${userId + contactId}/messages`,
                    (ref) => {
                        return ref.orderBy("time", "asc").limit(100);
                    }
                )
                .valueChanges();
        } else {
            return this.db
                .collection(
                    `chatrooms/${contactId + userId}/messages`,
                    (ref) => {
                        return ref.orderBy("time", "asc").limit(100);
                    }
                )
                .valueChanges();
        }
    }
    addCount(userId, contactId, data) {
        if (userId > contactId) {
            this.db
                .collection(`chatrooms/${userId + contactId}/unread`)
                .add(data);
        } else {
            this.db
                .collection(`chatrooms/${contactId + userId}/unread`)
                .add(data);
        }
    }
    getCount(userId, contactId, id) {
        if (userId > contactId) {
            return this.db
                .collection(`chatrooms/${userId + contactId}/messages`)
                .doc(id)
                .valueChanges();
        } else {
            return this.db
                .collection(`chatrooms/${contactId + userId}/messages`)
                .doc(id)
                .valueChanges();
        }
    }
}
