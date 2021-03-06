import React, {Component, Fragment} from "react";
import ButtonComfirmBox from './component/ButtonComfirmBox';
import TimeShow from './component/TimeShow';
import UpperForm from './component/UpperForm';
import BottomForm from './component/BottomForm';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';
import {deepCopy} from "../../../Helper/Copy";

// 中控室日报表
class CentralControlDaRe extends Component {
    returnBack = () => {
        this.props.history.push("/index");
    };

    //判定是否已登录，是否有权限
    componentWillMount() {
    }

    componentDidMount() {
        /**首先查询当前页面是否有历史纪录并赋值formData**/
        const {data, date, tableName, setOldData,requestFlag} = this.props;

        if(requestFlag){
            setOldData(date,tableName,deepCopy(data));
        }

    }

    render() {
        return (
            <Fragment style = {{width:"100%",height:"100%"}}>
                <div  style={{padding: '1%'}} ref = {(el) => this.refs = el}>
                    <h1 align="center">中控室日报表</h1>
                    {/*表单最上的时间及人员显示*/}
                    <TimeShow/>
                    <div
                        style={{
                            border: "2px solid black",
                            margin: "0px 30px 0px 30px"
                        }}
                    >
                        {/*表单上半部分*/}
                        <UpperForm/>
                        {/* 表单下半部分 */}
                        <BottomForm/>
                    </div>
                </div>
                <div
                    style={{
                        float: "right",
                        margin: "0px 50px 20px 0px",
                        display: "inline-block"
                    }}
                >
                    <ButtonComfirmBox/>
                </div>
            </Fragment>
        );
    }
}

//定义映射
const mapStateToProps = (state) => {
    return {
        date:state.getIn(['centralControlDaRe', 'date']),
        timeChose:state.getIn(['centralControlDaRe', 'timeChose']),
        data:state.getIn(['centralControlDaRe', 'data']),
        requestFlag:state.getIn(['centralControlDaRe', 'requestFlag']),
        person:state.getIn(['centralControlDaRe', 'person']),
        tableName:state.getIn(['centralControlDaRe', 'tableName']),
    }
};

const mapDispathToProps = (dispatch) => {
    return {
        setOldData(date,tableName,data){
            dispatch(actionCreators.getData(date,tableName,data))
        }
    }//end return
};

//export default CentralControlDaRe;
export default connect(mapStateToProps, mapDispathToProps)(CentralControlDaRe);