import { Injectable, Inject } from '@angular/core';
import * as Filesaver from 'file-saver';

import * as XLSX from 'xlsx';
import { DatePipe } from '@angular/common';
const EXCEL_TYPYE= 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';
const EXCEL_EXT = '.xlsx'

@Injectable()
export class ExporterService {

 constructor() {}

 exportToExcel(json:any[],excelFileName: string):void{
     const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
     const workbook: XLSX.WorkBook = {Sheets: {data: worksheet},SheetNames: ['data']}
     const exxcelBuffer: any = XLSX.write(workbook,{bookType: 'xlsx',type: 'array'})

     //call method buffer and filename
     this.saveAsExcel(exxcelBuffer,excelFileName);
    };

private saveAsExcel(buffer:any,filename:string):void{
    const data:  Blob  = new Blob([buffer],{type:EXCEL_TYPYE})
    Filesaver.saveAs(data,filename +'_'+ new Date().getTime() +EXCEL_EXT);
    
}



}