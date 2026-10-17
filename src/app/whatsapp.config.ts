/** Atualize com DDI + DDD + número (somente dígitos). Ex.: 5511999999999 */
export const WHATSAPP_PHONE = '5511999999999';

export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá, Italo! Vim pela landing page e quero saber sobre a consultoria Método I9.';

export function whatsAppUrl(message = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
