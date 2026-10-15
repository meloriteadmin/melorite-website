import { Banknote, BarChart3, Bell, BellRing, Bot, BriefcaseBusiness, Building2, CalendarClock, CalendarDays, CheckCheck, ClipboardCheck, Clock, CreditCard, FileSignature, FileText, FolderOpen, GitBranch, Handshake, HeartPulse, History, Home, Layers, LayoutGrid, Megaphone, MessageSquare, Mic, MapPin, Package, Phone, PhoneCall, PhoneIncoming, PhoneOutgoing, Pill, Receipt, Route, ScanSearch, Share2, ShieldCheck, ShoppingBag, Smartphone, Stethoscope, Store, Truck, UserPlus, UserRound, Users, Wallet, Warehouse, Workflow, type LucideIcon } from "lucide-react";

const rules: [RegExp, LucideIcon][] = [
  [/lead capture/i, UserPlus], [/ownership|routing|task/i, Route], [/pipeline|stages/i, GitBranch], [/follow-up|reminder/i, BellRing],
  [/history|records?$|customer history/i, History], [/quote/i, FileSignature], [/report|overview|sales view|campaign/i, BarChart3], [/mobile/i, Smartphone],
  [/unit|inventory/i, Building2], [/buyer/i, UserRound], [/site visit|visit types/i, MapPin], [/broker/i, Handshake], [/payment plan|payments/i, Wallet],
  [/document/i, FolderOpen], [/appointment/i, CalendarClock], [/patient/i, HeartPulse], [/prescription/i, Pill], [/billing|invoice/i, Receipt],
  [/schedule|calendar/i, CalendarDays], [/multi-clinic/i, Stethoscope], [/client record/i, Users], [/approval/i, CheckCheck], [/asset/i, ScanSearch],
  [/status|delivery/i, Truck], [/storefront/i, Store], [/order/i, ShoppingBag], [/stock/i, Warehouse], [/cod/i, Banknote],
  [/inbound/i, PhoneIncoming], [/outbound/i, PhoneOutgoing], [/natural|replies/i, Mic], [/booking/i, ClipboardCheck], [/summar/i, FileText],
  [/hand-off/i, Share2], [/crm/i, Layers], [/24\/7/i, Clock], [/lead/i, UserPlus],
];
const fallback: LucideIcon[] = [LayoutGrid, Workflow, MessageSquare, ShieldCheck, Bot, Bell, Phone, PhoneCall, Home, Package, CreditCard, Megaphone, BriefcaseBusiness];

export function featureIcon(title: string, i = 0): LucideIcon {
  return rules.find(([re]) => re.test(title))?.[1] ?? fallback[i % fallback.length];
}

export function audienceIcon(label: string, i = 0): LucideIcon {
  if (/clinic|dental|skin|physio|practice/i.test(label)) return Stethoscope;
  if (/builder|developer|real estate|property/i.test(label)) return Building2;
  if (/broker/i.test(label)) return Handshake;
  if (/agency|agencies/i.test(label)) return Megaphone;
  if (/brand|retail|seller|commerce|d2c/i.test(label)) return ShoppingBag;
  if (/sales|consult/i.test(label)) return BriefcaseBusiness;
  return [Users, Layers, Workflow, BarChart3][i % 4];
}
