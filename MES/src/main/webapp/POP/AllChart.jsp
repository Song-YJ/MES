<!--  
��� ���� ������ ajax ������ ó�� �Դϴ�.
��� : ��� ��� �Ϻ� ���� ��Ʈ �� Ÿ�� ���� ��Ʈ ǥ��
return : chart 1,2
@author : �絿�� , fost008@gmail.com
@version 1
-->
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="dbcon.dbcon"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.Vector"%>

<!DOCTYPE html>
<html>

<head>
</head>
<style>

table {
	width: 100%;
	height: 200px;
	margin: 30px;
}

td {
	width: 30%;
	height: 30%;
	
}
</style>
<body>
<!--  �Ϻ� ���� ���� ���� ��Ʈ ��º� (��� ���)  
@author : �絿�� , fost008@gmail.com
@param : String data(���� ��¥) 
@return : ��� ���� ���� �������� ��Ʈ 

�ֿ� ���� : fac_list (��� ���� �̸�), fac_status_list (��� ���� ���� ����)
-->
	<%
	// �Ķ���� ���� ��
	String date = request.getParameter("date");//��¥ 
	
	// ��񿬰��
	dbcon dbcon_facility = new dbcon();
	
	// ��� ��� ���� �̸� �ҷ�����
	Vector<String> fac_list = dbcon_facility.dashboard_combobox();
	
	// ���� ��Ʈ ��ũ��Ʈ ����
	out.println("<script type=\"text/javascript\" src=\"https://www.gstatic.com/charts/loader.js\"></script>");
	
	// ���� ��� ������
	for (int i = 0; i < fac_list.size(); i++) {
		
		/*************************************HTML ���� ��*************************************/
		out.println("<div style = \" float:left; width: 20%; margin:1em;\">");
		out.println("<table>");

		out.println("<tr>");
		
		// �̹��� ���� �� [��ó : ��Ʈ��Ʈ�� �⺻ ������]
		out.println("<td rowspan = '3'> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90%\" height=\"90%\" fill=\"currentColor\" class=\"bi bi-motherboard\" viewBox=\"0 0 16 16\">"
		+"<path d=\"M11.5 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Zm2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Zm-10 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM5 3a1 1 0 0 0-1 1h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3Zm0 1h3v3H5V4Zm6.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2Z\"/>"
		+"<path d=\"M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2H1Zm1 11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11Z\"/>"
		+"</svg>");
		
		// �̸� ��
		out.println("</td>");
		out.println("<td><button class = \"name\">"+ fac_list.get(i)+"</button>");
		out.println("</td>");
		
		out.println("</tr>");
		out.println("<tr>");
		
		// ���� ���� ���� ����(%) ��
		out.println("<td> <button class = \"per\">99.6%</button>");
		out.println("</td>");
		
		out.println("</tr>");
		out.println("<tr>");
		
		// ���� ��� ���� ��
		out.println("<td> <button class = \"status_y\">���� ����</button>");
		out.println("</td>");
		
		
		out.println("</tr>");
		out.println("</table>");
		
		// ��Ʈ�� �׷��� div [���� ����]
		out.println("<div id=\"chart" + i + "\" ></div>");
		out.println("</div>");

		/*************************************��ũ��Ʈ ���� ��*************************************/
		
		// ��� ���� ��
		dbcon db2 = new dbcon();
		// ��񿡼� ��� ���� ���� ���� ���� �ҷ�����
		ArrayList<String> fac_status_list = db2.chart_B(fac_list.get(i), date);
		
		// �ϴ� ���� �κ� (��ũ��Ʈ)
		out.print(
		"<script type= \"  text/javascript \" > google.charts.load(\"current\", {packages:[\"timeline\"]}); google.charts.setOnLoadCallback(drawChart); function drawChart() { var container = document.getElementById('chart"
				+ i
				+ "'); var chart = new google.visualization.Timeline(container);					    var dataTable = new google.visualization.DataTable();					    dataTable.addColumn({ type: 'string', id: 'Role' });					    dataTable.addColumn({ type: 'string', id: 'Name' });					    dataTable.addColumn({ type: 'string', id: 'style', role: 'style' });					    dataTable.addColumn({ type: 'date', id: 'Start' });					    dataTable.addColumn({ type: 'date', id: 'End' });					    dataTable.addRows([");

		// ���� ������ ���� ��
		for (int j = 0; j < fac_status_list.size(); j += 3) {
			out.print("[ 'Time', ");
			if (fac_status_list.get(j) == "-100") {
		out.print("'NONE' , '#3399ff',");
			} else if (fac_status_list.get(j).equals("-1")) {
		out.print("'ALARM' , '#ff0000',");
			} else if (fac_status_list.get(j).equals("0")) {
		out.print("'STOP' , '#ffc000',");
			} else if (fac_status_list.get(j).equals("1")) {
		out.print("'RUN' , '#92d050',");
			}
			out.print("new Date('" + fac_status_list.get(j + 1) + "'), new Date('" + fac_status_list.get(j + 2) + "') ]");
			if (fac_status_list.size() - 3 == j) {
		out.println("");
			} else {
		out.println(",");
			}
		}
		
		// �ϴ� ���� �κ� (��ũ��Ʈ)
		out.print("]);  var options = { timeline: { groupByRowLabel: true }};chart.draw(dataTable, options);} </script> ");
		out.print("</div>");

	}
	%>
	


</body>
</html>