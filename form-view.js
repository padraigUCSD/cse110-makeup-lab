export class FormView{
    constructor(){
        this._cc1 = document.getElementById('cc1');
        this._cc2 = document.getElementById('cc2');
        this._cc3 = document.getElementById('cc3');
        this._cc4 = document.getElementById('cc4');
        this._cc5 = document.getElementById('cc5');
        this._cc6 = document.getElementById('cc6');
        this._cc7 = document.getElementById('cc7');
        this._cc8 = document.getElementById('cc8');
        this._cc9 = document.getElementById('cc9');
    }

    bind(){
        this._XXX.onclick = e => this._onXXXPressed.call(this, e);
    }

    _onXXXPressed(){
        
    }
}