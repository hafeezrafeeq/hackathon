import React, { useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Heart, Sparkles, Shield, TrendingUp } from "lucide-react";

interface AuthPageProps {
  onLogin: (email: string) => void;
}

export function AuthPage({ onLogin }: AuthPageProps) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail && loginPassword) {
      onLogin(loginEmail);
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupName && signupEmail && signupPassword) {
      onLogin(signupEmail);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="hidden lg:block">
          <div className="space-y-8">
            <div className=" overflow-hidden w-[90%]">
                {React.createElement('img', {
                  src: 'https://images.unsplash.com/photo-1668874896975-7f874c90600a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRofGVufDF8fHx8MTc2MDcwMzA2OHww&ixlib=rb-4.1.0&q=80&w=1080',
                  alt: 'Health tracking',
                  className: 'w-full h-[300px] object-cover rounded-2xl border-2 border-gray'
                })}
              </div>
          </div>
        </div>

        {/* Right Side - Auth Forms */}
        <div>
          <Card className="card-login p-8 bg-white/60 backdrop-blur-xl rounded-2xl shadow-2xl">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="text-center mb-6">
                    <h2 className="mb-2">Welcome Back</h2>
                    <p className="text-sm text-gray-600">
                      Sign in to access your health dashboard
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="you@example.com"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="bg-white/80 backdrop-blur-sm  border-1"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="bg-white/80 backdrop-blur-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-purple-600 hover:text-purple-700">
                      Forgot password?
                    </a>
                  </div>

                  {/* <Button
                    type="submit"
                    className="w-full  from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    Sign In
                  </Button> */}
                  <Button
                    type="submit"
                    className="relative px-6 py-1 mt-6 border w-full border-stone-400 text-black rounded-4xl overflow-hidden group">
                    <span className="absolute left-0 bottom-0 w-full h-0 rounded-t-4xl bg-black 
                              transition-all duration-500 ease-in-out group-hover:h-19"></span>
                    <span className="relative uppercase z-10 group-hover:text-white transition-colors duration-500">
                      Sign In
                    </span>
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-6">
                  <div className="text-center mb-6">
                    <h2 className="mb-2">Create Account</h2>
                    <p className="text-sm text-gray-600">
                      Start your health journey today
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name">Full Name</Label>
                      <Input
                        id="signup-name"
                        type="text"
                        placeholder="John Doe"
                        value={signupName}
                        onChange={(e) => setSignupName(e.target.value)}
                        className="bg-white/80 backdrop-blur-sm"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="you@example.com"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        className="bg-white/80 backdrop-blur-sm"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="••••••••"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        className="bg-white/80 backdrop-blur-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="text-sm">
                    <label className="flex items-start gap-2 cursor-pointer text-gray-600">
                      <input type="checkbox" className="rounded mt-0.5" required />
                      <span>
                        I agree to the{" "}
                        <a href="#" className="text-purple-600 hover:text-purple-700">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-purple-600 hover:text-purple-700">
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                
                  <Button
                    type="submit"
                    className="relative px-6 py-1 mt-6 border w-full border-stone-400 text-black rounded-4xl overflow-hidden group">
                    <span className="absolute left-0 bottom-0 w-full h-0 rounded-t-4xl bg-black 
                              transition-all duration-500 ease-in-out group-hover:h-19"></span>
                    <span className="relative uppercase z-10 group-hover:text-white transition-colors duration-500">
                       Create Account
                    </span>
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </Card>

          {/* Mobile Branding */}
          <div className="lg:hidden mt-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="p-2 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <h2 className="bg-gradient-to-r from-purple-600 via-blue-500 to-teal-500 bg-clip-text text-transparent">
                Health Companion
              </h2>
            </div>
            <p className="text-sm text-gray-600">
              AI-powered health tracking solution
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-white flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
