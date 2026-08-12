// ============================================================
// MSW 브라우저 인스턴스
// ============================================================

import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
