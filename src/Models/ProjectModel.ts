export enum WORK_TYPES {
    WEBSITE = 'Website',
    LANDING_PAGE = 'Landing page',
    MANAGEMENT = 'Management',
}

export class ProjectModel {
    public constructor(
        public project_name: string,
        public workType: WORK_TYPES,
        public client_name: string,
        public due_date: string,
        public redirect: string,
        public image_name: string
    ) {
        this.project_name = project_name;
        this.workType = workType;
        this.client_name = client_name;
        this.due_date = due_date;
        this.redirect = redirect;
        this.image_name = image_name;
    }
}