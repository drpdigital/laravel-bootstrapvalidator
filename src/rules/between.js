(function($) {

    $.fn.bootstrapValidator.i18n.between = $.extend($.fn.bootstrapValidator.i18n.between || {}, {
        'string' : 'Must be between %s and %s characters',
        'numeric' : 'Please enter a value between %s and %s'
    });

    $.fn.bootstrapValidator.validators.between = {

        validate: function(validator, $field, options) {

            var value = $field.val(),
                size, message;

            if(isNaN(value)) {
                size = value.length;
                message = options.message['string'] || options.message || $.fn.bootstrapValidator.i18n.between.string;
            } else {
                size = parseFloat(value);
                message = options.message['numeric'] || options.message || $.fn.bootstrapValidator.i18n.between.numeric;
            }

            return {
                valid : size >= options.min && size <= options.max,
                message : $.fn.bootstrapValidator.helpers.format(message, options.min, options.max)
            }
        }
    };

}(window.jQuery));
