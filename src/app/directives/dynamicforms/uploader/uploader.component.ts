import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NotificationService } from 'app/services/notifications.service';


@Component({
  selector: 'uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent {

  isHovering: boolean;
  @Input() label:string;
  @Output() GetDownloadUrl2 = new EventEmitter<any>();

  files: File[] = [];
  constructor(private NotificationSevice: NotificationService,){

  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
  try{
    for (let i = 0; i < files.length; i++) {
      if(files.item(i).size/1024 > 5120){
        this.NotificationSevice.openSnackBar("El archivo debe ser menor a 2MB","Cerrar");
        return;
      }else
      this.files.push(files.item(i));
    }
  }catch(e){
    alert("Hubo un error al cargar los documentos, si el problema persiste por favor envía tus documentos al correo: info@tareazos.com ")
  }
  }

  GetDownloadUrl(event, i) {
    if (event == 'deleted') {
      this.files.splice(i, 1);
      this.GetDownloadUrl2.emit({ index: i, deleted: true });
    }
    else
      this.GetDownloadUrl2.emit(event);

  }
}