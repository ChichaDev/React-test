module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat:     A new feature'
    },
    {
      value: 'fix',
      name: 'fix:      A bug fix'
    },
    {
      value: 'docs',
      name: 'docs:     Documentation only changes'
    },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature'
    },
    {
      value: 'perf',
      name: 'perf:     A code change that improves performance'
    }
  ],

  scopes: [{ name: 'react-test' }],

  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nDenote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?'
  },

  allowTicketNumber: true,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'feature-',
  ticketNumberRegExp: '\\d{1,5}',
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix', 'perf'],
  breakingPrefix: 'BREAKING CHANGES',
  skipQuestions: ['body', 'footer'],
  subjectLimit: 60
};
