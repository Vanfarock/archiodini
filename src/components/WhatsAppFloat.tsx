import { WHATSAPP_URL } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Luana no WhatsApp"
      className="wa-pulse fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-105"
      style={{ backgroundColor: "var(--whatsapp)" }}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.21c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26 0 1.33.97 2.62 1.11 2.8.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.55.58.65.21 1.25.18 1.72.11.52-.08 1.61-.66 1.84-1.29.23-.64.23-1.18.16-1.29-.07-.11-.25-.18-.52-.32zM16.03 5.33c-5.9 0-10.69 4.79-10.69 10.69 0 1.89.5 3.74 1.43 5.36L5.33 26.67l5.43-1.42c1.56.85 3.31 1.3 5.09 1.3h.01c5.89 0 10.69-4.79 10.69-10.69 0-2.85-1.11-5.54-3.13-7.56-2.02-2.02-4.71-3.13-7.56-3.13z" />
      </svg>
    </a>
  );
}
