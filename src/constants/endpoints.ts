export const BASE_URL = import.meta.env.BACKEND_URL as string;

export const endpoints = {
faq: `${BASE_URL}/items/faq?fields=*,faq_section.title,faq_section.id`,
} as const