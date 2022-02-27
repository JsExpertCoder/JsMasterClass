let fatorial = (x) => {
    let fat = 1
    for (let index = 0; x > index; x--) {
        fat *= x
    }
    return fat
}
console.log(fatorial(4))