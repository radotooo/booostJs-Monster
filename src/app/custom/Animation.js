import Monster from './Monster';

export default class Animation {
  constructor() {
    this.monsters = [];
  }

  init() {
    const monsters = document.querySelectorAll('.monster');

    monsters.forEach((x) => {
      const monster = new Monster(x);

      monster.element.addEventListener('mouseenter', (el) =>
        monster.expand(el)
      );
      monster.element.addEventListener('mouseleave', (el) =>
        monster.contract(el)
      );
      monster.element.parentElement.addEventListener('mouseleave', (el) =>
        monster.reset(el)
      );
      this.monsters.push(monster);
    });
  }
}
