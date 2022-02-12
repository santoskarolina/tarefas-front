export class TaskModel{
    task_id? : any
    name: string
    description: string
    completion_date: Date
    opening: Date
    user: UserModel
}

export class UserModel {
    user_id?: any
    user_name:string
    email:string
    password:string
}
