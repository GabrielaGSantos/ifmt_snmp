var pug = require('pug')

module.exports = {
    initializeRoutes: function(app) {
        app.set("view engine", "pug")
        app.get("/", function(req, res) {
            res.render("index", {
                activated: "info",
            })
        })
        app.get("/home", function(req, res) {
            res.render("home", {
                activated: "home"
            })
        })
        app.get("/labs", function(req, res) {
            res.render("labs", {
                activated: "labs"
            })
        })
        app.get("/switch", function(req, res) {
            res.render("switch", {
                activated: "switch"
            })
        })
        app.get("/config", function(req, res) {
            res.render("config", {
                activated: "config"
            })
        })
        app.get("/404", function(req, res) {
            res.render("404", {
                activated: "404"
            })
        })
        app.get("/forgot_password", function(req, res) {
            res.render("forgot_password", {
                activated: "forgot_password"
            })
        })

        app.get("/computadores", function(req, res) {
            res.render("computadores", {
                activated: "computadores"
            })
        })

        app.get('*', (req, res) => {
            res.sendFile(__dirname + '/public/' + req.params[0]);
        });

    }
}