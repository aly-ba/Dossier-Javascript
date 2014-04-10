var dom = {
    _compteur:0,

    generateId: function () {
        return "customId" + this._compteur++;
    }

    create: function (tagName, id) {
        var el = document.createElement(tagName);

        if (id) {
            el.id = id ||  generateId();
        }

        return el;

    }

    return {

        generateId:generateId,
        create:create
    };
}());
////////
var dom = function() {
    var _compteur =0;

    function generateIdBis() {

        return "customId" +_compteur++;
    }

    function create(tagName, id) {
        var el = document.createElement(tagName);

        el.id =id || generateIdBis();
       
        return el;
    }
    return  {
        generateId: generateId,
        create:create
    };

}(jQuery));