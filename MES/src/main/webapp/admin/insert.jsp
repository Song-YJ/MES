<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ page import="java.sql.DriverManager"%>
<%@ page import="java.sql.Connection"%>
<%@ page import="java.sql.Statement"%>
<%@ page import="java.sql.ResultSet"%>
<%@ page import="java.sql.SQLException"%>


<!-- 데이터베이스 연결 -->
<%
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
String submitcheck = request.getParameter("submitcheck");

String user_id = request.getParameter("user_id");
String user_pw = request.getParameter("user_pw");
String user_name = request.getParameter("user_name");
String first_position = request.getParameter("first_position");
String second_position = request.getParameter("second_position");
String third_position = request.getParameter("third_position");
String phone = request.getParameter("phone");
String email = request.getParameter("email");
String note = request.getParameter("note");
String state = request.getParameter("state");
String use_yn = request.getParameter("use_yn");

if(user_id.equals("")){
	response.sendRedirect("user_management.jsp");
}
else{
	if(submitcheck.equals("1")){
		
		query = "update user set user_pw='"+user_pw+"', user_name='"+user_name+"',first_position='"+first_position+"',second_position='"+second_position+"',third_position='"+third_position+"',phone='"+phone+"',email='"+email+"',note='"+note+"',state='"+state+"',use_yn='"+use_yn+"' where user_id='"+user_id+"'";
	}
	else{
		query = "insert into user (user_id,user_pw,user_name,first_position,second_position,third_position,phone,email,note,state,use_yn,barcode,service) values('"+user_id+"','"+user_pw+"','"+user_name+"','"+first_position+"','"+second_position+"','"+third_position+"','"+phone+"','"+email+"','"+note+"','"+state+"','"+use_yn+"','',null)";
	}
	
	try{
		stmt.executeUpdate(query);
		response.sendRedirect("user_management.jsp");
	}catch(Exception e){
		out.println("<script>alert('이미있는 사용자ID 입니다.');document.location.href='user_management.jsp';</script>");
		System.out.println(e);
	}
	
}

%>
</body>
</html>