'use strict';

module.exports.formatMessage = (message) => {
  const text = message
    .map((value) => `<${value.url}|${value.title}>`)
    .join('\n')

  return `*Hey team! There are open security issues and pull requests for these repositories: *\n${text}`;
}
