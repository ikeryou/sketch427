import { MousePointer } from "../core/mousePointer";
import { MyDisplay } from "../core/myDisplay";
import { Util } from "../libs/util";

// -----------------------------------------
//
// -----------------------------------------
export class Item extends MyDisplay {

  private _h:Array<string> = 'acenmorsuvwx'.split('')
  private _big:Array<string> = 'bdhkl'.split('')

  constructor(opt:any) {
    super(opt)
  }

  protected _update():void {
    super._update();

    const mx = MousePointer.instance.normal.x
    // const my = MousePointer.instance.easeNormal.y

    const txtNum = 10
    const sp = ~~(Util.map(mx, 0, txtNum, -0.75, 0.75))
    // const sp = 10
    let txt = ''
    const range = 1
    for (let i = 0; i < txtNum; i++) {
      txt += (Math.abs(i - sp) < range) ? this._big[i % this._big.length] : this._h[i % this._h.length]
    }
    this.el.innerHTML = txt
  }
}







