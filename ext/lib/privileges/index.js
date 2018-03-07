const topicPrivileges = require('lib/privileges/topic')
const { isCitizenOnProposal, isAdminOnProposal } = require('../proposals')

// Not allow to edit or delete a Proposal by its author
// when the state is "rechazado" or "factible" (not "pendiente")
// Allow admins to edit or delete always
;[
  'canEdit',
  'canDelete'
].forEach((privilege) => {
  const original = topicPrivileges[privilege]

  topicPrivileges[privilege] = (forum, user, topic) => {
    if (isCitizenOnProposal(user, forum)) {
      if (topic.attrs && topic.attrs.state !== 'pendiente') return false
    }

    if (isAdminOnProposal(user, forum)) return true

    return original(forum, user, topic)
  }
})

// Not allow to create new comments by citizens
// when the Proposal state is "rejected"
;(() => {
  const original = topicPrivileges.canVote

  topicPrivileges.canVote = (forum, user, topic) => {
    if (isCitizenOnProposal(user, forum)) {
      if (topic.attrs && topic.attrs.state === 'rechazado') return false
    }

    return original(forum, user, topic)
  }
})()
