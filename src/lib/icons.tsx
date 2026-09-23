import {
  Activity, ArrowRight, Banknote, Bell, Blocks, Boxes, Briefcase, Building, Building2, Car, ChartLine,
  ClipboardList, Database, Factory, FileClock, Files, Fingerprint, FolderKanban, GraduationCap, HardHat,
  Headset, HeartHandshake, History, Hospital, Hotel, KeyRound, Landmark, Layers, Lock, Megaphone, Network,
  Plug, Puzzle, Search, Send, Server, ShieldCheck, ShoppingBag, ShoppingCart, SlidersHorizontal, Sparkles,
  Stethoscope, Store, Target, Truck, UserRound, UserSearch, Users, Warehouse, Workflow, Zap,
  type LucideIcon, type LucideProps,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Activity, ArrowRight, Banknote, Bell, Blocks, Boxes, Briefcase, Building, Building2, Car, ChartLine,
  ClipboardList, Database, Factory, FileClock, Files, Fingerprint, FolderKanban, GraduationCap, HardHat,
  Headset, HeartHandshake, History, Hospital, Hotel, KeyRound, Landmark, Layers, Lock, Megaphone, Network,
  Plug, Puzzle, Search, Send, Server, ShieldCheck, ShoppingBag, ShoppingCart, SlidersHorizontal, Sparkles,
  Stethoscope, Store, Target, Truck, UserRound, UserSearch, Users, Warehouse, Workflow, Zap,
};

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = ICONS[name] ?? Activity;
  return <Cmp aria-hidden {...props} />;
}
