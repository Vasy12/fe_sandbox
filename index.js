class MenuComponent {

  /**
   *
   * @param {string} prefix
   */
  log (prefix = '') {

  }
}

class MenuPosition extends MenuComponent {

  constructor (name) {
    super();
    this._name = name;
  }

  log (prefix = '') {
    console.log( `${prefix} ${this._name}` );
  }
}

class Menu extends MenuComponent {

  /**
   *
   * @param {string} name
   * @param {Array<MenuComponent>} menuComponents
   */
  constructor (name, menuComponents) {
    super();
    this._name = name;
    this._menuComponents = menuComponents;
  }

  log (prefix = '') {
    console.log( `${prefix} ${this._name}` );
    this._menuComponents.forEach( function (menuComponent, index) {
                                    menuComponent.log( `\t${prefix }${index + 1}.` );
                                  }
    );
  }
}

const menu = new Menu( 'Main menu', [
  new Menu( 'Submenu 1', [
    new MenuPosition( 'Position 1' ),
    new MenuPosition( 'Position 2' ),
    new MenuPosition( 'Position 3' ),
    new Menu( 'Submenu 1', [
      new MenuPosition( 'Position 1' ),
      new MenuPosition( 'Position 2' ),
      new MenuPosition( 'Position 3' ),
      new Menu( 'Submenu 1', [
        new MenuPosition( 'Position 1' ),
        new MenuPosition( 'Position 2' ),
        new MenuPosition( 'Position 3' ),

        new MenuPosition( 'Position 4' ),
        new MenuPosition( 'Position 5' ),
      ] ),
      new MenuPosition( 'Position 4' ),
      new MenuPosition( 'Position 5' ),
    ] ),
    new MenuPosition( 'Position 4' ),
    new MenuPosition( 'Position 5' ),
    new MenuPosition( 'Position 6' ),
  ] ),
  new Menu( 'Submenu 2', [
    new MenuPosition( 'Position 1' ),
    new MenuPosition( 'Position 2' ),
    new MenuPosition( 'Position 3' ),
    new MenuPosition( 'Position 4' ),
    new MenuPosition( 'Position 5' ),
    new MenuPosition( 'Position 6' ),
  ] ),
  new Menu( 'Submenu 2', [
    new Menu( 'Submenu 1', [
      new MenuPosition( 'Position 1' ),
      new MenuPosition( 'Position 2' ),
      new MenuPosition( 'Position 3' ),
      new MenuPosition( 'Position 4' ),
      new MenuPosition( 'Position 5' ),
    ] ),
    new MenuPosition( 'Position 1' ),
    new MenuPosition( 'Position 2' ),
    new MenuPosition( 'Position 3' ),
    new MenuPosition( 'Position 4' ),
    new MenuPosition( 'Position 5' ),
    new MenuPosition( 'Position 6' ),
  ] )
] );

menu.log();