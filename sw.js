self.addEventListener('message', function (event) {
  clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage('hello from sw.js')
    })
  })
})
