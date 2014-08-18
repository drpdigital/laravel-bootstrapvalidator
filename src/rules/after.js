/**
 * Client side equivalent to Laravel "after" validator
 * The field under validation must be a value after a given date.
 */
(function($) {

    $.fn.bootstrapValidator.i18n.after = $.extend($.fn.bootstrapValidator.i18n.after || {}, {
        'default' : 'Date must be after %s'
    });

    $.fn.bootstrapValidator.validators.after = {

        validate: function(validator, $field, options) {

            var value = $field.val();

            if(value == '') {
                return true;
            }

            var date = moment(value, 'DD-MM-YYYY HH:mm:ss');

            if (!date.isValid()) {
                return false;
            }

            var after = moment(options.after, 'DD-MM-YYYY HH:mm:ss');
            var message = options.message['after'] || options.message || $.fn.bootstrapValidator.i18n.after['default'];

            return {
                valid : date.isAfter(after),
                message : $.fn.bootstrapValidator.helpers.format(message, options.after)
            }
        }
    };

}(window.jQuery));
