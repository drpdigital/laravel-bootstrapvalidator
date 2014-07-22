(function($) {

    $.fn.bootstrapValidator.i18n.before = $.extend($.fn.bootstrapValidator.i18n.before || {}, {
        'default' : 'Date must be before %s'
    });

    $.fn.bootstrapValidator.validators.before = {

        validate: function(validator, $field, options) {

            var value = $field.val();

            var date = new moment(value, 'DD-MM-YYYY', true);

            if (!date.isValid()) {
                return false;
            }

            var before = new moment(options.before, 'DD-MM-YYYY', true);
            var message = options.message['before'] || options.message || $.fn.bootstrapValidator.i18n.before.default;

            return {
                valid : date.isBefore(before),
                message : $.fn.bootstrapValidator.helpers.format(message, options.before)
            }
        }
    };

}(window.jQuery));
