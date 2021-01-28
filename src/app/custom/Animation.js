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

  mouseLeaveHandler() {
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
  }
}
