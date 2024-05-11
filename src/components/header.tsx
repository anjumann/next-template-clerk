import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
export default function Header() {
  return (
    <header className='py-4'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-6'>
          <li>
            <Link href='/'>Home</Link>
          </li>
        </ul>
        <div className="flex items-center justify-center">

          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
