 let a = window.onclick = function (event) {
     let x = event.screenX
     let y = event.screenY
    document.write(`
    MOUSE POSITION:
    X: ${x} Y: ${y}`)

}  
window.onkeydown = function (event) {
  // suporte para todos o navegadores
   let realEvent = event ? event : window.event
    alert(`
        KEYBORD PRESS INFO:
            Key: ${realEvent.code.replace(/key/i, ' ')}
            Key code: ${realEvent.keyCode}
            Key Id: ${realEvent.keyIdentifier}
    `)
    console.log(realEvent)
}
/* 
    GABARITOS
    realEvent.stopPropagation

    GROSS-BROWSER
    if (realEvent.stopPropagation()) {
        realEvent.stopPropagation
    } else {
        realEvent.cancelBubble = true
    }
*/