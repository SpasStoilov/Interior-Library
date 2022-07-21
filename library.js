import * as Interior from "./interior.js"
import * as Event from "./events.js"
import * as glbStyles from "./globalStyles.js"



export let navOptAndLogo = [
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
        style: glbStyles.AnchorNavBarStyles,
        href: "#about"
    },
    {
        typeName: "a",
        className:"register",
        textContent: "Register",
        style: glbStyles.AnchorNavBarStyles,
        href: "#register"
    },
    {
        typeName: "a",
        className:"logIn",
        textContent: "LogIn",
        style: glbStyles.AnchorNavBarStyles,
        href: "#login"
    }
]

export let navbar = [
    {
        typeName: 'div',
        className: "navbar",
        style: {
            width: '100%',
            display: 'flex',
            boxShadow: "0px 2px 5px gray"
        },
        Events: [
            {evnt: "mouseover", evntFunc: Event.OnMouseover},
            {evnt: "mouseout", evntFunc: Event.OnMouseout}
            // {evnt: "mouseover", evntFunc: Interior.referTo(Event.OnMouseover)},
            // {evnt: "mouseout", evntFunc: Interior.referTo(Event.OnMouseout)}
        ],
        textContent: [
            ...navOptAndLogo,
        ]
    }

];

export let paragraph = [
    {
        typeName: "p",
        className: "changeMe",
        textContent: [
            'Interior',
            {
                typeName: 'span',
                textContent: " DEMO",
                style: {
                    fontWeight: "bold"
                }
            }
        ]
        
    }
]


export let logInInputAndButton = [
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

export let form = [
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

export let dataToChange = [
    {
        query: ".changeMe",
        style: {
            backgroundColor: "gray"
        },
        textContent: [
            'Change',
            {
                typeName: 'span',
                textContent: " Done",
                style: {
                    fontWeight: "bold",
                    color: 'red'
                }
            }
        ]
    },
    {
        query: ".second-nav",
        style: {
            backgroundColor: "orange"
        }
    }
]
