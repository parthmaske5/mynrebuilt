import { Phone, MessageCircle } from 'lucide-react';

interface QuoteButtonProps {
  variant?: 'primary' | 'secondary';
  className?: string;
  label?: string;
}

export function QuoteButton({ variant = 'primary', className = '', label = 'Get in Touch' }: QuoteButtonProps) {
  const base = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  return (
    <a
      href="https://wa.me/60179585418?text=Hi%20MYN%2C%20I%20need%20help%20with%20a%20job."
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${className}`}
    >
      {label}
    </a>
  );
}

export function WhatsAppLink({ className = '' }: { className?: string }) {
  return (
    <a
      href="https://wa.me/60179585418?text=Hi%20MYN%2C%20I%20need%20help%20with%20a%20job."
      className={`btn-ghost ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle className="h-4 w-4" />
      WhatsApp
    </a>
  );
}

export function PhoneLink({ className = '' }: { className?: string }) {
  return (
    <a href="tel:+60179585418" className={`btn-ghost ${className}`}>
      <Phone className="h-4 w-4" />
      Call
    </a>
  );
}





