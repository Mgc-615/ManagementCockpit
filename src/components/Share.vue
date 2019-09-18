<template>
  <div ref="share">
    <!-- 第一部分 -->
    <div class="clearfloat">
      <!-- 第一部分左侧 -->
      <div class="topLeft">
        <div class="title">
          <p>Chad & South Sudan Portfolio</p>
        </div>
        <ul>
          <li>
            <img src="../assets/img/globe@2x.png" alt />
            <span>
              <span class="col">Portfolio Name :</span> Chad & Sudan Projects
            </span>
          </li>
          <li>
            <img src="../assets/img/map-pin@2x.png" alt />
            <span>
              <span class="col">Business Region :</span> East Africa
            </span>
          </li>
          <li>
            <img src="../assets/img/coffee@2x.png" alt />
            <span>
              <span class="col">No. of Projects :</span> 8
            </span>
          </li>
          <li>
            <img src="../assets/img/award@2x.png" alt />
            <span>
              <span class="col">Portfolio Manager :</span> Zhe Zhang
            </span>
          </li>
          <li>
            <img src="../assets/img/award@2x.png" alt />
            <span>
              <span class="col">Deputy Manager :</span> Yu Wang
            </span>
          </li>
          <li>
            <img src="../assets/img/calendar@2x(1).png" alt />
            <span>
              <span class="col">Portfolio Setup Date :</span> 2019 - 01 - 01
            </span>
          </li>
        </ul>
        <el-progress type="circle" :percentage="25" :stroke-width="12"></el-progress>
        <!-- <div ref="projpic" style="width:100%; height:300px;position:absolute"></div> -->
      </div>
      <!-- 第一部分右侧 -->
      <div class="listCount">
        <ul>
          <li>
            <div class="head">Schedule</div>
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
            <div class="head">Cost</div>
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
            <div class="head">Cash - in</div>
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
            <div class="head">QA / QC</div>
            <div class="count">
              <div>
                <p>Current FPR</p>
                <p>25%</p>
              </div>
              <div>
                <p>Cumulative FPR</p>
                <p>30%</p>
              </div>
            </div>
          </li>
          <li>
            <div class="head">HSSE</div>
            <div class="count">
              <div>
                <p>Overseas</p>
                <p>25%</p>
              </div>
              <div>
                <p>Nathing</p>
                <p>30%</p>
              </div>
            </div>
          </li>
          <li>
            <div class="head">Manhour</div>
            <div class="count">
              <div>
                <p>Budget</p>
                <p>25%</p>
              </div>
              <div>
                <p>Remaining</p>
                <p>30%</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 第二部分 -->
    <div class="twocard clearfloat">
      <div class="title">
        <p>Schedule Details</p>
      </div>
      <!-- 左侧柱状统计图 -->
      <div
        ref="oneleftpic"
        style="width:64%; height: 340px; float:left; border-right:1px solid #E8E8E8;box-sizing:border-box"
      ></div>
      <!-- 右侧环状统计图 -->
      <div ref="botpica" style="width:36%; height: 340px; float:right"></div>
    </div>
    <!-- 第三部分 -->
    <div class="twocardleft clearfloat">
      <el-row>
        <el-col :span="24">
          <div class="btn">
            <el-button>
              <i class="el-icon-top"></i>Up
            </el-button>
            <el-button class="down">
              <i class="el-icon-bottom"></i>Down
            </el-button>
          </div>
          <el-tabs type="border-card">
            <el-tab-pane label="Project Information">
              <el-table
                class="distance"
                :data="tableData1"
                style="width: 100%"
                height="340"
                @row-dblclick="toProject"
                @row-click="toTree"
              >
                <el-table-column
                  fixed
                  type="index"
                  prop="index"
                  label="S.N."
                  :index="indexMethod"
                  width="60%"
                ></el-table-column>
                <el-table-column fixed prop="Number" label="Project Number" width="100%"></el-table-column>
                <el-table-column fixed prop="Name" label="Project Name" width="200%"></el-table-column>
                <el-table-column prop="Stage" label="Stage"></el-table-column>
                <el-table-column prop="Class" label="Class"></el-table-column>
                <el-table-column prop="Contract" label="Contract Value"></el-table-column>
                <el-table-column prop="Budget" label="Budget"></el-table-column>
                <el-table-column prop="Cost" label="Cost"></el-table-column>
                <el-table-column prop="Cash-in" label="Cash-in"></el-table-column>
                <el-table-column prop="Cash-out" label="Cash-out"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="Milestone">
              <div style="width:100%; height: 350px; overflow:auto;">
                <Milestone v-for="i in miledata" :key='i' :onemile='i' style="position:relative;width:100%;height:120px;overflow:hidden;"/>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </div>
    <!-- 第四部分 -->
    <div class="endorg">
      <div class="title">Organization Chart</div>
      <hr style="margin:0;border:0;border-top:1px solid #E8E8E8;padding-bottom:20px;" />
      <!-- <div ref="main_orgStructure" style="width:100%;height:500px;"></div> -->
      <div class="treechart">
        <TreeChart :json="treeData" />
      </div>
      <!-- <iframe style="width:100%; height:1200px;" src="/static/abc.html" frameborder="0"></iframe> -->
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import TreeChart from 'vue-tree-chart'
import ecStat from 'echarts-stat'
import Milestone from './milestone'
export default {
  mounted() {
    this.$nextTick(()=>{
   
      this.paintbutLeft()
      this.paintbutRight()
      // this.painProject()
      // window.addEventListener('scroll', this.tablePage)
    })
      // this.tree()
      this.tablePage()
    // console.log("id",this.$route.params.id)
  },
  data() {
    return {
      mathrandom:Math.random()*10,
      miledata:['1','2','3'],
      // 左侧下方列表tab切换第一页模拟数据
      tableData1: [
        {
          Number: 'D-G502-000021',
          Name: 'Halfya Phase III',
          Stage: '',
          Class: '',
          Contract: '',
          Budget: '',
          Cost: '',
          CashIn: '',
          CashOut: ''
        },
        {
          Number: 'D-G502-000021',
          Name: 'Halfya Phase III',
          Stage: '',
          Class: '',
          Contract: '',
          Budget: '',
          Cost: '',
          CashIn: '',
          CashOut: ''
        },
        {
          Number: 'D-G502-000021',
          Name: 'Halfya Phase III',
          Stage: '',
          Class: '',
          Contract: '',
          Budget: '',
          Cost: '',
          CashIn: '',
          CashOut: ''
        },
        {
          Number: 'D-G502-000022',
          Name: 'Chad & Sudan Projects',
          Stage: '',
          Class: '',
          Contract: '',
          Budget: '',
          Cost: '',
          CashIn: '',
          CashOut: ''
        },
        {
          Number: 'D-G502-000023',
          Name: 'Niger Projects',
          Stage: '',
          Class: '',
          Contract: '',
          Budget: '',
          Cost: '',
          CashIn: '',
          CashOut: ''
        },
        {
          Number: 'D-G502-000024',
          Name: 'American Projects',
          Stage: '',
          Class: '',
          Contract: '',
          Budget: '',
          Cost: '',
          CashIn: '',
          CashOut: ''
        },
        {
          Number: 'D-G502-000025',
          Name: 'Halfaya FSF',
          Stage: '',
          Class: '',
          Contract: '',
          Budget: '',
          Cost: '',
          CashIn: '',
          CashOut: ''
        },
        {
          Number: 'D-G502-000026',
          Name: 'CNPC Pre-FEED & Studies',
          Stage: '',
          Class: '',
          Contract: '',
          Budget: '',
          Cost: '',
          CashIn: '',
          CashOut: ''
        },
        {
          Number: 'D-G502-000027',
          Name: 'Internation Architeture Projects',
          Stage: '',
          Class: '',
          Contract: '',
          Budget: '',
          Cost: '',
          CashIn: '',
          CashOut: ''
        },
        {
          Number: 'D-G502-000028',
          Name: 'Ahdeb and Najnoon Projects',
          Stage: '',
          Class: '',
          Contract: '',
          Budget: '',
          Cost: '',
          CashIn: '',
          CashOut: ''
        },
        {
          Number: 'D-G502-000029',
          Name: 'Halfaya Pre-FEED',
          Stage: '',
          Class: '',
          Contract: '',
          Budget: '',
          Cost: '',
          CashIn: '',
          CashOut: ''
        }
      ],
      // 左侧下方列表tab切换第二页模拟数据
      tableData: [
        {
          date: '2016-05-02',
          name: '',
          province: '',
          city: '',
          address: '',
          tag: ''
        },
        {
          date: '2016-05-04',
          name: '',
          province: '',
          city: '',
          address: '',
          tag: ''
        },
        {
          date: '2016-05-01',
          name: '',
          province: '',
          city: '',
          address: '',
          tag: ''
        },
        {
          date: '2016-05-03',
          name: '',
          province: '',
          city: '',
          address: '',
          tag: ''
        },
        {
          date: '2016-05-03',
          name: '',
          province: '',
          city: '',
          address: '',
          tag: ''
        },
        {
          date: '2016-05-03',
          name: '',
          province: '',
          city: '',
          address: '',
          tag: ''
        },
        {
          date: '2016-05-03',
          name: '',
          province: '',
          city: '',
          address: '',
          tag: ''
        },
        {
          date: '2016-05-03',
          name: '',
          province: '',
          city: '',
          address: '',
          tag: ''
        },
        {
          date: '2016-05-03',
          name: '',
          province: '',
          city: '',
          address: '',
          tag: ''
        },
        {
          date: '2016-05-03',
          name: '',
          province: '',
          city: '',
          address: '',
          tag: ''
        }
      ],
      treeData: {
        name: 'root',
        image_url: '../../static/微信图片_20190318161648.jpg',
        children: [
          {
            name: 'children',
            image_url: '../../static/微信图片_20190318161648.jpg'
          },
          {
            name: 'children',
            image_url: '../../static/微信图片_20190318161648.jpg'
          }
        ]
      }
    }
  },
  components: {
    TreeChart,
    Milestone
  },
  methods: {
    //点击项目改变组织架构图
    toTree(){
      this.$emit('listenactNav', 'toTree')
      this.treeData={
        name: 'root',
        image_url: '../../static/微信图片_20190318161648.jpg',
        children: [
          {
            name: 'children',
            image_url: '../../static/微信图片_20190318161648.jpg'
          },
          {
            name: 'children',
            image_url: '../../static/微信图片_20190318161648.jpg'
          },
          {
            name: 'children',
            image_url: '../../static/微信图片_20190318161648.jpg'
          }
        ]
      }
      this.$nextTick(()=>{
      window.addEventListener('scroll',()=>{
          // const dom = this.$refs.bodyshow
          console.log('scroll',this.$refs.bodyshow.$el.scrollTop)
        },true)
    })
      // this.$nextTick(()=>{

      //   const dom = this.$refs.share
      //   dom.scrollTop=800
      //   console.log('dom',dom.scrollTop)
      // })
    },
    //钻取到项目
    toProject(row, column, event) {
      console.log('row', row, 'column', column, 'event', event)
      this.$router.push({ path: '/setting/' + '11' })
      this.$emit('listenactNav', 'setting')
    },
    // 中间部分左侧柱状图
    paintbutLeft() {
      let twoChart = echarts.init(this.$refs.oneleftpic)
      let option = {
        title: {
          subtext: 'Monthly Team Member Distribution',
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
        grid: { left: '7%', bottom: '35%' },
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
            axisTick: { show: false } // 去掉刻度线
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
          }
        ]
      }
      twoChart.setOption(option, true)
    },
    // 中间部分右侧环状图
    paintbutRight() {
      let twoChart = echarts.init(this.$refs.botpica)
      let option = {
        title: {
          subtext: 'Manpower Status',
          left: '3%',
          subtextStyle: {
            fontSize: 12,
            color: '#4F5C67'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
          showContent: false
        },
        legend: {
          orient: 'vertical',
          y: '64%',
          x: 'center',
          icon: 'circle',
          height: 110,
          itemWidth: 10,
          textStyle: {
            fontSize: 10,
            color: '#8C919A'
          }
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['40%', '50%'],
            center: ['50%', '38%'],
            avoidLabelOverlap: false,
            label: {
              formatter: function(params) {
                return (
                  '{color1|' +
                  params.name +
                  '}\r\n{color2|' +
                  params.value +
                  '}'
                )
              },
              show: false,
              position: 'center',
              rich: {
                color1: { color: '#8C919A', padding: [15, 0], fontSize: 12 },
                color2: { fontSize: 25, padding: [5, 0], color: '#36484F' }
              }
            },
            emphasis: {
              label: {
                show: true
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 335,
                name: 'Process Engineering',
                itemStyle: {
                  normal: {
                    //颜色渐变
                    color: '#407CFE'
                  }
                }
              },
              {
                value: 310,
                name: 'Piping/Pipeline',
                itemStyle: {
                  normal: {
                    //颜色渐变
                    color: '#37CBCB'
                  }
                }
              },
              {
                value: 234,
                name: 'Architecture&Civil Engineering',
                itemStyle: {
                  normal: {
                    //颜色渐变
                    color: '#FAD337'
                  }
                }
              },
              {
                value: 135,
                name: 'Electrical Engineering',
                itemStyle: {
                  normal: {
                    //颜色渐变
                    color: '#4DCB73'
                  }
                }
              },
              {
                value: 12,
                name: 'Contract Procurement',
                itemStyle: {
                  color: '#F04764'
                }
              },
              {
                value: 12,
                name: 'Instrument Control & Engineering',
                itemStyle: {
                  color: '#233273'
                }
              },
              {
                value: 12,
                name: 'Mechanical Engineering',
                itemStyle: {
                  color: '#8544E0'
                }
              },
              {
                value: 12,
                name: 'Environment Engineering',
                itemStyle: {
                  color: '#14C2C3'
                }
              },
              {
                value: 12,
                name: 'Cost Estimation',
                itemStyle: {
                  color: '#407CFE'
                }
              },
              {
                value: 12,
                name: 'Project Management',
                itemStyle: {
                  color: '#3436C7'
                }
              }
            ]
          }
        ]
      }
      twoChart.setOption(option, true)
    },
    // 表格切换下一页
    tablePage() {
      console.log(document.body.scrollTop)
    },
    // 第三部分切换第二项统计
    painProject() {
      let myChart = echarts.init(this.$refs.threepic)
      // app.title = '单轴散点图' Scatter on Single Axis
      var app = {}
      var option = null
      var data0 = [
        ['2019-07-13T00:00:00.000+0000', 3, 40000000, '里程碑1', 1990],
        ['2019-07-16T00:00:00.000+0000', 3, 40000000, '里程碑2', 1990],
        ['2019-07-19T00:00:00.000+0000', 3, 40000000, '里程碑3', 1990],
        ['2019-07-22T00:00:00.000+0000', 3, 40000000, '里程碑4', 1990],
        ['2019-07-25T00:00:00.000+0000', 3, 40000000, '里程碑5', 1990],
        ['2019-07-28T00:00:00.000+0000', 3, 40000000, '里程碑6', 1990],
        ['2019-07-31T00:00:00.000+0000', 3, 40000000, '里程碑7', 1990],
        ['2019-08-04T00:00:00.000+0000', 3, 40000000, '里程碑8', 1990],
        ['2019-08-07T00:00:00.000+0000', 3, 40000000, '里程碑9', 1990],
        ['2019-08-10T00:00:00.000+0000', 3, 40000000, '里程碑10', 1990]
      ]

      var data1 = [
        ['2019-07-13T00:00:00.000+0000', -3, 40000000, '里程碑1', 2015],
        ['2019-07-16T00:00:00.000+0000', -3, 40000000, '里程碑2', 2015],
        ['2019-07-19T00:00:00.000+0000', -3, 40000000, '里程碑3', 2015],
        ['2019-07-22T00:00:00.000+0000', -3, 40000000, '里程碑4', 2015],
        ['2019-07-25T00:00:00.000+0000', -3, 40000000, '里程碑5', 2015],
        ['2019-07-28T00:00:00.000+0000', -3, 40000000, '里程碑6', 2015],
        ['2019-07-31T00:00:00.000+0000', -3, 40000000, '里程碑7', 2015],
        ['2019-08-04T00:00:00.000+0000', -3, 40000000, '里程碑8', 2015],
        ['2019-08-07T00:00:00.000+0000', -3, 40000000, '里程碑9', 2015],
        ['2019-08-10T00:00:00.000+0000', -3, 40000000, '里程碑10', 2015]
      ]

      var data2 = [
        ['2019-07-13T00:00:00.000+0000', 0, 40000000, '里程碑1', 2019],
        ['2019-07-16T00:00:00.000+0000', 0, 40000000, '里程碑2', 2019],
        ['2019-07-19T00:00:00.000+0000', 0, 40000000, '里程碑3', 2019],
        ['2019-07-22T00:00:00.000+0000', 0, 40000000, '里程碑4', 2019],
        ['2019-07-25T00:00:00.000+0000', 0, 50000000, '里程碑5', 2019],
        ['2019-07-28T00:00:00.000+0000', 0, 40000000, '里程碑6', 2019],
        ['2019-07-31T00:00:00.000+0000', 0, 40000000, '里程碑7', 2019],
        ['2019-08-04T00:00:00.000+0000', 0, 40000000, '里程碑8', 2019],
        ['2019-08-07T00:00:00.000+0000', 0, 40000000, '里程碑9', 2019],
        ['2019-08-10T00:00:00.000+0000', 0, 40000000, '里程碑10', 2019]
      ]

      var data = [
        ['2019-07-13T00:00:00.000+0000', 0],
        ['2019-07-16T00:00:00.000+0000', 0],
        ['2019-07-19T00:00:00.000+0000', 0],
        ['2019-07-22T00:00:00.000+0000', 0],
        ['2019-07-25T00:00:00.000+0000', 0],
        ['2019-07-28T00:00:00.000+0000', 0],
        ['2019-07-31T00:00:00.000+0000', 0],
        ['2019-08-04T00:00:00.000+0000', 0],
        ['2019-08-07T00:00:00.000+0000', 0],
        ['2019-08-10T00:00:00.000+0000', 0]
      ]

      // See https://github.com/ecomfe/echarts-stat
      var myRegression = ecStat.regression('logarithmic', data)

      myRegression.points.sort(function(a, b) {
        return a[0] - b[0]
      })

      option = {
        legend: {
          show: false
          // data: ['1990', '2015'],
          // bottom: 20
        },
        title: {
          // text: '1990 and 2015 per capita life expectancy and GDP',
          // subtext: 'By ecStat.regression',
          // sublink: 'https://github.com/ecomfe/echarts-stat',
          // left: 'center'
        },
        tooltip: {
          trigger: 'item',
          // axisPointer: {
          //     type: 'cross'
          // }
          formatter(params) {
            console.log('params', params)
            const item = params
            return `
                    自定义数据1：${item.data[3]}</br>
                    自定义数据2：${item.data[4]}
                   `
          }
        },
        grid: {
          top: 280,
          bottom: 270
        },
        xAxis: {
          type: 'time',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        yAxis: {
          type: 'value',
          show: false,
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        series: [
          {
            name: '1990',
            type: 'scatter',
            symbolSize: function(data) {
              return Math.sqrt(data[2]) / 5e2
            },
            label: {
              emphasis: {
                show: true,
                formatter: function(param) {
                  return param.data[3]
                },
                position: 'top'
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                  {
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                  }
                ])
              }
            },
            data: data0
          },
          {
            name: '2015',
            type: 'scatter',
            symbolSize: function(data) {
              return Math.sqrt(data[2]) / 5e2
            },
            label: {
              emphasis: {
                show: true,
                formatter: function(param) {
                  return param.data[3]
                },
                position: 'top'
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                  {
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                  }
                ])
              }
            },
            data: data1
          },
          {
            name: '2019',
            type: 'scatter',
            symbolSize: function(data) {
              return Math.sqrt(data[2]) / 5e2
            },
            label: {
              emphasis: {
                show: true,
                formatter: function(param) {
                  return param.data[3]
                },
                position: 'top'
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                  {
                    offset: 0,
                    color: 'rgb(50, 50, 50)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(51, 51, 51)'
                  }
                ])
              }
            },
            data: data2
          },
          {
            name: 'line',
            type: 'line',
            lineStyle: {
              normal: {
                color: '#2f4554'
              }
            },
            smooth: true,
            showSymbol: true,
            data: myRegression.points,
            markPoint: {
              itemStyle: {
                normal: {
                  color: 'transparent'
                }
              },
              label: {
                normal: {
                  show: true,
                  position: 'left',
                  formatter: myRegression.expression,
                  textStyle: {
                    color: '#333',
                    fontSize: 14
                  }
                }
              },
              data: [
                {
                  coord: myRegression.points[myRegression.points.length - 1]
                }
              ]
            }
          }
        ]
      }
        console.log("sandiantu")
        myChart.setOption(option, true)
    },
    // 第三部分左侧列表索引
    indexMethod(index) {
      return ++index
    },
    //组织架构图
    tree() {
      var myChart = echarts.init(this.$refs.main_orgStructure)
      var commonStyle = {}
      var option = {
        title: {
          text: '组织结构图'
        },
        tooltip: {
          show: false,
          trigger: 'item',
          formatter: '{b}: {c}'
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: false
      }
      //定义抠图方法
      function getImgData(
        imgSrc,
        radius,
        center = {
          x: 0,
          y: 0
        }
      ) {
        return new Promise(resolve => {
          const canvas = document.createElement('canvas')
          const contex = canvas.getContext('2d')
          const img = new Image()
          img.crossOrigin = ''
          const diameter = 2 * radius
          img.onload = function() {
            canvas.width = diameter
            canvas.height = diameter
            contex.clearRect(0, 0, diameter, diameter)
            contex.save()
            contex.beginPath()
            contex.arc(radius, radius, radius, 0, 2 * Math.PI) //画出圆
            contex.clip() //裁剪上面的圆形
            contex.drawImage(
              img,
              center.x - radius,
              center.y - radius,
              diameter,
              diameter,
              0,
              0,
              diameter,
              diameter
            ) // 在刚刚裁剪的园上画图
            contex.restore() // 还原状态
            resolve(canvas.toDataURL('image/png', 1))
          }
          img.src = imgSrc
        })
      }
      let p1 = getImgData('../../static/微信图片_20190318161648.jpg', 60, {
        x: 150,
        y: 80
      })
      let p2 = getImgData(
        'https://i.loli.net/2018/12/11/5c0f5d927472d.jpeg',
        300,
        {
          x: 400,
          y: 500
        }
      )
      //当处理的图片数据量比较大时，可由后端来处理这个过程
      Promise.all([p1, p2]).then(images => {
        myChart.setOption({
          series: [
            {
              type: 'tree',
              orient: 'vertical', // 方向
              rootLocation: { y: 80 },
              nodePadding: 100,
              layerPadding: 200,
              symbolSize: 50,
              expandAndCollapse: false,
              itemStyle: {
                normal: {
                  borderColor: '#407CFE',
                  borderType: 'solid',
                  borderWidth: 1,
                  label: {
                    position: 'bottom',
                    textStyle: {
                      color: '#36484F',
                      fontSize: 12
                    }
                  },
                  lineStyle: {
                    color: '#ccc',
                    type: 'broken',
                    width: 1,
                    curveness: 0 // 曲度
                  }
                }
              },
              data: [
                {
                  name: 'Project Manager',
                  symbol: `image://${images[0]}`,
                  // label: {
                  //   position: 'top'
                  // },
                  children: [
                    {
                      name: 'Project Engineers',
                      symbol: `image://${images[1]}`,
                      children: [
                        {
                          name: 'HSSE Engineers',
                          symbol: `image://${images[0]}`,
                          children: [
                            {
                              name: 'Project Secretary',
                              symbol: `image://${images[1]}`
                            },
                            {
                              name: 'OA / QC Engineers',
                              symbol: `image://${images[0]}`
                            },
                            {
                              name: 'Lead Process Engineer',
                              symbol: `image://${images[1]}`
                            }
                          ]
                        },
                        {
                          name: 'Lead Mechanical',
                          symbol: `image://${images[0]}`,
                          children: [
                            {
                              name: 'Lead Electrical Engineer',
                              symbol: `image://${images[1]}`
                            }
                            // {
                            //   name: 'Lead I & C Engineer',
                            //   symbol: `image://${images[0]}`
                            // },
                            // {
                            //   name: 'Process Engineer',
                            //   symbol: `image://${images[1]}`
                            // },
                            // {
                            //   name: 'Mechanical Engineers',
                            //   symbol: `image://${images[0]}`
                            // }
                          ]
                        },
                        {
                          name: 'Electrical Engineers',
                          symbol: `image://${images[1]}`,
                          children: [
                            {
                              name: 'Lead Civil / Structure',
                              symbol: `image://${images[0]}`
                            }
                            // {
                            //   name: 'Pip / Pipeline Lead',
                            //   symbol: `image://${images[1]}`
                            // },
                            // {
                            //   name: 'Project Services Manager',
                            //   symbol: `image://${images[0]}`
                            // }
                          ]
                        },
                        {
                          name: 'Pip / Pipeline Designers',
                          symbol: `image://${images[0]}`
                        }
                        // {
                        //   name: 'Lead Civil / Structure Engineers',
                        //   symbol: `image://${images[1]}`
                        // },
                        // {
                        //   name: 'Stress Engineer',
                        //   symbol: `image://${images[0]}`
                        // }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        })
      })
      // 为echarts对象加载数据
      myChart.setOption(option)
    }
  }
  // destroyed() {
  //   //离开该页面需要移除这个监听的事件
  //   window.removeEventListener('scroll', this.tablePage)
  // }
}
</script>
<style lang="less" scoped>
//组织结构
.treechart {
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
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
    right: 20px;
    top: 70px;
  }
}
// 第一部分右侧
.listCount {
  float: right;
  width: 65%;
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
// 第二部分
.twocard {
  background-color: #fff;
  box-shadow: 0px 0px 13px 0px rgba(125, 141, 150, 0.19);
  margin-top: 10px;
  .title {
    border-bottom: 1px solid #e8e8e8;
    height: 35px;
    border-top: 10px solid #fff;
    box-sizing: border-box;
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
  }
}
// 第三部分
.twocardleft {
  width: 100%;
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
}
// 第四部分
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
// 列表下拉框出现的问题
/deep/ .el-table::before {
  height: 0 !important;
}
/deep/ .el-table__fixed::before {
  height: 0 !important;
}
</style>
