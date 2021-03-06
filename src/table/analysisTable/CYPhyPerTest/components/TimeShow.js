import React, { Component,Fragment } from 'react';
import { Row, Col, Select } from 'antd';
import moment from 'moment';

import * as actionCreators from "../../../analysisTable/CYPhyPerTest/store/actionCreators";
import {connect} from "react-redux";


const Option = Select.Option;
class TimeShow extends Component{

    render() {
        const day=(['天','一','二','三','四','五','六']);
        const {person} = this.props;
        return(
            <Fragment>
                <Row type="flex" justify = "space-around" align="middle">
                    <Col  xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>{moment().format('YYYY年MM月DD日')}</Col>
                    <Col  xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>{"星期"+day[moment().format('d')]}</Col>
                    {/* <Col span ={4}>
                    班次选择：<Select defaultValue='0'  onChange={this.handleTimeChange}>
                            <Option  value='0'>0点班</Option>
                            <Option  value='1'>8点班</Option>
                            <Option  value='2'>16点班</Option>
                        </Select>
                    </Col> */}
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>{"值班人员："+person}</Col>
                </Row>
            </Fragment>
        );
    }
}

//定义映射
const mapStateToProps = (state) => {
    return {
        date:state.getIn(['CYPhyPerTest', 'date']),
        timeChose:state.getIn(['CYPhyPerTest', 'timeChose']),
        data:state.getIn(['CYPhyPerTest', 'data']),
        requestFlag:state.getIn(['CYPhyPerTest', 'requestFlag']),
        person:state.getIn(['CYPhyPerTest', 'person']),
        tableName:state.getIn(['CYPhyPerTest', 'tableName']),
    }
};

const mapDispathToProps = (dispatch) => {
    return {

    }//end return
};

export default connect(mapStateToProps, mapDispathToProps)(TimeShow);