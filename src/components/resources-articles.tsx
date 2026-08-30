"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "awareness", label: "Awareness" },
  { id: "legal", label: "Legal" },
  { id: "safety", label: "Safety" },
  { id: "recovery", label: "Recovery" },
  { id: "community", label: "Community" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

const ARTICLES = [
  {
    category: "awareness",
    tag: "जागरूकता",
    date: "Aug 12, 2026",
    title: "Understanding Consent — समझें अपने अधिकार",
    body: "A community guide on consent, safety and rights — समुदाय के लिए एक सरल मार्गदर्शिका।",
    image: "/image/updates/consent.jpg",
    alt: "A woman wearing a red patterned sari",
    href: "/resources",
  },
  {
    category: "legal",
    tag: "कानूनी",
    date: "Aug 5, 2026",
    title: "Legal Rights Every Woman Should Know — हर महिला को जानने चाहिए",
    body: "Know your legal protections under IPC, POCSO and the Criminal Law Amendment Act.",
    image: "/image/work/youth.jpg",
    alt: "A group of young people at a community event",
    href: "/resources",
  },
  {
    category: "safety",
    tag: "सुरक्षा",
    date: "Jul 22, 2026",
    title: "Personal Safety Tips for Women — महिलाओं के लिए सुरक्षा",
    body: "Practical safety strategies for daily life, travel and public spaces across India.",
    image: "/image/Aware1.png",
    alt: "Community awareness event with Rape Mukt Bharat Foundation signs",
    href: "/resources",
  },
  {
    category: "recovery",
    tag: "पुनर्वास",
    date: "Jun 18, 2026",
    title: "Healing After Trauma — आघात के बाद उपचार",
    body: "Survivor voices and expert guidance on emotional recovery, counselling and community support.",
    image: "/image/work/support.jpg",
    alt: "A woman sitting outside a village home",
    href: "/resources",
  },
  {
    category: "community",
    tag: "समुदाय",
    date: "Jun 1, 2026",
    title: "How Communities Can Help Survivors",
    body: "A guide for families, friends and communities on how to support and not re-traumatise survivors.",
    image: "/image/who-we-are.jpg",
    alt: "Hands stacked together in solidarity",
    href: "/resources",
  },
  {
    category: "awareness",
    tag: "जागरूकता",
    date: "May 20, 2026",
    title: "Breaking Myths About Sexual Violence",
    body: "Dismantling harmful myths and misconceptions about rape and sexual assault in Indian society.",
    image: "/image/Aware.png",
    alt: "Children raising awareness for a rape-free India on Independence Day",
    href: "/resources",
  },
] as const;

export function ResourcesArticles() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const filteredArticles =
    activeFilter === "all"
      ? ARTICLES
      : ARTICLES.filter((article) => article.category === activeFilter);

  return (
    <section className="bg-white" aria-labelledby="resources-articles-heading">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
            <span className="font-devanagari tracking-normal">लेख</span>
            {" · "}
            ARTICLES
          </p>
          <h2
            id="resources-articles-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Stories, Updates &{" "}
            <span className="font-devanagari">जागरूकता</span>
          </h2>
        </div>

        <div className="mt-8 -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                activeFilter === filter.id
                  ? "bg-brand text-white"
                  : "border border-zinc-200 bg-white text-zinc-600 hover:border-brand/30 hover:text-brand"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <li key={article.title}>
              <article className="group card-hover card-hover-border flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover card-hover-image"
                  />
                </div>

                <div className="flex flex-1 flex-col px-5 py-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-full bg-brand-soft px-2.5 py-0.5 font-devanagari text-xs font-semibold text-brand">
                      {article.tag}
                    </span>
                    <time className="text-xs text-zinc-400">{article.date}</time>
                  </div>

                  <h3 className="mt-3 text-lg font-extrabold leading-snug tracking-tight text-ink transition-colors group-hover:text-brand">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {article.body}
                  </p>

                  <Link
                    href={article.href}
                    className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-bold text-brand transition-colors group-hover:text-brand-dark"
                  >
                    <span className="font-devanagari">पढ़ें</span>
                    <span aria-hidden="true"> · </span>
                    Read More
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
