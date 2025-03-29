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
