import { getUserWithUsername, postToJSON } from "@lib/firebase";
import {
  query,
  collection,
  where,
  getDocs,
  limit,
  orderBy,
  getFirestore,
} from "firebase/firestore";

import { Competition } from "@lib/types";

export default function CompetitionCard({ creator, problems }: Competition) {
  return (
    <div className="p-4 w-full bg-slate-200 rounded-lg border-4 border-neutral-300">
      <h1 className="font-bold underline">{creator}</h1>
    </div>
  );
}
