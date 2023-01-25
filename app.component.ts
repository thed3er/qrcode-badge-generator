import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import * as qrcode from 'qrcode-generator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qr-code-badge-app';
  @ViewChild('qrImg') qrImg!: ElementRef;


  qr = qrcode(25,"L");

  constructor() { }

  reset(form: NgForm) {
    form.resetForm();
  }

  createQRCode(form: NgForm) {
    this.qr = qrcode(10,"L");
    console.log(form.value.name);
    this.qr.addData(form.value.name);
    this.qr.addData(form.value.email);
    this.qr.addData(form.value.github);

    this.qr.make();
    // this.qrImg.nativeElement.innerHTML = this.qr.createImgTag(4,4);
    this.qrImg.nativeElement.innerHTML = this.qr.createSvgTag(4,4);

  }
}
