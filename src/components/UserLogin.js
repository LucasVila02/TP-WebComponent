class UserLogin extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render();
      }

    render() {
        this.shadowRoot.innerHTML = /* html */`
            <style>
                form {
                        display: flex;
                        flex-direction: column;
                        width: 200px;
                        
                        }
                        input {
                        margin: 5px;
                        padding: 8px;
                        font-size: 16px;
                        }
                        button {
                        padding: 10px;
                        font-size: 16px;
                        background-color: blue;
                        color: white;
                        border: none;
                        cursor: pointer;
                        }
            </style>
            <form id="login-form">
            
                    <label for="username">Usuario: </label>
                    <input type="text" id="username" name="username" required/>
               
                
                    <label for="password">Constraseña: </label>
                    <input type="password" id="password" name="password" required/>
               
                <button id='bton' type="submit">Iniciar Sesión</button>
            </form>
        `;

        this.shadowRoot.querySelector('#login-form')
        .addEventListener('submit', (e) => {
            e.preventDefault(); 
            this.submitForm(e);
        });
    }
   
    //Metodo para manejas el envio del formulario
    submitForm(event) {
      event.preventDefault(); 
      const username = this.shadowRoot.getElementById('username').value;
      const password = this.shadowRoot.getElementById('password').value;

      console.log("Los datos del formularo son :", {username, password})
     
      if(username === 'user' && password === 'pass'){
        this.dispatchEvent( new CustomEvent ('login-result',{
            detail: {
              type: 'succes',
              message: 'Inicio de sesión exitosa'
            },
            bubbles: true,
            composed: true
        }))
      }else{
        this.dispatchEvent( new CustomEvent('login-result', {
          detail: {
            type: 'error',
            message: 'Error al iniciar sesión'
          },
          bubbles: true,
          composed: true
        }))
      }
    }
}

customElements.define('user-login', UserLogin)