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
<%@ page import="java.util.Calendar"%>
<%@ page import="java.util.Locale"%>

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

// ���� ��¥ ���� ��¥ ����
String startDate = db.get_log_startdate(val);
String endDate = db.get_log_enddate(val);

// ���� ��¥ ���� ��¥ �� ���� ���� ��ȯ
Date daystart = formatter.parse(startDate);
Date dayend = formatter.parse(endDate);
// ��¥ ���� ���� ����
ArrayList<String> datename = new ArrayList<String>();

//���� ��¥�� �ҷ����� ���� ����
int startdayval = -1;
int enddayval = 0;


// ������ �� �� ������������
dayvalue.setDate(dayvalue.getDate()-6);
// ���� ��Ʈ �� ����׷��� ������ �ҷ����� �κ�
for(int i = 0;i<7;i++){
	System.out.println("���� ��");
	
	// ���� ��¥ ���� ��¥ ��
	if(daystart.before(dayvalue) && dayend.after(dayvalue)||dayvalue.equals(daystart)||dayvalue.equals(dayend) ){
		// �ð� ��Ī ���� ��
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(dayvalue);
		datename.add(calendar.getDisplayName(Calendar.DAY_OF_WEEK, Calendar.SHORT, Locale.US));
		
		//���� ��Ʈ ������ ���� ��
		long []data2 = db.chart_A(val,formatter.format(dayvalue));
		chartAval[0]+=data2[0];
		chartAval[1]+=data2[1];
		chartAval[2]+=data2[2];
		
		//���� ��Ʈ ������ ���� ��
		Double Dummy = Double.valueOf(data2[0]) + Double.valueOf(data2[1]) + Double.valueOf(data2[2]);// ������ %�� ��ȯ
		chart2value.add(Long.valueOf(Math.round((Double.valueOf(data2[0])/Dummy) * 100)));
		chart2value.add(Long.valueOf(Math.round((Double.valueOf(data2[1])/Dummy) * 100)));
		chart2value.add(Long.valueOf(Math.round((Double.valueOf(data2[2])/Dummy) * 100)));
		if (startdayval == -1) {//������ ���� ������ ���� ������ ���� ����
			startdayval = i;
			enddayval = i;
		} else {
			enddayval = i;
		}
	}
	
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
        out.print(Long.toString(data[2])+","+Long.toString(data[1])+","+Long.toString(data[0])); 
        %>],
        colors:['#92d050', '#ffc000', '#ff0000'],
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
           "'ALARM "+Long.toString(data[0]/60/60)+"h "+Long.toString(data[0]/60%60)+"m'"
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
          for(int i = 2;i<chart2value.size();i += 3){
          	out.print(chart2value.get(i));
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
          for(int i = 1;i<chart2value.size();i += 3){
          	out.print(chart2value.get(i));
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
            for(int i = 0;i<chart2value.size();i += 3){
            	out.print(chart2value.get(i));
            	if(i<chart2value.size()){
            		out.print(",");
            	}
            }
            out.println("]");
            %>
          }
        ],
        colors:['#92d050', '#ffc000', '#ff0000'],
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
          width: 3,
          colors: ['transparent']
        },
        xaxis: {
          categories: [
        	  <%
        	  for(int i = 0; i<datename.size();i++){
        		  out.print("'"+datename.get(i)+"'");
        		  if(i<datename.size()-1){
        			  out.print(",");
        		  }
        	  }
        	  %>
        	  ],
        },
        yaxis: {
          title: {
            text: 'Time (%)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return  val + " %"
            }
          }
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart2"), options);
        chart.render();
      
      
</script>
</body>
</html>