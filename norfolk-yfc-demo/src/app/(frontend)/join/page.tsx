import { PageHero } from "@/components/shared/page-hero";
import { SignupForm } from "@/components/signup/signup-form";

export const metadata = {
  title: "Join Norfolk YFC | Membership Signup",
  description:
    "Sign up your child for Norfolk Young Farmers Clubs. Complete the online application and pay securely with Stripe.",
};

export default function JoinPage() {
  return (
    <>
      <PageHero
        title="Join Norfolk YFC"
        subtitle="Membership Signup"
        description="Complete the form below to sign up your child for Norfolk YFC membership. The process takes just a few minutes."
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <SignupForm />
        </div>
      </section>
    </>
  );
}
