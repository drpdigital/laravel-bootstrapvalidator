/**
 * Client side equivalent to Laravel "digits" validator
 * The field under validation must be numeric and must have an exact length of value.
 */
(function($) {

    $.fn.bootstrapValidator.i18n.digitsBetween = $.extend($.fn.bootstrapValidator.i18n.digitsBetween || {}, {
        'default' : 'Must contain between %s and %s digits'
    });

    $.fn.bootstrapValidator.validators.digitsBetween = {

        validate: function(validator, $field, options) {

            var value = $field.val();

            if(value == '') {
                return true;
            }

            var pattern = new RegExp('^[0-9]{' + options.min + ',' + options.max + '}$');

            if(pattern.test(value)) {
                return true;
            }

            var message = options.message['digitsBetween'] || options.message || $.fn.bootstrapValidator.i18n.digitsBetween.default;

            return {
                valid : false,
                message : $.fn.bootstrapValidator.helpers.format(message, options.min, options.max)
            }
        }
    };

}(window.jQuery));
