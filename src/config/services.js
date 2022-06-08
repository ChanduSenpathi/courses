import axios from "axios";
import { APIURL } from "./url";
import {USERSURL} from "./userurl"
function getCourse(){
    return axios.get(APIURL)
}
function addUsers(state){
    return axios.post(USERSURL,state)
}
function getUserdetails(){
    return axios.get(USERSURL)
}
export {getCourse,addUsers,getUserdetails}