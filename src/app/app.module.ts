import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ProductService} from "./services/product.service";
import { AdvantageComponent } from './components/advantage/advantage.component';
import { ProductComponent } from './components/product/product.component';
import { BtnEffectsDirective } from './directives/btn-effects.directive';
import { AdvantageDescriptionPipe } from './pipes/advantage-description.pipe';
import { NumberPipe } from './pipes/number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdvantageComponent,
    ProductComponent,
    BtnEffectsDirective,
    AdvantageDescriptionPipe,
    NumberPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
