import {Component, OnInit, Renderer2} from '@angular/core';
import {Usuario} from '../entities/usuario';

@Component({
    selector: 'app-template-form',
    templateUrl: './template-form.component.html',
    styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

    objUsuario: Usuario = {
        nome: '',
        email: '',
        endereco: {
            cep: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            estado: '',
        }
    };

    constructor(
        private renderer: Renderer2
    ) {
    }

    ngOnInit() {
        const element = this.renderer.selectRootElement('#nome');
        setTimeout(() => element.focus(), 0);
    }

    onSubmit(form) {
        console.log(form);
        console.log(this.objUsuario);
    }

    aplicaCss(campo) {
        return {
            'is-invalid': this.validaCampo(campo)
        };
    }

    validaCampo(campo) {
        return !campo.valid && campo.touched;
    }
}
