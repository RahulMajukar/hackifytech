"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { Monitor, MapPin, Users, Briefcase, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  { icon: Monitor, title: "Online Training", image: "/images/services/online-training.png", desc: "Live interactive sessions with industry experts. Learn from anywhere at your pace.", features: ["Live classes", "Recorded sessions", "Doubt clearing", "Project assignments"] },
  { icon: MapPin, title: "Offline Classroom Training", image: "/images/services/offline-training.png", desc: "Hands-on classroom training at our Bangalore center with personal mentorship.", features: ["In-person mentoring", "Lab access", "Peer learning", "Mock interviews"] },
  { icon: Users, title: "Corporate Training", image: "/images/services/corporate-training.png", desc: "Customized training programs for companies to upskill their teams.", features: ["Custom curriculum", "On-site training", "Team assessments", "Progress reports"] },
  { icon: Briefcase, title: "Placement Assistance", image: "/images/services/placement-assistance.png", desc: "End-to-end placement support including resume building, mock interviews, and job referrals.", features: ["Resume building", "Mock interviews", "Job referrals", "100+ MNC partners"] },
];

export default function ServicesPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="section-title text-foreground">Our Services</h1>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Comprehensive training and placement solutions for students and organizations</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, i) => (
            <m.div key={service.title} className="card-elevated rounded-lg border bg-card overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="relative h-52 w-full bg-muted">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-opacity duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjIwOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTJlOGYwIi8+PC9zdmc+"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><service.icon className="h-5 w-5 text-primary" /></div>
                  <h2 className="font-heading text-xl font-semibold text-card-foreground">{service.title}</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (<li key={f} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle className="h-4 w-4 text-primary shrink-0" /> {f}</li>))}
                </ul>
              </div>
            </m.div>
          ))}
        </div>
        <div className="text-center mt-12"><Link href="/contact"><Button size="lg">Get in Touch</Button></Link></div>
      </div>
    </div>
  );
}
