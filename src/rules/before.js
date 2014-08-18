/**
 * Client side equivalent to Laravel "before" validator
 * The field under validation must be a value preceding the given date.
 */
(function($) {

    $.fn.bootstrapValidator.i18n.before = $.extend($.fn.bootstrapValidator.i18n.before || {}, {
        'default' : 'Date must be before %s'
    });

    $.fn.bootstrapValidator.validators.before = {

        validate: function(validator, $field, options) {

            var value = $field.val();

            if(value == '') {
                return true;
            }

            var date = moment(value, 'DD-MM-YYYY HH:mm:ss');

            if (!date.isValid()) {
                return false;
            }

            var before = moment(options.before, 'DD-MM-YYYY HH:mm:ss');
            var message = options.message['before'] || options.message || $.fn.bootstrapValidator.i18n.before['default'];

            return {
                valid : date.isBefore(before),
                message : $.fn.bootstrapValidator.helpers.format(message, options.before)
            }
        }
    };

}(window.jQuery));
