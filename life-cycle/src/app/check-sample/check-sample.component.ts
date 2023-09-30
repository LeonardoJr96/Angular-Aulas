import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent
implements OnInit,
						DoCheck,
						AfterContentChecked,
						AfterContentInit,
						AfterViewChecked,
						AfterViewInit,
						OnDestroy
{

	quantidade: number = 0

  constructor() { }

	adicionar() {
		this.quantidade += 1
	}

	decrementar() {
		this.quantidade -= 1
	}

	//checked -> content -> view
	// init -> cheked

	//depois da inicialização da view
	ngAfterViewInit(): void {
		console.log("ngAfterViewInit")
	}

	//após alguma alteração verifica a view
	ngAfterViewChecked(): void {
		console.log("ngAfterViewChecked")
	}

	// quando o primeiro conteudo é iniciado
	ngAfterContentInit(): void {
		console.log("ngAfterContentInit")
	}

	//após alguma alteração verifica algum conteudo
	ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked")
	}

	//depois da inicialização da view
	ngDoCheck(): void {
		console.log("ngDoCheck")
	}

  ngOnInit(): void {
		console.log("ngOnInit")
  }

	ngOnDestroy(): void {
		console.log("goodbye my friend")
	}

}
