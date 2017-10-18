export class Util {

  static indexOf(item: any, list: Array<any>): number {
    for(let i = 0; i < list.length; i++){
      if(item.id && item['id'] === list[i]['id']){
        return i;
      }
    }
    return -1;
  }
}
