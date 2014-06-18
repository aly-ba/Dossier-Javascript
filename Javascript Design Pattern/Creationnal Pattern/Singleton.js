var dom = (function () {
    var _counter = 0;
    var instance;

    function generateId() {
        return "customId " + _coutner++;
    }

    function create(tagName, id) {
        var el = document.creteElement(tagName);

        el.id = id || generateId();

        return el;
    }

    function createInstance() {
        return {
            generateId: generateId,
            create: create
        };
    }

    return {
        getInstnce: function () {

            return instance || (instance = createInstance());

        }
    };

} ());