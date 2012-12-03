/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <jevin9@gmail.com> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return. Jevin O. Sewaruth
 * ----------------------------------------------------------------------------
 *
 * Autogrow Textarea Plugin Version v3.0
 * http://www.technoreply.com/autogrow-textarea-plugin-3-0
 * 
 * THIS PLUGIN IS DELIVERD ON A PAY WHAT YOU WHANT BASIS. IF THE PLUGIN WAS USEFUL TO YOU, PLEASE CONSIDER BUYING THE PLUGIN HERE :
 * https://sites.fastspring.com/technoreply/instant/autogrowtextareaplugin
 *
 * Date: October 15, 2012
 */
 (function($){
	$.fn.autoGrow = function(){
		return this.each(function(){
			var txtArea = $(this);
			var fakeDiv = $('<div class="autogrow-textarea-mirror"></div>');
					
			txtArea.after(fakeDiv);		
			
			var reloadText = function(){
				txtArea = $(this);
				var maxHeight = parseInt(txtArea.css('max-height'),10);
				fakeDiv = txtArea.next('.autogrow-textarea-mirror');
				fakeDiv.html(txtArea.val().replace(/\n/g, '<br/>'));
				if(isNaN(maxHeight)){
					txtArea.height(fakeDiv.height());
				}
				else if(fakeDiv.height() <= maxHeight){
					txtArea.height(fakeDiv.height());
				}
				else{
					txtArea.height(maxHeight);
					txtArea.css({'overflow':'visible'});
				}
				
			};	
			
			fakeDiv.css({
					"overflow" : "visible",
					"display" : "none",
					"word-wrap":"break-word",
					"padding" : txtArea.css('padding'),
					"width": txtArea.css('width'),
					"font-family": txtArea.css('font-family'),
					"font-size" : txtArea.css('font-size'),
					"line-height": txtArea.css('line-height')
			});	
			
			// Style the textarea
			txtArea.css({"overflow" : "hidden"});
			txtArea.css({"min-height" : this.rows+"em"});
			txtArea.keyup(reloadText);
		});
	}
})(jQuery);

