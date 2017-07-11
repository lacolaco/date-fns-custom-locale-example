const { format } = require('date-fns');

const date = new Date('2006-01-02T15:04:05.999+09:00');

function fmt(fotmatString, locale) {
    console.log(`${fotmatString} => ${format(date, fotmatString, { locale })}`);
}

function run(locale) {
    console.log();
    locale = locale || null;
    fmt(null, locale)
    fmt('YY YYYY', locale);
    fmt('M MM MMM MMMM', locale);
    fmt('D DD', locale);
    fmt('d dd ddd dddd dddd', locale);
    fmt('HH H hh h', locale);
    fmt('A a', locale);
    fmt('mm m', locale);
    fmt('ss s', locale);
    fmt('SSS', locale);
    fmt('Z', locale);
    fmt('YYYY-MM-DDTHH:mm:ss.SSSZ', locale);
    fmt('LT', locale);
    fmt('LTS', locale);
    fmt('L LL', locale);
    fmt('ll', locale);
    fmt('LLL LLLL', locale);
    fmt('LL LTS ZZ', locale);
}

// default locale (en)

run();

// ja locale

const jaLocale = require('date-fns/locale/ja');

run(jaLocale);

// custom locale

const customLocale = require('./locale');

run(customLocale);