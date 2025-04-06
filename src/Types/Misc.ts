interface GradebookSettings {
  calculationType: string;
  displaySetting: string;
}

interface TeacherFolder {
  id: string;
  alternateLink: string;
  title: string;
}

export interface IClassroom {
  alternateLink: string;
  calendarId: string;
  courseGroupEmail: string;
  courseState: string;
  creationTime: string;
  enrollmentCode: string;
  gradebookSettings: GradebookSettings;
  guardiansEnabled: boolean;
  id: string;
  name: string;
  ownerId: string;
  section: string;
  teacherFolder: TeacherFolder;
  teacherGroupEmail: string;
  updateTime: string;
}
export interface IAssignment {
  courseId: string;
  id: string;
  title: string;
  description: string;
  state: "PUBLISHED" | "DRAFT" | "DELETED";
  alternateLink: string;
  creationTime: string;
  updateTime: string;
  dueDate: {
    year: number;
    month: number;
    day: number;
  };
  materials?: {
    form: {
      formUrl: string;
      thumbnailUrl?: string;
      title?: string;
    };
  }[];
  dueTime: {
    hours?: number;
    minutes?: number;
    seconds?: number;
    nanos?: number;
  };
  maxPoints: number;
  workType: "ASSIGNMENT" | "SHORT_ANSWER_QUESTION" | "MULTIPLE_CHOICE_QUESTION";
  submissionModificationMode:
    | "MODIFIABLE_UNTIL_TURNED_IN"
    | "MODIFIABLE"
    | "TURNED_IN";
  assignment: {
    studentWorkFolder: {
      id: string;
    };
  };
  associatedWithDeveloper: boolean;
  assigneeMode: "ALL_STUDENTS" | "INDIVIDUAL_STUDENTS";
  creatorUserId: string;
}

export interface IGrades {
  name: string;
  email: string;
  user: string;
  feedback: string;
  grade: number;
}
