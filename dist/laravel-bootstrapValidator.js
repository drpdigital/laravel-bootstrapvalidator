/*!
 * Laravel BootstrapValidator ()
 * 
 *
 * @version     v0.0.1, built on 2014-07-22 1:51:51 PM
 * @author      
 * @copyright   (c) 2014 
 * @license     
 */
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
;(function($) {

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
;(function($) {

    $.fn.bootstrapValidator.i18n.before = $.extend($.fn.bootstrapValidator.i18n.before || {}, {
        'default' : 'Date must be before %s'
    });

    $.fn.bootstrapValidator.validators.before = {

        validate: function(validator, $field, options) {

            var value = $field.val();

            var date = new moment(value, 'DD-MM-YYYY', true);

            if (!date.isValid()) {
                return false;
            }

            var before = new moment(options.before, 'DD-MM-YYYY', true);
            var message = options.message['before'] || options.message || $.fn.bootstrapValidator.i18n.before.default;

            return {
                valid : date.isBefore(before),
                message : $.fn.bootstrapValidator.helpers.format(message, options.before)
            }
        }
    };

}(window.jQuery));
;(function($) {

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
;(function($) {

    $.fn.bootstrapValidator.i18n.min = $.extend($.fn.bootstrapValidator.i18n.min || {}, {
        'string' : 'Please enter more than %s characters',
        'numeric' : 'Please enter a value more than %s'
    });

    $.fn.bootstrapValidator.validators.min = {

        validate: function(validator, $field, options) {

            var value = $field.val(),
                size, message;

            if(isNaN(value)) {
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
;(function($) {

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
;(function($) {

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
;(function($) {

    $.fn.bootstrapValidator.i18n.requiredIf = $.extend($.fn.bootstrapValidator.i18n.requiredIf || {}, {
        'default' : 'This is required'
    });

    $.fn.bootstrapValidator.validators.requiredIf = {

        validate: function(validator, $field, options) {

            var value = $field.val();
            var compareWith = validator.getFieldElements(options.field);

            if (compareWith === null) {
                return true;
            }

            if (compareWith.val() !== options.value) {
                return true;
            }

            if (value !== '') {
                return true;
            }

            var message = options.message['requiredIf'] || options.message || $.fn.bootstrapValidator.i18n.requiredIf.default;

            return {
                valid : false,
                message : message
            }
        }
    };

}(window.jQuery));
;(function($) {

    $.fn.bootstrapValidator.i18n.requiredWith = $.extend($.fn.bootstrapValidator.i18n.requiredWith || {}, {
        'default' : 'This is required'
    });

    $.fn.bootstrapValidator.validators.requiredWith = {

        validate: function(validator, $field, options) {

            var value = $field.val(),
                required = false,
                requiredField;

            $.each(options.fields, function(ix, field) {

                var $field = validator.getFieldElements(field);

                if ($field && $field.val() !== '') {
                    required = true;
                    requiredField = field;
                    return false;
                }

            });

            if(!required) {
                return true;
            }

            if(value !== '') {
                return true;
            }

            var message = options.message['requiredWith'] || options.message || $.fn.bootstrapValidator.i18n.requiredWith.default;

            return {
                valid : false,
                message : message
            }
        }
    };

}(window.jQuery));
