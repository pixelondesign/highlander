$(document).ready(function () {
    var names = ["Adil Murad", "Ubaid Akbar","Mr. Jhon","Dsultan","Kabeer"];
    var places = ["United States", "United Kingdem","London","Paris","Pakistan"];
    var total = 34;
    
    var items = document.getElementsByClassName('item');
    var count = total;
    slideup();
    function slideup() {
        var itr = randAB(0,(names.length - 1));
        $("#nmber").text("(" + count + ")");
        $("#name1").text(names[itr]);
        $("#address").text(places[itr]);
        var d = new Date();
        $("#mytime").text(d.getHours() + ":" + d.getMinutes()+" am");
        if(d.getHours() > 12){
            $("#mytime").text((d.getHours()-12) + ":" + d.getMinutes()+" pm");
        }
        $('#item1').animate({
            'marginTop': 10
        }, 500);
        $("#item1").removeClass('new');
        window.setTimeout(function () {
            $('#item1').animate({
                'marginTop': -100
            }, 500);
            setTimeout(function () {
                $('#item1').animate({
                    'marginTop': 120
                }, 0);
                count--;
                if (count < 0) {
                    count = total;
                }
                slideup();
            }, 500);
        }, 2000);
    }

});
function randAB(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
