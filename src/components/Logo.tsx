import { Link } from "react-router-dom";

const Logo = ({ variant = "default" }: { variant?: "default" | "light" }) => {
  const textColor = variant === "light" ? "text-white" : "text-foreground";
  const tealColor = "text-primary";

  return (
    <Link to="/" className="flex items-center gap-0 select-none">
      <span className={`text-xl font-bold tracking-tight ${tealColor}`}>Tech</span>
      <span className={`text-xl font-bold tracking-tight ${textColor}`}>Flex</span>
      <span className={`mx-2 text-xl font-light ${variant === "light" ? "text-white/40" : "text-muted-foreground/40"}`}>|</span>
      <span className={`text-xl font-bold tracking-tight ${tealColor}`}>One</span>
      <span className={`text-xl font-bold tracking-tight ${textColor}`}>Span</span>
    </Link>
  );
};

export default Logo;
