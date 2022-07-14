import Loader from '@components/Loader';
import { firestore, postToJSON } from '@lib/firebase';
import { Timestamp, query, where, orderBy, limit, collectionGroup, getDocs, startAfter, getFirestore } from 'firebase/firestore';

import { useState } from 'react';

// Max post to query per page
const LIMIT = 10;

export default function Home(props) {

  return (
    <main>
      <Loader show={true} />

    </main>
  );
}
