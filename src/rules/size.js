/**
 * Client side equivalent to Laravel "size" validator
 * The field under validation must have a size matching the given value. For string data, value corresponds to the number of characters. For numeric data, value corresponds to a given integer value.
 */
(function($) {

    $.fn.bootstrapValidator.i18n.size = $.extend($.fn.bootstrapValidator.i18n.size || {}, {
        'string' : 'Please enter exactly %s characters',
        'numeric' : 'Must be %s',
        'file' : 'File size must be exactly %skb'
    });

    $.fn.bootstrapValidator.validators.size = {

        validate: function(validator, $field, options) {

            var value = $field.val(),
                size, message,
                html5 = (window.File && window.FileList && window.FileReader);

            if(value == '') {
                return true;
            }

            if($field.attr('type') == 'file') {

                // can't properly validate so let it through and let the server catch it
                if(!html5) { return true; }

                // in kb
                size = $field[0].files[0].size / 1024;
                message = options.message['file'] || options.message || $.fn.bootstrapValidator.i18n.min.file;

            } else if(isNaN(value)) {

                size = value.length;
                message = options.message['string'] || options.message || $.fn.bootstrapValidator.i18n.size.string;

            } else {

                size = parseFloat(value) * 1024;
                message = options.message['numeric'] || options.message || $.fn.bootstrapValidator.i18n.size.numeric;

            }

            return {
                valid : size == options.size,
                message : $.fn.bootstrapValidator.helpers.format(message, options.size)
            }
        }
    };

}(window.jQuery));
