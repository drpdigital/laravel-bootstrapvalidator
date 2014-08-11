/**
 * Client side equivalent to Laravel "in" validator
 * The field under validation must be included in the given list of values.
 */
(function($) {

    $.fn.bootstrapValidator.i18n.isIn = $.extend($.fn.bootstrapValidator.i18n.isIn || {}, {
        'default' : 'The selected value is invalid'
    });

    $.fn.bootstrapValidator.validators.isIn = {

        validate: function(validator, $field, options) {

            var value = $field.val();

            var message = options.message['isIn'] || options.message || $.fn.bootstrapValidator.i18n.isIn['default'];

            return {
                valid : $.inArray(value, options.values) >= 0,
                message : message
            }
        }
    };

}(window.jQuery));
