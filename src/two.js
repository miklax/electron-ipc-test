const {ipcRenderer} = require('electron')

console.log('test 2')

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  document.getElementById("odgovortwo").innerHTML = arg;
  console.log(arg)
})
