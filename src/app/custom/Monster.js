import gsap from 'gsap';

export default class Monster {
  constructor(element) {
    this.element = element;
  }
  expand() {
    gsap.to(this.element, {
      width: '80%',
      id: 'expand',
      duration: 0.5,
    });
  }
  contract() {
    this.element.id = 'contract';
    gsap.to(this.element, { width: '4%', id: 'contract', duration: 0.5 });
  }
  reset() {
    this.element.id = 'reset';
    gsap.to(this.element, { width: '16.6%', id: 'reset', duration: 0.5 });
  }
}
