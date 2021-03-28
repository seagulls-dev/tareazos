import {
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { fuseAnimations } from "@fuse/animations";

import { orderStatuses, ProviderStatus } from "./order-statuses";
import { Order } from "./order.model";
import { EcommerceOrderService } from "./order.service";
import { CatalogService } from "app/services/catalog.service";
import { MatDialog } from "@angular/material/dialog";
import { Platform } from "@angular/cdk/platform";
import { AddSkilDialogComponent } from "app/main/profile/addSkill/addSkill.component";
import { AlertDialogComponent } from "app/shared/components/alert-dialog/alert-dialog.component";
import { AuthService } from "app/services/auth.service";
import { BecomeProviderComponent } from "app/main/client-forms/become-provider/become-provider.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { Router } from "@angular/router";
import { analytics } from "firebase";
import { FilesDataSource } from "../list/orders.component";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
    selector: "e-commerce-order",
    templateUrl: "./order.component.html",
    styleUrls: ["./order.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class EcommerceOrderComponent implements OnInit, OnDestroy {
    order: Order;
    user: any;
    orderStatuses: any;
    badges: any = [];
    selectedBadges: any = [];
    statusForm: FormGroup;
    taskerStatus: string;
    adminStatus: string;
    amount: number;
    accountMovements: any = [];
    dialogRef: any;
    public formQuestions: any;
    form: any;
    taskerRole: any;
    typeOfBadges: string[] = [
        "Id",
        "DriverLicense",
        "Interview",
        "Socialnetworks",
        "Suitability"
    ];
    profilepic: string;

    dataSource: MatTableDataSource<any>;
    displayedColumns = [
        "asClient",
        "asTasker",
        "concept",
        "chargedAmount",
        "comissionFee",
        "creditTotal",
        "movementType",
        "movementDate",
    ];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {EcommerceOrderService} _ecommerceOrderService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _ecommerceOrderService: EcommerceOrderService,
        private _formBuilder: FormBuilder,
        private CatalogService: CatalogService,
        public _matDialog: MatDialog,
        public _platform: Platform,
        private authService: AuthService,
        private _router: Router,
        private changeDetectorRef: ChangeDetectorRef
    ) {
        // Set the defaults
        this.order = new Order();
        this.orderStatuses = ProviderStatus;

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
        // Subscribe to update order on changes
        this._ecommerceOrderService.onOrderChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((order) => {
                this.order = new Order(order);
            });
        this._ecommerceOrderService.onUserChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((user) => {
                this.user = user;
                if (this.user.userData)
                    this.authService.usertoManage = this.user.userData.id;
                try {
                    if (this.user.provider.data.pictures) {
                        console.log(this.user.provider.data.pictures);
                        this.profilepic = this.user.provider.data.pictures.find(
                            (element) => (element.title = "Foto de perfil")
                        ).downloadUrl;
                    }
                } catch (err) {}

                if (this.user.badges) {
                    this.badges = [];
                    for (var bad in this.user.badges) {
                        this.badges.push(this.user.badges[bad].data.id);
                    }
                }

                if (this.user.accountMovements) {
                    this.accountMovements = [];

                    for (var mov in this.user.accountMovements) {
                        this.accountMovements.push(
                            this.user.accountMovements[mov].data
                        );
                    }

                    this.dataSource = new MatTableDataSource<any>(
                        this.accountMovements
                    );
                    this.dataSource.paginator = this.paginator;
                }
                // para que al cargar los documentos no se los cargue al administrador sino al usuario que se esta editando.
            });
        this.formQuestions = this.CatalogService.getFormQuestions(
            "Only Documents"
        );
        this.form = new FormGroup({});
    }

    getDate(date) {
        if (date.seconds !== undefined) {
            return new Date(date.seconds * 1000);
        } else {
            return date;
        }
    }

    addSkills() {
        var width = "400px";
        var height = "86%";
        if (window.innerWidth <= 800 && window.innerHeight <= 600) {
            width = "100vw";
            height = "100vh";
        }
        if (this._platform.ANDROID || this._platform.IOS) {
            width = "100vw";
            height = "100vh";
        }

        this.dialogRef = this._matDialog.open(AddSkilDialogComponent, {
            panelClass: "scrumboard-card-dialog",
            width: width,
            maxWidth: width,
            // height: height,
            maxHeight: height,
        });

        this.dialogRef.afterClosed().subscribe((response) => {
            if (!response) {
                return;
            } else {
                if (!this.user.provider?.data?.Habilidades)
                    this.user.provider.data.Habilidades = [];

                var results = this.user.provider?.data?.Habilidades.filter(
                    (element) =>
                        element.skill == response.skill &&
                        element.subcategory == response.subcategory
                );
                if (results.length == 0) {
                    this.user.provider?.data?.Habilidades.push(response);
                    var updatedobj = {};
                    updatedobj[response.skill] = true;
                    var catpricetype =
                        response.skill + "_" + response.priceType;
                    if (response.subcategory)
                        catpricetype =
                            response.subcategory + "_" + response.priceType;
                    updatedobj[catpricetype] = Number(response.rate);

                    updatedobj[
                        "Habilidades"
                    ] = this.user.provider?.data?.Habilidades;

                    this.CatalogService.updateDocWithFirestore2(
                        "Providers/" + this.user.userData?.id,
                        updatedobj
                    );
                } else {
                    var msg =
                        "Ya agregaste esta habilidad. Intenta borrarla de tus habilidades y agregarla nuevamente.";
                    this.showAlert(msg, "Alerta");
                }
            }
        });
    }

    saveBadges() {
        console.log(this.selectedBadges);
        for (var bad in this.selectedBadges) {
            console.log(this.selectedBadges[bad]);
            if (this.selectedBadges[bad] == "Id")
                this.CatalogService.MergeFirestoreData(
                    "Providers/" + this.user.userData.id + "/Badges",
                    this.selectedBadges[bad],
                    {
                        id: this.selectedBadges[bad],
                        name: "Cédula verificada",
                        iconUrl:
                            "https://firebasestorage.googleapis.com/v0/b/dynamicforms-c8e77.appspot.com/o/Icons%2Fcarne-de-identidad.png?alt=media&token=17d26a26-4a0d-4e05-871d-e9ace8bbaef1",
                    }
                );

            if (this.selectedBadges[bad] == "DriverLicense")
                this.CatalogService.MergeFirestoreData(
                    "Providers/" + this.user.userData.id + "/Badges",
                    this.selectedBadges[bad],
                    {
                        id: this.selectedBadges[bad],
                        name: "Licencia de conducir verificada",
                        iconUrl:
                            "https://firebasestorage.googleapis.com/v0/b/dynamicforms-c8e77.appspot.com/o/Icons%2Fdriver-license.png?alt=media&token=30578547-0665-4173-85ff-d11253aae636",
                    }
                );

            if (this.selectedBadges[bad] == "Interview")
                this.CatalogService.MergeFirestoreData(
                    "Providers/" + this.user.userData.id + "/Badges",
                    this.selectedBadges[bad],
                    {
                        id: this.selectedBadges[bad],
                        name: "Entrevista Tareazos",
                        iconUrl:
                            "https://firebasestorage.googleapis.com/v0/b/dynamicforms-c8e77.appspot.com/o/Icons%2Fentrevista-de-trabajo.png?alt=media&token=164ea969-63a9-4bf4-b4c7-73836e308354",
                    }
                );

                if (this.selectedBadges[bad] == "Suitability")
                this.CatalogService.MergeFirestoreData(
                    "Providers/" + this.user.userData.id + "/Badges",
                    this.selectedBadges[bad],
                    {
                        id: this.selectedBadges[bad],
                        name: "Idoneidad",
                        iconUrl:
                            "https://firebasestorage.googleapis.com/v0/b/dynamicforms-c8e77.appspot.com/o/Icons%2Fcarne-de-identidad.png?alt=media&token=17d26a26-4a0d-4e05-871d-e9ace8bbaef1",
                    }
                );
            this.badges.push(this.selectedBadges[bad]);
        }
        if (this.selectedBadges.length > 0) {
            this.CatalogService.MergeFirestoreData(
                "Providers",
                this.user.userData.id,
                { badgesCount: this.selectedBadges.length }
            );
        }
    }

    deleteSkill(index) {
        if (confirm("¿Seguro que deseas elminiar esta habilidad?"))
            if (this.user.provider?.data?.Habilidades.length > 1) {
                this.user.provider?.data?.Habilidades.splice(index, 1);
                this.CatalogService.updateDocWithFirestore(
                    "Providers/" + this.user.userData?.id,
                    "Habilidades",
                    this.user.provider?.data?.Habilidades
                );
            } else {
                var msg = "Debes contar con al menos una habilidad!";
                this.showAlert(msg, "Alerta");
            }
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
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    updateTaskerRol(istasker) {
        if (istasker) {
            this.CatalogService.updateDocWithFirestore2(
                "userData/" + this.user.userData.id,
                { currentRole: "isTasker", isTasker: true }
            );
            this.user.userData.data.currentRole = "isTasker";
        } else {
            this.CatalogService.updateDocWithFirestore2(
                "userData/" + this.user.userData.id,
                { currentRole: "isClient", isClient: true }
            );
            this.user.userData.data.currentRole = "isClient";
        }
        this.user.userData.data.isTasker = istasker;
    }
    /**
     * Update status
     */
    updateStatus(option, status): void {
        console.log(option, status);

        if (option == "taskerStatus") {
            this.CatalogService.updateDocWithFirestore(
                "Providers/" + this.user.userData.id,
                "taskerStatus",
                status
            );
            this.CatalogService.updateDocWithFirestore(
                "userData/" + this.user.userData.id,
                "taskerStatus",
                status
            ).then(() => {
                this.user.provider.data.taskerStatus = status;
            });
        }
        if (option == "admin") {
            this.CatalogService.updateDocWithFirestore(
                "userData/" + this.user.userData?.id,
                "admin",
                status
            );
            this.user.userData.data.admin = status;
        }

        /*   const newStatusId = Number.parseInt(this.statusForm.get('newStatus').value);

          if ( !newStatusId )
          {
              return;
          }

          const newStatus = this.orderStatuses.find((status) => {
              return status.id === newStatusId;
          });

          newStatus['date'] = new Date().toString();

          this.order.status.unshift(newStatus); */
    }

    /**
     * Update status
     */
    addMovement(): void {
        var newBalance = 0;

        if (
            this.user.userData?.data?.currentBalance !== null ||
            this.user.userData?.data?.currentBalance !== undefined
        ) {
            newBalance =
                this.user.userData?.data?.currentBalance + +this.amount;
        }

        var movement = {
            asClient: true,
            asTasker: false,
            authoruid: "SuJ7A4vEX8UHULDotljDO1qUJ583",
            chargedAmount: this.amount,
            comissionFee: 0,
            concept: "Crédito por transferencia",
            creditTotal: this.amount,
            movementDate: new Date(),
            movementType: "CreditByACH",
            requestId: null,
            tax: 0,
            uid: this.user.userData?.id,
        };
        this.CatalogService.addDocument("accountMovements", movement);

        this.CatalogService.updateDocWithFirestore(
            "userData/" + this.user.userData?.id,
            "currentBalance",
            newBalance
        );
        this.user.userData.data.currentBalance = newBalance;

        this.amount = null;
    }

    editProfile() {
        const dialogRef = this._matDialog.open(EditProfileComponent, {
            width: "80vh",
            height: "80vh",
            data: this.user.provider.data,
        });

        dialogRef.afterClosed().subscribe((res) => {
            if (!res) {
            }
        });
    }

    GetDownloadUrl(event) {
        //title viene del key del input en el formulario , deleted es cuando se borra un archivo en el component uploader

        if (event.deleted) {
            this.user.provider?.data?.pictures.splice(event.index, 1);
        } else {
            if (!this.user.provider?.data?.pictures)
                this.user.provider.data.pictures = [];

            this.user.provider?.data?.pictures.push({
                title: event.key,
                downloadUrl: event.downloadUrl,
            });

            this.CatalogService.updateDocWithFirestore(
                "Providers/" + this.user.userData.id,
                "pictures",
                this.user.provider.data.pictures
            );
        }
    }
    deletePicture(i) {
        if (confirm("¿Seguro que deseas eliminar?"))
            this.user.provider?.data?.pictures.splice(i, 1);
        this.CatalogService.updateDocWithFirestore(
            "Providers/" + this.user.userData.id,
            "pictures",
            this.user.provider.data.pictures
        );

        try {
            if (this.user.provider.data.pictures) {
                this.profilepic = this.user.provider.data.pictures.filter(
                    (element) => (element.title = "Foto de perfil")
                )[0].downloadUrl;
            }
        } catch (err) {}
    }

    deleteUser() {
        if (
            confirm(
                "¿Seguro que deseas eliminar este usuario? Usuario: " +
                    this.user.userData.id
            )
        ) {
            this.CatalogService.DeleteDocFirestore(
                "userData",
                this.user.userData.id
            );
            this.CatalogService.DeleteDocFirestore(
                "Providers",
                this.user.userData.id
            );
            alert("Eliminado correctamente");
            this._router.navigate(["users/list"]);
        }
    }

    getStatusColor(taskerStatus): string {
        if (taskerStatus == "Approved") return "green-300";

        if (taskerStatus == "ClientOnly") return "grey-500";

        if (taskerStatus == "Completed") return "blue-500";

        return "red-500";
    }

    showAlert(msg, title) {
        var minWidth = "380px";
        var maxWidth = "380px";
        var minHeight = "190px";
        var maxHeight = "190px";
        if (window.innerWidth <= 800 && window.innerHeight <= 600) {
            minWidth = "80vw";
            maxWidth = "80vw";
            minHeight = "100%";
            maxHeight = "100%";
        }
        if (this._platform.ANDROID || this._platform.IOS) {
            minWidth = "80vw";
            maxWidth = "80vw";
            minHeight = "100%";
            maxHeight = "100%";
        }

        var dialogRef1 = this._matDialog.open(AlertDialogComponent, {
            minWidth: minWidth,
            maxWidth: maxWidth,
            minHeight: "240px",
            maxHeight: maxHeight,
        });

        dialogRef1.componentInstance.message = msg;
        dialogRef1.componentInstance.title = title;
    }
}
