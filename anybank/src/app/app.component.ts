import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component'
import { FormNovaTransacaoComponent } from "./components/form-nova-transacao/form-nova-transacao.component";
import { Transacao } from './models/transacao';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  transacoes = signal<Transacao[]>([]);

  saldo = computed(()=>{
    return this.transacoes().reduce((acc, transacaoAtual)=>{
      return acc + transacaoAtual.valor;
    }, 0)
  });

  processarTransacao(transacao: Transacao){
    this.transacoes.update((listaAtual)=>[transacao, ...listaAtual]) // faz as transações mais recentes serem mostradas primeiro
  }
}
