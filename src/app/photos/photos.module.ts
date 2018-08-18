import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";

import { PhotoService } from './photo/photo.service';
import { PhotoComponent } from "./photo/photo.component";

@NgModule({
    declarations: [ PhotoComponent ],
    exports: [ PhotoComponent ],
    imports: [ HttpClientModule ],
    providers: [ PhotoService ]
})
export class PhotosModule {

}
