
var strs = [];
$.getJSON("/gifootball/public/json/tags.json").done(function (data) {
    strs = data;
});

var renderItem = function (item, escape) {
    return '<div>' + item.name + '</div>';
    // return '<div class="render-item">' + item.name + '</div>';
};
var itemFn = function (item, escape) {
    return '<div>' + escape(item.name) + '</div>';
};
var rq = function (str) {
    var items = strs.filter(function (item) {
        return item.name.indexOf(str) >= 0;
    });
    return items;
}

$('#input-tags').selectize({
    plugins: ['remove_button'],
    valueField: 'name',
    labelField: 'name',
    searchField: 'name',
    options: [],
    delimiter: ',',
    persist: true,
    openOnFocus: false,
    closeAfterSelect: true,
    create: false,
    load: function (query, callback) {
        if (!query.length) return callback();
        callback(rq(query));
    },
    render: {
        item: renderItem,
        option: itemFn
    }
});
var $selectize = $('#input-tags').get(0);

$selectize.selectize.on('item_adds', function (value, $item) {
    $selectize.selectize.close();
});
$selectize.selectize.on('item_remove', function (value, $item) {
    $selectize.selectize.close();
});