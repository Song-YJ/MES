<!--  
��� ���� ������ ajax ������ ó�� �Դϴ�.
��� : �ֺ� ���� ��Ʈ �� ����׷����� �ְ� ��Ʈ ǥ��
return : chart 1,2
@author : �絿�� , fost008@gmail.com
@version 1
-->
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="dbcon.dbcon"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.Date"%>
<%@ page import="java.text.SimpleDateFormat"%>

<!DOCTYPE html>
<html>
<%
/****************���� �� *****************/
dbcon db = new dbcon();
String val = request.getParameter("facilityname");
String date = request.getParameter("date");
SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
Date dayvalue = formatter.parse(date);
ArrayList<Long> chart2value = new ArrayList<Long>();// ���� �׷��� ������ 
long []chartAval = {0,0,0,0};


// ���� ��Ʈ �� ����׷��� ������ �ҷ����� �κ�
for(int i = 0;i<7;i++){
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


long []data = chartAval;// ���� ��Ʈ ������


%>
<head>

</head>
<body>
<div id="chart"></div>
<!--  ���� ��Ʈ  -->
<script>
var options = {
        series: [
        <%
        // ���� ��Ʈ �׷��� ������ ���� ��
        // data[0] : ALARM
        // data[1] : STOP
        // data[2] : RUN
        // data[3] : NULL
        out.print(Long.toString(data[2])+","+Long.toString(data[1])+","+Long.toString(data[0])+","+Long.toString(data[3])); 
        %>],
        colors:['#92d050', '#ffc000', '#ff0000','#3399ff'],
        chart: {
        width: 370,
        type: 'pie',
      },
      labels: [<%
               // ���� ��Ʈ ����Ʈ ������ ���� �� 
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

<!-- �ְ� ��Ʈ -->

					<div id="chart2" style="float: left;"></div>

<script>
        var options = {
          series: [{
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
        }, {
          name: 'STOP',
          
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
        }, {
            name: 'ALARM',
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
          }, {
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
        }],
        colors:['#92d050', '#ffc000', '#ff0000','#3399ff'],
          chart: {
          type: 'bar',
          height: 250,
          width: '600%'
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '60%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 4,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yaxis: {
          title: {
            text: 'Time (24h)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " hour"
            }
          }
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart2"), options);
        chart.render();
      
      
</script>
</body>
</html>