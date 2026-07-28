import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css'
})
export class FormNovaTransacaoComponent {

  tipoTransacao = "";
  valorTransacao= "";
  trasacaoCriada = output();

  aoSubmeter() {
    this.trasacaoCriada.emit();
    this.tipoTransacao = '';
    this.valorTransacao = '';
}
}
