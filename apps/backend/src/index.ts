import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'ADMIN' })

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteSomeoneElse = ability.can('delete', 'User')
const userCannotDeleteSomeoneElse = ability.cannot('delete', 'User')

console.log(userCanInviteSomeoneElse)
console.log(userCanDeleteSomeoneElse)
console.log(userCannotDeleteSomeoneElse)
