function showsidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hidesidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

const text =document.querySelector(".second-text");
const textLoad= () =>
{
setTimeout(() =>{
   text.textContent="Frontend Developer";
},0);
setTimeout(() =>{
   text.textContent="Junior  Developer";
},4000);
setTimeout(() =>{
   text.textContent="Passionate Developer";
},8000);
}
textLoad();
setInterval(textLoad,12000)