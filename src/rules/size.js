(function($) {

    $.fn.bootstrapValidator.i18n.size = $.extend($.fn.bootstrapValidator.i18n.size || {}, {
        'string' : 'Please enter exactly %s characters',
        'numeric' : 'Must be %s'
    });

    $.fn.bootstrapValidator.validators.size = {

        validate: function(validator, $field, options) {

            var value = $field.val(),
                size, message;

            if(isNaN(value)) {
                size = value.length;
                message = options.message['string'] || options.message || $.fn.bootstrapValidator.i18n.size.string;
            } else {
                size = parseFloat(value);
                message = options.message['numeric'] || options.message || $.fn.bootstrapValidator.i18n.size.numeric;
            }

            return {
                valid : size == options.size,
                message : $.fn.bootstrapValidator.helpers.format(message, options.size)
            }
        }
    };

}(window.jQuery));
