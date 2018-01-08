(function($) {

    var methods = {
        init: function(options) {
        },
        iosCursorBugFix: function () {
            var ua = navigator.userAgent,
            iOS = /iPad|iPhone|iPod/.test(ua),
            iOS11 = /OS 11_0_1|OS 11_0_2|OS 11_0_3|OS 11_1|OS 11_1_1|OS 11_1_2|OS 11_2|OS 11_2_1/.test(ua);

            // ios 11 bug caret position
            if ( iOS && iOS11 ) {
                // Add CSS class to body
                $("body").css('position', 'fixed')
                    .css('width', '100%');
            }
        }
    };

    $.extend({
        iosFixer: function(method) {
            // Method calling logic
            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (Object.prototype.toString.call(method) === '[object Object]' || method === undefined) {
                return methods.init.apply(this, arguments);
            } else {
                $.error('Method ' + method + ' does not exist!');
            }
        }
    });

})(jQuery);
