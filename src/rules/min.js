/**
 * Client side equivalent to Laravel "min" validator
 * The field under validation must have a minimum value.
 */
(function($) {

    $.fn.bootstrapValidator.i18n.min = $.extend($.fn.bootstrapValidator.i18n.min || {}, {
        'string' : 'Please enter more than %s characters',
        'numeric' : 'Please enter a value more than %s'
    });

    $.fn.bootstrapValidator.validators.min = {

        validate: function(validator, $field, options) {

            var value = $field.val(),
                size, message,
                html5 = (window.File && window.FileList && window.FileReader);

            if(value == '') {
                return true;
            }

            if($field.attr('type') == 'file') {

                // can't properly validate so let it through and let the server catch it
                if(!html5) { return true; }

                size = $field[0].files[0].size;
                message = options.message['file'] || options.message || $.fn.bootstrapValidator.i18n.min.file;

            } else if(isNaN(value)) {

                size = value.length;
                message = options.message['string'] || options.message || $.fn.bootstrapValidator.i18n.min.string;

            } else {

                size = parseFloat(value);
                message = options.message['numeric'] || options.message || $.fn.bootstrapValidator.i18n.min.numeric;

            }

            return {
                valid : size >= options.min,
                message : $.fn.bootstrapValidator.helpers.format(message, options.min)
            }
        }
    };

}(window.jQuery));
