import { Router, createBrowserRouter } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import User from "./component/User";
import Notfound from "./Notfound";
import DefaultLayout from "./component/DefaultLayout";
import Osago from "./page/osago/Osago";
import Accident from "./page/accident/Accident";
import Calculate from "./page/osago/Calculate";

import About from "./page/About/AboutCom.jsx"
import Contact from "./page/Contact/Contact.jsx";
import BotCom from "./page/botCom/BotCom.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element : <DefaultLayout />,
        children: [
            {
                path: "/user",
                element : <User />
            },

            {
                path: "/sign",
                element : <Signup />
            },
           
        ]
    },
    {
        path: "/osago",
        element: <Osago />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/accident",
        element: <Accident />
    },
    {
        path: "/bot",
        element: <BotCom />
    },
    {
        path: "/calculate",
        element: <Calculate />
    },
    {
        path: "*",
        element : <Notfound />
    },
   
])

export default router;