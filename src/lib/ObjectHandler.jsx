/** @flow */

export default class ObjectHandler {

  static has(index: string = '', obj: Object) :bool {
    return obj[index] != 'undefined' ? true : false;
  }

  static eq(index: string = '', obj: Object, val: any = null) :bool {
    if(this.has(index, obj) && obj[index] === val){
      return true;
    }

    return false;
  }

  static get(index: string = '', obj: Object) :any {
    return obj[index] != 'undefined' ? obj[index] : null;
  }
}
