// def events here:

export function OnMouseover (e) {
    if (e.target.tagName === "A"){
        e.target.style.backgroundColor = 'gray';
        e.target.style.color = 'white'
    }
   
}
export function OnMouseout (e) {
    if (e.target.tagName === "A"){
        e.target.style.backgroundColor = '';
        e.target.style.color = 'black'
    }
   
}
//------------------------------------------------------------