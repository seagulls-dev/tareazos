import { Component, OnInit, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { NotificationService } from 'app/services/notifications.service';
import { AuthService } from 'app/services/auth.service';
import { debug } from 'console';
@Component({
  selector: 'upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {
  @Input() label: string;
  @Input() file: File;
  @Output() GetDownloadUrl = new EventEmitter<any>();
  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;


  constructor(private storage: AngularFireStorage, private db: AngularFirestore, private NotificationSevice: NotificationService, public authService: AuthService,) { }

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {
    var uid = 'anonymous';
    // The storage path
    if (this.authService.isLogged) {
      if (this.authService.user.admin && this.authService.usertoManage)
        uid = this.authService.usertoManage;
      else
        uid = this.authService.user.uid;
    }

try{
    const path = `${this.label}/${uid}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      // tap(console.log),
      // The file's download URL
      finalize(async () => {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        this.GetDownloadUrl.emit(this.downloadURL)

      }),
    );

}catch(exception){
  alert('Se produjo un error al cargar los documentos, por favor envíanos tus documentos al correo info@tareazos.com')
  try{
  this.db.collection('exceptions').add({error: exception, date: Date.now(), user: this.authService.user.uid});
  }catch(e){}
}


  }
  delete() {
    this.storage.storage.refFromURL(this.downloadURL).delete().then(data => {
      this.NotificationSevice.openSnackBar('El archivo se ha eliminado correctamente', 'Cerrar')
    }).catch(data => {
      this.NotificationSevice.openSnackBar('No se pudo borrar el archivo', '')
    });
    //REUTILIZAR LA FUNCIÓN GET DOWNLOAD URL PARA CUANDO SE BORRAN LOS ARCHIVOS
    this.GetDownloadUrl.emit('deleted');

  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}