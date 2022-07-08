import {useRoutes} from "react-router-dom";
import {routingData} from "./RoutingData";

const Routing = () => {
    const routes: React.ReactElement | null = useRoutes(routingData)
    return routes
};

export default Routing;