"use client";
import { ReactNode } from "react";

type Props = {
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

export default function SmoothScrollLink({
  href,
  className,
  onClick,
  children,
}: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      if (id) {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Scroll to top for TL logo
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      if (onClick) onClick();
    }
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
