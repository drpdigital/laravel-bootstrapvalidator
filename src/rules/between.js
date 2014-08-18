/**
 * Client side equivalent to Laravel "between" validator
 * The field under validation must have a size between the given min and max.
 */
(function($) {

    $.fn.bootstrapValidator.i18n.between = $.extend($.fn.bootstrapValidator.i18n.between || {}, {
        'string' : 'Must be between %s and %s characters',
        'numeric' : 'Please enter a value between %s and %s'
    });

    $.fn.bootstrapValidator.validators.between = {

        validate: function(validator, $field, options) {

            var value = $field.val(),
                size, message;

            if(value == '') { return true; }

            if($field.attr('type') == 'file') {
                // can't properly validate so let it through and let the server catch it
                return true;
            } if(isNaN(value)) {
                size = value.length;
                message = options.message['string'] || options.message || $.fn.bootstrapValidator.i18n.between.string;
            } else {
                size = parseFloat(value);
                message = options.message['numeric'] || options.message || $.fn.bootstrapValidator.i18n.between.numeric;
            }

            return {
                valid : size >= options.min && size <= options.max,
                message : $.fn.bootstrapValidator.helpers.format(message, options.min, options.max)
            }
        }
    };

}(window.jQuery));
