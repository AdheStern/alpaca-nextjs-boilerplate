// src/components/shared/status-badge.tsx

import { UserStatus } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: UserStatus;
  className?: string;
}

const statusConfig: Record<
  UserStatus,
  { label: string; variant: "default" | "secondary" | "destructive" }
> = {
  [UserStatus.ACTIVE]: {
    label: "Activo",
    variant: "default",
  },
  [UserStatus.INACTIVE]: {
    label: "Inactivo",
    variant: "secondary",
  },
  [UserStatus.SUSPENDED]: {
    label: "Suspendido",
    variant: "destructive",
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];

  if (!config) {
    return null;
  }

  return (
    <Badge variant={config.variant} className={cn("font-medium", className)}>
      {config.label}
    </Badge>
  );
}
