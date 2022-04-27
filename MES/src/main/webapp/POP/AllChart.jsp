<!--  
대시 보드 페이지 ajax 데이터 처리 입니다.
기능 : 모든 기기 일별 원형 차트 및 타임 라인 차트 표기
return : chart 1,2
@author : 양동빈 , fost008@gmail.com
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
<!--  일별 설비 상태 파이 차트 출력부 (모든 기기)  
@author : 양동빈 , fost008@gmail.com
@param : String data(현재 날짜) 
@return : 모든 설비 일일 상태정보 차트 

주요 변수 : fac_list (모든 설비 이름), fac_status_list (모든 설비 상태 정보)
-->
	<%
	// 파라메터 수집 부
	String date = request.getParameter("date");//날짜 
	
	// 디비연결부
	dbcon dbcon_facility = new dbcon();
	
	// 디비 모든 설비 이름 불러오기
	Vector<String> fac_list = dbcon_facility.dashboard_combobox();
	
	// 에펙 차트 스크립트 선언
	out.println("<script type=\"text/javascript\" src=\"https://www.gstatic.com/charts/loader.js\"></script>");
	
	// 설비 목록 구현부
	for (int i = 0; i < fac_list.size(); i++) {
		
		/*************************************HTML 구현 부*************************************/
		out.println("<div style = \" float:left; width: 20%; margin:1em;\">");
		out.println("<table>");

		out.println("<tr>");
		
		// 이미지 삽입 부 [출처 : 부트스트랩 기본 아이콘]
		out.println("<td rowspan = '3'> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90%\" height=\"90%\" fill=\"currentColor\" class=\"bi bi-motherboard\" viewBox=\"0 0 16 16\">"
		+"<path d=\"M11.5 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Zm2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Zm-10 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM5 3a1 1 0 0 0-1 1h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3Zm0 1h3v3H5V4Zm6.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2Z\"/>"
		+"<path d=\"M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2H1Zm1 11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11Z\"/>"
		+"</svg>");
		
		// 이름 행
		out.println("</td>");
		out.println("<td><button class = \"name\">"+ fac_list.get(i)+"</button>");
		out.println("</td>");
		
		out.println("</tr>");
		out.println("<tr>");
		
		// 일일 설비 가동 상태(%) 행
		out.println("<td> <button class = \"per\">99.6%</button>");
		out.println("</td>");
		
		out.println("</tr>");
		out.println("<tr>");
		
		// 현재 기기 상태 행
		out.println("<td> <button class = \"status_y\">가동 중지</button>");
		out.println("</td>");
		
		
		out.println("</tr>");
		out.println("</table>");
		
		// 차트를 그려줄 div [동적 생성]
		out.println("<div id=\"chart" + i + "\" ></div>");
		out.println("</div>");

		/*************************************스크립트 구현 부*************************************/
		
		// 디비 연결 문
		dbcon db2 = new dbcon();
		// 디비에서 모든 설비 일일 상태 정보 불러오기
		ArrayList<String> fac_status_list = db2.chart_B(fac_list.get(i), date);
		
		// 하단 공통 부분 (스크립트)
		out.print(
		"<script type= \"  text/javascript \" > google.charts.load(\"current\", {packages:[\"timeline\"]}); google.charts.setOnLoadCallback(drawChart); function drawChart() { var container = document.getElementById('chart"
				+ i
				+ "'); var chart = new google.visualization.Timeline(container);					    var dataTable = new google.visualization.DataTable();					    dataTable.addColumn({ type: 'string', id: 'Role' });					    dataTable.addColumn({ type: 'string', id: 'Name' });					    dataTable.addColumn({ type: 'string', id: 'style', role: 'style' });					    dataTable.addColumn({ type: 'date', id: 'Start' });					    dataTable.addColumn({ type: 'date', id: 'End' });					    dataTable.addRows([");

		// 실제 데이터 삽입 부
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
		
		// 하단 공통 부분 (스크립트)
		out.print("]);  var options = { timeline: { groupByRowLabel: true }};chart.draw(dataTable, options);} </script> ");
		out.print("</div>");

	}
	%>
	


</body>
</html>