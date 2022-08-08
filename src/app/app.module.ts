import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //httpclient per chiamate http
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/layout/header/header.module';
import { FooterModule} from './components/layout/footer/footer.module';
import { TestOneComponent } from './test/test-one/test-one.component';
import { StudentsModule } from './features/students/students.module';
import { SearchModule } from './features/search/search.module';

@NgModule({
  declarations: [AppComponent, TestOneComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HeaderModule, FooterModule, StudentsModule, HttpClientModule, SearchModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
