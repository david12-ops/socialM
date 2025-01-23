import { firestore } from '../firebase/firebase-admin-config';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const db = firestore();

export const mutatioms = {
  BingoSupPac: async (
    parent_: any,
    args: {
      width: number;
      weight: number;
    },
    // eslint-disable-next-line @typescript-eslint/require-await
  ) => {
    const { width: Width, weight: Weight } = args;

    try {
      // if (Width < 0 || Weight < 0 || Height < 0 || pLength < 0 || Pcost < 0) {
      //     return {
      //         __typename: 'ErrorMessage',
      //         message: 'Neplatný argument, žádné z čísel nemůže být záporná',
      //     };
      // }

      // if (
      //     !['personal', 'depo'].includes(Where) ||
      //     !['personal', 'depo'].includes(FromWhere)
      // ) {
      //     return {
      //         __typename: 'ErrorMessage',
      //         message:
      //             'Neplatný argument, předpokládaná hodnota (personal/depo) ',
      //     };
      // }
      return { Weight, Width };
    } catch (error) {
      console.error(
        'Chyba při výběru vhodné zásilkové služby s vhodným balíkem',
        error,
      );
      throw error;
    }
  },
};
