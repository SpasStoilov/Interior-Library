import * as Interior from "./interior.js"

// def events here:

function OnMouseover (e) {
    if (e.target.tagName === "A"){
        e.target.style.backgroundColor = 'gray';
        e.target.style.color = 'white'
    }
   
}
function OnMouseout (e) {
    if (e.target.tagName === "A"){
        e.target.style.backgroundColor = '';
        e.target.style.color = 'black'
    }
   
}
//------------------------------------------------------------


// global styles:

const AnchorNavBarStyles = {
    padding: '20px',
    marginRight: '70px',
    fontFamily: "Arial, Helvetica, sans-serif",
    textDecoration: "none"
}

//-------------------------------------------------------------


// temps:

let navOptAndLogo = [
    {
        typeName: "img",
        className:"logo-img",
        src: "LogoNavBar-second.png",
        style: {
            width: "100px",
            height: "30px",
            marginLeft: "50px",
            marginTop: "15px",
        }
    },
    {
        typeName: "a",
        className:"home",
        textContent: "Home",
        style: {
            padding: '20px',
            marginRight: '70px',
            marginLeft: "auto",
            fontFamily: "Arial, Helvetica, sans-serif",
            textDecoration: "none"
        },
        href: "#"
    },
    {
        typeName: "a",
        className:"about",
        textContent: "About",
        style: AnchorNavBarStyles,
        href: "#about"
    },
    {
        typeName: "a",
        className:"register",
        textContent: "Register",
        style: AnchorNavBarStyles,
        href: "#register"
    },
    {
        typeName: "a",
        className:"logIn",
        textContent: "LogIn",
        style: AnchorNavBarStyles,
        href: "#login"
    }
]

let navbar = [
    {
        typeName: 'div',
        className: "navbar",
        style: {
            width: '100%',
            display: 'flex',
            boxShadow: "0px 2px 5px gray"
        },
        Events: [
            {evnt: "mouseover", evntFunc: Interior.referTo(OnMouseover)},
            {evnt: "mouseout", evntFunc: Interior.referTo(OnMouseout)}
        ],
        textContent: [
            ...navOptAndLogo,
        ]
    }

];

let paragraph = [
    {
        typeName: "p",
        innerHTML: `Interior <span style="font-weight: bold;">DEMO</span>`
    }
]


let logInInputAndButton = [
    {
        typeName: "input",
        type: "text",
        id: "username",
        name: "username",
        placeholder: "username"
    },
    {
        typeName: "input",
        type: "password",
        id: "password",
        name: "password",
        placeholder: "password"

    },
    {
        typeName: "button",
        type: "submit",
        id: "btn-form",
        textContent: "Submit",
        style: {
            width: '100px',
            boxShadow: "0px 2px 5px gray",
            marginTop: "7px"
        }
    },
]

let form = [
    {
        typeName: "form",
        className: "login-Form",
        style: {
            display:"inline-flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: '20px',
            padding: "20px",
            border: "2px solid gray",
            borderRadius: "10px"
        },
        textContent: [
            ...logInInputAndButton
        ]
    }
]
//--------------------------------------------------------------


//print:

Interior.select('body').style.margin = "0px"

Interior.insertTo('body', navbar);

navbar[0].className = 'second-nav';
navbar[0].style.backgroundColor = 'yellow'
Interior.insertTo('body', navbar);

paragraph[0].style = {
    fontSize: "x-large"
}
Interior.insertTo('body', paragraph, 'start')

Interior.insertTo('body', form)

//---------------------------------------------------------------