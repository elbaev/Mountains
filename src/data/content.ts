export type SummaryCard = {
  title: string;
  text: string;
};

export type HotelCard = {
  name: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  bestFor: string;
  formatTag: string;
  comfortFeatures: string[];
};

export type DayPlan = {
  title: string;
  shortSummary: string;
  fullText: string;
  highlights: string[];
};

export type TripPlan = {
  duration: '2' | '3' | '4' | '5';
  withMountainStay: boolean;
  introText: string;
  days: DayPlan[];
  whyChooseThis: string;
  notes: string;
};

export type AccordionItem = {
  title: string;
  summary: string;
  body: string;
  takeaways: string[];
};

export const appContent = {
  hero: {
    title: 'Поездка во Владикавказ и горную Осетию',
    subtitle: 'Персональная шпаргалка по комфортному визиту в конце апреля — начале мая.',
    intro:
      'Это приложение задумано как спокойный и содержательный гид по поездке: с пояснениями по сезону, одежде, проживанию, маршрутам и подготовке к горным дням.',
  },
};
