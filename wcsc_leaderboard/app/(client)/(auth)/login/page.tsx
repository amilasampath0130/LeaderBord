'use client';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('');
  const router = useRouter();
  const { status } = useSession()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'


  useEffect(() => {
    if (status === 'authenticated') {
      router.push(callbackUrl)
    }
  }, [status, callbackUrl, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    
    const res  = await signIn("credentials", {
      redirect:false,
      email,
      password
    })
    if (res?.ok) {
      router.push("/dashboard")
      toast.success("loging successful")
    }else if(res?.status ===401){
      setError("Invalid Credential")
      setPending(false)
    }else{
      setError("Somtething went wrong")
    }

    setError('');

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D151E]">
      <div className="bg-[#25384d] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">Login</h1>
        
        {error && (
          <div className="mb-4 p-2 bg-red-500 text-white rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              disabled={pending}
              placeholder='example@email.com'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 bg-[#0D151E] border border-gray-600 rounded-md text-white"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              disabled={pending}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 bg-[#0D151E] border border-gray-600 rounded-md text-white"
            />
          </div>
          <button
            type="submit"
            disabled={pending}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        
        <div className="mt-4 text-sm text-center text-white">
          Don't have an account?{' '}
          <Link href="/register" className="text-blue-400 hover:text-blue-300">
            Register
          </Link>
        </div>
        
        <div className="mt-2 text-sm text-center text-white">
          <Link href="/auth/forgot-password" className="text-blue-400 hover:text-blue-300">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
}