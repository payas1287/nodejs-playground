interface ITodoType {
    task:string;
    isDone:boolean;
    id:string | number;
    owner?:string
}

type AddFn = (task:string) => Promise<void>;
type ToggleFn = (todo: ITodoType) => Promise<void>;
type DeleteFn = (id:string | number) => Promise<void>;