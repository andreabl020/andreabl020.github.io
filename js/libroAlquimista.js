var Page = (function() {
	var config = {
			$bookBlock : $( '#book' ),
			$navNext : $( '#next-page' ),
			$navPrev : $( '#prev-page' ),
			$navFirst : $( '#first-page' ),
			$navLast : $( '#last-page' )
		},
		init = function() {
			config.$bookBlock.bookblock( {
				speed : 800,
				shadowSides : 0.8,
				shadowFlip : 0.7
			} );
			initEvents();
		},
		initEvents = function() {
			var $slides = config.$bookBlock.children();

			// add navigation events
			config.$navNext.on( 'click touchstart', function() {
				config.$bookBlock.bookblock( 'next' );
				return false;
			} );

			config.$navPrev.on( 'click touchstart', function() {
				config.$bookBlock.bookblock( 'prev' );
				return false;
			} );

			config.$navFirst.on( 'click touchstart', function() {
				config.$bookBlock.bookblock( 'first' );
				return false;
			} );

			config.$navLast.on( 'click touchstart', function() {
				config.$bookBlock.bookblock( 'last' );
				return false;
			} );

			// add keyboard events
			$( document ).keydown( function(e) {
				var keyCode = e.keyCode || e.which,
					arrow = {
						left : 37,
						up : 38,
						right : 39,
						down:40
                    };
                    switch (keyCode) {
                        case arrow.left:
                            config.$bookBlock.bookblock( 'prev' );
                            break;
                        case arrow.right:
                            config.$bookBlock.bookblock( 'next' );
                            break;
                    }
                } );
            };
        
        return { init : init };
    })();

    Page.init();
