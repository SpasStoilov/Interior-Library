import * as Interior from "./interior.js"
import * as Library from "./library.js"
import * as Events from "./events.js"

// temps:

let navbar = Library.navbar

let paragraph = Library.paragraph
paragraph[0].style = {
    fontSize: "x-large"
}

let form = Library.form

//-------------------------------------------------------------

//render:

Interior.select('body').style.margin = "0px"

Interior.insertTo('body', navbar);

navbar[0].className = 'second-nav';
navbar[0].style.backgroundColor = 'yellow'
Interior.insertTo('body', navbar);

Interior.removeEvent('.second-nav', "mouseover", Events.OnMouseover)

Interior.insertTo('body', paragraph, 'start')

Interior.insertTo('body', form)
let ignoreAtr = ['style']
Interior.insertTo('body', form, 'end', ignoreAtr)

//---------------------------------------------------------------