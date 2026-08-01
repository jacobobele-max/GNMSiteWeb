import { MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { DEVIS_URL } from "@/lib/constants";

export function QuoteChatbot() {
  const { t } = useI18n();

  return (
    <a
      href={DEVIS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-4 text-primary-foreground shadow-brand transition-transform hover:scale-105"
      aria-label={t("chat.open")}
    >
      <MessageCircle className="size-5" />
      <span className="hidden text-sm font-semibold sm:inline">{t("chat.open")}</span>
    </a>
  );
}
