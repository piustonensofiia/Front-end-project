import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  collection,
  CollectionReference,
  doc,
  Firestore,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from 'firebase/firestore';

import firebaseConfig from '../../config/firebase';

type UserCredentials = {
  name: string;
  password: string;
};

type User = UserCredentials & {
  id: string;
};

class AuthManager {
  private readonly app: FirebaseApp;
  private readonly db: Firestore;
  private readonly usersRef: CollectionReference;
  constructor(config = firebaseConfig) {
    this.app = initializeApp(config);
    this.db = getFirestore(this.app);
    this.usersRef = collection(this.db, 'users');
  }

  private async getUserByCredentials({ name, password }: UserCredentials) {
    const paramQuery = query<UserCredentials>(
      this.usersRef as CollectionReference<UserCredentials>,
      where('name', '==', name),
      where('password', '==', password),
    );
    const querySnapshot = await getDocs<UserCredentials>(paramQuery);
    const user: User = { name: '', password: '', id: '' };
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      user.id = doc.id;
      user.name = data.name;
      user.password = data.password;
    });
    return user;
  }

  private authorizeUser(user: User) {
    localStorage.setItem('userId', user.id);
    localStorage.setItem('name', user.name);
  }

  logoutUser() {
    localStorage.clear();
  }

  async loginUser(credentials: UserCredentials) {
    const user = await this.getUserByCredentials(credentials);
    if (!user.id) throw new Error('User not found');
    this.authorizeUser(user);
  }

  async registerUser(credentials: UserCredentials) {
    const user = await this.getUserByCredentials(credentials);
    if (user.id) throw new Error('User already exists');
    await setDoc(doc(this.usersRef), credentials);
    const newUser = await this.getUserByCredentials(credentials);
    this.authorizeUser(newUser);
  }
}

const authManager = new AuthManager();
export default authManager;
