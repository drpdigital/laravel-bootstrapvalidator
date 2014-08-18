/**
 * Client side equivalent to Laravel "size" validator
 * The field under validation must have a size matching the given value. For string data, value corresponds to the number of characters. For numeric data, value corresponds to a given integer value.
 */
(function($) {

    $.fn.bootstrapValidator.i18n.size = $.extend($.fn.bootstrapValidator.i18n.size || {}, {
        'string' : 'Please enter exactly %s characters',
        'numeric' : 'Must be %s'
    });

    $.fn.bootstrapValidator.validators.size = {

        validate: function(validator, $field, options) {

            var value = $field.val(),
                size, message;

            if(value == '') {
                return true;
            }

            if($field.attr('type') == 'file') {
                // can't properly validate so let it through and let the server catch it
                return true;
            } else if(isNaN(value)) {
                size = value.length;
                message = options.message['string'] || options.message || $.fn.bootstrapValidator.i18n.size.string;
            } else {
                size = parseFloat(value);
                valid == options.size;
                message = options.message['numeric'] || options.message || $.fn.bootstrapValidator.i18n.size.numeric;
            }

            return {
                valid : size == options.size,
                message : $.fn.bootstrapValidator.helpers.format(message, options.size)
            }
        }
    };

}(window.jQuery));
