import type { ReactNode } from "react";

export default function MainLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <main className="page-container">{children}</main>;
}
