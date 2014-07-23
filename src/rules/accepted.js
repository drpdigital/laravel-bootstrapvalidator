/**
 * Client side equivalent to Laravel "accepted" validator
 * The field under validation must be yes, on, or 1. This is useful for validating "Terms of Service" acceptance.
 */
(function($) {

    $.fn.bootstrapValidator.i18n.accepted = $.extend($.fn.bootstrapValidator.i18n.accepted || {}, {
        'default' : 'You must accept'
    });

    $.fn.bootstrapValidator.validators.accepted = {

        validate: function(validator, $field, options) {

            var value = $field.val();

            if(value == '') {
                return true;
            }

            value = value.toLowerCase();

            if(value === 'yes' || value === 'on' || value == '1') {
                return true;
            }

            var message = options.message['accepted'] || options.message || $.fn.bootstrapValidator.i18n.accepted.default;

            return {
                valid : false,
                message : message
            }
        }
    };

}(window.jQuery));
