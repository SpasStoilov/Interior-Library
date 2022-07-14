import * as Interior from "./interior.js"
import * as Library from "./library.js"

// temps:
let navbar = Library.navbar
let paragraph = Library.paragraph
let form = Library.form
//-------------------------------------------------------------

//render:

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