import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-zinc-900 p-10 rounded-md ${className}`}>
      {children}
    </div>
  )
}
export default Card