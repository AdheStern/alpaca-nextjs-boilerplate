// src/components/shared/role-badge.tsx

import { OrgRole, UserRole } from "@prisma/client";
import { Shield, ShieldAlert, ShieldCheck, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface RoleBadgeProps {
  role: UserRole | OrgRole;
  className?: string;
}

const userRoleConfig: Record<
  UserRole,
  { label: string; icon: React.ElementType; color: string }
> = {
  [UserRole.SUPER_ADMIN]: {
    label: "Super Admin",
    icon: ShieldAlert,
    color: "text-purple-600 bg-purple-50 border-purple-200",
  },
  [UserRole.ADMIN]: {
    label: "Admin",
    icon: ShieldCheck,
    color: "text-blue-600 bg-blue-50 border-blue-200",
  },
  [UserRole.MANAGER]: {
    label: "Manager",
    icon: Shield,
    color: "text-green-600 bg-green-50 border-green-200",
  },
  [UserRole.SUPERVISOR]: {
    label: "Supervisor",
    icon: Shield,
    color: "text-cyan-600 bg-cyan-50 border-cyan-200",
  },
  [UserRole.USER]: {
    label: "Usuario",
    icon: User,
    color: "text-gray-600 bg-gray-50 border-gray-200",
  },
};

const orgRoleConfig: Record<
  OrgRole,
  { label: string; icon: React.ElementType; color: string }
> = {
  [OrgRole.OWNER]: {
    label: "Owner",
    icon: ShieldAlert,
    color: "text-purple-600 bg-purple-50 border-purple-200",
  },
  [OrgRole.ADMIN]: {
    label: "Admin",
    icon: ShieldCheck,
    color: "text-blue-600 bg-blue-50 border-blue-200",
  },
  [OrgRole.MEMBER]: {
    label: "Miembro",
    icon: User,
    color: "text-gray-600 bg-gray-50 border-gray-200",
  },
};

export function RoleBadge({ role, className }: RoleBadgeProps) {
  const isOrgRole = Object.values(OrgRole).includes(role as OrgRole);
  const config = isOrgRole
    ? orgRoleConfig[role as OrgRole]
    : userRoleConfig[role as UserRole];

  if (!config) {
    return null;
  }

  const Icon = config.icon;

  return (
    <Badge
      variant="outline"
      className={cn("font-medium gap-1.5", config.color, className)}
    >
      <Icon className="h-3 w-3" />
      {config.label}
    </Badge>
  );
}
