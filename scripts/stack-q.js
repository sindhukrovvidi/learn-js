class PStack {
  #id;
  constructor() {
    this.#id = Math.floor(Math.random() * 100) + 1;
  }

  showId() {
    console.log(this);
    return this.#id;
  }

  push(p) {
    // implement in child class
  }

  pop() {
    // implement in child class
  }

}

class PStackImpl extends PStack {
  #persons = []
  constructor() {
    super();
  }
  push(p) {
    return this.#persons.push(p)
  }

  pop() {
    return this.#persons.pop().age
  }

  show() {
    return this.#persons
  }

}

console.log(pstack.pop());
console.log(pstack.pop());
console.log(pstack.show());
console.log(pstack.showId());