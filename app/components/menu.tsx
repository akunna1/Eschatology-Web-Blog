"use client";

type MenuProps = React.HTMLAttributes<HTMLDivElement>; // Extending HTML attributes for flexibility

export default function Menu({ className, ...props }: MenuProps) {
  return (
    <div className={className} {...props}>
      Menu
    </div>
  );
}