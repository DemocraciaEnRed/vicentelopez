const proposalsName = require('./name')

exports.isCitizenOnProposal = (user, forum) =>
  forum.name === proposalsName && !forum.isOwner(user) && !forum.hasRole(user)

exports.isAdminOnProposal = (user, forum) => {
  return forum.name === proposalsName && (forum.hasRole(user) || forum.isOwner(user))
}
