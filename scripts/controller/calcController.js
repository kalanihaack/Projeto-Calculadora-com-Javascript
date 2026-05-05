class calcController {

    constructor() {

        this._lastOperator = ""
        this._lastNumber = ""
        this._operation = []
        this._displayCalcEl = document.querySelector("#display")
        this._dateEl = document.querySelector("#data")
        this._timeEl = document.querySelector("#hora")
        this._currentDate
        this.initialize()
        this._locale = "pt-br" //variavel para informar o pais que sera puxado os dados
        this.initButtonsEvents()
        this.initKeyboard()
    }

    initialize() {

        this.setDisplayTime()

        setInterval(() => { //arrowFunction na pratica

            this.setDisplayTime()

        }, 1000) //funcao para atualizar a data e hora a cada 1000ms

        this.setLastNumberToDisplay()

    }

    initKeyboard(){

        document.addEventListener("keyup", e=> {

            switch (e.key) {
            
            case 'Escape':
                this.clearAll()
                break

            case 'Backspace':
                this.clearEntry()
                break

            case '+':
            case '-':
            case '/':
            case '*':
            case '%':
                this.addOperation(e.key)
                break
            
            case 'Enter':
            case '=':
                this.calc()
                break
            
            case '.':
            case ',':
                this.addDot()
                break

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(e.key))
                break
        }
        })
    

    }

    addEventListenerAll(element, events, fn) {

        events.split(" ").forEach(event => {
            element.addEventListener(event, fn, false)
        })  //criamos uma funcao que pega os elementos (botao) eventos (do mouse e teclado) e a funcao que vem com isso ()
        //colocamos um split para ele separar cada evento, e criamos um foreach com uma funcao que faz um eventlistener separado para cada evento

    }

    clearAll() {
        this._operation = [] //retorna array vazio para limpar
        this._lastNumber = ""
        this._lastOperator = ""

        this.setLastNumberToDisplay()
    }

    clearEntry() {
        this._operation.pop() //pop limpa a ultima adicao no array
        this.setLastNumberToDisplay()
    }


    getLastOperation() {
        return this._operation[this._operation.length-1] 
    }

    setLastOperation(value) {
        this._operation[this._operation.length-1] = value 
    }

    isOperator(value) {

        return (["+", "-", "*", "%", "/",].indexOf(value) > -1) //busca se o valor é igual e traz o index

    }

    pushOperation(value){
        this._operation.push(value)

        if (this._operation.length > 3) {            
            this.calc()
        }
        
    }

    getResult(){

        return eval(this._operation.join(""))
    }

    calc(){

            let last = ""
            this._lastOperator = this.getLastItem()

            if (this._operation.length < 3 ) {

                let firstItem = this._operation[0]
                this._operation = [firstItem, this._lastOperator, this._lastNumber]
            }

            if (this._operation.length > 3) {
                last = this._operation.pop()

                this._lastNumber = this.getResult()

            }

            else if (this._operation.length == 3) {


                this._lastNumber = this.getLastItem(false)

            }

            let result = this.getResult()//variavel que transforma o resultado de um array para uma string

            if (last == "%") {

                result /= 100 //divide a operacao em 100 para termos a porcentagem
                
                this._operation = [result]

            } else {

                this._operation = [result] //retorna as duas variaveis de cima

                if (last) this._operation.push(last)
                
            }
            


            this.setLastNumberToDisplay() //mostra o ultimo numero no display

    }

    getLastItem(isOperator = true){

            let lastItem 

            for (let i = this._operation.length-1; i >=0; i--){

            if (this.isOperator(this._operation[i]) == isOperator) { 
                lastItem = this._operation[i]
                break}  
            }

            if (!lastItem) {

                lastItem = (isOperator) ? this._lastOperator : this._lastNumber
            }


            return lastItem
    }   

    setLastNumberToDisplay(){  //funcao para mostrarmos os numeros na tela de acordo com a operacao
        
        let lastNumber = this.getLastItem(false)

        if (!lastNumber) lastNumber = 0
        
        this.displayCalc = lastNumber //mostra a variavel lastNumber na tela
    }

    addOperation(value) {

        if (isNaN(this.getLastOperation())) { //se o lastoperation nao for um numero

            if (this.isOperator(value)) {
                this.setLastOperation(value)
            }

            else {
                this.pushOperation(value)
                this.setLastNumberToDisplay() //passando por toda operacao, retorna o que foi apertado na calculadora e aparece no display
            }
        }
        
        else {

            if (this.isOperator(value)) {
                this.pushOperation(value)
            }

            else {
                let newValue = this.getLastOperation().toString() + value.toString()
                this.setLastOperation(newValue)
                this.setLastNumberToDisplay(); 

            }
        }

        console.log(this._operation)
    }

    addDot() {

        let lastOperation = this.getLastOperation()

        if (typeof lastOperation === "string" && lastOperation.split("").indexOf(".") > -1) return //se tentar usar o ponto mais de uma vez, ele nao permite

        
        if(this.isOperator(lastOperation) || !lastOperation) {
            this.pushOperation("0.")
        } 
        else {
            this.setLastOperation(lastOperation.toString() + ".")
        }

        this.setLastNumberToDisplay()
    }


    setError() {
        this.displayCalc = "error"
    }

    execBtn(value) {
        switch (value) {
            case 'ac':
                this.clearAll()
                break

            case 'ce':
                this.clearEntry()
                break

            case 'soma':
                this.addOperation("+")
                break

            case 'subtracao':
                this.addOperation("-")
                break

            case 'divisao':
                this.addOperation("/")
                break

            case 'multiplicacao':
                this.addOperation("*")
                break

            case 'porcento':
                this.addOperation("%")
                break

            case 'igual':
                this.calc()
                break

            case "ponto":
                this.addDot("")
                break

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value))
                break

            default:
                this.setError() //retorna erro caso nenhum dos cases acima de resultado
                break


        }
    }

    initButtonsEvents() {

        let buttons = document.querySelectorAll("#buttons > g, #parts > g")

        buttons.forEach((btn, index) => {

            this.addEventListenerAll(btn, "click drag", e => {

                let textBtn = btn.className.baseVal.replace("btn-", "")
                this.execBtn(textBtn)

            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer" //evento que faz o ponteiro mudar o estilo quando passa por cima do botao
            })
        })
    }

    setDisplayTime() {

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        })

        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)

    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value
    }

    get currentDate() {
        return new Date()
    }

    set currentDate(value) {
        this._currentDate = value
    }

    get displayTime() {
        return this._timeEl.innerHTML
    }

    set displayTime(value) {
        this._timeEl.innerHTML = value
    }

    get displayDate() {
        return this._dateEl.innerHTML
    }

    set displayDate(value) {
        this._dateEl.innerHTML = value
    }
}

//lendo a documentacao do ecmascript2022, percebi que agora metodos privados podem ser chamados usando #, ao inves de _