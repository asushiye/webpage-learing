# sample  bootstrap - table ------ chapter-10-02

		使用data-toggle
		使用javascript

## 使用data-toggle

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="statics/css/bootstrap.css">
    <link rel="stylesheet" href="statics/css/bootstrap-table.css">
</head>
<body>

<table data-toggle="table">
    <thead>
    <tr>
        <th>Item ID</th>
        <th>Item Name</th>
        <th>Item Price</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>1</td>
        <td>Item 1</td>
        <td>$1</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Item 2</td>
        <td>$2</td>
    </tr>
    </tbody>
</table>

<script src="statics/js/jquery-3.3.1.min.js"></script>
<script src="statics/js/bootstrap.js"></script>
<script src="statics/js/bootstrap-table.js"></script>

</body>

</html>
```

## 使用javascript

sample-table.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="statics/css/bootstrap.css">
    <link rel="stylesheet" href="statics/css/bootstrap-table.css">
</head>
<body>

<table id="table1"></table>
<hr/>
<table id="table2"></table>
<hr/>
<table id="table3"></table>

<script src="statics/js/jquery-3.3.1.min.js"></script>
<script src="statics/js/bootstrap.js"></script>
<script src="statics/js/bootstrap-table.js"></script>
<script src="common/js/gettable.js"></script>

</body>

</html>
```

common/js/gettable.js
```
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
```

data1.json
```
{
  "data": [
    {
      "id": 4,
      "name": "Item 4",
      "price": "$4"
    },
    {
      "id": 5,
      "name": "Item 5",
      "price": "$5"
    }
  ]
}
```

