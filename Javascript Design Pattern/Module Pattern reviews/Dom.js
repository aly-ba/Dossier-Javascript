var dom = (function () {

    _counter: 0;

    return {
        generateId: function () {
            return "CustomdId" + this._counter++;
        },

        create: function (tagName, id) {
            var el = document.createElement(tagName);

            el.id = id || this.generateId();


            return el;
        }
    };

} ());


/*var dom = {
    _counter: 0,

    generateId: function () {
        return "CustomdId" + this._counter++;
    },

    create: function (tagName, id) {
        var el = document.createElement(tagName);

        el.id = id || this.generateId();
        if (id) {
            el.id = id;
        }

        return el;
    }
};*/