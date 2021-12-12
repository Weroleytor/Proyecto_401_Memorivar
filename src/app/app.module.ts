import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListCoursesComponent } from './courses/list-courses/list-courses.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ExploreCoursesComponent } from './courses/explore-courses/explore-courses.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';

//Ulises
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderProfileComponent } from './users/header-profile/header-profile.component';
import { ProfileComponent } from './users/profile/profile.component';
import { ViewCourseComponent } from './courses/view-course/view-course.component';
import { InfoCourseComponent } from './courses/info-course/info-course.component';
import { EditCourseComponent } from './courses/edit-course/edit-course.component';
import { LearnCourseComponent } from './courses/learn/learn-course/learn-course.component';
import { ShowAnswerComponent } from './courses/learn/show-answer/show-answer.component';
import { ShowAnswerInputComponent } from './courses/learn/show-answer-input/show-answer-input.component';
import { ShowAnswerErrorComponent } from './courses/learn/show-answer-error/show-answer-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListCoursesComponent,
    LoginComponent,
    SignupComponent,
    ExploreCoursesComponent,
    ResetPasswordComponent,
    AddCourseComponent,
    HeaderProfileComponent,
    ProfileComponent,
    ViewCourseComponent,
    InfoCourseComponent,
    EditCourseComponent,
    LearnCourseComponent,
    ShowAnswerComponent,
    ShowAnswerInputComponent,
    ShowAnswerErrorComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatProgressBarModule,
    MatTableModule,
    MatRadioModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
