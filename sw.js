self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : { title: 'Colis', body: 'Nouvelle étape de livraison !' };
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: 'https://cdn-icons-png.flaticon.com/512/684/684900.png'
    })
  );
});
