// let a = document.querySelectorAll('a');

document.addEventListener('click', change)

function change(e){
    let item = e.target.parentElement;
    let a = e.target;
let child = item.children;
let element;
        if(item.id === 'sub-heading'){
            console.log(child)
            for (const i in child) {
                if (Object.hasOwnProperty.call(child, i)) {
                    element = child[i];
            
                    console.log(element)

                    element.fontSize = 'medium';
                    element.style.color = 'black';
                    element.style.borderBottom = 'none'            
                }
            }
            a.style.fontSize = 'large';
            a.style.color = 'grey';
            a.style.borderBottom = '2px solid grey'

            
            }
    
}



