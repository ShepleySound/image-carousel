import './style-up.css';

class Dropdown {
  constructor(menuID) {
    this.menu = document.querySelector(`#${menuID}`);
    this.itemWrapper = this.menu.querySelector('.item-wrapper');
    this.itemWrapper.classList.add('hide');
    this.items = this.menu.querySelectorAll('.menu-item');
    this.menuButton = this.menu.querySelector('.menu-button');
    this.eventHandlers();
  }

  animator() {
    this.menuButton.classList.toggle('active');
    const wrap = this.itemWrapper;
    if (wrap.style.maxHeight) {
      wrap.style.maxHeight = null;
    } else {
      wrap.style.maxHeight = `${wrap.scrollHeight}px`;
    }
  }

  eventHandlers() {
    this.menuButton.addEventListener('click', () => {
      this.animator();
    });
  }

  getMenu() {
    return document.querySelector(`#${this.menuID}`);
  }
}

export default Dropdown;
