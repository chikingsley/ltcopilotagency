"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface Plan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
  features: string[];
}

interface PricingProps {
  title?: string;
  description?: string;
  plans: Plan[];
}

export function Pricing({
  plans,
  title = "Transparent Pricing for Every Need",
  description = "Choose the plan that best fits your needs.",
}: PricingProps) {
  const [isYearly, setIsYearly] = useState(false);

  const handleConfetti = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = event;
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 70,
      origin: {
        x: clientX / window.innerWidth,
        y: clientY / window.innerHeight,
      },
    });
  };

  return (
    <div className="container py-20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
          {title}
        </h2>
        <p className="text-zinc-400 text-lg whitespace-pre-line">
          {description}
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <label className="relative inline-flex items-center cursor-pointer">
          <Label>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="relative"
            />
          </Label>
        </label>
        <span className="ml-2 font-semibold text-zinc-300">
          Annual billing <span className="text-yellow-400">(Save 20%)</span>
        </span>
        <Button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleConfetti(e)}
          variant="default"
          className="ml-2 bg-yellow-400 hover:bg-yellow-500 text-zinc-900"
        >
          Get Started
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 sm:2 gap-4">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={cn(
              "relative rounded-2xl p-8",
              "bg-zinc-900 border border-zinc-800",
              plan.isPopular && "border-yellow-500/50 shadow-lg shadow-yellow-500/10"
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-yellow-400 py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center">
                <Star className="text-zinc-900 h-4 w-4 fill-current" />
                <span className="text-zinc-900 ml-1 font-sans font-semibold">
                  Popular
                </span>
              </div>
            )}
            <div className="flex-1 flex flex-col">
              <p className="text-base font-semibold text-zinc-300">
                {plan.name}
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-zinc-100">
                  $
                  <NumberFlow
                    value={
                      isYearly ? Number(plan.yearlyPrice) : Number(plan.price)
                    }
                    format={{
                      style: "decimal",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                      useGrouping: true
                    }}
                    className="font-variant-numeric: tabular-nums"
                  />
                </span>
                {plan.period !== "Next 3 months" && (
                  <span className="text-sm font-semibold leading-6 tracking-wide text-zinc-400">
                    / {plan.period}
                  </span>
                )}
              </div>

              <p className="text-xs leading-5 text-zinc-400">
                {isYearly ? "billed annually" : "billed monthly"}
              </p>

              <ul className="mt-5 gap-2 flex flex-col">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <hr className="w-full my-4 border-zinc-800" />

              <Button
                asChild
                variant="outline"
                className={cn(
                  "mt-8 w-full group relative gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out",
                  "hover:ring-2 hover:ring-yellow-400 hover:ring-offset-1 hover:bg-yellow-400 hover:text-zinc-900",
                  plan.isPopular && "bg-yellow-400 text-zinc-900 hover:bg-yellow-500"
                )}
              >
                <Link href={plan.href}>
                  {plan.buttonText}
                </Link>
              </Button>
              <p className="mt-6 text-xs leading-5 text-zinc-400">
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
