import { MessageCircle, Phone } from 'lucide-react';

export function MobileBottomBar() {
  return (
    <nav
      aria-label="Mobile quick contact"
      className="fixed bottom-0 inset-x-0 z-50 bg-[#1C1B1A] border-t border-white/10 md:hidden pb-[env(safe-area-inset-bottom)]"
    >
      <div className="flex h-[56px] items-stretch">
        <a
          href="https://wa.me/60179585418"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 text-white font-medium text-[15px] hover:bg-white/5 active:bg-white/10 transition-colors border-r border-white/10"
        >
          <MessageCircle className="w-4 h-4 text-white" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
        <a
          href="tel:+60179585418"
          className="flex-1 flex items-center justify-center gap-2 text-white font-medium text-[15px] hover:bg-white/5 active:bg-white/10 transition-colors"
        >
          <Phone className="w-4 h-4 text-white" aria-hidden="true" />
          <span>Call</span>
        </a>
      </div>
    </nav>
  );
}

export default MobileBottomBar;
