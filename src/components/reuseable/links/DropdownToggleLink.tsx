import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

// ==========================================================
interface DropdownToggleLinkProps
  extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  title: string;
}
// ==========================================================

export default function DropdownToggleLink({ title, className, ...others }: DropdownToggleLinkProps) {
  return (
    <a href="#"  className={className || "dropdown-item dropdown-toggle"} {...others}>
      {title}
    </a>
  );
}
