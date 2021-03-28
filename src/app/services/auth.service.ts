import { Injectable } from "@angular/core";
import { User, auth } from "firebase";
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import { NotificationService } from "app/services/notifications.service";
import { CatalogService } from "app/services/catalog.service";
import { BecomeProviderComponent } from "app/main/client-forms/become-provider/become-provider.component";
import { MatDialog } from "@angular/material/dialog";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    user: any;
    isLogged = false;
    usertoManage : any;
    messageSource = new BehaviorSubject("default message");
    currentMessage = this.messageSource.asObservable();
    constructor(
        public afAuth: AngularFireAuth,
        public router: Router,
        private firestore: AngularFirestore,
        public _matDialog: MatDialog,
        private CatalogService: CatalogService
    ) {
        this.afAuth.authState.subscribe((user) => {
            if (user) {
                this.user = user;
                this.firestore
                    .collection("userData")
                    .doc(user.uid)
                    .get()
                    .subscribe((res) => {
                        if (res.exists) {
                            this.user = res.data();
                            this.user.uid = res.id;
                            this.isLogged = true;
                            if (this.user.admin == true)
                                localStorage.setItem("currentRole", JSON.stringify('admin'));

                            //this.router.navigate(['/mail/inbox']);
                            return;
                        }
                    });
            } else {
                localStorage.setItem("currentRole", null);
                this.isLogged = false;
            }
        });
    }

    async login(email: string, password: string) {
        await this.afAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.isLogged = true;

                this.firestore
                    .collection("userData")
                    .doc(user.user.uid)
                    .get()
                    .subscribe((res) => {
                        if (res.exists) {
                            this.user = res.data();
                            this.user.uid = res.id;
                            this.isLogged = true;
                            if (this.user.admin == true)
                                localStorage.setItem("currentRole", JSON.stringify('admin'));
                            // console.log(localStorage.getItem("user"));
                            // this.router.navigate(["/mail/inbox"]);
                            return;
                        }

                        const dialogRef = this._matDialog.open(
                            BecomeProviderComponent,
                            {
                                width: "80vh",
                                maxWidth:"80%",
                                height: "80vh",
                            }
                        );

                        dialogRef.afterClosed().subscribe((res) => {
                            if (!res) {
                                this.isLogged = false;
                                this.afAuth.auth.signOut();
                            }
                        });
                    });
            });
        // this.router.navigate(['/forms/list-providers']); //depende de donde lo llamen navega a diferentes lugares
    }

    async register(loginForm: any) {

        await this.afAuth.auth.createUserWithEmailAndPassword(loginForm.email, loginForm.password,).then((res) => {
            this.user = {};
            this.user.uid = res.user.uid;
            this.isLogged = true;
            this.setproviderUserData(loginForm);
            this.CatalogService.SendEmailFireFunction(loginForm.email, 'Bienvenido a Tareazos', ' ', 'Registro');
        }).catch((e) => {
            alert(e);
        });


    }

    async sendEmailVerification() {
        await this.afAuth.auth.currentUser.sendEmailVerification();
        this.router.navigate(["admin/verify-email"]);
    }

    async sendPasswordResetEmail(passwordResetEmail: string) {
        return await this.afAuth.auth.sendPasswordResetEmail(
            passwordResetEmail
        );
    }

    async confirmPasswordRest(code, newpassword) {
        return await this.afAuth.auth.confirmPasswordReset(code, newpassword);
    }

    async logout() {
        this.isLogged = false;
        localStorage.setItem("currentRole", null);
        localStorage.removeItem("currentRole");
        await this.afAuth.auth.signOut();
        window.location.assign("/home")
    }

    // get isLoggedIn(): boolean {
    //     const user = JSON.parse(localStorage.getItem("user"));
    //     return user !== null;
    // }

    async loginWithGoogle() {
        await this.afAuth.auth
            .signInWithPopup(new auth.GoogleAuthProvider())
            .then((user) => {
                this.isLogged = true;
                var ref = this.firestore
                    .collection("userData")
                    .doc(user.user.uid)

                ref.get().subscribe((res) => {
                    if (res.exists) {
                        this.user = res.data();
                        this.user.uid = res.id;
                        this.isLogged = true;
                        return;
                    }
                    else {
                        try {
                            this.setProviderAndUserData(user);
                            this.CatalogService.SendEmailFireFunction(user.user.email, ' ', ' ', 'Registro');
                        } catch (e) {
                            alert(e);
                        }
                    }

                });
            });
    }
    asyncUser(message: string) {
        this.messageSource.next(message);
    }

    setProviderAndUserData(user) {
        var data = {};
        data['Generales'] = { FirstName: user.additionalUserInfo.profile['given_name'], LastName: user.additionalUserInfo.profile['family_name'] }
        data['createDate'] = new Date();;
        data['rating'] = 5;
        data['docId'] = user.user.uid;

        this.CatalogService.getCollectionFirestore('Providers').doc(this.user.uid).set(data).then(() => {
            var userData = {
                name: user.additionalUserInfo.profile['given_name'],
                lastname: user.additionalUserInfo.profile['family_name'],
                email: user.additionalUserInfo.profile['email'],
                isClient: true,
                currentRole: 'isClient',
                uid: user.user.uid
            }
            this.CatalogService.getCollectionFirestore('userData').doc(user.user.uid).set(userData).then(() => {
                this.user = userData;
            });
        });
    }

    setproviderUserData(loginForm) {
        var data = {};

        let strname: string = loginForm.name;
        strname = strname[0].toUpperCase() + strname.slice(1).toLowerCase();
        loginForm.name = strname;

        let str: string = loginForm.lastname;
        str = str[0].toUpperCase() + str.slice(1).toLowerCase();
        loginForm.lastname = str;

        debugger;
        data['Generales'] = { FirstName: loginForm.name, LastName: loginForm.lastname, Cellphone: loginForm.cellphone }
        data['createDate'] = new Date();;
        data['rating'] = 5;
        data['docId'] = this.user.uid;

        this.CatalogService.getCollectionFirestore('Providers').doc(this.user.uid).set(data).then(() => {
            var userData = {
                name: loginForm.name,
                lastname: loginForm.lastname,
                email: loginForm.email,
                phone: loginForm.cellphone,
                isClient: true,
                isTasker: loginForm.isTasker ? true : false,
                currentRole: loginForm.isTasker ? 'isTasker' : 'isClient',
                uid: this.user.uid
            }
            this.CatalogService.getCollectionFirestore('userData').doc(this.user.uid).set(userData).then(() => {
                this.user = userData;

            });
        });
    }

    validateCode(code) {
        return this.afAuth.auth.verifyPasswordResetCode(code)
    }
}
