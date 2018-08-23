import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { SignInComponent } from "./signin/signin.component";
import { AuthService } from "../core/auth.service";

@NgModule({
    declarations: [ SignInComponent ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    providers: [AuthService]
})
export class HomeModule {}