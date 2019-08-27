import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-campo-control-erro',
    templateUrl: './campo-control-erro.component.html',
    styleUrls: ['./campo-control-erro.component.css']
})
export class CampoControlErroComponent implements OnInit, OnChanges {

    @Input() mostrarErro: boolean;
    @Input() msgErro: string;
    @Input() classe: string;
    
    constructor() {
    }
    
    ngOnInit() {
        console.log(this.mostrarErro);
        console.log(this.msgErro);
    }
    
    ngOnChanges(changes: SimpleChanges): void {
        console.log(this.mostrarErro);
        console.log(this.msgErro);
    }

}
