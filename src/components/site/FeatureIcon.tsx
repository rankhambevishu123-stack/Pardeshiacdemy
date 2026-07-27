import {
  GraduationCap, UserCheck, ClipboardCheck, Users, Wallet,
  MessageCircleQuestion, TrendingUp, ShieldCheck, type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  GraduationCap, UserCheck, ClipboardCheck, Users, Wallet,
  MessageCircleQuestion, TrendingUp, ShieldCheck,
};

export function FeatureIcon({ name, size = 22 }: { name: string; size?: number }) {
  const Icon = map[name] ?? GraduationCap;
  return <Icon size={size} />;
}
