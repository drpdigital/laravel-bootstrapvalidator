(function($) {

    $.fn.bootstrapValidator.i18n.requiredWithAll = $.extend($.fn.bootstrapValidator.i18n.requiredWithAll || {}, {
        'default' : 'This is required'
    });

    $.fn.bootstrapValidator.validators.requiredWithAll = {

        validate: function(validator, $field, options) {

            var value = $field.val(),
                required = true;

            $.each(options.fields, function(ix, field) {

                var $field = validator.getFieldElements(field);

                if (!$field || $field.val() == '') {
                    required = false;
                    return false;
                }

            });

            if(!required) {
                return true;
            }

            if(value !== '') {
                return true;
            }

            var message = options.message['requiredWithAll'] || options.message || $.fn.bootstrapValidator.i18n.requiredWithAll.default;

            return {
                valid : false,
                message : message
            }
        }
    };

}(window.jQuery));
