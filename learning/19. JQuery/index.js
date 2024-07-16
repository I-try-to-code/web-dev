$("h1").css("color","blue");


//selecting one element
$("h1");
//selecting multiple elements
$("button");
//use normal notation for selecting elements , can be combined ex: #ID.classname h1
//for manipulating css styles, use the .css method
$("h1").css("background-color","yellow");
$("h1").addClass("big-titl marr");
$("h1").text("ddfjd");
$("button").html("hello<hr>");
$("a").attr("href","https://www.google.com");

//event listerners using jquery
$("h1").click(function(){
    $("h1").css("color","pink");
});


//we dont have to use for loop for applying same thing to multiple element .

$("button").click(function(){
    $("h1").css("color","pink");
});

//using keypress event listeners
$("input").keypress(function(event){
    $("h1").text(event.key);
});


//on method
$("h1").on("mouseover",function(){
    $("h1").css("color","blue");} );

//adding and removing elements using jquery
$("h1").before("<button>a</button>");//adds a button before h1
$("h1").after("<button>b</button><br>");//adds a button after h1
$("h1").prepend("<button>c</button>")//adda a button before h1 content but after <h1>
$("h1").append("<button>c</button>")//adda a button after h1 content but before </h1>



//website animations using jquery
$("button").on("click",function(){
    $("h1").hide("h1");
});


//use toggle to hide and show on click,accordingly.++ fade toggle also exists ++ slide toggle is also there ++ .animate <- allows you to define custon animations :for example, changing the occupacy
$("button").on("click",function(){
    $("h1").toggle("h1");
});

//you can comvbine multiple animations ex: slideup().slidedown().blah blah
// will anumate accordingly.first it'll slide up, then it'll slide dowsn 
//jquery effect methods     

