import React from "react";
import { Link, NavLink } from "react-router-dom";
function Main(){
    return(
        <div>
            <ul>
                <li> <NavLink class="link" to="/register">Register  </NavLink></li>
                <li> <NavLink class="link" to="/login">Login   </NavLink></li>
                {/* <li> <NavLink class="link" to="/manageregister">manage   </NavLink></li> */}
            </ul>

        </div>
    )
}
export default Main;