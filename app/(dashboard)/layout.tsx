import { UserButton, UserProfile } from '@clerk/nextjs'

import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <main className="grid grid-cols-[repeat(8,_minmax(auto,_1fr))] grid-rows-[repeat(9,_minmax(auto,_1fr))] w-full h-screen bg-slate-900 text-white">
      <aside className="h-full text-center border-r p-4 col-span-1 row-span-full border-gray-500">Mood</aside>
      <header className="flex justify-end items-center py-4 px-8 col-span-7 row-span-1 border-b border-gray-500">
        <UserButton />
      </header>
      <section className="p-4 col-span-7 row-span-5">{children}</section>
    </main>
  )
}

export default DashboardLayout
