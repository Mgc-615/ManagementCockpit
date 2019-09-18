<template>
  <div>
    <!-- 第一部分 -->
    <div class="clearfloat">
      <!-- 第一部分左侧 -->
      <div class="topLeft">
        <div class="title">
          <p>{{proInfo.ugenprojectname}}</p>
        </div>
        <ul>
          <p></p>
          <li>
            <img src="../assets/img/map-pin@2x.png" alt />
            <span>
              <span class="col">Business Region :</span> {{proInfo.uuuLocation}}
            </span>
          </li>
          <li>
            <img src="../assets/img/award@2x.png" alt />
            <span>
              <span class="col">Project Manager :</span> {{proInfo.cpeProjectmanager}}
            </span>
          </li>
          <li>
            <img src="../assets/img/award@2x.png" alt />
            <span>
              <span class="col">Project Director :</span> {{proInfo.cpeProjectdirector}}
            </span>
          </li>
          <li>
            <img src="../assets/img/calendar@2x.png" alt />
            <span>
              <span class="col">Start Date :</span> {{proInfo.uuuProjectStartDate}}
            </span>
          </li>
          <li>
            <img src="../assets/img/calendar@2x(1).png" alt />
            <span>
              <span class="col">Target Finish Date :</span> {{proInfo.ugenprojenddatedo}}
            </span>
          </li>
        </ul>
        <el-progress class='circlepro' type="circle" :percentage="25" :stroke-width="12"></el-progress>
        <!-- <div ref="projpic" style="width:100%; height:300px;position:absolute"></div> -->
      </div>
      <!-- 第一部分右侧 -->
      <div class="listCount">
        <ul class="first">
          <li>
            <img src="../assets/img/图层 1@2x.png" alt />
            <p>Media</p>
          </li>
          <li>
            <img src="../assets/img/changeod.png" alt />
            <p>Change Order</p>
          </li>
          <li>
            <img src="../assets/img/图层 2@2x.png" alt />
            <p>Risk</p>
          </li>
        </ul>
        <ul>
          <li>
            <div class="head">
              Schedule
            </div>
            <div class="count">
              <div>
                <p>Planned</p>
                <p>25%</p>
              </div>
              <div>
                <p>Actual</p>
                <p>30%</p>
              </div>
              <div>
                <p>SPI</p>
                <p>0.56</p>
              </div>
            </div>
          </li>
          <li>
            <div class="head">
              Cost
            </div>
            <div class="count">
              <div>
                <p>Manhour</p>
                <p>25%</p>
              </div>
              <div>
                <p>Cost</p>
                <p>30%</p>
              </div>
              <div>
                <p>CPI</p>
                <p>0.56</p>
              </div>
            </div>
          </li>
          <li>
            <div class="head">
              Cash - in
            </div>
            <div class="count">
              <div>
                <p>invoiced</p>
                <p>25%</p>
              </div>
              <div>
                <p>Cash - in</p>
                <p>30%</p>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div class="head">
              QA / QC
            </div>
            <div class="count">
              <div>
                <p>Cumulative FPR</p>
                <p>30%</p>
              </div>
            </div>
          </li>
          <li>
            <div class="head">
              HSSE
            </div>
            <div class="count">
              <div>
                <p>Overseas</p>
                <p>{{domo.foreign}}</p>
              </div>
              <div>
                <p>China</p>
                <p>{{domo.domestic}}</p>
              </div>
            </div>
          </li>
          <li>
            <div class="head">
              Manhour
            </div>
            <div class="count">
              <div>
                <p>Budget</p>
                <p>{{Manhour.planTotal}}</p>
              </div>
              <div>
                <p>Remaining</p>
                <p>{{Manhour.cpeTotalmanhourremaining}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 第二部分 -->
    <div class="clearfloat">
      <!-- 左侧统计图 -->
      <div class="twocard">
        <div class="smallTitle">
          <span>Total Health Index</span>
          <span>
            <img src="../assets/img/reload time 拷贝@2x.png" alt />
            Last Updated : 5/21/2019
          </span>
        </div>
        <div class="numTitle">
          8.76
          <span class="border"></span>
          <span class="numBorder">0.33</span>
        </div>
        <div ref="picLeft" style="width:100%; height: 60px;"></div>
        <hr style="margin:0;border:0;border-bottom:1px solid #E8E8E8;" />
        <div ref="picleftTwo" style="width:100%; height: 285px;"></div>
      </div>
      <!-- 右侧tab切换 -->
      <div class="twocardleft">
        <!-- <div class="btn">
          <el-button>
            <i class="el-icon-top"></i>Up
          </el-button>
          <el-button class="down">
            <i class="el-icon-bottom"></i>Down
          </el-button>
        </div>-->
        <el-tabs type="border-card">
          <el-tab-pane label="Engineering Team Contacts List">
            <el-table :data="tableData" height="340" border>
              <el-table-column prop="cpeChineseName" label="Name" width='200'></el-table-column>
              <el-table-column prop="uuuUserTitle" label="Position"  width='150'></el-table-column>
              <el-table-column prop="cpePhonedirect" label="Direct Line" width='150'></el-table-column>
              <el-table-column prop="uvephonetb64" label="Phone" width='150'></el-table-column>
              <el-table-column prop="ulctcelltb64" label="Mobile Phone" width='150'></el-table-column>
              <el-table-column prop="uuuUserFax" label="Fax" width='150'></el-table-column>
              <el-table-column prop="uempemail" label="E-mail" width='150'></el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="Client Contacts List">
            <el-table
              :row-class-name="tableRowClassName"
              :data="tableData1"
              :span-method="arraySpanMethod"
               height="340"
              border
            >
              <el-table-column prop="cpeChineseName" label="Name" width='200'></el-table-column>
              <el-table-column prop="uuuUserTitle" label="Position"  width='150'></el-table-column>
              <el-table-column prop="cpePhonedirect" label="Direct Line" width='150'></el-table-column>
              <el-table-column prop="uvephonetb64" label="Phone" width='150'></el-table-column>
              <el-table-column prop="ulctcelltb64" label="Mobile Phone" width='150'></el-table-column>
              <el-table-column prop="uuuUserFax" label="Fax" width='150'></el-table-column>
              <el-table-column prop="uempemail" label="E-mail" width='150'></el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <!-- 第三部分 -->
    <div class="endorg">
      <div class="title">
        <p style="margin:0;">Project Milestone</p>
      </div>
      <!-- 统计表格部分 -->
      <div style="width:100%;height:100px;padding:10px">
        <Milestone :onemile='"i"' style="position:relative;width:100%;height:120px;overflow:hidden;"/>
      </div>
      <!-- 统计图部分 -->
      <div ref="oneleftpic" style="height: 340px;"></div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import md5 from 'js-md5'
import img from '../assets/img/img_20190708140625.png'
import Milestone from './milestone'
export default {
   components: {
    Milestone
  },
  mounted() {
    this.$nextTick(()=>{
      this.paintbutThird()
      this.centerLeft()
      this.centerleftTwo()
    })
    this.projectInfo()
  },
  data() {
    return {
      //国内外比例
      domo:{},
      //单项目信息
      proInfo:{},
      //Manhour
      Manhour:{},
      // 左侧下方列表tab
      tableData: [
      ],
      tableData1: [
      ],
      tableData2: [
        {
          date: 'Halfaya Pre-FEED',
          name: '',
          province: '',
          city: '',
          address: '',
          tag: ''
        }
      ]
    }
  },
  methods: {
    //获取单项目信息
    projectInfo(){
      this.$API.projectinfo({projectId:1017}).then(res=>{
        console.log('res',res)
        if(res.flag===true){
          this.proInfo=res.obj
          this.findContacts(0)
          this.findContacts(1)
          this.findManhour()
        }
      })
    },
    //国内外比例统计
    domesticOrForeign(){
      this.$API.domesticOrForeign({projectId:1017}).then(res=>{
        if(res.flag===true){
          this.domo=res.data
        }
      })
    },
    //Manhour
    findManhour(){
      this.$API.findManhour({projectId:1017}).then(res=>{
        if(res.flag===true){
          this.Manhour=res.obj
        }
      })
    },
    //获取项目人员联系方式
    findContacts(tabId){
      let arr = []
      this.$API.findContacts({projectId:1017,tabId}).then(res=>{
        if(res.flag===true){
          arr=res.data
          if(tabId===0){
            this.tableData=arr
          }else{
            this.tableData1=arr
          }
        }
      })
    },
    // 第二部分左侧统计总图
    centerLeft() {
      let myChart = echarts.init(this.$refs.picLeft)
      let sda = {
        a: 3.3,
        b: 3.3,
        c: 3.4
      }
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: function(params) {
            params.marker =
              '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#4F88EB;"></span>'
            let result = ''
            // params.forEach(function(item) {
            // result += item.marker + " " + item.seriesName + " : " + item.value +"</br>";
            result +=
              params.marker +
              ' ' +
              params.seriesName +
              ' : ' +
              params.value +
              '</br>'
            // })
            return result
          }
        },
        xAxis: [
          {
            type: 'value',
            axisLabel: {
              inside: false,
              textStyle: {
                color: '#fff'
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            z: 10
          }
        ],
        yAxis: {
          type: 'category',
          data: [''],
          axisLabel: {
            show: false,
            inside: false,
            textStyle: {
              color: '#fff'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          z: 10
        },
        series: [
          {
            name: 'Danger',
            type: 'bar',
            stack: '总量1',
            barWidth: 12,
            tooltip: { show: false },
            label: {
              normal: {
                show: true,
                formatter: '0.0',
                position: 'left'
              }
            },
            data: [sda.a],
            itemStyle: {
              normal: {
                color: '#3A6FCD',
                label: {
                  textStyle: {
                    color: '#9BA0A6',
                    fontSize: 12
                  }
                }
              }
            }
          },
          {
            name: 'Vigilance',
            type: 'bar',
            stack: '总量1',
            barWidth: 12,
            tooltip: { show: false },
            data: [sda.b],
            itemStyle: {
              normal: {
                color: '#4F88EB'
              }
            }
          },
          {
            name: 'Security',
            type: 'bar',
            stack: '总量1',
            barWidth: 12,
            tooltip: { show: false },
            label: {
              normal: {
                show: true,
                formatter: '10.0',
                position: 'right'
              }
            },
            data: [sda.c],
            itemStyle: {
              normal: {
                color: '#8FB5F4',
                label: {
                  textStyle: {
                    color: '#9BA0A6',
                    fontSize: 12
                  }
                }
              }
            }
          },
          {
            name: 'total health Index',
            type: 'line',
            symbol: 'image://' + img,
            symbolSize: [6, 30],
            data: [6.7]
          }
        ]
      }
      myChart.setOption(option, true)
    },
    // 第二部分左侧tab切换子分类
    centerleftTwo() {
      let myChart = echarts.init(this.$refs.picleftTwo)
      let legendData = ['Danger', 'Vigilance', 'Security']
      let y_data = ['Safety', 'Quality', 'Schedule', 'Cost']
      let _datamax = [3.3, 3.3, 3.3, 3.3]
      let numData = [2.3, 5.6, 7.0, 8.5]
      let option = {
        grid: {
          left: '25%',
          top: 10,
          bottom: 10
        },
        tooltip: {
          show: true,
          formatter: function(params) {
            if (params.name === 'quality') {
              params.marker =
                '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#37CBCB;"></span>'
            }
            if (params.name === 'Safety') {
              params.marker =
                '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#FAD337;"></span>'
            }
            if (params.name === 'Cost') {
              params.marker =
                '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#4DCB73;"></span>'
            }
            if (params.name === 'Schedule') {
              params.marker =
                '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#407CFE;"></span>'
            }
            let result = ''
            result +=
              params.marker + ' ' + params.name + ' : ' + params.value + '</br>'
            return result
          }
        },
        xAxis: {
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        yAxis: [
          {
            data: y_data,
            // rich:{
            //   quality:{
            //     width:20,
            //     height:20,
            //     align:'right',
            //     backgroundColor:'#000'
            //   }
            // },
            axisLabel: {
              fontSize: 12,
              color: '#4F5C67',
              align: 'left',
              margin: 80
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            type: 'bar',
            name: 'Danger',
            stack: '2',
            legendHoverLink: false,
            barWidth: 12,
            tooltip: { show: false },
            label: {
              normal: {
                show: true,
                formatter: '0.0',
                position: 'left'
              }
            },
            itemStyle: {
              normal: {
                color: '#3A6FCD',
                label: {
                  textStyle: {
                    color: '#9BA0A6',
                    fontSize: 12
                  }
                }
              }
            },
            data: _datamax
          },
          {
            type: 'bar',
            name: 'Vigilance',
            stack: '2',
            legendHoverLink: false,
            barWidth: 12,
            tooltip: { show: false },
            itemStyle: {
              normal: {
                color: '#4F88EB'
              }
            },
            data: _datamax
          },
          {
            type: 'bar',
            stack: '2',
            name: 'Security',
            legendHoverLink: false,
            barWidth: 12,
            tooltip: { show: false },
            label: {
              normal: {
                show: true,
                formatter: '10.0',
                position: 'right'
              }
            },
            itemStyle: {
              normal: {
                color: '#8FB5F4',
                label: {
                  textStyle: {
                    color: '#9BA0A6',
                    fontSize: 12
                  }
                }
              }
            },
            data: _datamax
          },
          {
            name: '',
            type: 'line',
            symbol: 'image://' + img,
            symbolSize: [6, 30],
            data: numData,
            itemStyle: {
              normal: {
                lineStyle: { color: 'rgba(0, 0, 0, 0)' }
              }
            }
          }
        ]
      }
      myChart.setOption(option, true)
    },
    // 表格内部标题
    tableRowClassName({ row, rowIndex }) {
      if (row.Name === 'Client' || row.Name === 'CPE') {
        return 'warning-row'
      }
      return ''
    },
    // 第二部分右侧列表合并单元格操作
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
  
    },
    // 第三部分左侧列表索引
    indexMethod(index) {
      return ++index
    },
    // 第三部分柱状图
    paintbutThird() {
      let twoChart = echarts.init(this.$refs.oneleftpic)
      let option = {
        title: {
          subtext: 'Schedule Details',
          left: '3%',
          subtextStyle: {
            fontSize: 12,
            color: '#4F5C67'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        grid: { bottom: '35%' },
        legend: {
          y: 10,
          x: '75%',
          itemWidth: 8,
          textStyle: {
            fontSize: 8,
            color: '#8C919A'
          },
          data: [
            { name: 'Demand', icon: 'circle' },
            { name: 'Available', icon: 'circle' }
          ]
        },
        xAxis: [
          {
            type: 'category',
            axisLabel: {
              interval: 0,
              rotate: 45,
              fontSize: 8,
              color: '#8C919A'
            },
            data: [
              'Process Enginering',
              'Piping Pipeline',
              'Archite & Civll Engineering',
              'Electical Engineering',
              'Instrument & Control Engineering',
              'Mechabical Engineering',
              'Enromental Engineering',
              'Cont Estation',
              'Prpject Management',
              'Document Contral',
              'Others',
              '12月'
            ],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            min: 0,
            max: 25,
            interval: 5,
            axisLine: { show: false }, //去掉y轴
            axisTick: { show: false }, // 去掉刻度线
            nameTextStyle: {
              color: '#7D8D96'
            }
          }
        ],
        series: [
          {
            name: 'Demand',
            type: 'bar',
            data: [2.0, 4.9, 2.0, 3.2, 3.6, 2.7, 4.6, 3.2, 1.6, 3.0, 2.4, 5.0],
            itemStyle: {
              normal: {
                //颜色渐变
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#80B3FF'
                  },
                  {
                    offset: 1,
                    color: '#407CFE'
                  }
                ])
              }
            }
          },
          {
            name: 'Available',
            type: 'bar',
            barCategoryGap: '40%',
            data: [2.6, 4.9, 5.0, 6.4, 4.7, 7.7, 2.6, 4.2, 2.7, 1.8, 6.0, 2.3],
            itemStyle: {
              normal: {
                //颜色渐变
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#7DF3A0'
                  },
                  {
                    offset: 1,
                    color: '#2FC25B'
                  }
                ])
              }
            }
          },
          {
            name: 'Plan Actrual Forcast',
            type: 'bar',
            barCategoryGap: '40%',
            data: [2.6, 4.9, 5.0, 6.4, 4.7, 7.7, 2.6, 4.2, 2.7, 1.8, 6.0, 2.3],
            itemStyle: {
              normal: {
                //颜色渐变
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#FFBF00'
                  },
                  {
                    offset: 1,
                    color: '#FFBF00'
                  }
                ])
              }
            }
          }
        ]
      }
      twoChart.setOption(option, true)
    }
  }
}
</script>
<style lang="less" scoped>
//圆形进度条
.circlepro{
  z-index: 0.5;
}
// 第一部分左侧
.topLeft {
  float: left;
  position: relative;
  border-top: 3% solid #fff;
  width: 35%;
  background-color: #fff;
  box-shadow: 0px 0px 13px 0px rgba(125, 141, 150, 0.19);
  .title {
    font-size: 12px;
    margin-left: 3%;
    padding-left: 2%;
    color: rgba(79, 92, 103, 1);
    border-left: 3px transparent solid;
    box-sizing: border-box;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(#fff, #fff),
      linear-gradient(360deg, #2e72fe, #029fef);
  }
  ul {
    height: 312px;
    p {
      font-size: 12px;
      color: #4f5c67;
      border-bottom: 1px solid #e8e8e8;
      padding-bottom: 10px;
      box-sizing: border-box;
    }
    padding: 0;
    margin: 0;
    padding-left: 2%;
    margin-top: 3%;
    border-top: 1px solid #e8e8e8;
    box-sizing: border-box;
    li {
      list-style: none;
      height: 30px;
      line-height: 30px;
      img {
        width: 10px;
      }
      span {
        font-size: 12px;
        color: #4f5c67;
        .col {
          color: #9ba0a6;
        }
      }
    }
    li:last-child {
      padding-bottom: 12px;
    }
  }
  .el-progress {
    position: absolute;
    right: 30px;
    top: 200px;
  }
}
// 第一部分右侧
.listCount {
  float: right;
  width: 65%;
  .first {
    li {
      background-color: #f1a757;
      text-align: center;
      position: relative;
      p {
        padding-top: 21%;
        font-size: 20px;
        color: #fff;
        margin-bottom: 12px;
      }
      img {
        width: 24px;
        height: 20px;
        vertical-align: middle;
        position: absolute;
        top: 30%;
        left: 45%;
      }
    }
    li:nth-child(2) {
      background-color: #4abf8c;
    }
    li:last-child {
      background-color: #65a9ea;
    }
  }
  ul {
    padding-left: 1%;
    margin: 0;
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 8px;
    li {
      flex: 1;
      position: relative;
      list-style: none;
      background-color: #fff;
      margin-right: 1%;
      box-shadow: 0px 0px 13px 0px rgba(125, 141, 150, 0.19);
      .head {
        margin: 12px 3%;
        font-size: 12px;
        color: #4f5c67;
        font-weight: bold;
        padding-left: 5%;
        border-left: 3px transparent solid;
        box-sizing: border-box;
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        background-image: linear-gradient(#fff, #fff),
          linear-gradient(360deg, #2e72fe, #029fef);
        span {
          position: absolute;
          right: 2%;
        }
      }
      .count {
        width: 100%;
        display: flex;
        display: -webkit-flex;
        justify-content: space-around;
        flex-wrap: wrap;
        div {
          flex: 1;
          padding: 16px 4%;
          border-top: 1px solid #e8e8e8;
          border-right: 1px solid #e8e8e8;
          box-sizing: border-box;
          padding-bottom: 10px;
          p {
            padding: 0;
            margin: 0;
            text-align: center;
          }
          p:first-child {
            color: #9ba0a6;
            font-size: 12px;
          }
          p:last-child {
            color: #4f5c67;
            font-size: 20px;
            padding-bottom: 2%;
          }
        }
        div:last-child {
          border-right: 0;
        }
      }
    }
    li:last-child {
      margin-right: 0;
    }
  }
  ul:last-child {
    margin-bottom: 0;
  }
}
// 第二部分左侧
.twocard {
  width: 35%;
  float: left;
  background-color: #fff;
  box-shadow: 0px 0px 13px 0px rgba(125, 141, 150, 0.19);
  margin-top: 10px;
  // 大标题
  .title {
    border-bottom: 1px solid #e8e8e8;
    height: 35px;
    border-top: 10px solid #fff;
    box-sizing: border-box;
    position: relative;
    p {
      margin: 0;
      color: #4f5c67;
      padding-left: 0.8%;
      margin-left: 1%;
      font-size: 12px;
      border-left: 3px transparent solid;
      box-sizing: border-box;
      background-clip: padding-box, border-box;
      background-origin: padding-box, border-box;
      background-image: linear-gradient(#fff, #fff),
        linear-gradient(360deg, #2e72fe, #029fef);
    }
    ul {
      margin: 0;
      padding: 0;
      position: absolute;
      right: 5%;
      top: 0;
      li {
        color: #9ba0a6;
        font-size: 10px;
        float: left;
        list-style: none;
        span {
          border: 4px solid #3a6fcd;
          display: inline-block;
          border-radius: 30%;
        }
      }
      li:nth-child(2) {
        span {
          border-color: #4f88eb;
        }
      }
      li:last-child {
        padding-right: 0;
        span {
          border-color: #8fb5f4;
        }
      }
    }
  }
  // 小标题
  .smallTitle {
    padding: 10px 0;
    position: relative;
    span {
      position: absolute;
      font-size: 12px;
      color: #7d8d96;
      img {
        vertical-align: middle;
      }
    }
    span:first-child {
      left: 3%;
    }
    span:last-child {
      right: 5%;
    }
  }
  // 数字标题
  .numTitle {
    color: #4f5c67;
    font-size: 25px;
    position: relative;
    padding: 2% 0 0 3%;
    .border {
      border-top: 5px solid #fff;
      border-left: 5px solid #fff;
      border-right: 5px solid #fff;
      border-bottom: 5px solid #f00;
      position: absolute;
      bottom: 10px;
    }
    .numBorder {
      color: #f00;
      font-size: 9px;
      margin-left: 3%;
    }
  }
}
// 第二部分右侧tab切换部分
.twocardleft {
  width: 64.5%;
  float: right;
  margin-top: 10px;
  position: relative;
  .btn {
    position: absolute;
    top: 2%;
    right: 2%;
    z-index: 9999;
    /deep/ .el-button {
      height: 20px;
      width: 42px;
      padding: 0;
      position: relative;
      span {
        position: absolute;
        display: inline-block;
        font-size: 10px;
        bottom: 4px;
        right: 10px;
      }
    }
    /deep/ .down {
      width: 57px;
    }
  }
  /deep/ .el-table .warning-row {
    background: #E8E8E8;
  }
}
// 第三部分
.endorg {
  background-color: #fff;
  box-shadow: 0px 0px 13px 0px rgba(125, 141, 150, 0.19);
  margin-top: 10px;
  .title {
    font-size: 12px;
    color: #4f5c67;
    padding-left: 1%;
    border-top: 10px solid #fff;
    border-bottom: 10px solid #fff;
    margin-left: 1%;
    border-left: 3px transparent solid;
    box-sizing: border-box;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(#fff, #fff),
      linear-gradient(360deg, #2e72fe, #029fef);
  }
}
// 列表相关
/deep/ .el-table {
  font-size: 10px;
  th,
  td {
    padding: 5px 0 !important;
  }
}
/deep/ .el-tabs__item {
  font-size: 10px;
  height: 36px;
  line-height: 36px;
}
// // 列表下拉框出现的问题
/deep/ .el-table::before {
  height: 0 !important;
}
/deep/ .el-table__fixed::before {
  height: 0 !important;
}
/deep/ .el-table th.gutter {
  display: table-cell !important;
}

/deep/ .el-table colgroup.gutter {
  display: table-cell !important;
}
</style>
