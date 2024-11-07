const selectors = {
    flipkart: "Nx9bqj",
    amazon: ".a-price-whole"
}

function getSelector(url){
    for(key in selectors){
        if(url.includes(key)){
            return selectors[key];
        }
    }
    return null;
}

module.exports= getSelector;