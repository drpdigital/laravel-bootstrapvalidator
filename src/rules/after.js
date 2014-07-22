(function($) {

    $.fn.bootstrapValidator.i18n.after = $.extend($.fn.bootstrapValidator.i18n.after || {}, {
        'default' : 'Date must be after %s'
    });

    $.fn.bootstrapValidator.validators.after = {

        validate: function(validator, $field, options) {

            var value = $field.val();

            var date = new moment(value, 'DD-MM-YYYY', true);

            if (!date.isValid()) {
                return false;
            }

            var after = new moment(options.after, 'DD-MM-YYYY', true);
            var message = options.message['after'] || options.message || $.fn.bootstrapValidator.i18n.after.default;

            return {
                valid : date.isAfter(after),
                message : $.fn.bootstrapValidator.helpers.format(message, options.after)
            }
        }
    };

}(window.jQuery));
