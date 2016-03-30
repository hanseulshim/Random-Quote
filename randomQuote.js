$(document).ready(function() {


    buttonClick();
    $('#getMessage').on("click", function() {


        buttonClick();


    });

    function buttonClick() {

        $.ajax({
            type: 'GET',
            headers: {
                "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
            success: function(data) {
               
                    var response = JSON.parse(data);
                    $('.quoteText').text(response.quote);
                    $('#quoteFooter').text(response.author);
                    $('#twitter').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + response.quote + '" ' + response.author));
          

            }
        });
        $(".quoteFade").animate({
            opacity: '0',
        }, 500, function() {
            // Animation complete.
        });
        $(".quoteFade").delay(500);
        $(".quoteFade").animate({
            opacity: '1',
        }, 800, function() {
            // Animation complete.
        });
        var colors = ["#DFE2DB", "#FFF056", "#C63D0F", "#7E8F7C", "#A8CD1B", "#74AFAD", "#67BCDB"];
        var color = Math.floor(Math.random() * colors.length);
        $("#bodyType").animate({
            backgroundColor: colors[color],
            color: colors[color]
        }, 800,function() {
            // Animation complete.
        });
    }



});
