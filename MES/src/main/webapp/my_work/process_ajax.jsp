<!-- 부품에 따른 공정 옵션 값 -->

<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ page import="java.sql.DriverManager"%>
<%@ page import="java.sql.Connection"%>
<%@ page import="java.sql.Statement"%>
<%@ page import="java.sql.ResultSet"%>
<%@ page import="java.sql.SQLException"%>

<%
// 	데이터베이스 연결
	Class.forName("com.mysql.jdbc.Driver");
	Connection conn = null;
	Statement stmt = null;
	ResultSet rs = null;
	String query= null;
	
	String jdbcDriver = "jdbc:mysql://192.168.0.115:3306/mes?" + "useUnicode=true&characterEncoding=utf8";
	String dbUser = "Usera";
	String dbPass = "1234";
	conn = DriverManager.getConnection(jdbcDriver, dbUser, dbPass);
	stmt = conn.createStatement();
	
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Insert title here</title>
</head>
<body>
<%
String part = request.getParameter("part");
query="select * from order_process where part_name='"+part+"' order by process_name asc";
rs=stmt.executeQuery(query);
%>
<option value="">--선택--</option>
<%
while(rs.next()){
%>
<option value="<%=rs.getString("process_name")%>"><%=rs.getString("process_name")%></option>
<%} 
rs.close();
stmt.close();
conn.close();
%>
</body>
</html>