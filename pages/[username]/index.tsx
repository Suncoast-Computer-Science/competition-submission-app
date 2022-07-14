import { getUserWithUsername, postToJSON } from '@lib/firebase';
import { query, collection, where, getDocs, limit, orderBy, getFirestore } from 'firebase/firestore';
import UserProfile from '@components/UserProfile';


export async function getServerSideProps({ query: urlQuery }) {
  return {
    props: {}
  }
}

export default function UserProfilePage({ user, posts }) {
  return (
    <main>
    </main>
  );
}
