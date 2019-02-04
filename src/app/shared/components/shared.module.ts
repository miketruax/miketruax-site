import { FooterComponent } from "./footer/footer.component";
import { SectionBackgroundComponent } from "./section-background/section-background.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
      FooterComponent, SectionBackgroundComponent
    ],
    imports: [CommonModule
    ],
    exports: [FooterComponent, SectionBackgroundComponent]
  })
  
  export class SharedModule { }