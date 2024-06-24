// const getTotalOrder = (data = []) => {
//     let total = 0;
//     data.forEach(({ price,
//         Orders_Products : { 
//             dataValues: { quantity }
//          }, }) => {
//         total += price * quantity;
//     })
//     return total
// }

const getTotalOrder = (data = []) => {
    return data.reduce(
        (
          acum,
          {
            price,
            Orders_Products: {
              dataValues: { quantity },
            },
          }
        ) => {
          acum += price * quantity;
          return acum;
        },
        0
      );
}

module.exports = {
    getTotalOrder
}