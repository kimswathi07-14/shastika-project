import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Sprout, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export default function Auth() {
  const nav = useNavigate();
  const location = useLocation();
  const { session, loading } = useAuth();
  const [tab, setTab] = useState<"signin" | "signup">("signin");
  const [busy, setBusy] = useState(false);
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPwd, setSigninPwd] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPwd, setSignupPwd] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [fullName, setFullName] = useState("");

  const from = (location.state as { from?: string })?.from || "/dashboards/executive";

  if (!loading && session) return <Navigate to={from} replace />;

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: signinEmail,
      password: signinPwd,
    });
    setBusy(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Welcome back");
    nav(from, { replace: true });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const { data, error } = await supabase.auth.signUp({
      email: signupEmail,
      password: signupPwd,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
        data: { company_name: companyName, full_name: fullName },
      },
    });
    setBusy(false);
    if (error) {
      toast.error(error.message);
      return;
    }

    if (data.session) {
      toast.success("Account created — welcome to AgriExportOS");
      nav(from, { replace: true });
      return;
    }

    setSigninEmail(signupEmail);
    setSigninPwd("");
    setSignupPwd("");
    setTab("signin");
    toast.success("Account created. Verify your email, then sign in to open your dashboard.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
            <Sprout className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <div className="text-xl font-semibold">AgriExportOS</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Agriculture Export ERP</div>
          </div>
        </div>

        <div className="erp-card p-6">
          <Tabs value={tab} onValueChange={(value) => setTab(value as "signin" | "signup")}>
            <TabsList className="grid grid-cols-2 w-full mb-4">
              <TabsTrigger value="signin">Sign in</TabsTrigger>
              <TabsTrigger value="signup">Create account</TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
              <form onSubmit={handleSignin} className="space-y-3">
                <div className="space-y-1.5">
                  <Label htmlFor="si-email">Email</Label>
                  <Input id="si-email" type="email" required value={signinEmail} onChange={(e) => setSigninEmail(e.target.value)} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="si-pwd">Password</Label>
                  <Input id="si-pwd" type="password" required value={signinPwd} onChange={(e) => setSigninPwd(e.target.value)} />
                </div>
                <Button type="submit" className="w-full" disabled={busy}>
                  {busy && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                  Sign in
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-3">
                <div className="space-y-1.5">
                  <Label htmlFor="su-name">Your name</Label>
                  <Input id="su-name" required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Jane Doe" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="su-company">Company name</Label>
                  <Input id="su-company" required value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Acme Agri Exports" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="su-email">Email</Label>
                  <Input id="su-email" type="email" required value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="su-pwd">Password</Label>
                  <Input id="su-pwd" type="password" required minLength={8} value={signupPwd} onChange={(e) => setSignupPwd(e.target.value)} />
                  <p className="text-xs text-muted-foreground">Min 8 characters. You will be the company admin.</p>
                </div>
                <Button type="submit" className="w-full" disabled={busy}>
                  {busy && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                  Create account
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          Multi-tenant SaaS · Each account gets its own isolated workspace
        </p>
      </div>
    </div>
  );
}
