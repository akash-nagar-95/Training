// let para = document.getElementById('paragraphID');

// console.log(para);

// para.innerHTML = "this para is now changed ....... ";

// console.log(para.textContent);

let heading = document.getElementById("heading");
let button = document.getElementById("btn");
button.addEventListener("click", function(){
    heading.textContent = "message changed";
});