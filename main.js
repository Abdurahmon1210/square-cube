var no = parseInt(+prompt("Enter Number :"))

if (!isNaN(no) && no != 0) {
    var square = no * no
    var cube = no * no * no
    alert("Square of Number is:  " + square + " || Cube of Number is: " + cube)
} else {
   alert("xato")
}