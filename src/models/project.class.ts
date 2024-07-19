export class Project {
    projectName: string;
    projectDate: number;
    status: string;
    manager: string;
    revenue: number;
    id: string;

    constructor(obj?: any) {
        this.projectName = obj ? obj.projectName : '';
        this.projectDate = obj ? obj.projectDate : 0;
        this.status = obj ? obj.status : '';
        this.manager = obj ? obj.manager : '';
        this.revenue = obj ? obj.revenue : 0;
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