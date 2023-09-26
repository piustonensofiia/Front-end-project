import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  collection,
  CollectionReference,
  Firestore,
  getDocs,
  getFirestore,
  query,
} from 'firebase/firestore';

import firebaseConfig from '../../config/firebase';

type ReceivedCourse = {
  difficulty: string;
  img: string;
  name: string;
};

export type Course = ReceivedCourse & {
  id: string;
};

class CourseManager {
  private readonly app: FirebaseApp;
  private readonly db: Firestore;
  private readonly coursesRef: CollectionReference;
  constructor(config = firebaseConfig) {
    this.app = initializeApp(config);
    this.db = getFirestore(this.app);
    this.coursesRef = collection(this.db, 'courses');
  }

  async getCourses(): Promise<Course[]> {
    const paramQuery = query<ReceivedCourse>(
      this.coursesRef as CollectionReference<ReceivedCourse>,
    );
    const querySnapshot = await getDocs<ReceivedCourse>(paramQuery);
    const courses: Course[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      courses.push({
        id: doc.id,
        name: data.name,
        img: data.img,
        difficulty: data.difficulty,
      });
    });
    return courses;
  }
}

const courseManager = new CourseManager();
export default courseManager;
