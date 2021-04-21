const flowers = [
    {
        id: 1,
        color: "White",
        species: "White Rose",
        price: 0.90
    },
    {
        id: 2,
        color: "Red",
        species: "Red Tulip",
        price: 1.10
    }
]

const addFlower = (flowerObject) => {
    // Finding last index .length -1 to locate actual last index
   const lastIndex = flowers.length - 1
   // Locates last flower object
   const currentLastFlower = flowers[lastIndex]
   // Saves last flower object id to maxId
   const maxId = currentLastFlower.id
   // Sets new id in numerical order for new flower object
   const idForNewFlower = maxId + 1
    // Gives that numerical id number to new flower object
   flowerObject.id = idForNewFlower
   // Pushes new flower object to flowers array
   flowers.push(flowerObject)
}


const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code

    for (const flower of flowers) {
        if (flower.price >= 1.00) {
            expensiveFlowers.push(flower)
        }
    }

    return expensiveFlowers  // Do not change this code
}




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

