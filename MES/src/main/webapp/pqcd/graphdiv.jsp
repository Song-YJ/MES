<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.sql.DriverManager"%>
<%@ page import="java.sql.Connection"%>
<%@ page import="java.sql.Statement"%>
<%@ page import="java.sql.ResultSet"%>
<%@ page import="java.sql.SQLException"%>
<%@ page import="java.text.ParseException"%>
<%@ page import="java.text.SimpleDateFormat"%>
<%@ page import="java.util.Date"%>

<%
// 	데이터베이스 연결
	Class.forName("com.mysql.jdbc.Driver");
	Connection conn = null;
	Statement stmt = null;
	Statement stmt2 = null;
	ResultSet rs = null;
	ResultSet rs2 = null;
	String query= null;
	
	String jdbcDriver = "jdbc:mysql://192.168.0.115:3306/mes?" + "useUnicode=true&characterEncoding=utf8";
	String dbUser = "Usera";
	String dbPass = "1234";
	conn = DriverManager.getConnection(jdbcDriver, dbUser, dbPass);
	stmt = conn.createStatement();
	
	
	String date1 = request.getParameter("date1");
	String date2 = request.getParameter("date2");
	
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script type="text/javascript"
	src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
	crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.6.0.min.js" 
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
	crossorigin="anonymous">
    </script>
<title>Insert title here</title>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
</head>
<body>
<%
SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
query = "select count(*) from mes.order where order_date between '"+date1+"' and '"+date2+"'";
rs=stmt.executeQuery(query);

int count = 0;
if(rs.next()){
	count=rs.getInt(1);
}

String [][] array = new String[count+1][2];
array[0][0] = "";
array[0][1] = "납기준수일";

String [][] array2 = new String[count+1][2];
array2[0][0] = "";
array2[0][1] = "납기준수일";

query = "select * from mes.order where order_date between '"+date1+"' and '"+date2+"'";
rs=stmt.executeQuery(query);

int i=1;
while(rs.next()){
	array[i][0] = rs.getString("item_no");
	array2[i][0] = rs.getString("item_no");
	if(rs.getString("del_date")==null || rs.getString("del_date").equals("NULL")){
		array[i][1] = "X";
		array2[i][1] = "0";
	}
	else if(rs.getString("due_date")==null || rs.getString("due_date").equals("NULL")){
		Date FirstDate = format.parse(rs.getString("del_date").substring(0,10));
		Date now = new Date();
		Date SecondDate = format.parse(format.format(now));
		
		long diffDays = (FirstDate.getTime() - SecondDate.getTime()) / (1000*60*60*24);
		if(diffDays<0){
			array[i][1] = "입고예정일에서"+String.valueOf(diffDays*-1)+"일 지남";
			array2[i][1] = "0";
		}
		else{
			array[i][1] = "입고예정일까지"+String.valueOf(diffDays)+"일 남음";
			array2[i][1] = "0";
		}
		
	}
	else{
		Date FirstDate = format.parse(rs.getString("del_date").substring(0,10));
		Date SecondDate = format.parse(rs.getString("due_date").substring(0,10));
		
		long diffDays = (FirstDate.getTime() - SecondDate.getTime()) / (1000*60*60*24);
		array[i][1] = String.valueOf(diffDays);
		array2[i][1] = String.valueOf(diffDays);
	}
	i++;
}
%>

	<script type="text/javascript">
	var count = <%=count%>

	var array = new Array(count+1);
	for(var i=0;i<count+1;i++){
		array[i] = new Array(2);
	}

	<%
	for(i=0;i<count+1;i++){
		for(int j=0;j<2;j++){
	%>
	


	array[<%=i%>][<%=j%>] = '<%=array2[i][j]%>';


	<%      }
		}%>
		
		
		for(var i=0; i<count+1;i++){
			for(var j=0;j<2;j++){
				if(i!=0 && j!=0){
					array[i][j] = parseInt(array[i][j]);
				}
			}
		}
	
	
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable(array);

        var options = {
   	        
   	        vAxis:{maxValue:50},
        	bar: {groupWidth:"10%"},
        	title : ''
   	      };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
    </script>
   <div class="card">
		<div class="card-body" id="columnchart_material">
		
		</div>
	</div>
	
	<div class="card">
		<div class="card-body">
			<table class="table table-bordered table-hover" style="width:100%">
				<thead>
					<tr>
						<th>수주명</th>
						<th>납기 준수일</th>
						<th>납기 예정일</th>
						<th>납기 완료일</th>
					</tr>
				</thead>
				<tbody>
				<%
				query = "select * from mes.order where order_date between '"+date1+"' and '"+date2+"'";
				rs=stmt.executeQuery(query);
				
				i=1;
				while(rs.next()){
				%>
				<tr>
					<th><%=rs.getString("item_no") %></th>
					<th><%=array[i][1] %></th>
					<th><%=rs.getString("del_date")==null ? "" : rs.getString("del_date").substring(0,10) %></th>
					<th><%=rs.getString("due_date")==null ? "" : rs.getString("due_date").substring(0,10) %></th>
				</tr>
				
				<% i++; } %>
				</tbody>
			</table>
		</div>
	</div>
</body>
</html>