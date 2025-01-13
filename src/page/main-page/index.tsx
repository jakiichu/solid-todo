import {createDateStore} from "@/shared/lib/store/date";
import TodoItem from "@/features/main/todo-item";

const MainPage = () => {
    const {defaultValues, itemsTodo} = createDateStore()
    return (
        <div>
            <h1>Конкретная дата: {defaultValues.startDate}</h1>

            <div class='grid grid-cols-4 gap-4'>
                {itemsTodo.arrayItems.map(item => <TodoItem item={item}/>)}
            </div>
        </div>
    );
};

export default MainPage;