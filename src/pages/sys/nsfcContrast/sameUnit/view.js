import { Fragment, PureComponent } from 'react';
import { DataTable } from '@components';
import { Line ,Bar,YBar,Pie } from '@components/Echarts';
import { Row, Col, DatePicker, Button, Card ,Select,Input, Icon, Tabs} from 'antd';
import moment from 'moment';
const { Option } = Select;
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const initTime = [moment().subtract(7, 'days'), moment().subtract(1, 'days')];

const TabPane = Tabs.TabPane;
class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      startTime:'',
      endTime:'',
      dependUnitName: '',
    };
  }
  handelChange(e){
    this.setState({
      dependUnitName:e.target.value
    })
  }
  startTime_(v){
    this.setState({
      startTime:v
    })
  };
  endTime_(v){
    this.setState({
      endTime:v
    })
  };
  submit = () => {
    const { handleSubmit = () => { } } = this.props;
    const date  = this.state;
    handleSubmit(date);
  };
  render() {
    const { dict = {}} = this.props;
    const {infoYear=[]} = dict;
    const InfoYearOPtion = infoYear.map((item, i) => (
      <Option value={item.value} key={i}>{item.name}</Option>
    ));
    const { data, showY2, Y2Name, YName, loading,unitType,
      handleClick = () => {
        console.log("download");
      }
    } = this.props;
    return (
      <Fragment>
        <Row style={{ width: 650 ,margin:'auto'}}>
          <Col span={19}>
            &nbsp;&nbsp;&nbsp;<Input
              style={{width:200}}
              placeholder='请输入依托单位'
              onChange={this.handelChange.bind(this)}
            >
            </Input>&nbsp;&nbsp;&nbsp;
            <span>审批时间&nbsp;&nbsp;&nbsp;</span>
            <Select
              style={{width:100}}
              showSearch
              placeholder="请选择"
              onChange={this.startTime_.bind(this)}
            >
              {InfoYearOPtion}
            </Select>&nbsp;&nbsp;&nbsp;至&nbsp;&nbsp;&nbsp;
            <Select
              style={{width:100}}
              showSearch
              placeholder="请选择"
              onChange={this.endTime_.bind(this)}
            >
              {InfoYearOPtion}
            </Select>
          </Col>
          <Col span={5} style={{ textAlign: 'center' }}>
            <Button type="primary" onClick={this.submit}>查询</Button>
          </Col>
        </Row>
        <Card
          style={{ marginTop: 15 }}
        >
          <Tabs
            animated={false}
            style={{ textAlign: 'right' }}
          >
            <TabPane tab={<Icon type="bar-chart" />} key="1" style={{ textAlign: 'left' }}>
              <Bar seriesLayoutBy={"column"} data={data} loading={loading} />
            </TabPane>
            <TabPane tab={<Icon type="line-chart" />} key="2" style={{ textAlign: 'left' }}>
              <Line seriesLayoutBy={"column"} data={data} loading={loading} />
            </TabPane>
          </Tabs>
          <Tabs
            animated={false}
            style={{ textAlign: 'right' }}
          >
            <TabPane tab={<Icon type="bar-chart" />} key="1" style={{ textAlign: 'left' }}>
              <YBar seriesLayoutBy={"column"} data={unitType} loading={loading} />
            </TabPane>
            <TabPane tab={<Icon type="pie-chart" />} key="2" style={{ textAlign: 'left' }}>
              <Pie seriesLayoutBy={"column"} data={unitType} loading={loading} />
            </TabPane>
          </Tabs>
        </Card>
      </Fragment>
    );
  }
}
export default Index;
