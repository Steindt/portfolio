const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
    <style>
        header {
            display: flex;
            justify-content: center;
            align-items: center;
        }    

        nav {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color:  rgba(10, 10, 50, 0.8);
        width: 600px;
        border-radius: 20px;
        }

        nav:hover {
            transition: all 0.5s ease;
            background-color: black;
        
        }

        ul {
        padding: 0;
        }
        
        ul li {
        list-style: none;
        display: inline;
        }
        
        a {
        font-weight: 700;
        margin: 0 25px;
        color: #fff;
        text-decoration: none;
        }
        
        a:hover {
            color: gray;
            transform: scale(1.5);
        }
    </style>
    <header>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="projects">Projects</a></li>
                <li><a href="about">About</a></li>
            </ul>
        </nav>
    </header>
`

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: "open"})
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define("header-component", Header);