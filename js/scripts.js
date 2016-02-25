var leetSpeak = function(word) {
  return str.replace([a-z],function f(a) {
    return "4BCD3F6H1JKLMN0PQR57";
  });
};


$(document).ready(function() {
  $("form#leet-speak").submit(function(event) {
    var str = $("input#word").val();
    var result = leetSpeak(word);
    $(".word").text(word);

    $("#result").show();
    event.preventDefault();
  });
});


//function L337(str) {return str.replace(/[a-z]/g,function f(a){return "4BCD3F6H1JKLMN0PQR57"[parseInt(a, 36)-10  || a.replace(/[a-t]/gi.f);});}
