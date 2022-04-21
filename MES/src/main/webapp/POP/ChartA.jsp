<!--  
대시 보드 페이지 ajax 데이터 처리 입니다.
기능 : 일별 원형 차트 및 타임 라인 차트 표기
return : chart 1,2
@author : 양동빈 , fost008@gmail.com
@version 1
-->
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="dbcon.dbcon"%>
<%@ page import="java.util.ArrayList"%>

<!DOCTYPE html>
<html>
<%
dbcon db = new dbcon();
String val = request.getParameter("facilityname");
String date = request.getParameter("date");
long []data = db.chart_A(val,date);

dbcon db2 = new dbcon();
ArrayList<String> data2 = db2.chart_B(val, date);
%>
<head>

</head>
<body>
<div id="chart"></div>
<!--  원형 차트  -->
<script>
var options = {
        series: [<% out.print(Long.toString(data[2])+","+Long.toString(data[1])+","+Long.toString(data[0])+","+Long.toString(data[3])); %>],
        colors:['#92d050', '#ffc000', '#ff0000','#3399ff'],
        chart: {
        width: 370,
        type: 'pie',
      },
      labels: [<% out.print
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

<div id="chart2"></div>
<!--  타임 라인 차트  -->
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
  google.charts.load("current", {packages:["timeline"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var container = document.getElementById('chart2');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: 'string', id: 'Role' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'string', id: 'style', role: 'style' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
      <%
      for(int i = 0; i<data2.size(); i+=3){
    	  out.print("[ 'Time', ");
    	  if(data2.get(i)=="-100"){
    		  out.print("'NONE' , '#3399ff',");
    	  }else if(data2.get(i).equals("-1")){
    		  out.print("'ALARM' , '#ff0000',");
    	  }else if(data2.get(i).equals("0")){
    		  out.print("'STOP' , '#ffc000',");
    	  }else if(data2.get(i).equals("1")){
    		  out.print("'RUN' , '#92d050',");
    	  }
    	  out.print("new Date('"+ data2.get(i+1)+"'), new Date('"+data2.get(i+2)+"') ]");
    	  if(data2.size()-3 == i){
    		  out.println("");
    	  }else{
    		  out.println(",");
    	  }
      }
      %>
      ]);

    var options = {
      timeline: { groupByRowLabel: true }
    };

    chart.draw(dataTable, options);
  }
</script>
</body>
</html>