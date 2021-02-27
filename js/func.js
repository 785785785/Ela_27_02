alert("Hello World");


const example = () => {
    const fromInput = document.getElementById("AA").value;
    document.getElementById("CC").innerText = fromInput;
   }
   const button1 = document.getElementById("BB");
//    button1.onclick= example();
   button1.addEventListener("click",example);
   

   
