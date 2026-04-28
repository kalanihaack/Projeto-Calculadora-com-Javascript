class calcController {

    constructor() {

        this._operation = []
        this._displayCalcEl = document.querySelector("#display")
        this._dateEl = document.querySelector("#data")
        this._timeEl = document.querySelector("#hora")
        this._currentDate
        this.initialize()
        this._locale = "pt-br" //variavel para informar o pais que sera puxado os dados
        this.initButtonsEvents()
    }

    initialize() {

        this.setDisplayTime()

        setInterval(() => { //arrowFunction na pratica

            this.setDisplayTime()

        }, 1000) //funcao para atualizar a data e hora a cada 1000ms

    }

    addEventListenerAll(element, events, fn) {

        events.split(" ").forEach(event => {
            element.addEventListener(event, fn, false)
        })  //criamos uma funcao que pega os elementos (botao) eventos (do mouse e teclado) e a funcao que vem com isso ()
            //colocamos um split para ele separar cada evento, e criamos um foreach com uma funcao que faz um eventlistener separado para cada evento

    }

    clearAll() {
        this._operation = [] //retorna array vazio para limpar
    }

    clearEntry() {
        this._operation.pop() //pop limpa a ultima adicao no array
    }

    addOperation(value) {
        this._operation.push(value) //push adiciona mais uma informacao ao array
        console.log(this._operation)
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

                break

            case 'subtracao':

                break

            case 'divisao':

                break

            case 'multiplicacao':

                break

            case 'porcento':

                break

            case 'igual':

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