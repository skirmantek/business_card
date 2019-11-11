const DATAKEY = 'myKey';
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault();
        let values = document.querySelectorAll('input');
        var data = [];

        for (let z = 0; z < values.length; z++){
            data.push(values[z].value);
        }   
        
        localStorage.setItem(DATAKEY, JSON.stringify(data)); 
        draw(data);
        });
        
        draw(JSON.parse(window.localStorage.getItem(DATAKEY)) || []);
});

function draw(myArray){
    
    const myDiv = document.createElement('div');
    myDiv.className = "newCard";

    
    for(var i = 0; i < myArray.length; i++) {
        const myP = document.createElement('p');
        myP.textContent = myArray[i];
        myDiv.appendChild(myP);
    }

    const content = document.createElement('div');
    content.className = "content";

    content.style.backgroundImage = "url('bckg.jpg')";
    const logo = document.createElement('img');
    logo.className = "logo";
    logo.src = 'logo.png';
    
    document.body.appendChild(content);
    content.appendChild(logo);
    content.appendChild(myDiv);
}