import Link from 'next/link';

export default function ResetPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D151E]">
      <div className="bg-[#25384d] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">Set New Password</h1>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
              New Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 bg-[#0D151E] border border-gray-600 rounded-md text-white"
            />
          </div>
          
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-1">
              Confirm New Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className="w-full px-3 py-2 bg-[#0D151E] border border-gray-600 rounded-md text-white"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Reset Password
          </button>
        </form>
        
        <div className="mt-4 text-sm text-center text-white">
          <Link href="/login" className="font-medium text-blue-400 hover:text-blue-300">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}