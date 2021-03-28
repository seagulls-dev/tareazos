import { Injectable, Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable()
export class NotificationService {

  constructor(public snackBar: MatSnackBar, public _bottomSheet: MatBottomSheet) { }

  openSnackBar(message: string, action: string) {
    return this.snackBar.open(message, action, {
      duration: 4000,
    });
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

}

@Component({
  selector: 'bottom-sheet',
  templateUrl: 'bottom-sheet.html',
})
export class BottomSheetComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}