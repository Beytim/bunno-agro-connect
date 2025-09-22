import { useEffect, useState } from "react";

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FloatingElement({ 
  children, 
  delay = 0, 
  duration = 3000,
  className = "" 
}: FloatingElementProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`transition-all ${duration}ms ease-out ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function ParallaxContainer({ 
  children, 
  speed = 0.5,
  className = "" 
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      className={className}
      style={{ transform: `translateY(${offsetY}px)` }}
    >
      {children}
    </div>
  );
}