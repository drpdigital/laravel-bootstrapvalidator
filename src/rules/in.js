/**
 * Client side equivalent to Laravel "in" validator
 * The field under validation must be included in the given list of values.
 */
(function($) {

    $.fn.bootstrapValidator.i18n.in = $.extend($.fn.bootstrapValidator.i18n.in || {}, {
        'default' : 'The selected value is invalid'
    });

    $.fn.bootstrapValidator.validators.in = {

        validate: function(validator, $field, options) {

            var value = $field.val();

            var message = options.message['in'] || options.message || $.fn.bootstrapValidator.i18n.in.default;

            return {
                valid : $.inArray(value, options.values) >= 0,
                message : message
            }
        }
    };

}(window.jQuery));
