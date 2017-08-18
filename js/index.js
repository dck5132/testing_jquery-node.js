/*global $*/
/*global jQuery*/
$(document).ready(function(event) {
	// i is used to limit animation from being abused
	var i = 0;
	globalHandler();
	//Jquery to show when page has loaded
	$("#content-1").append("<p>The page has just loaded. </p>");

    //when modal closes the code resets to default value 
	$("#portfolioModal2").on('hidden.bs.modal', function (e) {
		resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
	});
	
	$("#portfolioModal3").on('hidden.bs.modal', function (e) {
		resetText("#content-3-1 .example[value=blank]","#creation","#content-3-1 .example[value=standard]", "#example-3-4");
	});
	$("#portfolioModal3").on('show.bs.modal', function (e) {
		$("#example-3-6").removeData("key1");
		$("#example-3-6").removeData("key2");
		showJSON("#example-3-6","#example-3-6");
	});
	$("#portfolioModal4").on('hidden.bs.modal', function (e) {
		resetAnimate("#testDiv","#animButton","#anim-4-2","#anim-4-3","#anim-4-4","#anim-4-5");
	});
	$("#portfolioModal4").on('show.bs.modal', function (e) {
		i = 0;	
	});
	$("#portfolioModal5").on('hidden.bs.modal', function (e) {
		$("#textEntry").val("");
		$("#keyPress").text("");
		$("#evtTarget-5-2").text("Mouse over this div to see the effect. Click on it to unbind the mouseover.");
		$("#evtTarget-5-2").off("mouseover mouseleave", highlight);
		$("#evtTarget-5-2").removeClass("highlighted");
		
		$("#evtTarget-5-3").hover(highlight,highlight);
		$("#evtTarget-5-3").text("Mouse over this div to see the hover effect. Try clicking and double-clicking.");
		$("#evtTarget-5-3").css({
			borderWidth: "1px",
			cursor: "default"
		});
		i=0;
		
		$("#input-5-4").val("");
		
	});
	$("#portfolioModal5").on('show.bs.modal', function (e) {
		$("#example-5-1").on("mousemove", onMouseOver);
        $("#example-5-1").on("click", onMouseClick);
        $("#example-5-1").on("mouseleave", onMouseLeave);
        
        
		$("#evtTarget-5-3").hover(highlight,highlight);	
		$("#evtTarget-5-3").click(fnClick);
		$("#evtTarget-5-3").dblclick(fnClick2);
			
		$(window).resize(fnResize);
		i = 0;
		$("#evtTarget-5-3").on("click", function() {
			$(this).css({
				borderWidth: "4px",
				cursor: "pointer"
			});
			i = 1;
		});
		
		$(function(evt) {
		    
            $("#Div-5-41").on("click dblclick", { name: "Div 1"}, function(evt) {
                updateEventDetails(evt);
                evt.stopPropagation();
            });
            $("#Div-5-42").on("click dblclick", { name: "Div 2"}, function(evt) {
                updateEventDetails(evt);
                evt.stopPropagation();
            });
            $("#Div-5-43").on("click dblclick", { name: "Div 3"}, function(evt) {
                updateEventDetails(evt);
                evt.stopPropagation();
            });
            $("#content-5-1 div[id^=Div-5]").on("mouseenter mouseleave mousemove", function(evt) {
                updateEventDetails(evt);
                evt.stopPropagation();
            });
            $("#input-5-4").keypress(updateEventDetails);
        });
	});
	
	$("#portfolioModal6").on('hidden.bs.modal', function (e) {
		resetAJAX("#content-6-1 [value=ajax]");
	});


// jquery switch that changes the div when the corresponding element is clicked				
	$("ul[value='choice']").on("click", function(event) {
		var target = event.target.id;
		
		switch(target) {
			case "sel-1":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#content-2-1 p").css("border", "3px solid red");
				break;
			case "sel-2":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#selector").css("border", "3px solid red");
				break;
			case "sel-3":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#intro-2-1").css("border", "3px solid red");
				break;
			case "sel-4":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#content-2-1 p").filter(":first").css("border", "3px solid red");
				break;
			case "sel-5":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#content-2-1 h2:not(#selector)").css("border", "3px solid red");
				break;
			case "sel-6":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#content-2-1 .a").css("border", "3px solid red");
				break;
			case "sel-7":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#example-2-1").css("border", "3px solid red");
				break;
			case "sel-8":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#content-2-1 p.b").css("border", "3px solid red");
				break;
			case "sel-9":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#content-2-1 p:last").css("border", "3px solid red");
				break;
			case "sel-10":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#content-2-1 p:even").css("border", "3px solid red");
				break;
			case "sel-11":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#content-2-1 p:odd").css("border", "3px solid red");
				break;
			case "sel-12":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#content-2-1 a:gt(1)").css("border","3px solid red");
				break;
			case "sel-13":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#content-2-1 p:not(p:eq(2))").css("border", "3px solid red");
				break;
			case "sel-14":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#content-2-1 > p").css("border", "3px solid red");
				break;
			case "sel-15":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#content-2-1 ul + div").css("border", "3px solid red");
				break;
			case "sel-16":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#content-2-1 .example ~ p").css("border", "3px solid red");
				break;
			case "sel-17":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#content-2-1 p[class]").css("border","3px solid red");
				break;
			case "sel-18":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#content-2-1 #example-2-3 p[id=para2-31]").css("border","3px solid red");
				break;
			case "sel-19":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#content-2-1 p[id^=para][lang*=en-]").css("border","3px solid red");
				break;
			case "sel-20":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#content-2-1 p:contains('3')").css("border", "3px solid red");
				break;
			case "sel-21":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#content-2-1 p:parent").css("border", "3px solid red");
				break;
			case "sel-22":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#example-2-4:has(p[class=a])").css("border", "3px solid red");
				break;
			case "sel-23":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#content-2-1 p:first-child").css("border", "3px solid red");
				break;
			case "sel-24":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#content-2-1 p:last-of-type").css("border", "3px solid red");
				break;
			case "sel-25":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#content-2-1 p:nth-child(2n)").css("border", "3px solid red");
				break;
			case "sel-26":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#example-2-5").children().css("border", "3px solid red");
				break;
			case "sel-27":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$("#para2-51").prev().css("border", "3px solid red");
				$("#para2-51").next().css("border", "3px solid green");
				$("#para2-51").parentsUntil($("#content-2-1")).css("border", "3px solid blue");
				break;
			case "sel-28":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				$(".example").find("#para2-54").css("border", "3px solid red");
				break;
			case "sel-29":
				resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
				var leftmargin =0;
				var border=3;
				$(".example p").each(function(index, element){
				$(element).css("border", border+"px solid red")
				.css("margin-left", leftmargin);
				border += 2;
				leftmargin +=10;
				});
				break;
			case "cre-1":
				var newP = $("<p>");
				newP.append("<em>Hello There</em>");
				$("#example-3-1").html(newP);
				break;
			case "cre-2":
				$("#creation").prepend("Watch This! ");
				break;
			case "cre-3":
				$("#example-3-1").html("<h2>This is a new H2</h2>");
				break;
			case "cre-4":
				$("#example-3-1").text("<h2>This is a new H2</h2>");
				break;
			case "cre-5":
				$("#example-3-2 p:last").appendTo("#example-3-2 p:first");
				break;
			case "cre-6":
				$("#example-3-2 p").before("**");
				break;
			case "cre-7":
				$("<p> New Para After </p>").insertAfter("#example-3-2 p:first");
				break;
			case "cre-8":
				$("#example-3-3 p").wrapAll("<div style='color:red'/>");
				break;
			case "cre-9":
				$("#example-3-3").empty();
				break;
			case "cre-10":
				$("#example-3-3 p.a, #example-3-3 p.b").detach();
				break;
			case "cre-11":
				$("#example-3-3 p").replaceWith(replacementFn);
				break;
			case "cre-12":
				$("#example-3-4 a").filter(":last").after("<p id='alts'>");
			
				$(".img-3-4").each(function () {
					$("#alts").append($(this).attr("alt") + " ");
				});
				break;
			case "cre-13":
				$("#example-3-4 a").attr("title", "Photo by some photographer");
				break;
			case "cre-14":
				$("#example-3-4 a").attr("target", "_blank");
				break;
			case "cre-15":
				$("#example-3-4 a").removeAttr("href");
				break;
			case "cre-16":
				$(".img-3-4").attr({ src: "img/sample/Spring.jpg",
								title: "Spring all the things!"});
				break;
			case "cre-17":
				$("#example-3-5 p").css("text-decoration", "overline")
							.css("font-size", "+=1pt");
				break;
			case "cre-18":
				$("#example-3-5 p").css({
				"font-weight" : "bold",
				"color" : "red",
				"text-decoration" : "underline"
				});
				break;
			case "cre-19":
				$("#example-3-5 p").addClass("pClass");
				break;
			case "cre-20":
				$("#example-3-5 p").removeClass("pClass");
				break;
			case "cre-21":
				$("#example-3-5 p").toggleClass("pClass");
				break;
			case "cre-22":
				$("#example-3-6").data("key1", 1234);
				$("#example-3-6").data("key2", "Cyril Shadow");
				showJSON("#example-3-6","#example-3-6");
				break;
			case "cre-23":
				$("#example-3-6").removeData("key2");
				showJSON("#example-3-6","#example-3-6");
				break;
			case "ani-1":
				if(i == 0)
				{
					$("#testDiv").stop(true);
					$("#testDiv").animate({width: 400}, 300)
					.animate({height: 300}, 400)
					.animate({left: 200}, 500)
					.animate({top: "+=100", borderWidth: 10}, "slow", function () {
						$("#animButton").stop(true);
						$("#animButton").css("height", 500);
						i=i+1;	
					});
				}
				break;
			case "ani-2":
				$("#anim-4-2").show("fast");
				break;
			case "ani-3":
				$("#anim-4-2").hide(1000, "swing");
				break;
			case "ani-4":
				$("#anim-4-2").toggle("slow", completion);
				break;
			case "ani-5":
				$("#anim-4-3").fadeIn(200);
				break;
			case "ani-6":
				$("#anim-4-3").fadeOut(600);
				break;
			case "ani-7":
				$("#anim-4-3").fadeTo(300, 0.3);
				break;
			case "ani-8":
				$("#anim-4-3").fadeTo(300, 1.0);
				break;
			case "ani-9":
				$("#anim-4-3").fadeTo(200, 0.3)
				.fadeTo(200 , 1.0)
				.fadeTo(200 , 0.3)
				.fadeTo(200 , 1.0, completion);
				break;
			case "ani-10":
				$("#anim-4-4").slideUp(1000);
				break;
			case "ani-11":
				$("#anim-4-4").slideDown(200);
				break;
			case "ani-12":
				$("#anim-4-4").slideToggle("slow", completion);
				break;
			case "ani-13":
				$("#anim-4-5").animate({width: "500px"}, 1000);
				break;
			case "ani-14":
				$("#anim-4-5").animate({fontSize: "24pt"}, 1000);
				break;
			case "ani-15":
				$("#anim-4-5").animate({left: "250"}, 1000, "linear");
				break;
			case "ani-16":
				$("#anim-4-5").animate({
				left: "+=250",
				fontSize: "3em",
				width: "500px"
				}, 1000, "swing", completion);
				break;
			case "evt-1":
				$("#evtTarget-5-2").on("mouseover mouseleave", highlight);
				$("#evtTarget-5-2").on("click", function (evt) {
					$("#evtTarget-5-2").off("mouseover mouseleave", highlight);
					$("#evtTarget-5-2").html("<p>Hover effect shut off </p>");
					$("#evtTarget-5-2").removeClass("highlighted");
				});
				break;
			case "evt-2":
				$("#textEntry").on("keypress", function(evt) {
        			$("#keyPress").text(String.fromCharCode(evt.charCode));
        		});
				break;
			case "ajx-1":
				getContent();
				break;
			case "ajx-2":
				loadHTML();
				break;
			case "ajx-3":
				getData();
				break;
			case "ajx-4":
				$.get("Included_Files/testdata.txt", successFn2);
				break;
			case "ajx-5":
				$("#ajaxContent-2").load("Included_Files/testdata.html");
				break;
			case "ajx-6":
				$("#ajaxContent-2").load("Included_Files/testdata.html #p2");
				break;
			case "ajx-7":
				$.get("Included_Files/testxmldata.xml", function(result) {
	                var title = result.getElementsByTagName("title")[0];
	                var name = result.getElementsByTagName("name")[0];
	                var val = title.firstChild.nodeValue + " by " + name.firstChild.nodeValue;
	                $("#ajaxContent-3").empty();
	                $("#ajaxContent-3").append(val);
        		});
				break;
			case "ajx-8":
				var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
            	$.getJSON( flickrAPI, {
	                tags: "Space Needle",
	                tagmode: "any",
	                format: "json"
	                },
                successFn3);
				break;
			default:
				if((event.target).textContent == "Reset to Default" ) {
					i = 0;
					//modal 2 reset
					resetBorders("#content-2-1 p,h1,h2,li,a","#content-2-1 .example");
					//modal 3 reset
					resetText("#content-3-1 .example[value=blank]","#creation","#content-3-1 .example[value=standard]", "#example-3-4");
					$("#example-3-6").removeData("key1");
					$("#example-3-6").removeData("key2");
					showJSON("#example-3-6","#example-3-6");
					//modal 4 reset
					resetAnimate("#testDiv","#animButton","#anim-4-2","#anim-4-3","#anim-4-4","#anim-4-5");
					// modal 5 event reset
					$("#textEntry").val("");
					$("#keyPress").text("");
					$("#evtTarget-5-2").text("Mouse over this div to see the effect. Click on it to unbind the mouseover.");
					$("#evtTarget-5-2").off("mouseover mouseleave", highlight);
					$("#evtTarget-5-2").removeClass("highlighted");
					$("#evtTarget-5-3").text("Mouse over this div to see the hover effect. Try clicking and double-clicking.");
					$("#evtTarget-5-3").css({
						borderWidth: "1px",
						cursor: "default"
					});
					$("#input-5-4").val("");
					// modal 6 reset
					resetAJAX("#content-6-1 [value=ajax]");
					break;
				}
				// Rare occassion when mouse click falls outside the switch statement
				else if(event.target.nodeName == "UL" || "LI") {
					break;
				}
				// General catch all else
				else {
					alert("Warning not built yet. Wait for the next update");
					break;
				}		
		}
	});
	
});


//--------------------------------------------------------FUNCTIONS--------------------------------------------
/*
//Jquery function that hides/shows divs
(function ($) 
{
    $.each(['show', 'hide'], function (i, ev) 
    {
        var el = $.fn[ev];
        $.fn[ev] = function () 
        {
            this.trigger(ev);
            return el.apply(this, arguments);
        };
    });
})(jQuery);
*/
//----------------------------------------------------Modal 3 TEXT/HTML-----------------------------------------
// function that is used in callback for replaceWith
function replacementFn() {
	if ($(this).text().indexOf("1") != -1)
	{
		return "this is paragraph uno";
	}
	else 
	{
		return this.outerHTML;
	}
}
//function to display data attributes
function showJSON (inp1,inp2) {
	$(inp1).html(JSON.stringify($(inp2).data(), null, " "));
}
//-------------------------------------------------Modal 4 Animations--------------------------------------------
// Upon completing animation of show/hide this runs
function completion () {
	$(this).text("Animation Complete");
}
//----------------------------------------------Modal 5 Events--------------------------------------------------
// functions to define events that occur when the mouse meets their criteria
function onMouseOver(evt) {
	$(this).text(evt.type + ": " + evt.pageX + ", " + evt.pageY + "\n" +
    "Button: " + evt.which + " Key: " + evt.metaKey);
}
function onMouseClick(evt) {
    $(this).text(evt.type + ": " + evt.pageX + ", " + evt.pageY);
    $(this).off("mousemove", onMouseOver);
}
function onMouseLeave(evt) {
	$(this).text("mouseleave");
	$(this).on("mousemove", onMouseOver);
}
// function to toggle class
function highlight() {
	$(this).toggleClass("highlighted");
}
function fnClick () {
	$(this).html("Click");
}
function fnClick2 () {
	$(this).html("Double Click");
}
function fnResize() {
	$("#evtTarget-5-3").html("Browser window resized");
}
// displays common jquery information for event handlers
function updateEventDetails(evt) {
//clear any current text before we update the value fields
	$(".detailLine span[id]").text("");
    $("#evtType").text(evt.type);
    $("#evtWhich").text(evt.which);
    $("#evtTarget").text(evt.target.id);
    if (evt.relatedTarget)
    {
        $("#evtRelated").text(evt.relatedTarget.tagName+"#"+evt.relatedTarget.id);
    }
    $("#evtPageX").text(evt.pageX);
    $("#evtPageY").text(evt.pageY);
    $("#evtClientX").text(evt.clientX);
    $("#evtClientY").text(evt.clientY);
    $("#evtMetaKey").text(evt.metaKey);
    if (evt.data)
	{
    	$('#evtData').text(evt.data.name);
	}
}
//--------------------------------------------------------Modal 6 AJAX---------------------------------------------
//function that will be use for global event handler
function globalHandler() {
	$(document).ajaxStart(function () {
    	console.log("AJAX starting");
    });
    $(document).ajaxStop(function () {
        console.log("AJAX request ended");
	});
    $(document).ajaxSend(function (evt, jqXHR, options) {
        console.log("About to Send request for data...");
    });
    $(document).ajaxComplete(function (evt, jqXHR, options) {
	   console.log("Everything's finished!");
    });
    $(document).ajaxError(function (evt, jqXHR, settings, err) {
		console.log("Hmmm. Seems like there was a problem: " + err);
    });
    $(document).ajaxSuccess(function (evt, jqXHR, options) {
        console.log("Looks like everything worked!");
    });
}
// functions to grab data from other files via AJAX
function getContent() {
	$.ajax("Included_Files/sampletextcontent.txt", 
    { success: setContent, 
    type: "GET", 
    dataType: "text" });
    }
// Places data from getContent function        
function setContent(data, status, jqxhr) {
    $("#example-6-1").text(data);
}
// Loads HTML file        
function loadHTML() {
   $("#example-6-1").load("Included_Files/samplehtml.html");
}
// function pulls text from testdata file via AJAX
function getData() {
	$.ajax({
		url: "Included_Files/testdata.txt",
		type: "GET",
		dataType: "text",
		success: successFn,
		error: errorFn,
		complete: function (xhr, status) {
			$("#ajaxContent-1").append("The request is complete" + "<br>");
		}
	});
}
// getData on success function      
function successFn(result) {
    $("#ajaxContent-1").append(result + "<br>" + "AJAX Success!" + "<br>");
}
// getData on error function      
function errorFn(xhr, status, strErr) {
	$("#ajaxContent-1").append("There was an error!" + "<br>"  + strErr + "<br>");
}

function successFn2(result) {
	$("#ajaxContent-2").empty().
	append(result + "<br>" + "AJAX Success!" + "<br>");
}
function successFn3(result) {
	$("#ajaxContent-3").empty();
	$.each(result.items, function(i, item) {
	    $("<img>").attr("src", item.media.m).appendTo("#ajaxContent-3");
	    if (i === 4) {
	    	return false;
	    }
	});
}
//-----------------------------------------RESET FUNCTIONS---------------------------------------------
// Modal 2
function resetBorders(inp1,inp2) {
	$(inp1).css("border", "none");
	$(inp1).css("margin-left", "0");
	$(inp2).css("border", "5px solid gray");
}
// Modal 3
function resetText(inp1,inp2,inp3,inp4) {
	$(inp1).html("");
	$(inp2).text("Content Creation");
	$(inp3).html('<p class="a">This is paragraph 1</p> <p id="para3-21">This is paragraph 2</p> <p class="b">This is paragraph 3</p> <p id="para3-24" lang="en-us">This is paragraph 4</p> <p id="para3-25" lang="en-gb">This is paragraph 5</p> ');
    $(inp4).html('<a href="img/sample/Grass.jpg"><img src="img/sample/Grass.jpg" alt="Grass" class="img-3-4" /></a> <a href="img/sample/Leaf.jpg"><img src="img/sample/Leaf.jpg" alt="Leaf"  class="img-3-4"/></a> <a href="img/sample/Spring.jpg"><img src="img/sample/Spring.jpg" alt="Spring"  class="img-3-4"/></a> <a href="img/sample/Water.jpg"><img src="img/sample/Water.jpg" alt="Water"  class="img-3-4"/></a>');       
}
// Modal 4
function resetAnimate(inp1, inp2, inp3, inp4, inp5, inp6){
	$(inp1).stop(true);
	$(inp1).animate({top: "0"}, "slow")
	.animate({left: 0}, "500", function () {
		$(inp2).stop(true);
		$(inp2).animate({top: "0"}, "slow")
		.css("height", 100);
	});
	
	$(inp1).css({
		width: "",
		height: "",
		borderWidth: ""
	});
	
	$(inp3).show();
	$(inp3).text("");
	
	$(inp4).fadeTo(100, 1.0);
	$(inp4).text("");
	
	$(inp5).slideDown();
	$(inp5).text("");
	
	$(inp6).stop(true);
	$(inp6).css({
		width: "250px",
		fontSize: "16pt",
		left: ""
	});
}
// Modal 5 does not need a reset function

// Modal 6
function resetAJAX(inp1) {
	$(inp1).empty();
}