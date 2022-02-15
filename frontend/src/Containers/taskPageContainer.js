import { withRouter } from "next/router";
import { connect } from "react-redux";
import TaskPage from "../components/taskPage";
import {} from "../actions/asyncActions";
import {openAuthModal} from "../actions/syncActions";
import _ from "lodash";

const mapStateToProps = state => {
  return {
    taskData: state.task.taskData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openAuthModal:(mode) => dispatch(openAuthModal(mode)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TaskPage))