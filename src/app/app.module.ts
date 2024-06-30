import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { appReducer } from './state/app.reducer';
import { FormatDatePipe } from './format-date.pipe'; // Import your pipe here

@NgModule({
  declarations: [
    AppComponent,
    FormatDatePipe // Declare your pipe here
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ app: appReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
