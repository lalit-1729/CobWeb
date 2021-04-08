import React from "react";

function toggler(){
    const menuButton = document.querySelector("#menuButton");
    const menu = document.querySelector("#menu");

    menuButton.addEventListener('click',() =>
     {
        if(menu.classList.contains('hidden'))
        {
            menu.classList.remove('hidden');
        }
        else {
            menu.classList.add('hidden');
        }
    })
}

export default toggler;