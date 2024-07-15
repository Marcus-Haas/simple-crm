export class Project {
    projectName: string;
    projectDate: number;
    status: string;
    manager: string;
    revenue: number;
    id: string;

    constructor(obj?: any) {
        this.projectName = obj ? obj.eventName : '';
        this.projectDate = obj ? obj.eventDate : '';
        this.status = obj ? obj.status : '';
        this.manager = obj ? obj.manager : '';
        this.revenue = obj ? obj.revenue : '';
        this.id = obj ? obj.id : '';
    }

    public projectToJSON() {
        return {
            projectName: this.projectName,
            projectDate: this.projectDate,
            status: this.status,
            manager: this.manager,
            revenue: this.revenue,
            id: this.id
        }
    }
}