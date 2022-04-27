<!--  
대시 보드 페이지 ajax 데이터 처리 입니다.
기능 : 달별 원형 차트 및 라인 차트 표기
return : chart 1,2
@author : 양동빈 , fost008@gmail.com
@version 1
-->
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="dbcon.dbcon"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.Date"%>
<%@ page import="java.text.SimpleDateFormat"%>
<%@ page import="java.util.Calendar"%>

<!DOCTYPE html>
<html>
<%
dbcon db = new dbcon();
String val = request.getParameter("facilityname");
String date = request.getParameter("date");
String[] datesl = date.split("-");

//해당 일자의 월말 일수를 구하는 부분
Calendar cal = Calendar.getInstance();
cal.set(Integer.parseInt(datesl[0]),Integer.parseInt(datesl[1])-1,Integer.parseInt(datesl[2]));// 월에 -1을 해주는 이유는 0월이 1월이기 때문.

//월말일 저장 변수
int maxday = cal.getActualMaximum(Calendar.DAY_OF_MONTH);

//날짜 값 해당 달 1일 로 변경
date = datesl[0]+"-"+datesl[1]+"-"+"01";

//Date 포맷 생성
SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
Date dayvalue = formatter.parse(date);

//chart 2에 사용할 데이터 배열 초기화
ArrayList<Long> chart2value = new ArrayList<Long>();
//chart 1에 사용할 데이터 배열 초기화
long []chartAval = {0,0,0,0};

//실제 DB에 연결하여 데이터를 불러오는 부분
for(int i = 0;i<maxday;i++){
	long []data2 = db.chart_A(val,formatter.format(dayvalue));
	chartAval[0]+=data2[0];
	chartAval[1]+=data2[1];
	chartAval[2]+=data2[2];
	chartAval[3]+=data2[3];
	
	chart2value.add(data2[0]);
	chart2value.add(data2[1]);
	chart2value.add(data2[2]);
	chart2value.add(data2[3]);
	
	dayvalue.setDate(dayvalue.getDate()+1);
}

// chart A에 삽입하는 변수
long []data = chartAval;


%>
<head>

</head>
<body>
<div id="chart"></div>
<!--  원형 차트  -->
<script>
var options = {
        series: [<%
                 // 원형 차트 그래프 데이터 구현 부 
                 // data[0] : ALARM
                 // data[1] : STOP
                 // data[2] : RUN
                 // data[3] : NULL
                 out.print(Long.toString(data[2])+","+Long.toString(data[1])+","+Long.toString(data[0])+","+Long.toString(data[3])); %>],
        colors:['#92d050', '#ffc000', '#ff0000','#3399ff'],
        chart: {
        width: 370,
        type: 'pie',
      },
      labels: [<%               
               // 원형 차트 리스트 데이터 구현 부 
               // data[0] : ALARM
               // data[1] : STOP
               // data[2] : RUN
               // data[3] : NULL
          out.print
          ("'RUN "+Long.toString(data[2]/60/60)+"h "+Long.toString(data[2]/60%60)+"m'"+","+
           "'STOP "+Long.toString(data[1]/60/60)+"h "+Long.toString(data[1]/60%60)+"m'"+","+
           "'ALARM "+Long.toString(data[0]/60/60)+"h "+Long.toString(data[0]/60%60)+"m'"+","+
           "'NONE "+Long.toString(data[3]/60/60)+"h "+Long.toString(data[3]/60%60)+"m'"
		  ); %>],
      responsive: [{
        breakpoint: 100,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
      };

      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
</script>

<!-- 월간 차트 -->

     <div id="chart2"></div>

<script>
      
        var options = {
          series: [{
            name: "ALRAM",
            <%
            out.print("data: [");
            for(int i = 0;i<chart2value.size();i += 4){
            	out.print(chart2value.get(i)/60/60);
            	if(i<chart2value.size()){
            		out.print(",");
            	}
            }
            out.println("]");
            %>
          },
          {
            name: "STOP",
            <%
            out.print("data: [");
            for(int i = 1;i<chart2value.size();i += 4){
            	out.print(chart2value.get(i)/60/60);
            	if(i<chart2value.size()){
            		out.print(",");
            	}
            }
            out.println("]");
            %>
          },
          {
            name: 'RUN',
            <%
            out.print("data: [");
            for(int i = 2;i<chart2value.size();i += 4){
            	out.print(chart2value.get(i)/60/60);
            	if(i<chart2value.size()){
            		out.print(",");
            	}
            }
            out.println("]");
            %>
          },
          {
              name: 'NONE',
              <%
              out.print("data: [");
              for(int i = 3;i<chart2value.size();i += 4){
              	out.print(chart2value.get(i)/60/60);
              	if(i<chart2value.size()){
              		out.print(",");
              	}
              }
              out.println("]");
              %>
          }
        ],
        colors:['#ff0000', '#ffc000', '#92d050','#3399ff'],
          chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [3, 3, 3, 3],
          curve: 'straight',
          dashArray: [0, 0, 0, 0]
        },
        title: {// 차트 제목 
          text: 'Monthly Operating Ratio (h)',
          align: 'left'
        },
        legend: {
          tooltipHoverFormatter: function(val, opts) {
            return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
          }
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: [
            <%
            // 가로 축 단위 설명 부
            for(int i=0;i<maxday;i++){
            	out.print("'"+(i+1)+" "+dayvalue.getMonth()+"월'");
            	if(i<maxday){
            		out.print(",");
            	}
            }
            %>
          ],
        },
        //마우스를 그래프에 가져다 대면 나오는 툴팁 부분
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + " (hour)"
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val + " (hour)"
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val + " (hour)"
                }
              }
            },
            {
                title: {
                  formatter: function (val) {
                    return val + " (hour)"
                  }
                }
            }
          ]
        },
        grid: {
          borderColor: '#f1f1f1',
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart2"), options);
        chart.render();
      
      
    </script>
</body>
</html>