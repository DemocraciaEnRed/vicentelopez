const topicPrivileges = require('lib/privileges/topic')
const { isCitizenOnProposal } = require('../proposals')

;[
  'canEdit',
  'canDelete'
].forEach((privilege) => {
  const original = topicPrivileges[privilege]

  topicPrivileges[privilege] = (forum, user, topic) => {
    if (isCitizenOnProposal(user, forum)) {
      if (topic.attrs.state !== 'pending') return false
    }

    return original(forum, user, topic)
  }
})
