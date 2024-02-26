module.exports = (req,res) => {
  res.render("./admin/createProduct", {}, (err,content) => {
    err && res.send(err.mesage)
    res.render('partials/dashboard', {
      contentView:content
    })
  })
}



