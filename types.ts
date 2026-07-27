export interface BentoItemProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
  delay?: number;
}

declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init?: () => void;
    };
  }
}