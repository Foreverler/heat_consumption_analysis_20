import React, {Component , Fragment} from 'react';
import ButtonComfirmBox from './components/ButtonConfirmBox';
import TimeShow from './components/TimeShow';
import UpperForm from './components/UpperForm';
import { Input } from 'antd';

import * as actionCreators from "../../analysisTable/CCCheAnaSheet/store/actionCreators";
import {connect} from "react-redux";
import {deepCopy} from "../../../Helper/Copy";

const { TextArea } = Input;

//出厂熟料化学分析单
class CCCheAnaSheet extends Component{
    returnBack = () => {
        this.props.history.push("/index");
    };

    componentWillMount() {

    }

    componentDidMount() {
        const {data, date, tableName, setOldData,requestFlag} = this.props;

        if(requestFlag){

            setOldData(date,tableName,deepCopy(data));
        }
    }


    render(){
        return(
            <Fragment style = {{width:"100%",height:"100%"}}>
                <div  style={{padding: '1%'}} ref = {(el) => this.refs = el}>
                    <h1 align="center">出厂熟料化学分析单</h1>
                    {/*表单最上的时间及人员显示*/}
                    <TimeShow

                    />
                    <div
                        style={{
                            border: "2px solid black",
                            margin: "0px 30px 0px 30px"
                        }}
                    >

                        {/*表单上半部分*/}
                        <UpperForm

                        />

                    </div>
                </div>
                <div
                    style={{
                        float: "right",
                        margin: "0px 50px 20px 0px",
                        display: "inline-block"
                    }}
                >
                    <ButtonComfirmBox
                    />
                </div>
            </Fragment>
        )
    }
}
//定义映射
const mapStateToProps = (state) => {
    return {
        date:state.getIn(['CCCheAnaSheet', 'date']),
        timeChose:state.getIn(['CCCheAnaSheet', 'timeChose']),
        data:state.getIn(['CCCheAnaSheet', 'data']),
        requestFlag:state.getIn(['CCCheAnaSheet', 'requestFlag']),
        person:state.getIn(['CCCheAnaSheet', 'person']),
        tableName:state.getIn(['CCCheAnaSheet', 'tableName']),
    }
};

const mapDispathToProps = (dispatch) => {
    return {
        setOldData(date,tableName,data){
            dispatch(actionCreators.getData(date,tableName,data))
        }
    }//end return
};

export default connect(mapStateToProps, mapDispathToProps)(CCCheAnaSheet);