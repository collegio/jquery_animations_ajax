/*

	Learn to Code JavaScript: Lesson 8
	jQuery Fading, Sliding, Animation, and AJAX

	Let's build on our jQuery knowledge by sliding and fading windows in and
	out of view, as well as performing a basic animation.

	Please note, you will need an API key to perform the AJAX function

*/

$(document).ready(function() {

	// Let's start by setting our show and hide to slide instead of just appearing
	// and disappearing
	$("#button_custom_message_hide").click(function() {
		$("#custom_section").slideUp();
		$("#button_custom_message_hide").hide();
		$("#button_custom_message_show").show();
	});

	$("#button_custom_message_show").click(function() {
		$("#custom_section").slideDown();
		$("#button_custom_message_show").hide();
		$("#button_custom_message_hide").show();
	});

	// Now, instead of just changing our message, let's create a cool feature
	// and fade out the old text, change the text and color, then fade it back in
	$("#button_message1").click(function() {
		$("#main_message").fadeOut(500, function() {

			// once the window fades out, change the message and style
			$("#main_message").html("Good day, I hope you are enjoying working with JavaScript!");
			$("#main_message").css("color", "#900");  // red

			// now fade back in
			$("#main_message").fadeIn(500);
		});
		
	});

	$("#button_message2").click(function() {
		$("#main_message").fadeOut(500, function() {

			// once the window fades out, change the message and style
			$("#main_message").html("You are going to be a front-end master with jQuery!");
			$("#main_message").css("color", "#090");  // green

			// now fade back in
			$("#main_message").fadeIn(500);
		});
		
	});

	$("#button_message3").click(function() {
		$("#main_message").fadeOut(500, function() {

			// once the window fades out, change the message and style
			$("#main_message").html("Let's get started!");
			$("#main_message").css("color", "#009");  // blue

			// now fade back in
			$("#main_message").fadeIn(500);
		});
		
	});

	// let's also set up a button to use AJAX to pull data from OpenWeatherMap
	// Please note: you will need to get an API key to use this function. You can
	// get an api key at https://openweathermap.org/
	$("#button_weather").click(function() {
		var api_key = "YOUR API KEY HERE!";

		$("#main_message").fadeOut(500, function() {

			// once the window fades out, change the message and style
			$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Halifax,ca&appid="+api_key,function(result){
		        
				// Because of the promise, we need to perform our functionality here!
				// If we perform it outside of the function, it will execute immediately
				// instead of when we get a response.

		        var message = ("Current Weather: "+ result.weather[0].main);
		        $("#main_message").html(message);
		        console.log(message);
		        
		        // now fade back in
				$("#main_message").fadeIn(500);
		    });
		});
		
	});

	// finally, let's perform the same cool effect on our custom text
	$("#button_custom_message").click(function() {

		$("#main_message").fadeOut(500, function() {

			var customMessage = $("#custom_message").val();
			$("#main_message").html(customMessage);
			$("#main_message").css("color", "#909");

			// now fade back in
			$("#main_message").fadeIn(500);
		});
		
	});
	
});