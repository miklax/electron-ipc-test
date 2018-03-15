const {ipcRenderer} = require('electron')


let dugmebtn = document.getElementById('dugme');
dugmebtn.addEventListener('click', () => {
  ipcRenderer.send('asynchronous-message', 'ping')
})


ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg)
  document.getElementById("odgovor").innerHTML = arg;

})
