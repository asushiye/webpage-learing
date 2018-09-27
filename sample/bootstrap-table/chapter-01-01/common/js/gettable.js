$('#table1').bootstrapTable({
    columns: [{
        field: 'id',
        title: 'Item ID'
    }, {
        sortable:true,
        field: 'name',
        title: 'Item Name'
    }, {
        cardVisible:true,
        field: 'price',
        title: 'Item Price'
    }],
    data: [{
        id: 1,
        name: 'Item 1',
        price: '$1'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 3,
        name: 'Item 3',
        price: '$3'
    }]
});

$('#table2').bootstrapTable({
    url: 'data1.json',
    columns: [{
        field: 'id',
        title: 'Item ID'
    }, {
        field: 'name',
        title: 'Item Name'
    }, {
        field: 'price',
        title: 'Item Price'
    }, ]
});

$('#table3').bootstrapTable({
    checkboxHeader:true,
    striped:true,
    pagination:true,
    showColumns:true,
    search:true,
    showToggle:true,
    detailView:true,
    columns: [{
        checkbox:true,
        field: 'id',
        title: 'Item ID'
    }, {
        sortable:true,
        field: 'name',
        title: 'Item Name'
    }, {
        cardVisible:true,
        field: 'price',
        title: 'Item Price'
    }],
    data: [{
        id: 6,
        name: 'Item 6',
        price: '$6'
    }, {
        id: 7,
        name: 'Item 7',
        price: '$7'
    }, {
        id: 8,
        name: 'Item 8',
        price: '$8'
    }]
});