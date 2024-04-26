"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import * as React from "react";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, Send } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { PopoverClose } from "@radix-ui/react-popover";
import { isValidPhoneNumber } from "react-phone-number-input";
import { PhoneInput } from "./phone-input";
import { Separator } from "@/components/ui/separator";
import toast from "react-hot-toast";
import axios from "axios";

const formSchema = z.object({
  name: z.string().min(2, "Invalid name"),
  email: z.string().email(),
  phone: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  message: z.string().optional(),
  date: z.date().optional(),
  time: z.date().optional(),
});

type ContactFormValues = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    const getFirstWord = (str: string) => {
      return str.split(" ")[0];
    };

    try {
      toast.loading("Sending..");
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/form`, data);
      toast.dismiss();
      toast.success("Sent!", {
        duration: 8000,
      });
      router.push(`/contact/thank-you/${getFirstWord(data.name)}`);
    } catch (error) {
      toast.dismiss();
      toast.error("Please try again later", {
        duration: 8000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          className="flex flex-col gap-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name &#42;</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder="Jane Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email &#42;</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="example@email.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone &#42;</FormLabel>
                <FormControl className="w-full">
                  <PhoneInput
                    international
                    disabled={loading}
                    defaultCountry="RO"
                    placeholder="Your phone number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Date of the event{" "}
                  <span className="text-xs text-muted-foreground">
                    (optional)
                  </span>
                </FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        disabled={loading}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span className="text-[16px]">
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => field.onChange(date)}
                        disabled={(date) =>
                          date < new Date(new Date().setHours(0, 0, 0, 0))
                        }
                        initialFocus
                      />

                      <Separator className="mb-0 mt-0" />
                      <div className="flex p-0.5">
                        <PopoverClose className="text-sm rounded-md p-2 hover:bg-secondary hover:text-secondary-foreground transition-all">
                          Save
                        </PopoverClose>
                        <span
                          className="text-sm ml-auto cursor-pointer rounded-md p-2 hover:bg-secondary hover:text-secondary-foreground transition-all"
                          onClick={(date) => field.onChange(date)}
                        >
                          Reset
                        </span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Message{" "}
                  <span className="text-xs text-muted-foreground">
                    (optional)
                  </span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    disabled={loading}
                    placeholder="Additional info: time of the event, number of participants, location, dress code .."
                    {...field}
                    className="h-[150px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex">
            <Button disabled={loading} type="submit" className="px-7 mt-2">
              <Send className="mr-4 h-4 w-4" />
              Send
            </Button>
            <p className="ml-auto text-muted-foreground text-sm flex items-center">
              &#42; fields are required
            </p>
          </div>
        </form>
      </Form>
    </>
  );
};
