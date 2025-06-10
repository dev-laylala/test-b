import { format } from 'date-fns';

export function getFormalPhone(phone: string): string {
  return `${phone.replace(/-/gi, '')}`;
}

export function getFormalTime(): string {
  return format(new Date(), 'yyyy-MM-dd a hh:mm');
}
