/**
 * Client side equivalent to Laravel "digits" validator
 * The field under validation must be numeric and must have an exact length of value.
 */
(function($) {

    $.fn.bootstrapValidator.i18n.numDigits = $.extend($.fn.bootstrapValidator.i18n.numDigits || {}, {
        'default' : 'Must contain %s digits'
    });

    $.fn.bootstrapValidator.validators.numDigits = {

        validate: function(validator, $field, options) {

            var value = $field.val();

            if(value == '') {
                return true;
            }

            var pattern = new RegExp('^[0-9]{' + options.digits + '}$');

            if(pattern.test(value)) {
                return true;
            }

            var message = options.message['numDigits'] || options.message || $.fn.bootstrapValidator.i18n.numDigits.default;

            return {
                valid : false,
                message : $.fn.bootstrapValidator.helpers.format(message, options.digits)
            }
        }
    };

}(window.jQuery));
