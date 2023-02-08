class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  set code(x) {
    this._code = x;
  }
  set name(x) {
    this._name = x;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
