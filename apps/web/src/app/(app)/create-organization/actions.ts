import { z } from 'zod'

import { createOrganization } from '@/http/create-organization'

const createOrganizationSchema = z
  .object({
    name: z.string().min(4, { message: 'Name must be at least 4 characters' }),
    domain: z
      .string()
      .nullable()
      .refine(
        (value) => {
          if (value) {
            return /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/.test(
              value,
            )
          }
          return true
        },
        {
          message: 'Invalid domain format. Example: my-company.com',
        },
      ),
    shouldAttachUsersByDomain: z
      .union([z.literal('on'), z.literal('off'), z.boolean()])
      .transform((value) => value === 'on' || value === true)
      .default(false),
  })
  .refine(
    (data) => {
      if (data.shouldAttachUsersByDomain && !data.domain) {
        return false
      }
      return true
    },
    {
      message: 'Domain is required when attaching users by domain',
    },
  )

export async function createOrganizationAction(formData: FormData) {
  const result = createOrganizationSchema.safeParse(
    Object.fromEntries(formData),
  )

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors
    return { success: false, message: null, errors }
  }

  const { name, domain, shouldAttachUsersByDomain } = result.data

  try {
    await createOrganization({
      name,
      domain,
      shouldAttachUsersByDomain,
    })
  } catch (error) {
    return {
      success: false,
      message: 'Failed to create organization',
      errors: null,
    }
  }

  return {
    success: true,
    message: 'Organization created successfully',
    errors: null,
  }
}
