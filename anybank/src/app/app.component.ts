import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component'
import { FormNovaTransacaoComponent } from "./components/form-nova-transacao/form-nova-transacao.component";
import { TipoTransacao, Transacao } from './models/transacao';

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
      if(transacaoAtual.tipo == TipoTransacao.DEPOSITO){
        return acc + transacaoAtual.valor;
      }
      else if (transacaoAtual.tipo == TipoTransacao.SAQUE){
        return acc - transacaoAtual.valor;
      } else{
        throw new Error('Tipo de transação não identificado')
      }
    }, 0)
  });

  processarTransacao(transacao: Transacao){
    if(transacao.tipo === TipoTransacao.SAQUE && transacao.valor > this.saldo()){
      return alert('Salso insuficiente!')
    }

    this.transacoes.update((listaAtual)=>[transacao, ...listaAtual]);
  }
}
