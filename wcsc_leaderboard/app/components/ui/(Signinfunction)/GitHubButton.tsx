import { FaGithub } from 'react-icons/fa'
import { signIn } from 'next-auth/react'

export function GitHubButton() {
  return (
    <button
      onClick={() => signIn('github')}
      className="flex w-full items-center justify-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
    >
      <FaGithub className="text-xl" />
      Sign in with GitHub
    </button>
  )
}