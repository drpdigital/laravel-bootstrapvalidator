/**
 * Client side equivalent to Laravel "between" validator
 * The field under validation must have a size between the given min and max.
 */
(function($) {

    $.fn.bootstrapValidator.i18n.between = $.extend($.fn.bootstrapValidator.i18n.between || {}, {
        'string' : 'Must be between %s and %s characters',
        'numeric' : 'Please enter a value between %s and %s',
        'file' : 'File size must be between than %s and $skb'
    });

    $.fn.bootstrapValidator.validators.between = {

        validate: function(validator, $field, options) {

            var value = $field.val(),
                size, message,
                html5 = (window.File && window.FileList && window.FileReader);

            if(value == '') { return true; }

            if($field.attr('type') == 'file') {

                // can't properly validate so let it through and let the server catch it
                if(!html5) { return true; }

                size = $field[0].files[0].size;
                message = options.message['file'] || options.message || $.fn.bootstrapValidator.i18n.between.file;

            } else if(isNaN(value)) {

                size = value.length;
                message = options.message['string'] || options.message || $.fn.bootstrapValidator.i18n.between.string;

            } else {

                size = parseFloat(value) * 1024;
                message = options.message['numeric'] || options.message || $.fn.bootstrapValidator.i18n.between.numeric;

            }

            return {
                valid : size >= options.min && size <= options.max,
                message : $.fn.bootstrapValidator.helpers.format(message, options.min, options.max)
            }
        }
    };

}(window.jQuery));
