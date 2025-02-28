import { Header } from '@/components/header'

import { OrganizationForm } from './organization-form'

export default function CreateOrganization() {
  return (
    <div className="space-y-4">
      <Header />
      <div className="space-y-4">
        <OrganizationForm />
      </div>
    </div>
  )
}
