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
		out.println("<div style = \" float:left; width: 20%; margin: 50px;\">");
		out.println("<table>");
		out.println("<tr>");
		out.println("<th colspan= '2' style=\"font-size:18px\">"+fac_list.get(i)+"</th>");
		out.println("</tr>");
		out.println("<tr>");

		// �̹��� ���� �� 
		out.println("<td rowspan = '3'> <button style = \"width:120%;height:100%;background-color:transparent;\"  onClick= \" btnchartevent(' "+ fac_list.get(i) + "') \" >"
		+"<img src=\"machin.png\" width=\"100%\" height=\"100%\" "
		+" </button>");
		//notactive
		String now_status = dbcon_facility.get_facility_status(fac_list.get(i));
		// �̸� ��
		out.println("</td>");
		out.print("<td><button class = ");
		if (!now_status.equals("1")) {
			out.print("\" notactive");
		}else{
			out.print("\" name");
		}
		
		out.println("\"></button>");
		out.println("</td>");

		out.println("</tr>");
		out.println("<tr>");

		// ���� ���� ���� ����(%) ��
		out.print("<td> <button class = ");
		if (!now_status.equals("0")) {
			out.print("\" notactive");
		}else{
			out.print("\" per");
		}
		out.println("\"></button>");
		out.println("</td>");

		out.println("</tr>");
		out.println("<tr>");

		// ���� ��� ���� ��
		out.print("<td> <button class = ");
		if (!now_status.equals("-1")) {
			out.print("\" notactive");
		}else{
			out.print("\" status_y");
		}
		out.println("\"></button>");
		out.println("</td>");

		out.println("</tr>");
		out.println("</table>");
		
		// ��� ���� ��
		dbcon db2 = new dbcon();
		// ��񿡼� ��� ���� ���� ���� ���� �ҷ�����
		ArrayList<String> fac_status_list = db2.chart_B(fac_list.get(i), date);
		
		// �ش� ��¥�� ��� ���� ���� ���� ��� ��Ʈ ������������.
		if (fac_status_list.size() > 4) {
		out.println("<div id=\"chart" + i + "\" style = \"margin-left:30px;width:113%; \" ></div>");
		}
		out.println("</div>");

		/*************************************��ũ��Ʈ ���� ��*************************************/

		if (fac_status_list.size() > 4) {// �׷��� ǥ�� �б���.
			// ��Ʈ�� �׷��� div [���� ����]
			
			// �ϴ� ���� �κ� (��ũ��Ʈ)
			out.print(
			"<script type= \"  text/javascript \" > google.charts.load(\"current\", {packages:[\"timeline\"]}); google.charts.setOnLoadCallback(drawChart); function drawChart() { var container = document.getElementById('chart"
					+ i
					+ "'); var chart = new google.visualization.Timeline(container);					    var dataTable = new google.visualization.DataTable();					    dataTable.addColumn({ type: 'string', id: 'Role' });					    dataTable.addColumn({ type: 'string', id: 'Name' });					    dataTable.addColumn({ type: 'string', id: 'style', role: 'style' });					    dataTable.addColumn({ type: 'date', id: 'Start' });					    dataTable.addColumn({ type: 'date', id: 'End' });					    dataTable.addRows([");

			// ���� ������ ���� ��
			for (int j = 0; j < fac_status_list.size(); j += 3) {

		if (fac_status_list.get(j) != "-100") {
			out.print("[ 'Time', ");
		}
		if (fac_status_list.get(j).equals("-1")) {
			out.print("'ALARM' , '#ff0000',");
		} else if (fac_status_list.get(j).equals("0")) {
			out.print("'STOP' , '#ffc000',");
		} else if (fac_status_list.get(j).equals("1")) {
			out.print("'RUN' , '#92d050',");
		}
		if (fac_status_list.get(j) != "-100") {
			out.print("new Date('" + fac_status_list.get(j + 1) + "'), new Date('" + fac_status_list.get(j + 2)
					+ "') ]");
			if (fac_status_list.size() - 3 == j) {
				out.println("");
			} else {
				out.println(",");
			}
		}

			}

			// �ϴ� ���� �κ� (��ũ��Ʈ)
			out.print(
			"]);  var options = { timeline: { groupByRowLabel: true }};chart.draw(dataTable, options);} </script> ");
			out.print("</div>");
		}

	}
	%>



</body>
</html>