/**
 * Client side equivalent to Laravel "alpha" validator
 * The field under validation must be entirely alphabetic characters.
 */
(function($) {

    $.fn.bootstrapValidator.i18n.alpha = $.extend($.fn.bootstrapValidator.i18n.alpha || {}, {
        'default' : 'Must only contain letters'
    });

    $.fn.bootstrapValidator.validators.alpha = {

        validate: function(validator, $field, options) {

            var value = $field.val();

            if(value == '') {
                return true;
            }

            var pattern = new RegExp(/^[a-z]+$/i);

            if(pattern.test(value)) {
                return true;
            }

            var message = options.message['alpha'] || options.message || $.fn.bootstrapValidator.i18n.alpha.default;

            return {
                valid : false,
                message : message
            }
        }
    };

}(window.jQuery));
