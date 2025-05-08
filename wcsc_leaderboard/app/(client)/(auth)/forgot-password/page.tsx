import Link from 'next/link';

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D151E]">
      <div className="bg-[#25384d] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">Reset Password</h1>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 bg-[#0D151E] border border-gray-600 rounded-md text-white"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send Reset Link
          </button>
        </form>
        
        <div className="mt-4 text-sm text-center text-white">
          Remember your password?{' '}
          <Link href="/login" className="font-medium text-blue-400 hover:text-blue-300">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}