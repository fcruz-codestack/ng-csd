import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnOperationComponent } from './container/btn-operation/btn-operation.component';
import { ContainerComponent } from './container/container.component';
import { DirectoryListComponent } from './container/directory-list/directory-list.component';
import { UserInfoDisplayComponent } from './container/user-info-display/user-info-display.component';
import { H1TitleComponent } from './container/h1-title/h1-title.component';
import { SearchBoxComponent } from './container/search-box/search-box.component';
import { StudentFormComponent } from './container/student-form/student-form.component';
@NgModule({
  declarations: [
    AppComponent,
    BtnOperationComponent,
    ContainerComponent,
    DirectoryListComponent,
    UserInfoDisplayComponent,
    H1TitleComponent,
    SearchBoxComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
