const proposalsName = require('./name')

exports.isCitizenOnProposal = (user, forum) =>
  forum.name === proposalsName && !forum.isOwner(user) && !forum.hasRole(user)
