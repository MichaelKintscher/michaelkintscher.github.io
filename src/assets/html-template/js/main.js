/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

var $window, $body, $header;

var settings = {

		// Parallax background effect?
			parallax: true,

		// Parallax factor (lower = more intense, higher = less intense).
			parallaxFactor: 20

	};

(function($) {

	$window = $(window),
	$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Call the finish JS Setup on Window resize.
		$window.resize(function() {
			finishJsSetup();
		});

		new ResizeObserver(() => {
			console.log("changed!!!");
			console.log("outerHeight: " + $body.outerHeight(true));
			console.log("innerHeight: " + $body.innerHeight());
			console.log("Height: " + $body.height());
			console.log("window: " + $window.height());
			settings.parallaxFactor = ($body.height() - $window.height()) / (0.1 * $window.height());
			console.log("New parallax factor: " + settings.parallaxFactor);

			// if ($header.outerWidth() / $header.outerHeight() > 1.5) {
			// 	$header.css("background-size", "40vw auto");
			// 	console.log("oops " + ($header.outerWidth() / $header.outerHeight()));
			// } else {
			// 	$header.css("background-size", "auto 140vh");
			// }
		}).observe($body[0]);

})(jQuery);

function finishJsSetup() {
	
	$header = $('#header');
	var $footer = $('#footer'),
		$main = $('#main');

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		breakpoints.on('<=medium', function() {
			$footer.insertAfter($main);
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
						console.log(Math.floor($window.scrollTop()) + " - " + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)));
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

	// Main Sections: Two.

		// Lightbox gallery.
			$window.on('load', function() {

				$('#two').poptrox({
					caption: function($a) { return $a.next('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				});

			});
			console.log("outerHeight: " + $main.outerHeight(true));
			console.log("innerHeight: " + $main.innerHeight());
			console.log("Height: " + $main.height());
			console.log("window: " + $window.height());
			console.log("outerHeight: " + $body.outerHeight(true));
			console.log("innerHeight: " + $body.innerHeight());
			console.log("Height: " + $body.height());
}