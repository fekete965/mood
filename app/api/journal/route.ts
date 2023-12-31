import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

import { getUserByClerkId } from '@/utils/auth'
import prisma from '@/utils/db'

export const POST = async () => {
  const user = await getUserByClerkId()

  const entry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: 'Write about your day',
    },
  })

  revalidatePath('/journal')

  return NextResponse.json({ body: entry })
}
