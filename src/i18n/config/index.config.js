const fs = require('fs');
const chalk = require('chalk');

const languages = ['en', 'de', 'id', 'ja', 'ru', 'zh-tw'];

module.exports = {
  input: [
    './src/app/components/**/*.{js,jsx}',
    './src/app/containers/**/*.{js,jsx}',
    // Use ! to filter out files or directories
    './src/!app/store/*.{js,jsx}',
    './src/!app/**/*.test.{js,jsx}',
    './src/!i18n/**',
    '!**/node_modules/**',
  ],
  output: './src/i18n/locales',
  options: {
    debug: true,
    func: {
      // @ dev important to include 't' which is a function from useTranslation
      list: ['t', 'i18next.t', 'i18n.t'],
      extensions: ['.js', '.jsx'],
    },
    lngs: languages,
    ns: ['translations'],
    defaultLng: 'en',
    defaultNs: 'translations',
    defaultValue: '__STRING_NOT_TRANSLATED__',
    resource: {
      loadPath: '{{lng}}/{{ns}}.json',
      savePath: '{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    nsSeparator: false, // namespace separator
    keySeparator: false, // key separator
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  },
  transform: function customTransform(file, enc, done) {
    const parser = this.parser;

    const content = fs.readFileSync(file.path, enc);
    let count = 0;

    parser.parseFuncFromString(content, { list: ['i18next._', 'i18next.__'] }, (key, options) => {
      parser.set(
        key,
        Object.assign({}, options, {
          nsSeparator: false,
          keySeparator: false,
        }),
      );
      ++count;
    });

    if (count > 0) {
      console.log(
        `i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(
          JSON.stringify(file.relative),
        )}`,
      );
    }

    done();
  },
};
