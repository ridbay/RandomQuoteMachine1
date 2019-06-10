/** js/main.js **/
$(document).ready(function(){
    $('#newquote').click(function(){
        let color=['#F64747','#663399','#4183D7','#22313F','#9A12B3','#03A678']  /* array of hex color */
        let index=color[Math.floor(Math.random()*color.length)] /* random color from color array */
        getRandomQuote();
    });
});

/**ajax function which makes api call to random-famous-quote-api */

function getRandomQuote(){
    let color = ['#F64747','#663399','#4183D7','#22313F','#9A12B3','#03A678'];
    let index=color[Math.floor(Math.random()*color.length)];
    /* Make ajax call here */
    $.ajax({
        url: 'https://quota.glitch.me/random',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            // alert(JSON.stringify(data));
            // alert(`${data.quoteText} -${data.quoteAuthor}`);
            let quote = data.quoteText;
            let author = data.quoteAuthor;
            $('.quote #data').html(quote);
            $('quote h4').html('-'+author);
            $('body').css('background-color', index);
            $('.col').css('background-color', index);
            $('.socialmedia a').css('background-color', index);
            $('#newquote').css('color', 'white');
            $('.color').css('color', index);
            $('#twitter').attr('href', "https://twitter.com/intent/tweet?text="+quote+" "+author);
        },
        error: function(err){
            $('.quote #data').html("Oops something went wrong");
        }
    });
}