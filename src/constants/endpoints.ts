export const BASE_URL = import.meta.env.BACKEND_URL as string

export const endpoints = {
  faq: `${BASE_URL}/items/faq?fields=*,faq_section.title,faq_section.id`,
  documents: `${BASE_URL}/items/rapports?fields=*,type.title,type.id,document=*&sort=sort,-date_created`,
  rapportCategories: `${BASE_URL}/items/rapport_type?fields=*`,
  downloadAssetById: (id: string) => `${BASE_URL}/assets/${id}?download`,
} as const
