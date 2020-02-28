import React, {Component} from 'react';
import {Table, Input, InputNumber, DatePicker} from 'antd';
import moment from 'moment';
import './BottomForm.css';
import * as actionCreators from "../store/actionCreators";
import {connect} from "react-redux";
import {deepCopy} from "../../../../Helper/Copy";

const {TextArea} = Input;//文本输入框


class BottomForm extends Component {



    handleChangeTextAreaTest(value, indexH, indexL) {
        const {data, timeChose, updateChange} = this.props;
        let NewData = deepCopy(data)//复制一份出来
        let index = indexH + timeChose * 12;
        NewData[index]["data"][indexL] = value.toString();

        updateChange(NewData)



    }

    /**
     * InputNumber输入监听
     */
    handleChangeInputNumber(value, indexH, indexL) {
        const {data, timeChose, updateChange} = this.props;
        let NewData =deepCopy(data)//复制一份出来
        let index = indexH + timeChose * 12;
        NewData[index]["data"][indexL] = value.toString();
        updateChange(NewData)

    }

    handleTimeChange(time){
        const {data, timeChose, updateChange} = this.props;
        let NewData = deepCopy(data)//复制一份出来
        NewData[4 + timeChose * 12]['data'][2] =  moment(time).format('YYYY/MM/DD hh:mm:ss').toString()
        updateChange(NewData)
    }

    /**
     * Input输入监听
     */
    handleChangeInput(value, indexH,indexL) {
        const {data, timeChose, updateChange} = this.props;
        let NewData = deepCopy(data)//复制一份出来
        let index = indexH + timeChose * 12;
        NewData[index]["data"][indexL] = value.toString();
        updateChange(NewData)
    }



    render() {
        //表头
        const columns = [
            {
                title: '1',
                dataIndex: '1',
                width: '10%',
                render(value, row, index) {
                    const obj = {
                        children: value,
                        props: {}
                    };
                    if (index === 0) {//备注
                        obj.props.rowSpan = 2;
                    }
                    if (index === 1) {//接班
                        obj.props.rowSpan = 0;
                    }
                    if (index === 2) {//接班
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 2;
                    }
                    if (index === 3) {//空白
                        obj.props.rowSpan = 6;
                        obj.props.colSpan = 10;
                    }
                    if (index === 4) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 5) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 6) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 7) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 8) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 9) {//班长
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 1;
                    }
                    return obj;
                },
            },
            {
                title: '2',
                dataIndex: '2',
                width: '10%',
                render(value, row, index) {
                    const obj = {
                        children: value,
                        props: {}
                    };
                    if (index === 0) {//备注
                        obj.props.colSpan = 9;
                    }
                    if (index === 1) {//接班
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 3;
                    }
                    if (index === 2) {//接班
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 0;
                    }
                    if (index === 3) {//空白
                        obj.props.rowSpan = 6;
                        obj.props.colSpan = 0;
                    }
                    if (index === 4) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 5) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 6) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 7) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 8) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 9) {//班长
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 1;
                    }
                    return obj;
                },
            },
            {
                title: '3',
                dataIndex: '3',
                width: '10%',
                render(value, row, index) {
                    const obj = {
                        children: value,
                        props: {}
                    };
                    if (index === 0) {//备注
                        obj.props.colSpan = 0;
                    }
                    if (index === 1) {//接班
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 0;
                    }
                    if (index === 2) {//接班
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 2;
                    }
                    if (index === 3) {//空白
                        obj.props.rowSpan = 6;
                        obj.props.colSpan = 0;
                    }
                    if (index === 4) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 5) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 6) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 7) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 8) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 9) {//班长
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 1;
                    }
                    return obj;
                },
            },
            {
                title: '4',
                dataIndex: '4',
                width: '10%',
                render(value, row, index) {
                    const obj = {
                        children: value,
                        props: {}
                    };
                    if (index === 0) {//备注
                        obj.props.colSpan = 0;
                    }
                    if (index === 1) {//接班
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 0;
                    }
                    if (index === 2) {//接班
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 0;
                    }
                    if (index === 3) {//空白
                        obj.props.rowSpan = 6;
                        obj.props.colSpan = 0;
                    }
                    if (index === 4) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 5) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 6) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 7) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 8) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 9) {//班长
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 1;
                    }
                    return obj;
                },
            },
            {
                title: '5',
                dataIndex: '5',
                width: '10%',
                render(value, row, index) {
                    const obj = {
                        children: value,
                        props: {}
                    };
                    if (index === 0) {//备注
                        obj.props.colSpan = 0;
                    }
                    if (index === 1) {//接班
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 3;
                    }
                    if (index === 2) {//接班
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 3;
                    }
                    if (index === 3) {//空白
                        obj.props.rowSpan = 6;
                        obj.props.colSpan = 0;
                    }
                    if (index === 4) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 5) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 6) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 7) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 8) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 9) {//班长
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 1;
                    }
                    return obj;
                },
            },
            {
                title: '6',
                dataIndex: '6',
                width: '10%',
                render(value, row, index) {
                    const obj = {
                        children: value,
                        props: {}
                    };
                    if (index === 0) {//备注
                        obj.props.colSpan = 0;
                    }
                    if (index === 1) {//接班
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 0;
                    }
                    if (index === 2) {//接班
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 0;
                    }
                    if (index === 3) {//空白
                        obj.props.rowSpan = 6;
                        obj.props.colSpan = 0;
                    }
                    if (index === 4) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 5) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 6) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 7) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 8) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 9) {//班长
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 1;
                    }
                    return obj;
                },
            },
            {
                title: '7',
                dataIndex: '7',
                width: '10%',
                render(value, row, index) {
                    const obj = {
                        children: value,
                        props: {}
                    };
                    if (index === 0) {//备注
                        obj.props.colSpan = 0;
                    }
                    if (index === 1) {//接班
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 0;
                    }
                    if (index === 2) {//接班
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 0;
                    }
                    if (index === 3) {//空白
                        obj.props.rowSpan = 6;
                        obj.props.colSpan = 0;
                    }
                    if (index === 4) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 5) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 6) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 7) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 8) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 9) {//班长
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 1;
                    }
                    return obj;
                },
            },
            {
                title: '8',
                dataIndex: '8',
                width: '10%',
                render(value, row, index) {
                    const obj = {
                        children: value,
                        props: {}
                    };
                    if (index === 0) {//备注
                        obj.props.colSpan = 0;
                    }
                    if (index === 1) {//接班
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 1;
                    }
                    if (index === 2) {//接班
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 3;
                    }
                    if (index === 3) {//空白
                        obj.props.rowSpan = 6;
                        obj.props.colSpan = 0;
                    }
                    if (index === 4) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 5) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 6) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 7) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 8) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 9) {//班长
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 1;
                    }
                    return obj;
                },
            },
            {
                title: '9',
                dataIndex: '9',
                width: '10%',
                render(value, row, index) {
                    const obj = {
                        children: value,
                        props: {}
                    };
                    if (index === 0) {//备注
                        obj.props.colSpan = 0;
                    }
                    if (index === 1) {//接班
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 2;
                    }
                    if (index === 2) {//接班
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 0;
                    }
                    if (index === 3) {//空白
                        obj.props.rowSpan = 6;
                        obj.props.colSpan = 0;
                    }
                    if (index === 4) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 5) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 6) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 7) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 8) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 9) {//班长
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 1;
                    }
                    return obj;
                },
            },
            {
                title: '10',
                dataIndex: '10',
                width: '10%',
                render(value, row, index) {
                    const obj = {
                        children: value,
                        props: {}
                    };
                    if (index === 0) {//备注
                        obj.props.colSpan = 0;
                    }
                    if (index === 1) {//接班
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 0;
                    }
                    if (index === 2) {//接班
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 0;
                    }
                    if (index === 3) {//空白
                        obj.props.rowSpan = 6;
                        obj.props.colSpan = 0;
                    }
                    if (index === 4) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 5) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 6) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 7) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 8) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 9) {//班长
                        obj.props.rowSpan = 1;
                        obj.props.colSpan = 1;
                    }
                    return obj;
                },
            },
        ];
        /**限制输入数值位数的函数**start**/
        const limitDecimals = (value: string | number): string => {
            const reg = /^(\-)*(\d+)\.(\d\d).*$/;
            if (typeof value === 'string') {
                return !isNaN(Number(value)) ? value.replace(reg, '$1$2.$3') : ''
            } else if (typeof value === 'number') {
                return !isNaN(value) ? String(value).replace(reg, '$1$2.$3') : ''
            } else {
                return ''
            }
        };
        /**限制输入数值位数的函数**end**/

        const {data, timeChose,date} = this.props;
        const Data = deepCopy(data)

        const dataSource = [
                {
                    1: '备注',
                    2: <TextArea
                        value={Data[8 + timeChose * 12]['data'][0]}
                       // onBlur={event => this.handleChangeTextAreaTest(event.target.value, 8+ timeChose * 12, 0,-999)}
                        onChange={event => this.handleChangeTextAreaTest(event.target.value, 8+ timeChose * 12, 0)}
                        style={{
                            resize: "none"
                        }}/>,
                },
                {
                    2: <span>均化XX:&emsp;<InputNumber
                        value={parseFloat(Data[8 + timeChose * 12]['data'][1])}
                        formatter={limitDecimals}//限制输入数值位数
                        parser={limitDecimals}//限制输入数值位数
                        onChange={event => this.handleChangeInputNumber(event, 8 + timeChose * 12, 1)}
                        style={{
                            resize: "none"
                        }}/>&emsp;风机</span>,
                    5: <span>移重XX:&emsp;<InputNumber

                        value={parseFloat(Data[8 + timeChose * 12]['data'][2])}
                        formatter={limitDecimals}//限制输入数值位数

                        parser={limitDecimals}//限制输入数值位数
                        onChange={event => this.handleChangeInputNumber(event, 8 + timeChose * 12, 2)}
                        style={{
                            resize: "none"
                        }}/>&emsp;风机</span>,
                    8: 'XXXXXX（0点班  8点班  16点班）',
                    9: timeChose * 8 + '点班',

                },
                {
                    1: '接班:中心风  内风  外风',//长度2
                    3: <Input
                        value={Data[9 + timeChose * 12]['data'][3]}
                        onChange={event => this.handleChangeInput(event.target.value, 9 + timeChose * 12, 3)}/>,//长度2

                    5: <span>燃烧器:&emsp;<InputNumber
                        value={parseFloat(Data[9 + timeChose * 12]['data'][4])}
                        formatter={limitDecimals}//限制输入数值位数
                        parser={limitDecimals}//限制输入数值位数
                        onChange={event => this.handleChangeInputNumber(event, 9 + timeChose * 12, 4)}
                        style={{
                            resize: "none"
                        }}/>&emsp;位</span>,//长度3
                    8: <span>孰料仓位:&emsp;<InputNumber
                        value={parseFloat(Data[9 + timeChose * 12]['data'][5])}
                        formatter={limitDecimals}//限制输入数值位数
                        parser={limitDecimals}//限制输入数值位数
                        onChange={event => this.handleChangeInputNumber(event, 9 + timeChose * 12, 5)}
                        style={{
                            resize: "none"
                        }}/>&emsp;米</span>,//长度3
                },
                {
                    1: <TextArea
                        value={Data[10 + timeChose * 12]['data'][0]}
                        placeholder='备注'
                        onChange={event => this.handleChangeTextAreaTest(event.target.value, 10 + timeChose * 12, 0)}
                        style={{
                            resize: "none"
                        }}/>,
                }, {}, {}, {}, {}, {},
                {
                    1: '班长：',//长度4
                    2: <Input
                        value={Data[11 + timeChose * 12]['data'][0]}
                        onChange={event => this.handleChangeInput(event.target.value, 11 + timeChose * 12, 0)}/>,
                    3: '操作员：',//长度4
                    4: <Input
                        value={Data[11 + timeChose * 12]['data'][1]}
                        onChange={event => this.handleChangeInput(event.target.value, 11 + timeChose * 12, 1)}/>,
                    5: '投料时间',//长度3
                    6: <DatePicker
                        format='YYYY/MM/DD hh:mm:ss'
                        onChange={date => this.handleTimeChange(date)}
                        value={Data[11 + timeChose * 12]['data'][2] ? moment(Data[11 + timeChose * 12]['data'][2], 'YYYY/MM/DD hh:mm:ss') : moment(date, 'YYYY/MM/DD hh:mm:ss')}

                        defaultValue={moment(date, 'YYYY/MM/DD hh:mm:ss')}
                        style={{width: 200}}/>,
                    7:
                        '投料量',
                    8:
                        <span><InputNumber
                            value={Data[11 + timeChose * 12]['data'][3]}
                            formatter={limitDecimals}//限制输入数值位数
                            parser={limitDecimals}//限制输入数值位数
                            onChange={event => this.handleChangeInputNumber(event, 11 + timeChose * 12, 3)}
                            style={{
                                resize: "none"
                            }}/>/
                        <InputNumber
                            value={Data[11 + timeChose * 12]['data'][4]}
                            formatter={limitDecimals}//限制输入数值位数
                            parser={limitDecimals}//限制输入数值位数
                            onChange={event => this.handleChangeInputNumber(event, 11 + timeChose * 12, 4)}
                            style={{
                                resize: "none"
                            }}/></span>,//长度3
                    9:
                        '孰料产量',//长度4
                    10:
                        <span><InputNumber
                            value={Data[11 + timeChose * 12]['data'][5]}
                            formatter={limitDecimals}//限制输入数值位数
                            parser={limitDecimals}//限制输入数值位数
                            onChange={event => this.handleChangeInputNumber(event, 11 + timeChose * 12, 5)}
                            style={{
                                resize: "none"
                            }}/>/
                    <InputNumber
                        value={Data[11 + timeChose * 12]['data'][6]}
                        formatter={limitDecimals}//限制输入数值位数
                        parser={limitDecimals}//限制输入数值位数
                        onChange={event => this.handleChangeInputNumber(event, 11 + timeChose * 12, 6)}
                        style={{
                            resize: "none"
                        }}/></span>,

                },
            ]
        ;


        return (
            <div className="ZKSX2_bottom">
                <Table
                    className='ZKSX2_bottom_table' dataSource={dataSource} bordered
                    columns={columns} showHeader={false} pagination={false}/>
            </div>
        );
    }

}

//定义映射
const mapStateToProps = (state) => {
    return {
        date: state.getIn(['burnSysOpRe', 'date']),
        timeChose: state.getIn(['burnSysOpRe', 'timeChose']),
        data: state.getIn(['burnSysOpRe', 'data']),
        tableName: state.getIn(['burnSysOpRe', 'tableName']),
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        updateChange(NewData) {
            dispatch(actionCreators.updateData({data:deepCopy(NewData)}))
        },

    }//end return
}


export default connect(mapStateToProps, mapDispathToProps)(BottomForm);
