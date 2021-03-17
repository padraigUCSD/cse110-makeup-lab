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

        this._submitButton = document.getElementById('submitButton');
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

        this._submitButton.onclick = e => this._onSubmitPressed.call(this, e);
    }

    _onCC1Pressed(){
        // print curr val of name input
        console.log('print curr val of email input');
        console.log(document.getElementById('emailInput').value);
    }

    _onCC2Pressed(){
        document.getElementById('emailInput').value == "";
        console.error("email field cannot be empty");

    }

    _onCC3Pressed(){
        console.table();
    }
    
    _onCC4Pressed(){
        console.dir();
    }
    
    _onCC5Pressed(){
        console.dirxml();
    }
    
    _onCC6Pressed(){
        console.group();
    }
    
    _onCC7Pressed(){
        //
        console.time();
    }
    
    _onCC8Pressed(){
        console.timeEnd();
    }
    
    _onCC9Pressed(){
        console.trace();
    }

    _onSubmitPressed(){
        
        try{
            if(document.getElementById('emailInput').value == ""){
                throw "Empty Email Field";
            }
        }

        catch(err){
            console.error("Please correct the following error to submit the form " + err);
        } 

        finally{
            console.trace();
        }

    }
    
}