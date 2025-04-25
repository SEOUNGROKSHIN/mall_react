import {lazy, Suspense} from "react";

const Loading = <div className={'bg-red-700'}>Loading....</div>
const TodoList = lazy(() => import("../pages/todo/ListPage.jsx"));


const todoRouter = () => {
    return [
        {
          path: 'list',
          element: <Suspense fallback={Loading}><TodoList/></Suspense>,
        }
    ]
}

export default todoRouter;