function solution(bridge_length, weight, truck_weights) {
    const bridge = Array.from({length: bridge_length}, () => 0)
    let totaltime = 0;
    const waiting_trucks = [...truck_weights];
    const current_weight = () => {
        return bridge.reduce((a,b) => (a+b), 0)
    };

    while(waiting_trucks.length > 0 || current_weight() > 0){
        totaltime++;
        bridge.shift();
        
        if(waiting_trucks.length > 0){
            const next_truck_weight = waiting_trucks[0];
        
            if(current_weight() + next_truck_weight <= weight){
                bridge.push(waiting_trucks.shift()); 
            } else{
                bridge.push(0);
            }
        } else{
            bridge.push(0)
        }
        
    }
    
    return totaltime
}