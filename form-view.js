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
        this._cc1.onclick = e => this._onCC1Pressed.call(this, e);
        this._cc2.onclick = e => this._onCC2Pressed.call(this, e);
        this._cc3.onclick = e => this._onCC3Pressed.call(this, e);
        this._cc4.onclick = e => this._onCC4Pressed.call(this, e);
        this._cc5.onclick = e => this._onCC5Pressed.call(this, e);
        this._cc6.onclick = e => this._onCC6Pressed.call(this, e);
        this._cc7.onclick = e => this._onCC7Pressed.call(this, e);
        this._cc8.onclick = e => this._onCC8Pressed.call(this, e);
        this._cc9.onclick = e => this._onCC9Pressed.call(this, e);
    }

    _onCC1Pressed(){
        
    }

    _onCC2Pressed(){
        
    }

    _onCC3Pressed(){
        
    }
    
    _onCC4Pressed(){
        
    }
    
    _onCC5Pressed(){
        
    }
    
    _onCC6Pressed(){
        
    }
    
    _onCC7Pressed(){
        
    }
    
    _onCC8Pressed(){
        
    }
    
    _onCC9Pressed(){
        
    }
    
}