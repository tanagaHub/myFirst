function solve(input) {
    let object = {}

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i]
        let quantity = Number(input[i + 1])

        if (object.hasOwnProperty(resource)) {
            object[resource] += quantity
        }
        else {
            object[resource] = quantity
        }
    }
 for (let key in object) {
     console.log(`${key} -> ${object[key]}`);
     
 }
}
solve([
    'gold', '155',
    'silver', '10',
    'copper', '17',
    'gold', '15'
])