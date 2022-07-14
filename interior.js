const namePattern = /^\w+(?=-)/;

function loop(el, atrs){

    console.log('atrs ', atrs);
 

    for (let [atrName, value] of Object.entries(atrs)){

        console.log('atrName:', atrName);
        console.log('value:',value);
        
        if(atrName === 'typeName'){
            continue
        }
        else if(atrName === 'Events'){
            for (let eventObj of value){
                eventObj.act === "add" || !eventObj.act ? el.addEventListener(eventObj.evnt, eval(eventObj.evntFunc)) : el.removeEventListener(eventObj.evnt, eval(eventObj.evntFunc))
            }
            continue
        }

        if (Array.isArray(value)){
            insertTo(el, value)
        }       
        else if (typeof value == 'object' && value.nodeName !== '#document-fragment'){

            for (let [secondAtrName, secondValue] of Object.entries(value)){
                console.log('secondAtrName', secondAtrName);
                console.log('secondValue:', secondValue);
                console.log('el:', el);
                el[`${atrName}`][`${secondAtrName}`] = secondValue;
            };

        }
        else if (value.nodeName === '#document-fragment'){
            console.log("#document-fragment:", value)
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

export function insertTo(parent, content, flag='end'){

    console.log('parent: ', parent);
    console.log('content:', content);
    
    //check for qry:
    if (typeof parent == "string"){
        parent = document.querySelector(`${parent}`);
    };
    //-------------------------------------------------------

 
    for (let obj of content) {

        console.log('obj:', obj)
        const typeOf = obj.typeName
        
        let el = document.createElement(`${typeOf}`);
        console.log('el:', el)

        if (Object.keys(obj).length !== 0) {
            loop(el, obj);
        }; 

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


export function copy(data) {
    return JSON.parse(JSON.stringify(data))
}

export function referTo(ref) {
    return `(() => ${ref})()`
}

export function removeFrom(parentQry, kidQry){
    document.querySelector(parentQry).removeChild(document.querySelector(kidQry))
}

export function make(nodename){
    return document.createElement(nodename)
}

// doc:

// Events:[
//     {evnt:'click', evntFunc: Interior.referTo(OnClick)}
// ]