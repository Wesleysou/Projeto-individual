var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/cadastrarcara", function (req, res) {
    usuarioController.cadastrarcara(req, res);
});

router.get("/funcmesomorfo", function (req, res) {
    usuarioController.funcmesomorfo(req, res);
});

router.get("/funcectomorfo", function (req, res) {
    usuarioController.funcectomorfo(req, res);
});

router.get("/funcendomorfo", function (req, res) {
    usuarioController.funcendomorfo(req, res);
});

module.exports = router;