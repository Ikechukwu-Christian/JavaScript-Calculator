const display = document.getElementById("display");

const getValue = (value) =>{
    return display.value += value;
}
const getresult = (result) =>{
    let myResult = eval(display.value);
    return(display.value = myResult);
}

const clrChar = () =>{
    display.value = "";
}

const delChar = () =>{
   display.value = display.value.slice(0,-1)
}

const off = document.querySelector('[data-off]')
// const disableButton = document.getElementById("disableButton");
const disabled = () =>{
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        if(button !== off){
            button.classList.toggle("disabled")
        }
    });
}

off.addEventListener('click', () => {
    clrChar();
    disabled();
})
