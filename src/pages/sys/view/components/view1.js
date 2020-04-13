import { Fragment, PureComponent } from 'react';
import { DataTable } from '@components';
import { Line } from '@components/Echarts';
import { Row, Col, Button, Card ,Select,Input} from 'antd';
// import moment from 'moment';

const { Option } = Select;
// const { RangePicker } = DatePicker;
// const dateFormat = 'YYYY/MM/DD';
// const initTime = [moment().subtract(7, 'days'), moment().subtract(1, 'days')];
class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          dependUnitName: '',
          title:""
        };
    }
  handelChange(e){
    this.setState({
      dependUnitName:e.target.value,
    })
  };
    submit = () => {
        const { handleSubmit = () => { } } = this.props;
        const date  = this.state;
        var str =date.dependUnitName;
        handleSubmit(date);
        this.setState({
        title:`${str}近十年的中标情况`
      });
    };
    render() {
        const { dict = {}} = this.props;
        const {infoYear=[]} = dict;
        const InfoYearOPtion = infoYear.map((item, i) => (
        <Option value={item.value} key={i}>{item.name}</Option>
         ));
        const { data, showY2, Y2Name, YName, loading,titleText,
            handleClick = () => {
                console.log("download");
            }
        } = this.props;
        return (
            <Fragment>
                <Row style={{ width: 400 }}>
                    <Col span={19}>
                     <span>依托单位&nbsp;&nbsp;&nbsp;</span>
                      <Input
                      style={{width:200}}
                      placeholder='请输入依托单位'
                      onChange={this.handelChange.bind(this)}
                    >
                    </Input>,
                    </Col>
                    <Col span={5} style={{ textAlign: 'center' }}>
                        <Button type="primary" onClick={this.submit}>查询</Button>
                    </Col>
                </Row>
                <Card
                    style={{ marginTop: 15 }}
                >
                    <Line titleText={titleText} titleFontSize={"20"} titleColor={"#333"} seriesLayoutBy={"column"} data={data} showY2={showY2} Y2SeriesIndex={[1]} YName={YName} Y2Name={Y2Name} loading={loading} />
                </Card>
                <DataTable
                    loading={loading}
                    data={data}
                    searchProps={{ show: true }}
                    download={{ show: true, handleClick }}
                    headerStyle={{ marginTop: 15 }}
                />
            </Fragment>
        );
    }
}
export default Index;
