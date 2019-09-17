window.addEventListener('DOMContentLoaded', function () {
  let counter = 0
  document.querySelector('#counter').innerHTML = '' + counter
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(function () {
      console.log('registered sw.js')
    }, function () {
      console.error('failed sw.js')
    })

    navigator.serviceWorker.addEventListener('message', function (event) {
      counter++
      document.getElementById('counter').innerHTML = counter
    })

    document.querySelector('button').addEventListener('click', function () {
      navigator.serviceWorker.controller.postMessage('HELLO')
    })
  }
})
