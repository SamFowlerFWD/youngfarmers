import { LoginForm } from "@/components/auth/login-form"

export const metadata = {
  title: "Log In | Norfolk YFC",
  description: "Log in to your Norfolk YFC account.",
}

export default function LoginPage() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-blue-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-500">
              Log in to manage your membership
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </section>
  )
}
