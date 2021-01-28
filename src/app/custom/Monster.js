import gsap from 'gsap';

export default class Monster {
  constructor(element) {
    this.element = element;
  }
  expand(el) {
    el.target.id = 'expand';
    gsap.to('#expand', { width: '80%', duration: 0.5 });
  }
  contract(el) {
    el.target.id = 'contract';
    gsap.to('#contract', { width: '4%', duration: 0.5 });
  }
  reset() {
    gsap.to('.monster', { width: '16.6%', duration: 0.5 });
  }
}
