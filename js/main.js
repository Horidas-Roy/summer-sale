function handleClick(data){
    const productName = data.childNodes[1].childNodes[3].childNodes[1].innerText;
    const productPrizeStr= data.childNodes[1].childNodes[3].childNodes[5].innerText;
    const productPrize= productPrizeStr.split(" ")[0];


    const purchaseContainer= document.getElementById('purchase-container');
    const p=document.createElement('p')
    p.innerHTML=`${purchaseContainer.childElementCount+1}. ${productName}`
    purchaseContainer.appendChild(p)
    

    let previousTotalPrize=document.getElementById('total-prize');
    let previousTotalPrizeStr=previousTotalPrize.innerText;
    let currentTotalPrize=parseFloat(previousTotalPrizeStr)+parseFloat(productPrize);
    
    // update total prize
    previousTotalPrize.innerHTML=currentTotalPrize;

    const currentPayablePrize=document.getElementById('payable-prize');
    currentPayablePrize.innerHTML=currentTotalPrize;
    
    //purchase validition
    if(parseFloat(currentTotalPrize) > 0){
        document.getElementById('make-purchase').removeAttribute('disabled');
        const purchaseBtn =document.getElementById('make-purchase');
        purchaseBtn.style.backgroundColor="#E527B2";
    }
    else{
        document.getElementById('make-purchase').setAttribute('disabled',true);

    }
    
    //coupon validition
    if(parseFloat(currentTotalPrize) >= 200){
        document.getElementById('coupon-apply').removeAttribute('disabled')

        const button =document.getElementById('coupon-apply')
        button.style.backgroundColor="#E527B2"
    }
    else{
        document.getElementById('coupon-apply').setAttribute('disabled',true)
       
    }

}


let couponApply=()=>{

        let couponCode=document.getElementById('coupon-code')

        if(couponCode.value === "SELL200"){
           document.getElementById('coupon-apply').addEventListener('click',function(){
                const mainPrizeStr=document.getElementById('total-prize').innerText
                const mainPrize=parseFloat(mainPrizeStr)
                
                console.log(mainPrize)
                const discount=(mainPrize*0.2).toFixed(2);
                //previoust discount status
                let discountStr=document.getElementById("discount")
                let totalDiscount=parseFloat(discountStr.innerText)
                console.log(totalDiscount)
        
                let currentTotalDiscount=parseFloat(discount)
                discountStr.innerText=currentTotalDiscount.toFixed(2);
        
                const discountPrize=mainPrize*0.8;
        
                let payablePrizeElement=document.getElementById('payable-prize')
                payablePrizeElement.innerText=discountPrize.toFixed(2);
               
                couponCode.value=''
           })
        }
        else{
             alert("Invalid Coupon Code!");
        }
    
}



let makePurchase=()=>{
    document.getElementById('go-home').addEventListener('click', function(){
        let mainPrizeStr=document.getElementById('total-prize');
        mainPrizeStr.innerHTML='00.00';

        
        let discountStr=document.getElementById("discount");
        discountStr.innerHTML='00.00';

        let payablePrizeElement=document.getElementById('payable-prize');
        payablePrizeElement.innerHTML='00.00';

        let purchaseContainer=document.getElementById('purchase-container');
        purchaseContainer.innerHTML=""

        // window.location.href="./index.html"
        document.getElementById('coupon-apply').setAttribute('disabled',true);
        const button =document.getElementById('coupon-apply')
        button.style.backgroundColor="#bc6ea7"

        document.getElementById('make-purchase').setAttribute('disabled',true);
        const purchaseBtn =document.getElementById('make-purchase');
        purchaseBtn.style.backgroundColor="#bc6ea7";

        
    })
}
makePurchase();