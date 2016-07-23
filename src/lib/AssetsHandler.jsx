/** @flow */

export default class AssetsHandler {

  static get(file: string = '', path: string = '') :string {
    if(path != ''){
      return `/static/${path}/${file}`;
    }
    else{
      return `/static/${file}`;
    }
  }
}
