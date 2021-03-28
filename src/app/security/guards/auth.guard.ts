import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { AuthService } from 'app/services/auth.service';
import { debug } from 'console';

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
    user: any;
    constructor(private router: Router, private afAuth: AngularFireAuth, private authService: AuthService) {


    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.checkLogin();
    }

    checkLogin(): Observable<boolean> {
        return this.afAuth.authState.pipe(
            map((user) => {
                if (user) {
                    return true;
                } else {
                    this.router.navigate(["home"]);
                    return false;
                }
            })
        );
    }
}

@Injectable({ providedIn: "root" })
export class AuthGuardAdmin implements CanActivate {
    admin: boolean;
    user: any;
    constructor(private router: Router, private afAuth: AngularFireAuth, private authService: AuthService) {


    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return this.checkLogin();
    }

    checkLogin(): Observable<boolean> {
        return this.afAuth.authState.pipe(
            map((user) => {
                if (user) {
                   
                    const role = JSON.parse(localStorage.getItem("currentRole"));
                    if (role == 'admin')
                        return true;
                    else {
                        this.router.navigate(["home"]);
                        return false;
                    }
                } else {
                    this.router.navigate(["home"]);
                    return false;
                }
            })
        );
    }
}
