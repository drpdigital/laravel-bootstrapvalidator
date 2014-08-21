/**
 * Client side equivalent to Laravel "max" validator
 * The field under validation must be less than or equal to a maximum value.
 */
(function($) {

    $.fn.bootstrapValidator.i18n.max = $.extend($.fn.bootstrapValidator.i18n.max || {}, {
        'string' : 'Please enter less than %s characters',
        'numeric' : 'Please enter a value less than %s'
    });

    $.fn.bootstrapValidator.validators.max = {

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
                message = options.message['file'] || options.message || $.fn.bootstrapValidator.i18n.max.file;

            } else if(isNaN(value)) {

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
