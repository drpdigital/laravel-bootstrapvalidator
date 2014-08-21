/*!
 * Laravel BootstrapValidator ()
 * 
 *
 * @version     v0.0.1, built on 2014-08-21 12:06:31 PM
 * @author      
 * @copyright   (c) 2014 
 * @license     
 */
(function($) {

    $.fn.bootstrapValidator.i18n.accepted = $.extend($.fn.bootstrapValidator.i18n.accepted || {}, {
        'default' : 'You must accept'
    });

    $.fn.bootstrapValidator.validators.accepted = {

        validate: function(validator, $field, options) {

            var value = $field.val();

            if(value == '') {
                return true;
            }

            value = value.toLowerCase();

            if(value === 'yes' || value === 'on' || value == '1') {
                return true;
            }

            var message = options.message['accepted'] || options.message || $.fn.bootstrapValidator.i18n.accepted['default'];

            return {
                valid : false,
                message : message
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

            if(value == '') {
                return true;
            }

            var date = moment(value, 'DD-MM-YYYY HH:mm:ss');

            if (!date.isValid()) {
                return false;
            }

            var after = moment(options.after, 'DD-MM-YYYY HH:mm:ss');
            var message = options.message['after'] || options.message || $.fn.bootstrapValidator.i18n.after['default'];

            return {
                valid : date.isAfter(after),
                message : $.fn.bootstrapValidator.helpers.format(message, options.after)
            }
        }
    };

}(window.jQuery));
;(function($) {

    $.fn.bootstrapValidator.i18n.alpha = $.extend($.fn.bootstrapValidator.i18n.alpha || {}, {
        'default' : 'Must only contain letters'
    });

    $.fn.bootstrapValidator.validators.alpha = {

        validate: function(validator, $field, options) {

            var value = $field.val();

            if(value == '') {
                return true;
            }

            var pattern = new RegExp(/^[a-z]+$/i);

            if(pattern.test(value)) {
                return true;
            }

            var message = options.message['alpha'] || options.message || $.fn.bootstrapValidator.i18n.alpha['default'];

            return {
                valid : false,
                message : message
            }
        }
    };

}(window.jQuery));
;(function($) {

    $.fn.bootstrapValidator.i18n.alphaDash = $.extend($.fn.bootstrapValidator.i18n.alphaDash || {}, {
        'default' : 'Must only contain letters, numbers and dashes'
    });

    $.fn.bootstrapValidator.validators.alphaDash = {

        validate: function(validator, $field, options) {

            var value = $field.val();

            if(value == '') {
                return true;
            }

            var pattern = new RegExp(/^[a-z0-9\-_]+$/i);

            if(pattern.test(value)) {
                return true;
            }

            var message = options.message['alphaDash'] || options.message || $.fn.bootstrapValidator.i18n.alphaDash['default'];

            return {
                valid : false,
                message : message
            }
        }
    };

}(window.jQuery));
;(function($) {

    $.fn.bootstrapValidator.i18n.alphaNum = $.extend($.fn.bootstrapValidator.i18n.alphaNum || {}, {
        'default' : 'Must only contain letters and numbers'
    });

    $.fn.bootstrapValidator.validators.alphaNum = {

        validate: function(validator, $field, options) {

            var value = $field.val();

            if(value == '') {
                return true;
            }

            var pattern = new RegExp(/^[a-z0-9]+$/i);

            if(pattern.test(value)) {
                return true;
            }

            var message = options.message['alphaNum'] || options.message || $.fn.bootstrapValidator.i18n.alphaNum['default'];

            return {
                valid : false,
                message : message
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

            if(value == '') {
                return true;
            }

            var date = moment(value, 'DD-MM-YYYY HH:mm:ss');

            if (!date.isValid()) {
                return false;
            }

            var before = moment(options.before, 'DD-MM-YYYY HH:mm:ss');
            var message = options.message['before'] || options.message || $.fn.bootstrapValidator.i18n.before['default'];

            return {
                valid : date.isBefore(before),
                message : $.fn.bootstrapValidator.helpers.format(message, options.before)
            }
        }
    };

}(window.jQuery));
;(function($) {

    $.fn.bootstrapValidator.i18n.between = $.extend($.fn.bootstrapValidator.i18n.between || {}, {
        'string' : 'Must be between %s and %s characters',
        'numeric' : 'Please enter a value between %s and %s'
    });

    $.fn.bootstrapValidator.validators.between = {

        validate: function(validator, $field, options) {

            var value = $field.val(),
                size, message;

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
;(function($) {

    $.fn.bootstrapValidator.i18n.digitsBetween = $.extend($.fn.bootstrapValidator.i18n.digitsBetween || {}, {
        'default' : 'Must contain between %s and %s digits'
    });

    $.fn.bootstrapValidator.validators.digitsBetween = {

        validate: function(validator, $field, options) {

            var value = $field.val();

            if(value == '') {
                return true;
            }

            var pattern = new RegExp('^[0-9]{' + options.min + ',' + options.max + '}$');

            if(pattern.test(value)) {
                return true;
            }

            var message = options.message['digitsBetween'] || options.message || $.fn.bootstrapValidator.i18n.digitsBetween['default'];

            return {
                valid : false,
                message : $.fn.bootstrapValidator.helpers.format(message, options.min, options.max)
            }
        }
    };

}(window.jQuery));
;(function($) {

    $.fn.bootstrapValidator.i18n.isIn = $.extend($.fn.bootstrapValidator.i18n.isIn || {}, {
        'default' : 'The selected value is invalid'
    });

    $.fn.bootstrapValidator.validators.isIn = {

        validate: function(validator, $field, options) {

            var value = $field.val();

            var message = options.message['isIn'] || options.message || $.fn.bootstrapValidator.i18n.isIn['default'];

            return {
                valid : $.inArray(value, options.values) >= 0,
                message : message
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
;(function($) {

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
;(function($) {

    $.fn.bootstrapValidator.i18n.notIn = $.extend($.fn.bootstrapValidator.i18n.notIn || {}, {
        'default' : 'The selected value is invalid'
    });

    $.fn.bootstrapValidator.validators.notIn = {

        validate: function(validator, $field, options) {

            var value = $field.val();

            var message = options.message['notIn'] || options.message || $.fn.bootstrapValidator.i18n.notIn['default'];

            return {
                valid : $.inArray(value, options.values) == -1,
                message : message
            }
        }
    };

}(window.jQuery));
;(function($) {

    $.fn.bootstrapValidator.i18n.numDigits = $.extend($.fn.bootstrapValidator.i18n.numDigits || {}, {
        'default' : 'Must contain %s digits'
    });

    $.fn.bootstrapValidator.validators.numDigits = {

        validate: function(validator, $field, options) {

            var value = $field.val();

            if(value == '') {
                return true;
            }

            var pattern = new RegExp('^[0-9]{' + options.digits + '}$');

            if(pattern.test(value)) {
                return true;
            }

            var message = options.message['numDigits'] || options.message || $.fn.bootstrapValidator.i18n.numDigits['default'];

            return {
                valid : false,
                message : $.fn.bootstrapValidator.helpers.format(message, options.digits)
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

            var message = options.message['requiredWithAll'] || options.message || $.fn.bootstrapValidator.i18n.requiredWithAll['default'];

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

            if( compareWith.is('[type=checkbox]') ) {

                if( !compareWith.is(':checked') ) { return true; }

            }

            if (compareWith.val() !== options.value) {
                return true;
            }

            if (value !== '') {
                return true;
            }

            var message = options.message['requiredIf'] || options.message || $.fn.bootstrapValidator.i18n.requiredIf['default'];

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
                requiredField = '';

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

            var message = options.message['requiredWith'] || options.message || $.fn.bootstrapValidator.i18n.requiredWith['default'];

            return {
                valid : false,
                message : message
            }
        }
    };

}(window.jQuery));
;(function($) {

    $.fn.bootstrapValidator.i18n.requiredWithout = $.extend($.fn.bootstrapValidator.i18n.requiredWithout || {}, {
        'default' : 'This is required'
    });

    $.fn.bootstrapValidator.validators.requiredWithout = {

        validate: function(validator, $field, options) {

            var value = $field.val(),
                required = false,
                requiredField = '';

            $.each(options.fields, function(ix, field) {

                var $field = validator.getFieldElements(field);

                if (!$field || $field.val() == '') {
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

            var message = options.message['requiredWithout'] || options.message || $.fn.bootstrapValidator.i18n.requiredWithout['default'];

            return {
                valid : false,
                message : $.fn.bootstrapValidator.helpers.format(message, requiredField)
            }
        }
    };

}(window.jQuery));
;(function($) {

    $.fn.bootstrapValidator.i18n.requiredWithoutAll = $.extend($.fn.bootstrapValidator.i18n.requiredWithoutAll || {}, {
        'default' : 'This is required'
    });

    $.fn.bootstrapValidator.validators.requiredWithoutAll = {

        validate: function(validator, $field, options) {

            var value = $field.val(),
                required = true,
                valid = false,
                status = null;

            // check to see if any of the other fields has content
            $.each(options.fields, function(ix, field) {

                var $field = validator.getFieldElements(field);

                if ($field && $field.val() !== '') {
                    required = false;
                    return true;
                }

            });

            if(!required) {
                // one of the other fields has content, so we are ok
                valid = true;
            } else {
                if(value !== '') {
                    // the other fields can pass because this one has content
                    valid = true;
                } else {
                    // everything is a fail because they are all empty
                    valid = false;
                }
            }

            // update the status of all the fields

            validator.updateStatus($field, valid ? 'VALID' : 'INVALID' , null);
            $.each(options.fields, function(ix, field) {
                validator.updateStatus(field, valid ? 'VALID' : 'INVALID' , null);
            });

            var message = options.message['requiredWithoutAll'] || options.message || $.fn.bootstrapValidator.i18n.requiredWithoutAll['default'];

            return {
                valid : valid,
                message : $.fn.bootstrapValidator.helpers.format(message, options.fields.join(', '))
            };
        }
    };

}(window.jQuery));
;(function($) {

    $.fn.bootstrapValidator.i18n.size = $.extend($.fn.bootstrapValidator.i18n.size || {}, {
        'string' : 'Please enter exactly %s characters',
        'numeric' : 'Must be %s'
    });

    $.fn.bootstrapValidator.validators.size = {

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
