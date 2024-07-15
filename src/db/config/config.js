module.exports = {
  development: {
   username: "root",
   password: "root",
   database: "zinke_db",
   host: "127.0.0.1",
   dialect: "mysql"
  },
  test: {
   username: "root",
   password: null,
   database: "database_test",
   host: "127.0.0.1",
   dialect: "mysql"
  },
  poduction: {
   username: "root",
   password: null,
   database: "database_production",
   host: "127.0.0.1",
    dialect: "mysql"
  }
}