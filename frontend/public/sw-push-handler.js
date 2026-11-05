self.addEventListener("push", function(event) { if (event.data) self.registration.showNotification("DirtPolice", { body: event.data.text() }); });
