class calcController {

    constructor() {
        this._displayCalc = "0"
        this._actualDate
    }

    get displayCalc() {
        return this._displayCalc
    }

    set displayCalc(value) {
        this._displayCalc = value
    }

    get actualDate() {
        return this._actualDate
    }

    set actualDate(value) {
        this._actualDate = value
    }
}