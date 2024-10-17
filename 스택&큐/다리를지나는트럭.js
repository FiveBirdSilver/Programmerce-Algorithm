function solution(bridge_length, weight, truck_weights) {
    let bridge = new Array(bridge_length).fill(0);
    let currentWeight = 0;
    let time = 0;

    while (truck_weights.length > 0 || currentWeight > 0) {
        time++;
        currentWeight -= bridge.shift();

        if (currentWeight + truck_weights[0] <= weight) {
            let newTruck = truck_weights.shift();
            bridge.push(newTruck);
            currentWeight += newTruck;
        } else {
            bridge.push(0);
            console.log(bridge);
        }
    }
    return time;
}


solution(2, 10, 	[7,4,5,6]);
