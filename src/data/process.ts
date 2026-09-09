/**
 * "The StoneCraft Experience". Texto literal del boceto, confirmado por el
 * cliente (decision 13). No reescribir sin aprobacion.
 */

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { number: '01', title: 'Discover', description: 'Tell us about your space and goals.' },
  { number: '02', title: 'Design', description: 'We develop the best solution for your property.' },
  { number: '03', title: 'Select', description: 'Choose materials, colors and finishes.' },
  { number: '04', title: 'Build', description: 'Professional execution and clear communication.' },
  { number: '05', title: 'Enjoy', description: 'A space built to last and crafted to impress.' },
];
