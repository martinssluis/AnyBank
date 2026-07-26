import { Component } from '@angular/core';
import { BoasVindasComponent } from "./boas-vindas/boas-vindas.component";

@Component({
  selector: 'app-banner',
  imports: [BoasVindasComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
}
