const topicPrivileges = require('lib/privileges/topic')
const { isCitizenOnProposal, isAdminOnProposal } = require('../proposals')

// Not allow to edit or delete a Proposal by its author
// when the state is "rejected" or "feasible" (not "pending")
// Allow admins to edit or delete always
;[
  'canEdit',
  'canDelete'
].forEach((privilege) => {
  const original = topicPrivileges[privilege]

  topicPrivileges[privilege] = (forum, user, topic) => {
    if (isCitizenOnProposal(user, forum)) {
      if (topic.attrs && topic.attrs.state !== 'pending') return false
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
      if (topic.attrs && topic.attrs.state === 'rejected') return false
    }

    return original(forum, user, topic)
  }
})()
