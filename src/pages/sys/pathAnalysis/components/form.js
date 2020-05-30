import React, {Component} from 'react';
import {Row, Col, Form, Select, DatePicker, Button, Input} from 'antd';
import styles from '../index.less';
import moment from 'moment';

const {RangePicker} = DatePicker;
const {Item: FormItem} = Form;
const {Option} = Select;
const dateFormat = 'YYYY/MM/DD';
const initTime = [moment().subtract(7, 'days'), moment().subtract(1, 'days')];

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: "1",
      timetype: 'day'
    };
  }

  render() {
    const {form, dict = {}, onSubmit,/* onGetEvents: getEvents, onGetPages: getPages */} = this.props;
    const {getFieldDecorator, validateFields} = form;
    const {infoTypeDict = [],dependUnit =[],infoYear=[]} = dict;
    const InfoTypeOPtion = infoTypeDict.map((item, i) => (
      <Option value={item.value} key={i}>{item.name}</Option>
    ));
    const dependUnitList = dependUnit.map((item, i) => (
      <Option value={item.value} key={i}>{item.name}</Option>
    ));
    const infoYearList = infoYear.map((item, i) => (
      <Option value={item.value} key={i}>{item.name}</Option>
    ));

    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 12},
        md: {span: 12},
        lg: {span: 10},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 12},
        md: {span: 12},
        lg: {span: 14},
      },
    };
    const handleFilter = (input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    const handleSubmit = (e) => {
      e.preventDefault();
      validateFields({force: true}, (errors, values) => {
        onSubmit(values);
      });
    };
    return (
      <div className={styles.content}>
        <Form onSubmit={handleSubmit} className="login-form">
          <Row>
            <Col
              md={24}
              lg={10}
              xl={8}
            >
              <FormItem
                {...formItemLayout}
                label="项目关键词"
              >
                {getFieldDecorator('projectKeyword', {})(
                  <Input
                    placeholder='请输入项目关键词或项目名称'
                  >
                  </Input>,
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="负责人"
              >
                {getFieldDecorator('projectAdminName', {})(
                  <Input
                    placeholder='请输入项目负责人'
                  >
                  </Input>)}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="项目批准号"
              >
                {getFieldDecorator('shengPiHao', {})(
                  <Input
                    placeholder='请输入项目批准号'
                  >
                  </Input>,
                )}
              </FormItem>
            </Col>
            <Col
              md={24}
              lg={10}
              xl={8}
            >
              <FormItem
                {...formItemLayout}
                label="依托单位"
              >
                {getFieldDecorator('"dependUnitId"', {})(
                  <Select
                    showSearch
                    placeholder="请选择"
                    optionFilterProp="children"
                    filterOption={handleFilter}
                  >
                    {dependUnitList}
                  </Select>,
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="项目类别"
              >
                {getFieldDecorator('projectTypeName', {})(
                  <Select
                    showSearch
                    placeholder="请选择"
                    optionFilterProp="children"
                    filterOption={handleFilter}
                  >
                    {InfoTypeOPtion}
                  </Select>,
                )}
              </FormItem>
              <FormItem
              {...formItemLayout}
              label="开始年份"
            >
              {getFieldDecorator('startYear', {})(
                <Select
                  style={{width: 100}}
                  showSearch
                  placeholder="请选择"
                  optionFilterProp="children"
                  filterOption={handleFilter}
                >
                  {infoYearList}
                </Select>
              )}
            </FormItem>
              <FormItem
                {...formItemLayout}
                label="结束年份"
              >
                {getFieldDecorator('endYear', {})(
                  <Select
                    style={{width: 100}}
                    showSearch
                    placeholder="请选择"
                    optionFilterProp="children"
                    filterOption={handleFilter}
                  >
                    {infoYearList}
                  </Select>
                )}
              </FormItem>
              <Row>
                <Col
                  sm={24}
                  md={24}
                  lg={10}
                >

                </Col>
                <Col
                  sm={24}
                  md={24}
                  lg={12}
                >
                  <Row>

                    <Col
                      span={20}
                    >
                    </Col>
                  </Row>
                </Col>
                <Col
                  sm={24}
                  md={24}
                  lg={1}
                  style={{textAlign: 'right'}}
                >
                  <Button type="primary" htmlType="submit">搜 索</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Form.create()(MyForm);
