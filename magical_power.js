$(document).ready(function() {
    $(".desktop_elements").css("display", "flex");
    $(".desktop_window").hide();
    
    $(".alex_button").hide();

    $("#Maro").click(function(event) {
        $(".desktop_elements").hide();
        $(".alex_button").hide();
        $(".desktop_window").fadeIn().css("display", "block");
        $(".window_title").text("Mayonesa Special message for cutiepie bobo <3")        

        $(".profile_pic").removeClass( "Bunny Narie Mathy Alex Dove Laura Wolfie" ).addClass("Maro");
        $(".profile_name").text("Maro");
        $(".content_text").text("Maria, we've bene together officially for 7 months now; you've fallen into my life like a shooting star; but not to grant wishes, but a wish, for you to exist in my life. We have had a spark ever since the day we've met I know you since you were 19, and now you're 21, a lots of things have changed during that time; a lots of events we had to go through together, and here we are still as strong, or rather stronger. The fact is; I'll always love you more tomorrow, and less yesterday. I do believe you're the one. As I don't want it to happen well, ever?? but I also can't wait until we're celebrating your 50th Birthday together, we still got many years to spend together, I love you so much, and happy Birthday Maria ❤️❤️❤️❤️❤️❤️❤️❤️");
    });


    $("#Narie").click(function(event) {
        $(".desktop_elements").hide();
        $(".alex_button").hide();
        $(".desktop_window").fadeIn().css("display", "block");
        $(".window_title").text("PANDA ATTACK MODE: *excuting sleepiness* 3.. 2.. 1.. *falls asleep*")        

        $(".profile_pic").removeClass( "Bunny Maro Mathy Alex Dove Laura Wolfie" ).addClass("Nare");
        $(".profile_name").text("Narie");
        $(".content_text").text("I think you are special and unique. The way you care for others, the way you get hyped for the most insignificant things and all the love and patience you have for others is awesome. I'm happy we met and that we spend time together. I wish you a very happy birthday ❤️ love you, Chiro.");
    });




    $("#Bunny").click(function(event) {
        $(".desktop_elements").hide();
        $(".alex_button").hide();
        $(".desktop_window").fadeIn().css("display", "block");
        $(".window_title").text("Dance like your life depends on it")        

        $(".profile_pic").removeClass( "Nare Maro Mathy Alex Dove Laura Wolfie" ).addClass("Bunny");
        $(".profile_name").text("Bunny");
        $(".content_text").text("Hey Shiro, I just wanna let you know how much of an amazing friend you are to me, not speaking in general but in my heart as a whole. You have the sweetest heart among us all and you always come to us with positivity even when everything around you is filled with negativity. You as my friend always helped me out in dire situations and showed me that you are always a reliable friend to lean on. And i want you to know that you have one of the strongest mind among anyone i know and you prove yourself to be versatile. Now that you are leveling up i expect you to become better in many aspects of your life and make a good future for yourself. Happy birthday to one of my best friend Shiro ❤️.");
    });


    $("#Mathy").click(function(event) {
        $(".desktop_elements").hide();
        $(".alex_button").hide();
        $(".desktop_window").fadeIn().css("display", "block");
        $(".window_title").text("Queen Automata excutes, uh.. rainbows!")        

        $(".profile_pic").removeClass( "Nare Bunny Maro Alex Dove Laura Wolfie" ).addClass("Mathy");
        $(".profile_name").text("Mathy");
        $(".content_text").text(" Quit League plox? Happy birthday!");
    });


    $("#Alex").click(function(event) {
        $(".desktop_elements").hide();
        $(".alex_button").show();
        $(".desktop_window").fadeIn().css("display", "block");
        $(".window_title").text("BAGUETTE ALERT")        

        $(".profile_pic").removeClass( "Nare Bunny Mathy Maro Dove Laura Wolfie" ).addClass("Alex");
        $(".profile_name").text("Alex");
        $(".content_text").text("Alex: now it's time to accept you won't grow up anymore, but we love you anyway !  - save yourself, drop league - send nudes to maro- slap your daddy and tell him you're the daddi now - keep drawing ");
    });


    $("#Dove").click(function(event) {
        $(".desktop_elements").hide();
        $(".alex_button").hide();
        $(".desktop_window").fadeIn().css("display", "block");
        $(".window_title").text("BIRBY BIRB BIRB???")        

        $(".profile_pic").removeClass( "Nare Bunny Mathy Maro Alex Laura Wolfie" ).addClass("Dove");
        $(".profile_name").text("Dove");
        $(".content_text").text("FAHKIN GIVE ME MARIO FAHK HAPPY BIRTHDAY YOU PUNK");
    });

    $("#Wolfie").click(function(event) {
        $(".desktop_elements").hide();
        $(".alex_button").hide();
        $(".desktop_window").fadeIn().css("display", "block");
        $(".window_title").text("THE MOST NON-EDGY RACIST LITTLE KID WHO IS PROLLY GOOD IN LEAGUE FOR SOME REASON")        

        $(".profile_pic").removeClass( "Nare Bunny Mathy Maro Alex Laura Dove" ).addClass("Wolfie");
        $(".profile_name").text("Wolfie");
        $(".content_text").text("Happy birthday I guess?");
    });



    $(".window_close").click(function(event) {
        $(".desktop_elements").fadeIn();
        $(".desktop_window").hide();

    });
    $(".alex_button").click(function(event) {
        $(".content_text").text("Alex: now it's time to accept you won't grow up anymore, but we love you anyway!  - save yourself, drop league - send nudes to maro- slap your daddy and tell him you're the daddi now - keep drawing ");

    });

  


});