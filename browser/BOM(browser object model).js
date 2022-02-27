// window.open('function.js', 'coder', 'width=100,height=100, toobar=no,location=no')
//window.resizeTo(300,300)
//window.moveTo(100,100)
//document.getElementById('tagId').innerHTML = '<h3>Testando</h3>'
let plugins = navigator.plugins
let p = ''
for (let index = 0; index < plugins.length; index++) {
    p += plugins[index].name + '\n';
    
}
alert(`
    plataforma: (${navigator.platform})
    agente: ${navigator.userAgent}
    língua: ${navigator.language}
    plugins: ${p}
`)
alert(
    `
    URL: ${location.href}
    Protocolo: ${location.protocol}
    `
)