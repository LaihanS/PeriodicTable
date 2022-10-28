const express = require("express");
const router = express.Router();

function haitianeos() {
    

    const Referencia = [
        ["H","Li","Na","K","Rb","Cs","Fr"],
        ["Be","Mg","Ca","Sr","Ba","Ra"],
        ["Sc","Y","Ltnds","Actnds"],
        ["Ti","Zr","Hf","Rf"],
        ["V","Nb","Ta","DB"],
        ["Cr","Mo","W","Sg"],
        ["Mn","Tc","Re","Bh"],
        ["Fe","Ru","Os","Hs"],
        ["Co","Rh","Ir","Mt"],
        ["Ni","Pd","Pt","Ds"],
        ["Cu","Ag","Au","Rg"],
        ["Zn","Cd","Hg","Cn"],
        ["B","Al","Ga","In","Tl","Nh"],
        ["C","Si","Ge","Sn","Pb","Fl"],
        ["N","P","As","Sb","Bi","Mc"],
        ["O","S","Se","Te","Po","Lv"],
        ["F","Cl","Br","I","At","Ts"],
        ["He","Ne","Ar","Kr","Xe","Rn","Og"],
        ["La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu"],
        ["Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","Md","Lr"]
        ]
        Referencia.forEach(el => {
            if (el.length > elementos[Referencia.indexOf(el)].length) {
                el.forEach(a => {
                   if (!elementos[Referencia.indexOf(el)].includes(a)) {
                    elementos[Referencia.indexOf(el)].splice(el.indexOf(a),0,"Error")
                   }
                });
            }
        })
    
    }
    

var elementos = [

["H","Li","Na","K","Rb","Cs","Fr"],
["Be","Mg","Ca","Sr","Ba","Ra"],
["Sc","Y","Ltnds","Actnds"],
["Ti","Zr","Hf","Rf"],
["V","Nb","Ta","DB"],
["Cr","Mo","W","Sg"],
["Mn","Tc","Re","Bh"],
["Fe","Ru","Os","Hs"],
["Co","Rh","Ir","Mt"],
["Ni","Pd","Pt","Ds"],
["Cu","Ag","Au","Rg"],
["Zn","Cd","Hg","Cn"],
["B","Al","Ga","In","Tl","Nh"],
["C","Si","Ge","Sn","Pb","Fl"],
["N","P","As","Sb","Bi","Mc"],
["O","S","Se","Te","Po","Lv"],
["F","Cl","Br","I","At","Ts"],
["He","Ne","Ar","Kr","Xe","Rn","Og"],
["La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu"],
["Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","Md","Lr"]
]


haitianeos()
   
router.get("/", function (req,res,next) {
res.render("tabla", {elementos: elementos, layout: false});
})

module.exports = router;