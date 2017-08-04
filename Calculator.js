// $(function() {
// $('#calculator').click(
// $('#calculator').mouseover(

var calculate = function() {
    $('#calculator').click(
        console.log('clicked');
        var num1 = $('#num1').val();
        var num2 = $('#num2').val();
        // console.log(num1);
        // console.log(num2);
        $('#result').val(Number(num1) + Number(num2));
    )
}

$("#num1").keyup(
    calculate
)

$("#num2").keyup(
    calculate
)

console.log('Test')