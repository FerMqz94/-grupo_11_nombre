const db = require("../../../db/models");
const { literal } = require("sequelize");

module.exports = (req, res) => {

    const originServer = () => `${req.protocol}://${req.get("host")}`
    /*const {page} = req.query*/

    const count = db.Product.count({
        attributes:{
          exclude: ["createdAt","updatedAt"]
        }          
    });

    const countByCategoryAbrigos = db.Product.count({
        include: [
            {
                association: "category", 
                where: {
                    name: "Abrigos"
                }
            }
    ]
    });

    const countByCategoryBuzosYSweater = db.Product.count({
        include: [
            {
                association: "category", 
                where: {
                    name: "Buzos y sweaters"
                }
            }
    ]
    });

    const countByCategoryJeans = db.Product.count({
        include: [
            {
                association: "category", 
                where: {
                    name: "Jeans"
                }
            }
    ]
    });

    const countByCategoryRemeras = db.Product.count({
        include: [
            {
                association: "category", 
                where: {
                    name: "Remeras"
                }
            }
    ]
    });

    const countByCategoryCamisasYBlusas = db.Product.count({
        include: [
            {
                association: "category", 
                where: {
                    name: " Camisas y blusas"
                }
            }
    ]
    });

    const countByCategoryTops = db.Product.count({
        include: [
            {
                association: "category", 
                where: {
                    name: "Tops"
                }
            }
    ]
    });

    const countByCategoryPantalonesShorts = db.Product.count({
        include: [
            {
                association: "category", 
                where: {
                    name: "Pantalones y shorts"
                }
            }
    ]
    });

    const countByCategoryVestidosPolleras = db.Product.count({
        include: [
            {
                association: "category", 
                where: {
                    name: "Vestidos y polleras"
                }
            }
    ]
    });

    const countByCategoryCapsulaBeige = db.Product.count({
        include: [
            {
                association: "category", 
                where: {
                    name: "Cápsula Beige"
                }
            }
    ]
    });

    const countByCategoryCapsulaAmerican = db.Product.count({
        include: [
            {
                association: "category", 
                where: {
                    name: "Cápsula American"
                }
            }
    ]
    });

    const countByCategoryCapsula3024 = db.Product.count({
        include: [
            {
                association: "category", 
                where: {
                    name: "Cápsula 3024"
                }
            }
    ]
    });

    const countByCategorySinCategory = db.Product.count({
        include: [
            {
                association: "category", 
                where: {
                    name: "Sin categoría"
                }
            }
    ]
    });

    const promiseProducts = db.Product.paginate({
      /*  page: +page,
        paginate: 10,*/
        attributes: {
            exclude: ["createdAt", "updatedAt", "deletedAt","id_category"],
            include: [
              [
                literal(`CONCAT('${originServer(req)}/api/producto-detalle/', Product.id)`),
                "detail"
              ]
            ],
        },
        include: [
            {
              association: "category",
              attributes: [  
                "name"
              ]
            },
            {
              association: "images",
              attributes: {
                include: [
                  [     
                    literal(`CONCAT('${originServer(req)}/api/producto-detalle/', Images.name)`),
                   "images",
                 ]
               ],
                exclude: ["createdAt", "updatedAt", "deletedAt", "id_product", "name", "id"]
              },
            },
            {
                association: "colors",
                attributes: {
                  exclude: ["createdAt", "updatedAt", "deletedAt", "id"]
                },
            },
            {
                association: "sizes",
                attributes: {
                  exclude: ["createdAt", "updatedAt", "deletedAt", "id"]
                },
            },
          ],
    })

      Promise.all([count, countByCategoryAbrigos, countByCategoryBuzosYSweater, countByCategoryCamisasYBlusas, countByCategoryCapsula3024, countByCategoryCapsulaAmerican, countByCategoryCapsulaBeige, countByCategoryJeans, countByCategoryPantalonesShorts, countByCategoryVestidosPolleras,  countByCategoryRemeras, countByCategorySinCategory, countByCategoryTops, promiseProducts])
      .then(([count, abrigos, buzosysweater, camisasyblusas, capsula3024, capsulaamerican, capsulabeige, jeans, pantalonesyshorts, vestidosypolleras, remeras, sincategoria, tops, products]) => {

        res.status(200).json({
        ok: true,
        count: count,
        countByCategory: {
          abrigos: abrigos,
          buzosysweaters: buzosysweater,
          camisasyblusas: camisasyblusas,
          capsula3024: capsula3024,
          capsulaamerican: capsulaamerican,
          capsulabeige: capsulabeige,
          jeans: jeans,
          pantalonesyshorts: pantalonesyshorts,
          vestidosypolleras: vestidosypolleras,
          remeras: remeras,
          sincategoria: sincategoria,
          tops: tops
        },
        products: products
      
      })
  })    
}
