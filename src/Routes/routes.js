import { createBrowserRouter } from "react-router-dom";
import FirstStep from "../components/pages/firstStep/FirstStep";
import LastStep from "../components/pages/LastStep/LastStep";
import SeconedStep from "../components/pages/SeconedStep/SeconedStep";
import ThirdStep from "../components/pages/ThirdStep/ThirdStep";
import PageNotFound from "../Privateroute/PageNotFound";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <FirstStep/>,
    },
    {
      path: "/step2",
      element: <SeconedStep/>,
    },
    {
      path: "/step3",
      element: <ThirdStep/>,
    },
    {
      path: "/last-step",
      element: <LastStep/>,
    },
    {
      path: "/page-not-found",
      element: <PageNotFound/>,
    },
  ]);