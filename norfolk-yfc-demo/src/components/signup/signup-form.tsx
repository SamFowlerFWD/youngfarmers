"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form"
import {
  signupSchema,
  step1Schema,
  step2Schema,
  step3Schema,
  MEMBERSHIP_PRICES,
  type SignupFormData,
} from "@/lib/signup-schema"
import {
  ArrowRight,
  ArrowLeft,
  Check,
  User,
  Users,
  MapPin,
  CreditCard,
  Loader2,
  AlertCircle,
} from "lucide-react"

interface Club {
  id: string
  name: string
  type: string
  location: string
  meetingDay: string
  meetingTime: string
  venue: string
}

const STEPS = [
  { label: "Parent / Guardian", icon: User },
  { label: "Member Details", icon: Users },
  { label: "Club Selection", icon: MapPin },
  { label: "Review & Pay", icon: CreditCard },
]

export function SignupForm() {
  const [step, setStep] = useState(0)
  const [clubs, setClubs] = useState<Club[]>([])
  const [clubsLoaded, setClubsLoaded] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      parentName: "",
      parentEmail: "",
      parentPhone: "",
      parentRelationship: undefined,
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: undefined,
      memberEmail: "",
      memberPhone: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      county: "Norfolk",
      postcode: "",
      clubId: "",
      membershipType: undefined,
      emergencyContactName: "",
      emergencyContactPhone: "",
      medicalNotes: "",
      dietaryRequirements: "",
    },
    mode: "onBlur",
  })

  const loadClubs = async () => {
    if (clubsLoaded) return
    try {
      const res = await fetch("/api/clubs?limit=100&sort=name")
      const data = await res.json()
      setClubs(data.docs || [])
      setClubsLoaded(true)
    } catch {
      setError("Failed to load clubs. Please try again.")
    }
  }

  const validateStep = async (currentStep: number): Promise<boolean> => {
    const values = form.getValues()
    try {
      if (currentStep === 0) {
        step1Schema.parse({
          parentName: values.parentName,
          parentEmail: values.parentEmail,
          parentPhone: values.parentPhone,
          parentRelationship: values.parentRelationship,
          password: values.password,
          confirmPassword: values.confirmPassword,
        })
      } else if (currentStep === 1) {
        step2Schema.parse({
          firstName: values.firstName,
          lastName: values.lastName,
          dateOfBirth: values.dateOfBirth,
          gender: values.gender,
          addressLine1: values.addressLine1,
          city: values.city,
          postcode: values.postcode,
        })
      } else if (currentStep === 2) {
        step3Schema.parse({
          clubId: values.clubId,
          membershipType: values.membershipType,
        })
      }
      return true
    } catch (err: any) {
      // Trigger form validation to show errors
      if (currentStep === 0) {
        await form.trigger(["parentName", "parentEmail", "parentPhone", "parentRelationship", "password", "confirmPassword"])
      } else if (currentStep === 1) {
        await form.trigger(["firstName", "lastName", "dateOfBirth", "gender", "addressLine1", "city", "postcode"])
      } else if (currentStep === 2) {
        await form.trigger(["clubId", "membershipType"])
      }
      return false
    }
  }

  const nextStep = async () => {
    const valid = await validateStep(step)
    if (!valid) return
    if (step === 1) {
      await loadClubs()
    }
    setStep((s) => Math.min(s + 1, 3))
  }

  const prevStep = () => setStep((s) => Math.max(s - 1, 0))

  const onSubmit = async (data: SignupFormData) => {
    setSubmitting(true)
    setError(null)

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok) {
        setError(result.error || "Something went wrong. Please try again.")
        setSubmitting(false)
        return
      }

      // Redirect to Stripe checkout or success page (demo mode)
      if (result.checkoutUrl) {
        window.location.href = result.checkoutUrl
      } else if (result.redirectUrl) {
        window.location.href = result.redirectUrl
      } else {
        setError("Payment setup failed. Please try again.")
        setSubmitting(false)
      }
    } catch {
      setError("Network error. Please check your connection and try again.")
      setSubmitting(false)
    }
  }

  const selectedClub = clubs.find((c) => c.id === form.watch("clubId"))
  const membershipType = form.watch("membershipType")
  const pricing = membershipType ? MEMBERSHIP_PRICES[membershipType] : null

  return (
    <div className="max-w-3xl mx-auto">
      {/* Step indicator */}
      <div className="flex items-center justify-between mb-8">
        {STEPS.map((s, i) => {
          const Icon = s.icon
          const isActive = i === step
          const isComplete = i < step
          return (
            <div key={s.label} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    isComplete
                      ? "bg-primary text-white"
                      : isActive
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {isComplete ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <Icon className="h-5 w-5" />
                  )}
                </div>
                <span
                  className={`text-xs mt-1 hidden sm:block ${
                    isActive ? "text-primary font-semibold" : "text-gray-500"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={`h-0.5 flex-1 mx-2 ${
                    i < step ? "bg-primary" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          )
        })}
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card>
            <CardContent className="pt-6">
              {/* Step 1: Parent/Guardian */}
              {step === 0 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                      Parent / Guardian Details
                    </h2>
                    <p className="text-sm text-gray-500">
                      As the parent or guardian, you'll manage your child's
                      membership and receive all communications.
                    </p>
                  </div>

                  <FormField
                    control={form.control}
                    name="parentName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Jane Smith" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="parentEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="jane@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="parentPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="07700 900000"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="parentRelationship"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Relationship to Member *</FormLabel>
                        <FormControl>
                          <select
                            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            {...field}
                            value={field.value || ""}
                          >
                            <option value="">Select relationship...</option>
                            <option value="mother">Mother</option>
                            <option value="father">Father</option>
                            <option value="guardian">Guardian</option>
                            <option value="other">Other</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Create Your Account
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      You'll use these credentials to log in and manage the
                      membership.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password *</FormLabel>
                            <FormControl>
                              <Input
                                type="password"
                                placeholder="Min 8 characters"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirm Password *</FormLabel>
                            <FormControl>
                              <Input
                                type="password"
                                placeholder="Repeat password"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Member Details */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                      Member Details
                    </h2>
                    <p className="text-sm text-gray-500">
                      Details of the young person who will be joining Norfolk
                      YFC.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Oliver" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Smith" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date of Birth *</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormDescription>
                            Must be aged 10-28 to join
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gender *</FormLabel>
                          <FormControl>
                            <select
                              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                              {...field}
                              value={field.value || ""}
                            >
                              <option value="">Select...</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                              <option value="prefer-not-to-say">
                                Prefer not to say
                              </option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Address
                    </h3>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="addressLine1"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address Line 1 *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. 12 Mill Lane"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="addressLine2"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address Line 2</FormLabel>
                            <FormControl>
                              <Input placeholder="Optional" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <div className="grid sm:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Town / City *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="e.g. Norwich"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="county"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>County</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="postcode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Postcode *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="e.g. NR1 1AB"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Club Selection */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                      Choose a Club
                    </h2>
                    <p className="text-sm text-gray-500">
                      Select the club or group your child would like to join.
                    </p>
                  </div>

                  <FormField
                    control={form.control}
                    name="membershipType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Membership Type *</FormLabel>
                        <div className="grid sm:grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => field.onChange("senior")}
                            className={`p-4 rounded-lg border-2 text-left transition-colors ${
                              field.value === "senior"
                                ? "border-primary bg-primary/5"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <div className="font-semibold text-gray-900">
                              Senior (14-28)
                            </div>
                            <div className="text-sm text-gray-500">
                              Full YFC membership
                            </div>
                            <div className="text-lg font-bold text-primary mt-1">
                              £40/year
                            </div>
                          </button>
                          <button
                            type="button"
                            onClick={() => field.onChange("countrysider")}
                            className={`p-4 rounded-lg border-2 text-left transition-colors ${
                              field.value === "countrysider"
                                ? "border-primary bg-primary/5"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <div className="font-semibold text-gray-900">
                              Countrysider (10-16)
                            </div>
                            <div className="text-sm text-gray-500">
                              Junior membership
                            </div>
                            <div className="text-lg font-bold text-primary mt-1">
                              £25/year
                            </div>
                          </button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="clubId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Select Club *</FormLabel>
                        <div className="space-y-2 max-h-80 overflow-y-auto border rounded-lg p-2">
                          {clubs
                            .filter((c) => {
                              const mt = form.watch("membershipType")
                              if (!mt) return true
                              return c.type === mt
                            })
                            .map((club) => (
                              <button
                                key={club.id}
                                type="button"
                                onClick={() => field.onChange(club.id)}
                                className={`w-full p-3 rounded-lg border text-left transition-colors ${
                                  field.value === club.id
                                    ? "border-primary bg-primary/5"
                                    : "border-gray-100 hover:bg-gray-50"
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <div className="font-medium text-gray-900">
                                      {club.name}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                      {club.meetingDay} at {club.meetingTime} |{" "}
                                      {club.location}
                                    </div>
                                  </div>
                                  {field.value === club.id && (
                                    <Check className="h-5 w-5 text-primary" />
                                  )}
                                </div>
                              </button>
                            ))}
                          {clubs.length === 0 && (
                            <div className="text-center py-4 text-gray-500">
                              <Loader2 className="h-5 w-5 animate-spin mx-auto mb-2" />
                              Loading clubs...
                            </div>
                          )}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Emergency Contact & Medical (Optional)
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="emergencyContactName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Emergency Contact Name</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="emergencyContactPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Emergency Contact Phone</FormLabel>
                            <FormControl>
                              <Input type="tel" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="mt-4">
                      <FormField
                        control={form.control}
                        name="medicalNotes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Medical Conditions / Allergies
                            </FormLabel>
                            <FormControl>
                              <textarea
                                className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                placeholder="Any conditions the club leaders should be aware of"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Pay */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                      Review & Pay
                    </h2>
                    <p className="text-sm text-gray-500">
                      Please check the details below before proceeding to
                      payment.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Parent summary */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">
                          Parent / Guardian
                        </h3>
                        <button
                          type="button"
                          onClick={() => setStep(0)}
                          className="text-sm text-primary hover:underline"
                        >
                          Edit
                        </button>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>{form.watch("parentName")}</p>
                        <p>{form.watch("parentEmail")}</p>
                        <p>{form.watch("parentPhone")}</p>
                        <p className="capitalize">
                          {form.watch("parentRelationship")}
                        </p>
                      </div>
                    </div>

                    {/* Member summary */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">
                          Member
                        </h3>
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="text-sm text-primary hover:underline"
                        >
                          Edit
                        </button>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>
                          {form.watch("firstName")} {form.watch("lastName")}
                        </p>
                        <p>DOB: {form.watch("dateOfBirth")}</p>
                        <p>
                          {form.watch("addressLine1")},{" "}
                          {form.watch("city")},{" "}
                          {form.watch("postcode")}
                        </p>
                      </div>
                    </div>

                    {/* Club summary */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">
                          Club & Membership
                        </h3>
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="text-sm text-primary hover:underline"
                        >
                          Edit
                        </button>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>{selectedClub?.name || "—"}</p>
                        <p>
                          {selectedClub?.meetingDay} at{" "}
                          {selectedClub?.meetingTime}
                        </p>
                        {pricing && (
                          <Badge variant="outline">{pricing.label}</Badge>
                        )}
                      </div>
                    </div>

                    {/* Payment summary */}
                    {pricing && (
                      <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              Total Due Today
                            </h3>
                            <p className="text-sm text-gray-500">
                              {pricing.label} (Sept 2025 - Aug 2026)
                            </p>
                          </div>
                          <div className="text-2xl font-bold text-primary">
                            {pricing.display}
                          </div>
                        </div>
                      </div>
                    )}

                    <p className="text-xs text-gray-400">
                      By proceeding, you confirm the information is correct and
                      agree to Norfolk YFC's terms and conditions. You'll be
                      redirected to Stripe for secure payment.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex justify-between mt-8 pt-4 border-t">
                {step > 0 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={submitting}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                  </Button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <Button type="button" onClick={nextStep}>
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="bg-primary hover:bg-primary/90"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <CreditCard className="h-4 w-4 mr-2" />
                        Pay {pricing?.display || ""}
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  )
}
