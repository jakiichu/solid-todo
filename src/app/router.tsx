import {JSXElement} from "solid-js";
import {Route, Router} from "@solidjs/router";
import HeaderLayout from "@/widget/layout/header";
import MainPage from "@/page/main-page";

const BaseRouter = ():JSXElement => {
    return (
        <Router>
            <Route component={HeaderLayout}>
                <Route path='/' component={MainPage}/>
            </Route>
        </Router>
    );
};

export default BaseRouter;