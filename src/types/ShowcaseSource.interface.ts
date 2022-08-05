import { ContentCardDataInterface } from './ContentCardData.interface';

export interface ShowcaseSourceInterface {
  title: string;
  description: string;
  fullWidth: boolean;
  cardData: ContentCardDataInterface[];
}
