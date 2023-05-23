export default function generateData(n) {
    let data = [];
    const rangeValues = [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3];
    for (let i = 0; i < n; i++) {
        // Pick a random index from the rangeValues array
        const index = Math.floor(Math.random() * rangeValues.length);
        // Push the corresponding value to the data array
        data.push(rangeValues[index]);
    }
    console.log(data)
    return data;
}