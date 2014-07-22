(function($) {

    $.fn.bootstrapValidator.i18n.accepted = $.extend($.fn.bootstrapValidator.i18n.accepted || {}, {
        'default' : 'The selected value is invalid'
    });

    $.fn.bootstrapValidator.validators.accepted = {

        validate: function(validator, $field, options) {

            var value = $field.val();

            var message = options.message['accepted'] || options.message || $.fn.bootstrapValidator.i18n.accepted.default;

            return {
                valid : $.inArray(value, options.values) == -1,
                message : $.fn.bootstrapValidator.helpers.format(message, options.accepted)
            }
        }
    };

}(window.jQuery));
