const validacolor = function nigga (value) {
    var valuedor;
    const elementos_colores = [

        
        ["Li","Na","K","Rb","Cs","Fr", "morado"],
        ["Be","Mg","Ca","Sr","Ba","Ra","morado_claro"],


        ["Sc","Y","Ti","Zr","Hf","Rf",
        "V","Nb","Ta","DB",
        "Cr","Mo","W","Sg",
        "Mn","Tc","Re","Bh",
        "Fe","Ru","Os","Hs",
        "Co","Rh","Ir","Mt",
        "Ni","Pd","Pt","Ds",
        "Cu","Ag","Au","Rg",
        "Zn","Cd","Hg","Cn","naranja_claro"],
        
        ["Al","Ga","In","Tl","Nh"
        ,"Sn","Pb","Fl","Bi","Mc","Lv","amarillo"],

        ["B","Si","Ge","As","Sb","Te","Po","verde_amarilloso"],

        ["C",
        "N","P",
        "O","S","Se","H","verde_oscuro"],

        ["F","Cl","Br","I","At","Ts","indigo"],

        ["He","Ne","Ar","Kr","Xe","Rn","Og","azul"],

        ["Ltnds","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","naranja_casirojo"],

        ["Actnds","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","Md","Lr","rosado_raro"],

        ["Error"]
    ]

    elementos_colores.forEach(function (elementos) {
        if (elementos.includes(value)) {
            valuedor = elementos[elementos.length-1]
           
        }
    })

    return valuedor
        
};

exports.validacolor = validacolor;