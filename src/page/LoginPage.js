
class LoginPage extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = /* html*/ `
            <style>
                    .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    }
                </style>
            <div class='container'>
                <user-login></user-login>
                <alert-message></alert-message>
               
        
            </div>
        `;

    }

    connectedCallback() {
        this.userLogin = this.shadowRoot.querySelector('user-login');
        this.alertMessage = this.shadowRoot.querySelector('alert-message');
        this.userLogin.addEventListener('login-result', this.handleShowAlert.bind(this));
    }

    handleShowAlert(event){
        const {type, message} = event.detail;
        this.alertMessage.setAttribute('type', type);
        this.alertMessage.setAttribute('message', message);
    }
}

customElements.define('login-page', LoginPage);