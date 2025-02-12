import React from 'react';
import { Button } from "@/components/ui/button";

const GradientButton = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      className="bg-gradient-to-r from-[#5fcac2] to-[#117ac0] rounded-tl-xl rounded-br-xl hover:from-[#4ab1ac] hover:to-[#1674b3] text-white border-none shadow-none"
      {...props}
    >
      {children}
    </Button>
  );
});

GradientButton.displayName = "GradientButton";

export default GradientButton;