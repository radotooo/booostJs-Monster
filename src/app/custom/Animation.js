import EventEmitter from 'eventemitter3';
import Monster from './Monster';

export default class Animation {
  constructor() {
    this.monsters = [];
  }
  mouseEnterHandler(el) {
    el.element.id = 'expand';
    this.monsters.map((x) =>
      x.element.id === 'expand' ? x.expand() : x.contract()
    );
  }

  mouseLeaveHandler(el) {
    el.element.id = 'contract';
    this.monsters.map((x) => x.contract());
  }

  containerHandler() {
    this.monsters.map((x) => (x.element.id = 'reset'));
    this.monsters.map((x) => x.reset());
  }

  init() {
    const monsters = document.querySelectorAll('.monster');

    monsters.forEach((x) => {
      const monster = new Monster(x);

      this.monsters.push(monster);
    });

    this.monsters.map((x) =>
      x.element.addEventListener('mouseenter', () => this.mouseEnterHandler(x))
    );

    this.monsters.map((x) =>
      x.element.addEventListener('mouseleave', () => this.mouseLeaveHandler(x))
    );
    const container = document.querySelector('#container');

    container.addEventListener('mouseleave', (element) =>
      this.containerHandler(element)
    );

    //     this.mouseEnterHandler(el)
    //   );));
    // monster.element.id = 'reset';
    //   monster.element.addEventListener('mouseenter', (el) =>
    //     this.mouseEnterHandler(el)
    //   );
    //   monster.element.addEventListener('mouseleave', (el) =>
    //     monster.contract(el)
    //   );
    //   monster.element.parentElement.addEventListener('mouseleave', (el) =>
    //     monster.reset(el)
    //   );
  }
}
