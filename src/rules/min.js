/**
 * Client side equivalent to Laravel "min" validator
 * The field under validation must have a minimum value.
 */
(function($) {

    $.fn.bootstrapValidator.i18n.min = $.extend($.fn.bootstrapValidator.i18n.min || {}, {
        'string' : 'Please enter more than %s characters',
        'numeric' : 'Please enter a value more than %s'
    });

    $.fn.bootstrapValidator.validators.min = {

        validate: function(validator, $field, options) {

            var value = $field.val(),
                size, message;

            if(value == '') {
                return true;
            }

            if(isNaN(value)) {
                size = value.length;
                message = options.message['string'] || options.message || $.fn.bootstrapValidator.i18n.min.string;
            } else {
                size = parseFloat(value);
                message = options.message['numeric'] || options.message || $.fn.bootstrapValidator.i18n.min.numeric;
            }

            return {
                valid : size >= options.min,
                message : $.fn.bootstrapValidator.helpers.format(message, options.min)
            }
        }
    };

}(window.jQuery));
