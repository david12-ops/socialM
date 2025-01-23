import { DecodedIdToken } from 'firebase-admin/auth';

import { firestore } from '@/firebase/firebase-admin-config';

type MyContext = { user?: DecodedIdToken };
const db = firestore();

export const queries = {
  suplierData: async (
    _parent: unknown,
    _args: unknown,
    _context: MyContext,
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const result = await db.collection('Supplier').get();

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const data: Array<{
        sendCashDelivery: 'Ts';
        packInBox: 'any';
        supplierId: 'any';
        suppName: 'any';
        pickUp: 'any';
        delivery: 'any';
        insurance: 'any';
        shippingLabel: 'any';
        foil: 'any';
        package: ['any'];
        location: 'any';
      }> = [];

      return { result: 'nooo as ted' };
    } catch (error) {
      console.error('Chyba při získávání dat zásilkové služby', error);
      throw error;
    }
  },
};
