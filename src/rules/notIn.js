(function($) {

    $.fn.bootstrapValidator.i18n.notIn = $.extend($.fn.bootstrapValidator.i18n.notIn || {}, {
        'default' : 'The selected value is invalid'
    });

    $.fn.bootstrapValidator.validators.notIn = {

        validate: function(validator, $field, options) {

            var value = $field.val();

            var message = options.message['notIn'] || options.message || $.fn.bootstrapValidator.i18n.notIn.default;

            return {
                valid : $.inArray(value, options.values) == -1,
                message : message
            }
        }
    };

}(window.jQuery));
