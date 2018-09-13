
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

quote = QUOTES[getRandomInt(QUOTES.length)];
document.getElementById("text").innerHTML= "<p>" + quote.quote + "</p>";
document.getElementById("author").innerHTML = "<p>- " + quote.author + "</p>";

$(document).ready(function(){

    $( "#new-quote" ).click(function() {
        quote = QUOTES[getRandomInt(QUOTES.length)];
        var quote_content = "<p>" + quote.quote + "</p>";
        var author_content = "<p>- " + quote.author + "</p>";
        $('#text').fadeOut('fast', function() {
            $(this).html(quote_content).fadeIn('slow');
        });
        $('#author').fadeOut('fast', function() {
            $(this).html(author_content).fadeIn('slow');
        });
      }); 
 });
