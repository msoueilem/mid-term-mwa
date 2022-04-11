import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GradesComponent } from './grades/grades.component';
import { GradeComponent } from './grade/grade.component';
import { DeleteGradeComponent } from './delete-grade/delete-grade.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    GradesComponent,
    GradeComponent,
    DeleteGradeComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:"",
        component: HomeComponent
      },{
        path:"grades",
        component: GradesComponent
      },{
        path:"grades/:gradeId",
        component: GradeComponent
      },{
        path:"**",
        component: ErrorPageComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
