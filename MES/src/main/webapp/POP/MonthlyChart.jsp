<!--  
��� ���� ������ ajax ������ ó�� �Դϴ�.
��� : �޺� ���� ��Ʈ �� ���� ��Ʈ ǥ��
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

<!DOCTYPE html>
<html>
<%
dbcon db = new dbcon();
String val = request.getParameter("facilityname");
String date = request.getParameter("date");
String[] datesl = date.split("-");

//�ش� ������ ���� �ϼ��� ���ϴ� �κ�
Calendar cal = Calendar.getInstance();
cal.set(Integer.parseInt(datesl[0]), Integer.parseInt(datesl[1]) - 1, Integer.parseInt(datesl[2]));// ���� -1�� ���ִ� ������ 0���� 1���̱� ����.

//������ ���� ����
int maxday = cal.getActualMaximum(Calendar.DAY_OF_MONTH);

//��¥ �� �ش� �� 1�� �� ����
date = datesl[0] + "-" + datesl[1] + "-" + "01";

//Date ���� ����
SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
Date dayvalue = formatter.parse(date);

//chart 2�� ����� ������ �迭 �ʱ�ȭ
ArrayList<Long> chart2value = new ArrayList<Long>();
//chart 1�� ����� ������ �迭 �ʱ�ȭ
long[] chartAval = {0, 0, 0, 0};

//���� ��¥ ���� ��¥ ����
String startDate = db.get_log_startdate(val);
String endDate = db.get_log_enddate(val);
System.out.println(startDate);
System.out.println(endDate);

//���� ��¥ ���� ��¥ �� ���� ���� ��ȯ
Date daystart = formatter.parse(startDate);
Date dayend = formatter.parse(endDate);

//���� ��¥�� �ҷ����� ���� ����
int startdayval = -1;
int enddayval = 0;

//���� DB�� �����Ͽ� �����͸� �ҷ����� �κ�
for (int i = 0; i < maxday; i++) {
	if ((daystart.before(dayvalue) && dayend.after(dayvalue)) || dayvalue.equals(daystart) || dayvalue.equals(dayend)) {//�����Ͱ� �ִ� ���� ��ȸ 
		//���� ��Ʈ ������ ���� �� 
		long[] data2 = db.chart_A(val, formatter.format(dayvalue));
		chartAval[0] += data2[0];
		chartAval[1] += data2[1];
		chartAval[2] += data2[2];

		//���� ��Ʈ ������ ���� ��
		Double Dummy = Double.valueOf(data2[0]) + Double.valueOf(data2[1]) + Double.valueOf(data2[2]);// ������ %�� ��ȯ
		chart2value.add(Long.valueOf(Math.round((Double.valueOf(data2[0]) / Dummy) * 100)));
		chart2value.add(Long.valueOf(Math.round((Double.valueOf(data2[1]) / Dummy) * 100)));
		chart2value.add(Long.valueOf(Math.round((Double.valueOf(data2[2]) / Dummy) * 100)));
		if (startdayval == -1) {//������ ���� ������ ���� ������ ���� ����
			startdayval = i;
			enddayval = i;
		} else {
			enddayval = i;
		}
	}

	dayvalue.setDate(dayvalue.getDate() + 1);
}

// chart A�� �����ϴ� ����
long[] data = chartAval;
%>
<head>
<style>
table {
	width: 30%;
	height: 200px;
	margin: 30px;
}

td,th {
	width: 30%;
	height: 30%;
	text-align: center;
}
</style>
</head>
<body>
	<table style = "vertical-align:top;float:left; text-align: center;margin-left:250px;">
	<tr>
	<th>Time</th>
	<th><% out.print(Long.toString((data[0]+data[1]+data[2])/60/60)+"h "+Long.toString((data[0]+data[1]+data[2])/60%60)+"m"); %></th>
	</tr>
	<tr>
	<td>Ratio</td>
	<td><% out.print(Long.toString(data[2] / 60 / 60) + "h " + Long.toString(data[2] / 60 % 60) + "m"); %></td>
	</tr>
	<tr>
	<td>Date</td>
	<td><% out.print(formatter.format(daystart) +"~"+ formatter.format(dayend)); %></td>
	</tr>
	</table>
	<div id="chart" style = "vertical-align:top;float:right; margin-right:250px;"></div>

	<!--  ���� ��Ʈ  -->
	<script>
var options = {
        series: [<%// ���� ��Ʈ �׷��� ������ ���� �� 
// data[0] : ALARM
// data[1] : STOP
// data[2] : RUN
out.print(Long.toString(data[2]) + "," + Long.toString(data[1]) + "," + Long.toString(data[0]));%>],
        colors:['#92d050', '#ffc000', '#ff0000'],
        chart: {
        width: 370,
        type: 'pie',
      },
      labels: [<%// ���� ��Ʈ ����Ʈ ������ ���� �� 
// data[0] : ALARM
// data[1] : STOP
// data[2] : RUN
out.print("'RUN " + Long.toString(data[2] / 60 / 60) + "h " + Long.toString(data[2] / 60 % 60) + "m'" + "," + "'STOP "
		+ Long.toString(data[1] / 60 / 60) + "h " + Long.toString(data[1] / 60 % 60) + "m'" + "," + "'ALARM "
		+ Long.toString(data[0] / 60 / 60) + "h " + Long.toString(data[0] / 60 % 60) + "m'");%>],
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

	<!-- ���� ��Ʈ -->

	<div id="chart2" style = "margin-bottom:400px;"></div>

	<script>
      
        var options = {
          series: [{
            name: "ALRAM",
            <%out.print("data: [");
for (int i = 0; i < chart2value.size(); i += 3) {
	out.print(chart2value.get(i));
	if (i < chart2value.size()) {
		out.print(",");
	}
}
out.println("]");%>
          },
          {
            name: "STOP",
            <%out.print("data: [");
for (int i = 1; i < chart2value.size(); i += 3) {
	out.print(chart2value.get(i));
	if (i < chart2value.size()) {
		out.print(",");
	}
}
out.println("]");%>
          },
          {
            name: 'RUN',
            <%out.print("data: [");
			for (int i = 2; i < chart2value.size(); i += 3) {
				out.print(chart2value.get(i));
				if (i < chart2value.size()) {
					out.print(",");
				}
			}
			out.println("]");%>
          }
        ],
        colors:['#ff0000', '#ffc000', '#92d050'],
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
          width: [3, 3, 3],
          curve: 'straight',
          dashArray: [0, 0, 0]
        },
        title: {// ��Ʈ ���� 
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
            <%// ���� �� ���� ���� ��
			System.out.println(startdayval + " d " + enddayval);
			for (int i = startdayval; i <= enddayval; i++) {
				out.print("'" + (i + 1) + " " + dayvalue.getMonth() + "��'");
				if (i < maxday) {
					out.print(",");

				}
			}%>
          ],
        },
        //���콺�� �׷����� ������ ��� ������ ���� �κ�
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + " (%)"
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val + " (%)"
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val + " (%)"
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