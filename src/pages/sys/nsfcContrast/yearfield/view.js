import { Fragment, PureComponent } from 'react';
import { DataTable } from '@components';
import { Line ,Bar,YBar,Pie } from '@components/Echarts';
import MyForm from './form';
import { message } from 'antd';
import _ from 'lodash';
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
    };
  }

  render() {
    const  submit = (values) => {
      const { handleSubmit = () => { } } = this.props;
      let count = 0;
      const { ...rest } = values;
      for (const key in rest) {
        if (_.isArray(values[key]) && values[key].length === 0) {

        } else if (values[key] === undefined || values[key] === null) {

        }else {
          count++;
        }
      }
      if(count<=0){
        message.error('请填好查询条件后提交！');
        return false;
      }
      handleSubmit(values);
    };
    const { dict = {}} = this.props;
    const { data, showY2, Y2Name, YName, loading,unitType,
      handleClick = () => {
        console.log("download");
      }
    } = this.props;
    return (
      <Fragment>
        <MyForm  dict={dict} onSubmit={submit} />
        <Card
          style={{ marginTop: 15 }}
        >
          <Tabs
            animated={false}
            style={{ textAlign: 'right' }}
          >
            <TabPane tab={<Icon type="line-chart" />} key="2" style={{ textAlign: 'left' }}>
              <Line  showY2={true} YName={'次'} Y2Name={'元'} seriesLayoutBy={"column"} data={data} loading={loading}  />
            </TabPane>
            <TabPane tab={<Icon type="bar-chart" />} key="1" style={{ textAlign: 'left' }}>
              <Bar seriesLayoutBy={"column"} data={data} loading={loading} />
            </TabPane>

          </Tabs>
        </Card>
      </Fragment>
    );
  }
}
export default Index;
