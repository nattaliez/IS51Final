import { ToastModule } from './toast.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap';
import { ToastService } from './toast.service';

@NgModule({
  imports: [
    CommonModule,
    AlertModule.forRoot()
  ],
  declarations: [
    ToastModule
  ],
  exports: [
    ToastModule
  ]
})
export class all { }

describe('ToastModule', () => {
  let toastModule: ToastModule;

  beforeEach(() => {
    toastModule = new ToastModule();
  });

  it('should create an instance', () => {
    expect(toastModule).toBeTruthy();
  });
});
