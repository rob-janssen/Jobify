import { FormRow } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import {
  useOutletContext,
  Form,
  useNavigation,
  redirect,
} from "react-router-dom";

import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

const AddJob = () => {
  return <h1>AddJob</h1>;
};
export default AddJob;
