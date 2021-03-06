import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TemplateFormComponent} from './template-form/template-form.component';
import {DataFormComponent} from './data-form/data-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormDebugComponent} from './form-debug/form-debug.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';

@NgModule({
    declarations: [
        AppComponent,
        TemplateFormComponent,
        DataFormComponent,
        FormDebugComponent,
        CampoControlErroComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
