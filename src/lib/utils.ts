import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getNewsTypeTranslationKey(newsType: string): string {
  const typeMap: Record<string, string> = {
    'OPPORTUNITY': 'opportunity',
    'EVENT': 'event', 
    'ANNOUNCEMENT': 'announcement',
    'UPDATE': 'update',
    'GENERAL': 'general'
  }
  
  return typeMap[newsType.toUpperCase()] || 'general'
}
