const getTotalOrder = (data = []) => {
    let total = 0;
    data.forEach(({ price,
        Orders_Products : { 
            dataValues: { quantity }
         }, }) => {
        total += price * quantity;
    })
    return total
}

module.exports = {
    getTotalOrder
}