import * as Interior from "./interior.js"

Interior.select('body').style.margin = "0px"


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

const ANavBar = {
    padding: '20px',
    marginRight: '70px',
    fontFamily: "Arial, Helvetica, sans-serif",
    textDecoration: "none"
}

//-------------------------------------------------------------


// template:

let navOptAndLogo = [
    {
        type: "img",
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
        type: "a",
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
        type: "a",
        className:"about",
        textContent: "About",
        style: ANavBar,
        href: "#about"
    },
    {
        type: "a",
        className:"register",
        textContent: "Register",
        style: ANavBar,
        href: "#register"
    },
    {
        type: "a",
        className:"logIn",
        textContent: "LogIn",
        style: ANavBar,
        href: "#login"
    }
]

let navbar = [
    {
        type: 'div',
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
        textContent: [...navOptAndLogo]
    }

];
//--------------------------------------------------------------

Interior.insertTo('body', navbar);

navbar[0].className = 'second-nav';
navbar[0].style.backgroundColor = 'yellow'
Interior.insertTo('body', navbar);
