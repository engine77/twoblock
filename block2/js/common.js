
let number_box = document.querySelector(".number_box");
if(number_box){
    let js_price_change = document.getElementById("js_price_change");
    let getNum = parseInt(js_price_change.textContent);
    number_box.addEventListener("click", e=>{
        
        
        let x = document.querySelector(".number_box input");
        if (e.target.closest('.minus') && parseInt(x.value) > 1) {
            parseInt(x.value--);
        }
        if (e.target.closest('.plus')) {
            parseInt(x.value++);
        }
        js_price_change.textContent = getNum * parseInt(x.value);
    })
}