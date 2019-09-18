<template>
    <div >
        <span style="position:absolute;width:20%;top:50px;">-------------------------</span>
        <div style="width:95%;height:120px;overflow:hidden;position:relative;left:0;top:0;">
          <div ref="threepic" @mousedown="move" style="position:absolute;top:0;left:15%;width:120%;height:120px;"></div>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts'
import ecStat from 'echarts-stat'
export default {
  props:['onemile'],
  mounted() {
      console.log('onemile',this.onemile)
      this.$nextTick(()=>{
        this.milestone()
      })
  },
  methods: {
    move(e){
            let odiv = e.target;        //获取目标元素

            //算出鼠标相对元素的位置
            let disX = e.clientX - odiv.offsetLeft;
            // let disY = e.clientY - odiv.offsetTop;
            document.onmousemove = (e)=>{       //鼠标按下并移动的事件
                //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                let left = e.clientX - disX;    
                // let top = e.clientY - disY;

                //绑定元素位置到positionX和positionY上面
                this.positionX = top;
                // this.positionY = left;

                //移动当前元素
                odiv.style.left = left + 'px';
                // odiv.style.top = top + 'px';
            };
            document.onmouseup = (e) => {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        },    
    milestone() {
      let myChart = echarts.init(this.$refs.threepic)
      // app.title = '单轴散点图' Scatter on Single Axis
      var app = {}
      var option = null
      var data0 = [
        ['2019-07-13T00:00:00.000+0000', 0.5, 40000000, '里程碑1', 1990],
        ['2019-07-16T00:00:00.000+0000', 0.5, 40000000, '里程碑2', 1990],
        ['2019-07-19T00:00:00.000+0000', 0.5, 40000000, '里程碑3', 1990],
        ['2019-07-22T00:00:00.000+0000', 0.5, 40000000, '里程碑4', 1990],
        ['2019-07-25T00:00:00.000+0000', 0.5, 40000000, '里程碑5', 1990],
        ['2019-07-28T00:00:00.000+0000', 0.5, 40000000, '里程碑6', 1990],
        ['2019-07-31T00:00:00.000+0000', 0.5, 40000000, '里程碑7', 1990],
        ['2019-08-04T00:00:00.000+0000', 0.5, 40000000, '里程碑8', 1990],
        ['2019-08-07T00:00:00.000+0000', 0.5, 40000000, '里程碑9', 1990],
        ['2019-08-10T00:00:00.000+0000', 0.5, 40000000, '里程碑10', 1990]
      ]

      var data1 = [
        ['2019-07-13T00:00:00.000+0000', -0.5, 40000000, '里程碑1', 2015],
        ['2019-07-16T00:00:00.000+0000', -0.5, 40000000, '里程碑2', 2015],
        ['2019-07-19T00:00:00.000+0000', -0.5, 40000000, '里程碑3', 2015],
        ['2019-07-22T00:00:00.000+0000', -0.5, 40000000, '里程碑4', 2015],
        ['2019-07-25T00:00:00.000+0000', -0.5, 40000000, '里程碑5', 2015],
        ['2019-07-28T00:00:00.000+0000', -0.5, 40000000, '里程碑6', 2015],
        ['2019-07-31T00:00:00.000+0000', -0.5, 40000000, '里程碑7', 2015],
        ['2019-08-04T00:00:00.000+0000', -0.5, 40000000, '里程碑8', 2015],
        ['2019-08-07T00:00:00.000+0000', -0.5, 40000000, '里程碑9', 2015],
        ['2019-08-10T00:00:00.000+0000', -0.5, 40000000, '里程碑10', 2015]
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
        ['2019-08-20T00:00:00.000+0000', 0],
        ['2019-08-30T00:00:00.000+0000', 0],
        ['2019-09-10T00:00:00.000+0000', 0],
        ['2019-10-10T00:00:00.000+0000', 0],
        ['2019-11-10T00:00:00.000+0000', 0],
      ]
      var xdata =['2019-07-13T00:00:00.000+0000',
      '2019-07-16T00:00:00.000+0000',
      '2019-07-19T00:00:00.000+0000',
      '2019-07-22T00:00:00.000+0000',
      '2019-07-25T00:00:00.000+0000',
      '2019-07-28T00:00:00.000+0000',
      '2019-07-31T00:00:00.000+0000',
      '2019-08-04T00:00:00.000+0000',
      '2019-08-07T00:00:00.000+0000',
      '2019-08-20T00:00:00.000+0000',
      '2019-08-30T00:00:00.000+0000',
      '2019-09-10T00:00:00.000+0000',
      '2019-10-10T00:00:00.000+0000', 
      '2019-11-10T00:00:00.000+0000']
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
            // console.log('params', params)
            const item = params
            return `
                    自定义数据1：${item.data[3]}</br>
                    自定义数据2：${item.data[4]}
                   `
          },
          position: 'right',
        },
        grid: {
          top: 40,
          bottom: 40
        },
        xAxis: {
          type: 'time',
          show:true,
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
            show:false,
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
                position: 'left'
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.1)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                  {
                    offset: 0,
                    color: 'rgb(255, 165, 0)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(255, 165, 0)'
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
                position: 'left'
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.1)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                  {
                    offset: 0,
                    color: 'rgb(0, 0, 128)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(0, 0, 128)'
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
                position: 'left'
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.1)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                  {
                    offset: 0,
                    color: 'rgb(0, 128, 0)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(0, 128, 0)'
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
      myChart.setOption(option, true)
    }
  }
}
</script>
<style lang="less" scoped>
</style>