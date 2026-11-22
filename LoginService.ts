import { AuthService } from './AuthService';

// 1. Logika Login Manual
document.getElementById('btn-login')?.addEventListener('click', () => {
  const email = (document.getElementById('login-email') as HTMLInputElement).value;
  const password = (document.getElementById('login-password') as HTMLInputElement).value;
  
  if(email && password) {
    AuthService.login(email, password);
  } else {
    alert('Isi email dan password!');
  }
});

// 2. Logika Login Google (OAuth)
declare const google: any; // Deklarasi untuk TypeScript

function decodeJwt(token: string) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
}

window.addEventListener('load', () => {
  if (typeof google !== 'undefined') {
    google.accounts.id.initialize({
      client_id: "38255144560-0b5pibfvehm1kop7kt8kct620en3n1rl.apps.googleusercontent.com",
      callback: (response: any) => {
        const payload = decodeJwt(response.credential);
        AuthService.loginGoogle(payload); // Simpan sesi & lempar ke dashboard
      }
    });

    const btnContainer = document.getElementById("google-btn-container");
    if (btnContainer) {
            google.accounts.id.renderButton(btnContainer, { 
        theme: "outline", 
        size: "large", 
        shape: "pill",  
        text: "signin_with",
        width: "300"      
      });
    }
  }
});