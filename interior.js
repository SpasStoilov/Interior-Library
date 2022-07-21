const namePattern = /^\w+(?=-)/;

function loop(el, atrs, ignoreAtr){

    // console.log('atrs ', atrs);
 
    for (let [atrName, value] of Object.entries(atrs)){

        if(atrName === 'typeName' || ignoreAtr.includes(atrName)){
            continue
        }
        else if(atrName === 'Events'){
            for (let eventObj of value){
                eventObj.act === "add" || !eventObj.act ? el.addEventListener(eventObj.evnt, eventObj.evntFunc) : el.removeEventListener(eventObj.evnt, eventObj.evntFunc)
            }
            continue
        }

        if (Array.isArray(value)){
            insertTo(el, value)
        }       
        else if (typeof value == 'object' && value.nodeName !== '#document-fragment'){

            for (let [secondAtrName, secondValue] of Object.entries(value)){
                el[`${atrName}`][`${secondAtrName}`] = secondValue;
            };

        }
        else if (value.nodeName === '#document-fragment'){
            el.appendChild(value)
        }
        else {
            el[`${atrName}`] = value
        };

    };
};


export function select(qrySelector){
    return document.querySelector(qrySelector);
};

export function insertTo(parent, content, flag='end', ignoreAtr=[]){

    //check for qry:
    if (typeof parent == "string"){
        parent = document.querySelector(`${parent}`);
    };
    //-------------------------------------------------------

 
    for (let obj of content) {

        console.log('obj:', obj)
        let el;

        if (typeof obj === 'string' || typeof obj === 'number'){
            el = document.createDocumentFragment()
            el.textContent += obj
        } 
        else {
            if (Object.keys(obj).length !== 0) {
                if (obj.passedObj){
                    el = obj.passedObj
                    delete obj.passedObj
                }
                else if (obj.typeName){
                    el = document.createElement(obj.typeName);
                }
                else if (!obj.typeName){
                    el = document.createDocumentFragment()
                }

                console.log('el: ', el)
                loop(el, obj, ignoreAtr);
            };
        }
        
        //filling parent:
        if (parent) {
            if (flag == "end"){
                parent.appendChild(el);
            }
            else if(flag == "start"){
                parent.prepend(el);
            };
        }
       
        //----------------------------------------------------
        
    };
    
    return parent
    
}

export function refresh(parent, content){

    // The function removes all children and append new ones.

    //check for qry:
    if (typeof parent == "string"){
        parent = document.querySelector(`${parent}`)
    }
    //-------------------------------------------------------

    parent.replaceChildren('')
    insertTo(parent, content)
}


export function removeFrom(parentQry, kidQry){
    document.querySelector(parentQry).removeChild(document.querySelector(kidQry))
}

export function make(nodename){
    return document.createElement(nodename)
}

export function removeEvents(qry, ...evnts){

    const Eventlist = evnts.map((ev) => {
        let obj = {}
        obj.evnt = ev[0];
        obj.evntFunc = ev[1];
        obj.act = 'remove';
        return obj
    })

    let data = [
        {
            query: qry,
            Events: Eventlist
        }
    ]
    change(data)
}

export function change(data){

    // The function updates elements.

    for (let obj of data) {

        try {
            if (!obj.query){
                throw new Error(`ERROR: ${JSON.stringify(obj)} don't have "query" proparty in it!`)
            }
    
            let objToChange = select(obj.query)
            delete obj.query
            obj.passedObj = objToChange
            
            if (obj.textContent) {
                refresh(objToChange, [{textContent: obj.textContent}])
                delete obj.textContent
            }
    
            insertTo(false, [obj])

        } catch (err) {
            console.log(err.message)
        }
        
    }
}



//Trash:

// export function copy(data) {
//     return JSON.parse(JSON.stringify(data))
// }

// export function referTo(ref) {
//     return `(() => ${ref})()`
// }

// {evnt: "mouseover", evntFunc: Interior.referTo(Event.OnMouseover)},
// {evnt: "mouseout", evntFunc: Interior.referTo(Event.OnMouseout)}
