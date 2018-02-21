// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency == 0){
        return {};
    }
    if(currency > 10000 ){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    var nominates = {
        "H": 50,
        "Q": 25,
        "D": 10,
        "N": 5,
        "P": 1
    }
    var result = {};
    for(let nominate in nominates){
        if(currency == 0){
            break;
        }
        var count = Math.floor(currency / nominates[nominate]);
        if(count > 0){
            result[nominate] = count;
        }
        currency -= nominates[nominate] * count;
    }
    return result;
}
