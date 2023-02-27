// @ts-check

export default class Example {
  constructor(element) {
    this.element = element;
  }

  init() {
    this.element.textContent = 'hello, world!';
    // eslint-disable-next-line no-console
    console.log('ehu!');
  }
}
