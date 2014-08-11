/**
 * Client side equivalent to Laravel "alpha_num" validator
 * The field under validation must be entirely alpha-numeric characters.
 */
(function($) {

    $.fn.bootstrapValidator.i18n.alphaNum = $.extend($.fn.bootstrapValidator.i18n.alphaNum || {}, {
        'default' : 'Must only contain letters and numbers'
    });

    $.fn.bootstrapValidator.validators.alphaNum = {

        validate: function(validator, $field, options) {

            var value = $field.val();

            if(value == '') {
                return true;
            }

            var pattern = new RegExp(/^[a-z0-9]+$/i);

            if(pattern.test(value)) {
                return true;
            }

            var message = options.message['alphaNum'] || options.message || $.fn.bootstrapValidator.i18n.alphaNum['default'];

            return {
                valid : false,
                message : message
            }
        }
    };

}(window.jQuery));
