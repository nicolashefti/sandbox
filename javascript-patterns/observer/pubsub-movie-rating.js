/* jQuery Tiny Pub/Sub - v0.7 - 10/27/2011
 * http://benalman.com/
 * Copyright (c) 2011 "Cowboy" Ben Alman; Licensed MIT, GPL
 * Source: https://gist.github.com/cowboy/661855
 */
(function($) {

    var o = $({});

    $.subscribe = function() {
        o.on.apply(o, arguments);
    };

    $.unsubscribe = function() {
        o.off.apply(o, arguments);
    };

    $.publish = function() {
        o.trigger.apply(o, arguments);
    };

}(jQuery));

(function( $ ) {

    // Pre-compile templates and "cache" them using closure
    var
        userTemplate = _.template($( "#userTemplate" ).html()),
        ratingsTemplate = _.template($( "#ratingsTemplate" ).html());

    // Subscribe to the new user topic, which adds a user
    // to a list of users who have submitted reviews
    $.subscribe( "/new/user", function( e, data ){

        if( data ){

            $('#users').append( userTemplate( data ));

        }

    });

    // Subscribe to the new rating topic. This is composed of a title and
    // rating. New ratings are appended to a running list of added user
    // ratings.
    $.subscribe( "/new/rating", function( e, data ){

        if( data ){

            $( "#ratings" ).append( ratingsTemplate( data ) );

        }

    });

    // Handler for adding a new user
    $("#add").on("click", function( e ) {

        e.preventDefault();

        var strUser = $("#twitter_handle").val(),
            strMovie = $("#movie_seen").val(),
            strRating = $("#movie_rating").val();

        // Inform the application a new user is available
        $.publish( "/new/user", { name: strUser } );

        // Inform the app a new rating is available
        $.publish( "/new/rating", { title: strMovie, rating: strRating} );

    });

})( jQuery );