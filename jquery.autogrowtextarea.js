/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <jevin9@gmail.com> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return. Jevin O. Sewaruth
 * ----------------------------------------------------------------------------
 *
 * Autogrow Textarea Plugin Version v3.0
 * LINK TO COME
 * 
 * IF YOU LIKE THIS VERSION, PLEASE CONSIDER THE PAID ONE.
 *
 * Date: October 15, 2012
 */

jQuery.fn.autoGrow = function() {
	return this.each(function() {

		var createMirror = function(textarea) {
			$(textarea).after('<div class="target-mirror"></div>');
			return $(textarea).next('.target-mirror')[0];
		}

		var sendContentToMirror = function (textarea) {
			mirror.innerHTML = textarea.value.replace(/\n/g, '<br/>') + '.<br/>.';
			$(textarea).height($(mirror).height());
		}

		var growTextarea = function () {
			sendContentToMirror(this);
		}

		// Create a mirror
		var mirror = createMirror(this);
		
		// Style the mirror
		mirror.style.display = 'none';
		mirror.style.wordWrap = 'break-word';
		mirror.style.padding = $(this).css('padding');
		mirror.style.width = $(this).css('width');
		mirror.style.fontFamily = $(this).css('font-family');
		mirror.style.fontSize = $(this).css('font-size');
		mirror.style.lineHeight = $(this).css('line-height');

		// Style the textarea
		this.style.overflow = "hidden";
		this.style.minHeight = this.rows+"em";

		// Bind the textarea's event
		this.onkeyup = growTextarea;

		// Fire the event for text already present
		sendContentToMirror(this);

	});
};
