/**
 * Client side equivalent to Laravel "alpha_dash" validator
 * The field under validation may have alpha-numeric characters, as well as dashes and underscores.
 */
(function($) {

    $.fn.bootstrapValidator.i18n.alphaDash = $.extend($.fn.bootstrapValidator.i18n.alphaDash || {}, {
        'default' : 'Must only contain letters, numbers and dashes'
    });

    $.fn.bootstrapValidator.validators.alphaDash = {

        validate: function(validator, $field, options) {

            var value = $field.val();

            if(value == '') {
                return true;
            }

            var pattern = new RegExp(/^[a-z0-9\-_]+$/i);

            if(pattern.test(value)) {
                return true;
            }

            var message = options.message['alphaDash'] || options.message || $.fn.bootstrapValidator.i18n.alphaDash['default'];

            return {
                valid : false,
                message : message
            }
        }
    };

}(window.jQuery));
