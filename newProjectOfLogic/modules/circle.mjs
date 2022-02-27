import pow, {PI as pi} from './math.mjs'
export default class{
    constructor(radius) {
        this.radius = radius
    }
    get area() {
        return pi * pow(this.radius, 2)
    }
}