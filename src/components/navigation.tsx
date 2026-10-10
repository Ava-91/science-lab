"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, House, Layers3, TrendingUp } from "lucide-react";
export type RouteKey = "home" | "chapters" | "practice" | "progress";
const items: { href: string; key: RouteKey; label: string; Icon: typeof House }[] = [
 { href: "/", key: "home", label: "خانه", Icon: House },
 { href: "/chapters", key: "chapters", label: "فصل‌ها", Icon: Layers3 },
 { href: "/practice", key: "practice", label: "تمرین", Icon: BookOpen },
 { href: "/progress", key: "progress", label: "پیشرفت", Icon: TrendingUp }
];
export function DesktopNav({ active }: { active: RouteKey }) {
 return <nav className="desktop-nav" aria-label="ناوبری اصلی">{items.map(({href,key,label})=><Link key={key} href={href} className={"nav-link "+(active===key?"active":"")}>{label}</Link>)}</nav>;
}
export function MobileNav({ active }: { active: RouteKey }) {
 const path = usePathname();
 const current = path.startsWith("/chapters") ? "chapters" : path.startsWith("/practice") ? "practice" : path.startsWith("/progress") ? "progress" : active;
 return <nav className="mobile-nav" aria-label="ناوبری اصلی موبایل">{items.map(({href,key,label,Icon})=><Link key={key} href={href} className={current===key?"active":""} aria-current={current===key?"page":undefined}><Icon aria-hidden="true"/><span>{label}</span></Link>)}</nav>;
}