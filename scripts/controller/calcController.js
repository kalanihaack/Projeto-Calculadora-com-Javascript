class calcController {

    constructor() {

        this._displayCalcEl = document.querySelector("#display")
        this._dateEl = document.querySelector("#data")
        this._timeEl = document.querySelector("#hora")
        this._currentDate
        this.initialize()
        this._locale = 'pt-br' //variavel para informar o pais que sera puxado os dados
    }

    initialize() {

        this.setDisplayTime()

        setInterval(() => { //arrowFunction na pratica

            this.setDisplayTime()

        }, 1000) //funcao para atualizar a data e hora a cada 1000ms

    }

    initButtonsEvents() {

        document.querySelectorAll("#buttons > g, #parts > g")
    }

    setDisplayTime(){

            this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
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