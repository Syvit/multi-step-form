(function pricePanel(){
    const beginnerPrice = document.querySelector('#beginner-price')
    const advancedPrice = document.querySelector('#advanced-price')
    const proPrice = document.querySelector('#pro-price')
    const priceSwitch = document.querySelector('#plan-switcher')
    
    priceSwitch.addEventListener('change', checkSwitch);
    
    function checkSwitch(){
        if(priceSwitch.checked == true){
            beginnerPrice.innerHTML = ('$100/year')
            advancedPrice.innerHTML = ('$200/year')
            proPrice.innerHTML = ('$400/year')
        }
        else{
            beginnerPrice.innerHTML = ('$10/mo.')
            advancedPrice.innerHTML = ('$20/mo.')
            proPrice.innerHTML = ('$40/mo.')
        }
    }


})();
