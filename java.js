function pad2(n) {
    return (n < 10 ? '0' : '') + n;
}

var date = new Date();
var month = pad2(date.getMonth() + 1);
var day = pad2(date.getDate());
var year = date.getFullYear();

var formattedDate = month + "/" + day + "/" + year;
alert(formattedDate);