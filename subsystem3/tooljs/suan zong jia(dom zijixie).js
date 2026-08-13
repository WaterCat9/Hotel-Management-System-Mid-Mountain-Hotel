    const boxes=document.querySelectorAll("input[name='item']");
    const tl=document.getElementById('total');
    const parts=document.querySelectorAll('.part');

    parts.forEach(function(a){
        a.querySelector("input[name='item']").addEventListener('change',totalprice);
        a.querySelector(`input[type='number']`).addEventListener('input',totalprice);
    })

    function totalprice(){
        let total=0;
        boxes.forEach(function(a){
            if(a.checked){
                const price=parseFloat(a.dataset.price);
                const number=parseInt(a.closest('.part').querySelector(`input[type='number']`).value);
                total +=price*number;
            }
        })
        tl.innerText=total;
    }