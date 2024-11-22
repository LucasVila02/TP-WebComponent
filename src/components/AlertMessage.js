class AlertMessage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['type', 'message'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'message' || name === 'type') {
            this.updateAlert();
        }
    }

    connectedCallback() {
        this.updateAlert();
    }

    updateAlert() {
        const type = this.getAttribute('type');
        const message = this.getAttribute('message');
        if (!message) {
            this.style.display = 'none';
            return;
        }
        this.style.display = 'block';

        const styles = /* css */ `
        .alert {
            padding: 15px;
            border-radius: 5px;
            color: white;
            font-family: Arial, sans-serif;
            margin: 10px 0;
        }
        .alert.succes { background-color: green; }
        .alert.error { background-color: red; }
        .alert.info { background-color: blue; }
        `;

        const alertHtml = /* html */ `
            <div class="alert ${type}">
                ${message}
            </div>
        `;

        this.shadowRoot.innerHTML = /* html */ `
            <style>
                ${styles}
            </style>
            ${alertHtml}
        `;
    }
}

customElements.define('alert-message', AlertMessage);