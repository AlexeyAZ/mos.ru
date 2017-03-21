$(function () {

	var body = $("body");

	function inputEmpty(el) {
		var inputContainer = el.closest(".input-container");

		if (el.val() && el.val() != "+7 (___) ___-____") {
			inputContainer.addClass("input-container_text_true");
		} else if (el.val() == "+7 (___) ___-____" || !el.val()) {
			inputContainer.removeClass("input-container_text_true");
		}
	};

	$(".js-input-text").focus(function () {
		var self = $(this);
		var selfContainer = self.closest(".input-container");

		selfContainer.addClass("input-container_focus");
	});

	$(".js-input-text").on("keyup", function () {
		var self = $(this);
		var selfContainer = self.closest(".input-container");

		if (selfContainer.hasClass("input-container_error")) {
			selfContainer.removeClass("input-container_error");
		}
	});

	$(".js-input-text").blur(function () {
		var self = $(this);
		var selfContainer = self.closest(".input-container");
		var selfVal = self.val();

		selfContainer.removeClass("input-container_focus");

		if (self.attr("name") === "password") {
			inputEmpty(self);
		} else {
			self.val(selfVal.trim());
			inputEmpty(self);
		}
	});

	body.on("click", ".js-show-password-btn", function () {
		var self = $(this);
		var selfParent = self.closest(".input-container");
		var selfInput = selfParent.find(".input");

		if (selfInput.attr("type") === "text") {
			selfInput.attr("type", "password");
			selfParent.removeClass("input-container_password_show");
		} else {
			selfInput.attr("type", "text");
			selfParent.addClass("input-container_password_show");
		}
	});

	$('.select').styler();

	$(".js-input-phone").mask("+7 (999) 999-9999", { autoclear: false });

	$("#form").submit(function (e) {
		e.preventDefault();

		$(".input-container_require").each(function () {
			var self = $(this);
			var selfInput = self.find("input");

			if (!selfInput.val().trim()) {
				self.addClass("input-container_error");
			}
		});
	});
});
//# sourceMappingURL=app.js.map
