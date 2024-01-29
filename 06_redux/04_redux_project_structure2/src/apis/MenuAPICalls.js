import { getMenulist } from "../modules/MenuModule";
import { request } from "./Api";

export function callGetMenuListAPI () {

    console.log("getMenuList api calls");

    return async(dispatch, getState) => {
        const result = await request("get", "/menu");
        console.log("getMenuList result : ", result);

        dispatch(getMenulist(result));
    }
}