/**
 * Client side equivalent to Laravel "max" validator
 * The field under validation must be less than or equal to a maximum value.
 */
(function($) {

    $.fn.bootstrapValidator.i18n.max = $.extend($.fn.bootstrapValidator.i18n.max || {}, {
        'string' : 'Please enter less than %s characters',
        'numeric' : 'Please enter a value less than %s'
    });

    $.fn.bootstrapValidator.validators.max = {

        validate: function(validator, $field, options) {

            var value = $field.val(),
                size, message;

            if(value == '') {
                return true;
            }

            if($field.attr('type') == 'file') {
                // can't properly validate so let it through and let the server catch it
                return true;
            } if(isNaN(value)) {
                size = value.length;
                message = options.message['string'] || options.message || $.fn.bootstrapValidator.i18n.max.string;
            } else {
                size = parseFloat(value);
                message = options.message['numeric'] || options.message || $.fn.bootstrapValidator.i18n.max.numeric;
            }

            return {
                valid : size <= options.max,
                message : $.fn.bootstrapValidator.helpers.format(message, options.max)
            }
        }
    };

}(window.jQuery));
