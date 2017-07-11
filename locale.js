const { format } = require('date-fns');
const jaLocale = require('date-fns/locale/ja');
const buildFormattingTokensRegExp = require('date-fns/locale/_lib/build_formatting_tokens_reg_exp');

/**
 *   
 * ja:
    longDateFormat:
      LTS  : 'HH:mm:ss'               # mediumTime
      LT   : 'HH:mm'                  # shortTime
      L    : 'YYYY/MM/DD'             # shortDate
      LL   : 'YYYY/MM/DD'             # mediumDate
      ll   : 'MM/DD'
      LLL  : 'YYYY/MM/DD HH:mm'       # short
      LLLL : 'YYYY/MM/DD HH:mm dddd'
 */

function buildFormatLocale() {
    const formatters = Object.assign({}, jaLocale.format.formatters, {
        'LTS': date => format(date, 'HH:mm:ss', { locale: jaLocale }),
        'LT': date => format(date, 'HH:mm', { locale: jaLocale }),
        'L': date => format(date, 'YYYY/MM/DD', { locale: jaLocale }),
        'LL': date => format(date, 'YYYY/MM/DD', { locale: jaLocale }),
        'll': date => format(date, 'MM/DD', { locale: jaLocale }),
        'LLL': date => format(date, 'YYYY/MM/DD HH:mm', { locale: jaLocale }),
        'LLLL': date => format(date, 'YYYY/MM/DD HH:mm dddd', { locale: jaLocale }),
    });

    return {
        formatters,
        formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
    };
}

module.exports = {
    distanceInWords: jaLocale.buildDistanceInWordsLocale,
    format: buildFormatLocale()
}
