// ============================================================
//  CuidarT · Configuración compartida (app del paciente + plataforma)
//  Este es el ÚNICO archivo que hay que editar.
//  1) Pegá acá los valores que te da Firebase (ver GUIA.md, paso 5).
//  2) Cambiá el PIN de la plataforma de administración.
// ============================================================

window.CUIDART_FIREBASE_CONFIG = {
  apiKey:       "AIzaSyCJL6eodX5KISR8dv0G-AZJjIETksjsxa8",
  authDomain:   "cuidart-demo.firebaseapp.com",
  databaseURL:  "https://cuidart-demo-default-rtdb.firebaseio.com",   // ej: https://cuidart-demo-default-rtdb.firebaseio.com
  projectId:    "Pcuidart-demo",
  appId:        "1:20626942477:web:0c3297374d8f21da344344"
};

// PIN para abrir la plataforma de administración (admin.html).
// Es una barrera liviana para la demo, NO es seguridad real.
window.CUIDART_ADMIN_PIN = "2026";
