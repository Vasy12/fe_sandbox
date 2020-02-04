/*

 Menu:
 1. Position
 2. Position
 3. Position
 4. Position
 4.1 Position
 4.2 Position
 4.3 Position
 4.3.1 Position
 4.3.2 Position
 4.4 Position
 5. Position
 6. Position
 7. Position
 7.1 Position
 7.2 Position
 7.3 Position
 */

/*

 армия - getSoldersCount();
 корпус - 2
 дивизия - 4
 бригада - 2 - 4
 полк 4 - 6
 батальен - 2 - 4
 рота 4
 взвод - 4 - 6
 отделение                         => COMPOSITE

 ----------------------------
 СОЛДАТ - LEAF

 */

/*COMPONENT*/
class ArmyUnit {

  /**
   *
   * @return {number}
   */
  getSoldersCount () {
    return 0;
  }
}

/*Leaf*/
class Solder extends ArmyUnit {

  constructor (status = 'ready') {
    super();
    this._status = status;
  }

  get status () {
    return this._status;
  }

  getSoldersCount () {
    return this.status === 'ready'
           ? 1
           : 0;
  }

}

/*COMPOSITE*/
class ArmyStructure extends ArmyUnit {

  /**
   *
   * @param {Array<ArmyUnit>} armyUnits
   */
  constructor (armyUnits = []) {
    super();
    this.armyUnits = armyUnits;
  }

  /**
   *
   * @return {Array<ArmyUnit>}
   */
  get armyUnits () {
    return this._armyUnits;
  }

  /**
   *
   * @param {ArmyUnit} armyUnit
   */
  addArmyUnit (armyUnit) {
    if (armyUnit instanceof ArmyUnit) {
      this.armyUnits.push( armyUnit );
    } else {
      throw new TypeError();
    }
  }

  /**
   *
   * @param {Array<ArmyUnit>} value
   */
  set armyUnits (value) {
    this._armyUnits = value;
  }

  getSoldersCount () {
    return this.armyUnits.reduce( function (soldersTotalCount, armyUnit) {
      return soldersTotalCount + armyUnit.getSoldersCount();
    }, 0 );
  }

}

const army = new ArmyStructure( [
                                  new ArmyStructure( [
                                                       new ArmyStructure( [
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                          ] ),
                                                       new ArmyStructure( [
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                          ] ),
                                                       new ArmyStructure( [
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                          ] ),
                                                       new ArmyStructure( [
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                          ] ),
                                                     ] ),
                                  new ArmyStructure( [
                                                       new ArmyStructure( [
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                          ] ),
                                                       new ArmyStructure( [
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                          ] ),
                                                       new ArmyStructure( [
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                          ] ),
                                                       new ArmyStructure( [
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                          ] ),
                                                     ] ),
                                  new ArmyStructure( [
                                                       new ArmyStructure( [
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                          ] ),
                                                       new ArmyStructure( [
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                          ] ),
                                                       new ArmyStructure( [
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                          ] ),
                                                       new ArmyStructure( [
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                          ] ),
                                                     ] ),
                                  new ArmyStructure( [
                                                       new ArmyStructure( [
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                          ] ),
                                                       new ArmyStructure( [
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                          ] ),
                                                       new ArmyStructure( [
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                          ] ),
                                                       new ArmyStructure( [
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                            new Solder(),
                                                                          ] ),
                                                     ] ),
                                ] );

console.log( army.getSoldersCount() );