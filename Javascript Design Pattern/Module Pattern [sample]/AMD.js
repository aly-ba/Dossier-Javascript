//sample
define("dom", ["jquery", "folder/myModule"], function(jq,myMod) {
    myMod

});
//use require.js framework pour la gestion des dépendances
require(["Module.js"], function (dom) {
    var el = dom.createPopup("div");
    var el2 = dom.create("div");

    console.log(el.id);
    console.log(el2.id);
});