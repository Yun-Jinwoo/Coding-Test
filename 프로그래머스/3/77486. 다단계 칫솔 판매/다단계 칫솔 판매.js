function solution(enroll, referral, seller, amount) {
    const parentMap = new Map();
    const profitMap = new Map();

    for (let i = 0; i < enroll.length; i++) {
        parentMap.set(enroll[i], referral[i]);
        profitMap.set(enroll[i], 0);
    }

    for (let i = 0; i < seller.length; i++) {
        let currentSeller = seller[i];
        let money = amount[i] * 100;


        while (currentSeller !== "-" && money > 0) {
            const commission = Math.floor(money * 0.1); 
            const myProfit = money - commission;

            
            profitMap.set(currentSeller, profitMap.get(currentSeller) + myProfit);

            
            money = commission;
            currentSeller = parentMap.get(currentSeller); 

            
            if (money < 1) {
                break;
            }
        }
    }

    
    const result = enroll.map(name => profitMap.get(name));
    return result;
}