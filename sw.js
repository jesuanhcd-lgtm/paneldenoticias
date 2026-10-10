// Service worker mínimo: hace la app instalable sin cachear nada.
// Las noticias se siguen pidiendo siempre a la red (Apps Script).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {}); // deja pasar todo a la red
