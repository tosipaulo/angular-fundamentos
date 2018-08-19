import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoService } from './photo/photo.service';
import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { PhotoListResolver } from './photo-list/photo-list.resolver';
import { LoadButtomComponent } from './photo-list/load-buttom/load-buttom.component';

@NgModule({
    declarations: [
      PhotoComponent,
      PhotoListComponent,
      PhotoFormComponent,
      PhotosComponent,
      FilterByDescription,
      LoadButtomComponent
    ],
    imports: [
      HttpClientModule,
      CommonModule
     ],
    providers: [ PhotoService, PhotoListResolver ]
})
export class PhotosModule {

}
