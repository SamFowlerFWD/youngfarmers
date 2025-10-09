"use client";

import { motion } from "framer-motion";
import { Check, Users, Globe, Heart, TrendingUp, Award, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function WelcomeSection() {
  const benefits = [
    { icon: Users, text: "Are you aged between 10 and 28?" },
    { icon: Heart, text: "Want to meet new people and make friends for life?" },
    { icon: Sparkles, text: "Want never to be bored or short of things to do again?" },
    { icon: Globe, text: "Want to travel the world?" },
    { icon: TrendingUp, text: "Want to learn new skills for work, leisure and life?" },
    { icon: Award, text: "Want to help others by raising money for charity?" },
    { icon: MapPin, text: "Want to have an influence on the local community?" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Norfolk YFC
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            You don't have to be a Young Farmer to join Young Farmers!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <benefit.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-foreground pt-2">{benefit.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link href="/clubs">Find Your Club</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
