import { MyDisplay } from "../core/myDisplay";
import { Item } from "./item";
import { Tween } from "../core/tween";

// -----------------------------------------
//
// -----------------------------------------
export class Contents extends MyDisplay {

  constructor(opt:any) {
    super(opt)

    this.qsAll('.js-item').forEach((el:HTMLElement, i:number) => {
      new Item({
        el: el,
      })

      if(i % 2 != 0) {
        Tween.set(el, {
          scaleY: -1
        })
      }
    })
  }

  protected _update():void {
    super._update()
  }
}