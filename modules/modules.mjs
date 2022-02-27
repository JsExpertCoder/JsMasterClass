/**
 * para utilizar modulos no node.js os arquivos devem ter a extensão .mjs
 * além de serem executados com a flag --experimental-modules
 * Não é permitido a importação ou exportação dentro de blocos
 * exe: 
 *  function fn(){
 *    import {PI as pi} from './math.mjs'
 *     
 *  }
 *  if (true) {
 *      export function add(x, y) {
            return x + y
        }
 *  }
 */

import { PI as pi } from './math.mjs'// on line 
import * as math2 from './math2.mjs'

console.log(math2.add(12, 4))
console.log(pi)

import Circle from './circle.mjs'

const circle = new Circle(10)
console.log(circle)
console.log(circle.area)
