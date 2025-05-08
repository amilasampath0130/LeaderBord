// app/developer/layout.tsx
export default function DeveloperLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="h-screen flex flex-col">
        <h1 className="text-2xl font-bold p-4 border-b">Developer Mode</h1>
        <div className="flex flex-1 overflow-hidden">
          {children}
        </div>
      </div>
    )
  }