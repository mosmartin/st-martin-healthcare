"use client";

import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import CustomFormField from "./CustomFormField";
import { FormFieldType, UserRegFormSchema } from "@/lib/types";
import SubmitButton from "../SubmitButton";

export default function PatientForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof UserRegFormSchema>>({
    resolver: zodResolver(UserRegFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit({
    fullname,
    email,
    phone,
  }: z.infer<typeof UserRegFormSchema>) {
    setIsLoading(true);

    try {
      console.log({ fullname, email, phone });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 🫶</h1>

          <p className="text-dark-700">
            Welcome to St. Martin Healthcare. We are excited to have you here.
            Please fill in the form below to get started.
          </p>
        </section>

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="name"
          label="Full Name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconSrcAlt="user icon"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="email"
          label="Email"
          placeholder="JohnDoe@test.com"
          iconSrc="/assets/icons/email.svg"
          iconSrcAlt="email icon"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.PHONE_INPUT}
          name="phone"
          label="Phone Number"
          placeholder="(555) 555 5555"
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
}
