const express = require("express");
const path = require("path");
const app = express();
const timon = require("express-handlebars");

const tabla = require("./tabla")
const helpervaina = require("./vaina");
const helpervaina2 = require("./otrohelper");
const helpercolor = require("./helpercolors");

app.engine("hbs",timon({
    helpers: {
        validar_index: helpervaina.validateindex,
        validar_index2: helpervaina2.validateindex2,
        valida_color: helpercolor.validacolor,
    }
}));
app.set("view engine", "hbs");
app.set("views","views");

app.use(express.static(path.join(__dirname,"public"))); 
app.use(tabla);

app.use("/", function (req, res, next) {
    res.status(404).render("404",{layout: false});
})


app.listen(5000);