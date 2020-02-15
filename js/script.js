'use strict';

// js code
$(document).ready(function () {

	$(".feedbacks__items").slick({
		slidesToShow: 2,
		arrows: true,
	});

	function fadeModuleSystem() {
		var rSideItems = $(".module-r-side__item");
		var lSideItems = $(".module__item");

		lSideItems.on("click", function () {
			var currentLSide = $(this);
			rSideItems.removeClass("module--active");

			rSideItems.each(function () {
				var rSideItem = $(this);
				if (currentLSide.data("name") === rSideItem.data("name")) {
					rSideItem.addClass("module--active");
				}
			})
		})
	}

	fadeModuleSystem();

	function scrollTo() {
		var topMenuLinks = $(".link-item");
		var sections = $("section");
		var scrollHtml = $("html");

		topMenuLinks.on("click", function () {
			var linkData = $(this).data("scrollfrom");

			sections.each(function () {
				var currentSection = $(this);
				var currentSectionData = $(this).data("scrollto");

				if (linkData === currentSectionData) {
					var destination = currentSection.offset().top;
					scrollHtml.animate({
							scrollTop: destination - 200,
						},
						500
					);
				}
			})
		});
	}

	scrollTo();

});