//容器组件
//引入UI组件
import Count from "../../components/Count";
//引入connect用于连接UI组件与redux
import { connect } from "react-redux";

export default connect()(Count);
