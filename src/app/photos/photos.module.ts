import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoListResolver } from './photo-list/photo-list.resolver';
import { PhotoService } from './photo/photo.service';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';

@NgModule({
    imports: [
      HttpClientModule,
      CommonModule,
      PhotoModule,
      PhotoFormModule,
      PhotoListModule
     ],
    providers: [ PhotoService, PhotoListResolver ]
})
export class PhotosModule {

}
