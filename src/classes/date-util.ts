import { format, isToday, parse } from 'date-fns';

/**
 * Formatea una fecha en formato DD/MM/YYYY a "MMM DD, YYYY".
 * Si la fecha es hoy, retorna "Today".
 *
 * @param dateStr - Fecha en formato DD/MM/YYYY
 * @returns - Fecha formateada o "Today"
 */
export function formatDate(dateStr?: string): string {
    if (dateStr) {
        try {
            const parsedDate = parse(dateStr, 'MM/dd/yyyy', new Date());
            if (isToday(parsedDate)) {
                return 'Today';
            }
            return format(parsedDate, 'MMM dd, yyyy');
        } catch (error) {
            console.error('Error parsing date:', error);
            return 'Invalid date';
        }
    }
    return '';
}