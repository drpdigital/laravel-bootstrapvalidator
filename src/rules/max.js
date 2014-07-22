(function($) {

    $.fn.bootstrapValidator.i18n.max = $.extend($.fn.bootstrapValidator.i18n.max || {}, {
        'string' : 'Please enter less than %s characters',
        'numeric' : 'Please enter a value less than %s'
    });

    $.fn.bootstrapValidator.validators.max = {

        validate: function(validator, $field, options) {

            var value = $field.val(),
                size, message;

            if(isNaN(value)) {
                size = value.length;
                message = options.message['string'] || options.message || $.fn.bootstrapValidator.i18n.max.string;
            } else {
                size = parseFloat(value);
                message = options.message['numeric'] || options.message || $.fn.bootstrapValidator.i18n.max.numeric;
            }

            return {
                valid : size <= options.max,
                message : $.fn.bootstrapValidator.helpers.format(message, options.max)
            }
        }
    };

}(window.jQuery));
