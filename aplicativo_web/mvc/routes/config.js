const { Router } = require("express")
const UsuarioController = require("../controllers/UsuarioController")

const router = Router()

router.get("/user/index", (req, res) => UsuarioController.index(req, res))
router.post("/user/edit", (req, res) => UsuarioController.usuarioPostAsync(req, res))
router.get("/user/edit", (req, res) => UsuarioController.usuarioEditView(req, res))

module.exports = router