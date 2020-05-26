import React, {Component} from 'react';
import {Row, Col, Form, Select, DatePicker, Button, Input} from 'antd';
import styles from './index.less';
import moment from 'moment';

const {RangePicker} = DatePicker;
const {Item: FormItem} = Form;
const {Option} = Select;
const dateFormat = 'YYYY/MM/DD';
const initTime = [moment().subtract(7, 'days'), moment().subtract(1, 'days')];

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {form, dict = {}, onSubmit} = this.props;
    const {getFieldDecorator, validateFields} = form;
    const {infoYear = [] ,dependUnit=[] ,infoSubject=[]} = dict;
    const InfoTypeOPtion = infoYear.map((item, i) => (
      <Option value={item.value} key={i}>{item.name}</Option>
    ));
    const dependUnitList = dependUnit.map((item, i) => (
      <Option value={item.value} key={i}>{item.name}</Option>
    ));
    const infoSubjectList = infoSubject.map((item, i) => (
      <Option value={item.value} key={i}>{item.name}</Option>
    ));
    const formItemLayout = {
      labelCol: {
        xs: {span: 30},
        sm: {span: 12},
        md: {span: 12},
        lg: {span: 10},
      },
      wrapperCol: {
        xs: {span: 30},
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
              xl={8}>
              <FormItem
                {...formItemLayout}
                label="学科分类"
              >
                {getFieldDecorator('subjectType', {})(
                  <Select
                    style={{width: 180}}
                    showSearch
                    placeholder="请选择"
                    optionFilterProp="children"
                    filterOption={handleFilter}
                  >
                    {infoSubjectList}
                  </Select>,
                )}
              </FormItem>
            </Col>
            <Col md={16}
                 lg={5}
                 xl={8}>
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
                    {InfoTypeOPtion}
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col md={8}
                 lg={5}
                 xl={4}>
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
                    {InfoTypeOPtion}
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col
              span={2}/>
            <Col

              md={24}
              lg={10}
              xl={8}>
              <FormItem
                {...formItemLayout}
              ><b>&nbsp;&nbsp;&nbsp;&nbsp;请选择 1 ~ 10 个单位进行对比</b>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col
              md={24}
              lg={10}
              xl={8}>
              <FormItem
                {...formItemLayout}
                label="依托单位1"
              >
                {getFieldDecorator('dependUnit1', {})(
                  <Select
                    style={{width: 180}}
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
                label="依托单位4"
              >
                {getFieldDecorator('dependUnit4', {})(
                  <Select
                    style={{width: 180}}
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
                label="依托单位7"
              >
                {getFieldDecorator('dependUnit7', {})(
                  <Select
                    style={{width: 180}}
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
                label="依托单位10"
              >
                {getFieldDecorator('dependUnit10', {})(
                  <Select
                    style={{width: 180}}
                    showSearch
                    placeholder="请选择"
                    optionFilterProp="children"
                    filterOption={handleFilter}
                  >
                    {dependUnitList}
                  </Select>,
                )}
              </FormItem>
            </Col>
            <Col
              md={8}
              lg={5}
              xl={4}>
              <FormItem
                {...formItemLayout}
                label="依托单位2"
              >
                {getFieldDecorator('dependUnit2', {})(
                  <Select
                    style={{width: 180}}
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
                label="依托单位5"
              >
                {getFieldDecorator('dependUnit5', {})(
                  <Select
                    style={{width: 180}}
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
                label="依托单位8"
              >
                {getFieldDecorator('dependUnit8', {})(
                  <Select
                    style={{width: 180}}
                    showSearch
                    placeholder="请选择"
                    optionFilterProp="children"
                    filterOption={handleFilter}
                  >
                    {dependUnitList}
                  </Select>,
                )}
              </FormItem>

            </Col>
            <Col
              md={8}
              lg={5}
              xl={10}>
              <FormItem
                {...formItemLayout}
                label="依托单位3"
              >
                {getFieldDecorator('dependUnit3', {})(
                  <Select
                    style={{width: 180}}
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
                label="依托单位6"
              >
                {getFieldDecorator('dependUnit6', {})(
                  <Select
                    style={{width: 180}}
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
                label="依托单位9"
              >
                {getFieldDecorator('dependUnit9', {})(
                  <Select
                    style={{width: 180}}
                    showSearch
                    placeholder="请选择"
                    optionFilterProp="children"
                    filterOption={handleFilter}
                  >
                    {dependUnitList}
                  </Select>,
                )}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={21}/>
            <Col
              sm={24}
              md={24}
              lg={1}
              style={{textAlign: 'right'}}
            >
              <Button type="primary" htmlType="submit">搜 索</Button>
            </Col>
          </Row>


        </Form>
      </div>
    );
  }
}

export default Form.create()(MyForm);
