const namePattern = /^\w+(?=-)/;

function loop(el, atrs, ignoreAtr){

    // console.log('atrs ', atrs);
 
    for (let [atrName, value] of Object.entries(atrs)){

        // console.log('atrName:', atrName);
        // console.log('value:',value);
        
        if(atrName === 'typeName' || ignoreAtr.includes(atrName)){
            continue
        }
        else if(atrName === 'Events'){
            for (let eventObj of value){
                eventObj.act === "add" || !eventObj.act ? el.addEventListener(eventObj.evnt, eventObj.evntFunc) : el.removeEventListener(eventObj.evnt, eventObj.evntFunc)
                // eventObj.act === "add" || !eventObj.act ? el.addEventListener(eventObj.evnt, eval(eventObj.evntFunc)) : el.removeEventListener(eventObj.evnt, eval(eventObj.evntFunc))
            }
            continue
        }

        if (Array.isArray(value)){
            insertTo(el, value)
        }       
        else if (typeof value == 'object' && value.nodeName !== '#document-fragment'){

            for (let [secondAtrName, secondValue] of Object.entries(value)){
                // console.log('secondAtrName', secondAtrName);
                // console.log('secondValue:', secondValue);
                // console.log('el:', el);
                el[`${atrName}`][`${secondAtrName}`] = secondValue;
            };

        }
        else if (value.nodeName === '#document-fragment'){
            // console.log("#document-fragment:", value)
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

    // console.log('parent: ', parent);
    // console.log('content:', content);
    
    //check for qry:
    if (typeof parent == "string"){
        parent = document.querySelector(`${parent}`);
    };
    //-------------------------------------------------------

 
    for (let obj of content) {

        console.log('obj:', obj)
        const typeOf = obj.typeName
        let el;

        if (typeof obj === 'string' || typeof obj === 'number'){
            el = document.createDocumentFragment()
            el.textContent += obj
        } else {
            el = document.createElement(`${typeOf}`);
            if (Object.keys(obj).length !== 0) {
                loop(el, obj, ignoreAtr);
            }; 
        }
        
        //filling parent:
        if (flag == "end"){
            parent.appendChild(el);
        }
        else if(flag == "start"){
            parent.prepend(el);
        };
        //----------------------------------------------------
        
    };
    
    return parent
    
}

export function refresh(parent, content){

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

export function removeEvent(qry, evnt, handler){
    document.querySelector(qry).removeEventListener(evnt, handler)
}



//JUNk:

// export function copy(data) {
//     return JSON.parse(JSON.stringify(data))
// }

// export function referTo(ref) {
//     return `(() => ${ref})()`
// }

// doc:

// Events:[
//     {evnt:'click', evntFunc: Interior.referTo(OnClick)}
// ]