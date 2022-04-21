<!--  
대시 보드 페이지 입니다.
기능 : POP 회원일 경우 들어올 수 있으며 기계 설비의 상태 정보를 일별로 확인 가능합니다.

@author : 양동빈 , fost008@gmail.com
@version 0.4
work list
1. 주,달 별 조회화면 작성
2. 일별 모든 기계 리스트 조회 화면 작성.
-->
<%@ page import="javax.security.auth.callback.ConfirmationCallback"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.io.PrintWriter"%>
<%@ page import="company.*"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="dbcon.dbcon"%>
<%@ page import="java.util.Vector"%>
<%@ page import="java.util.Date"%>
<%@ page import="java.text.SimpleDateFormat"%>



<style>
@import url(https://fonts.googleapis.com/css?family=Roboto);

body {
	font-family: Roboto, sans-serif;
}

#chart {
	max-width: 650px;
	margin: 35px auto;
}
</style>

<jsp:useBean id="companyDAO" class="company.companyDAO" scope="page" />
<!DOCTYPE html>
<html>
<head>
<% 
		request.setCharacterEncoding("UTF-8");
	%>

<meta charset="UTF-8">
<!--jquery-->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"
	integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
	crossorigin="anonymous"></script>

<!--bootstrap-->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
<link rel="stylesheet" href="companycontent.css?ver02">
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>

<script type="text/javascript"
	src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
<script type="text/javascript"
	src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
<script type="text/javascript"
	src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
<link rel="stylesheet" type="text/css"
	href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />

<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.15.5/xlsx.full.min.js"></script>
<!-- apex차트 관련 임폴트 -->
    <link href="../../assets/styles.css" rel="stylesheet" />
    <style>
      
        #chart {
      padding: 0;
      max-width: 380px;
      margin: 35px auto;
    }
      
    </style>
    <script>
      window.Promise ||
        document.write(
          '<script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"><\/script>'
        )
      window.Promise ||
        document.write(
          '<script src="https://cdn.jsdelivr.net/npm/eligrey-classlist-js-polyfill@1.2.20171210/classList.min.js"><\/script>'
        )
      window.Promise ||
        document.write(
          '<script src="https://cdn.jsdelivr.net/npm/findindex_polyfill_mdn"><\/script>'
        )
    </script>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script>
      // Replace Math.random() with a pseudo-random number generator to get reproducible results in e2e tests
      // Based on https://gist.github.com/blixt/f17b47c62508be59987b
      var _seed = 42;
      Math.random = function() {
        _seed = _seed * 16807 % 2147483647;
        return (_seed - 1) / 2147483646;
      };
    </script>
<!-- apex차트 관련 종료 -->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

</head>


<body>
	<div class=title>DASHBOARD</div>

	<div class="panel panel-default border searchbox">
		<div class="panel-body">
			검색 &nbsp;&nbsp; <select name="mode" class="form-control searchtitle" id = "target" >
				<option value="NONE">==선택==</option>
				<%
				dbcon cbbox = new dbcon();
				Vector<String> M_combobox =cbbox.dashboard_combobox();
				
				for(int i = 0;i<M_combobox.size();i++){
					out.println("<option value=\""+M_combobox.get(i)+"\">"+M_combobox.get(i)+"</option>");
				}
				%>
				</select>
			<h5 class="panel-title" style="display: inline-block; float: right">(주)와이제이솔루션</h5>


		</div>
	</div>

	<div class="row">
		<div class="panel panel-default border companylistbox col-md-6"
			style="width: 98vw">
			<div class="panel-heading">
				<h5 class="panel-title" style="display: inline-block;">Report</h5>

			</div>
			<div class="panel-body">
				<!-- 데이터 리스트 -->
				<div id="companyt">
				<div id="container">
				<div style="text-align:center">
				<select name="mode" class="form-control searchtitle" style="float:right">
				<option value="day">Daily</option>
				<option value="Week">Weekly</option>
				<option value="Month">Monthly</option>
				</select>
				<%
				Date now = new Date();
				SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
				%>
				<input type="date" id="date" class="form-control searchtitle" value="<% out.print(format.format(now)); %>"style="float:right">
				</div>
				<p>Machine</p>
				
				

				
				<div id="test"></div>


				</div>

				</div>
			</div>
		</div>
	</div>
</body>
<script>
// 검색 조건 시 차트 표현
// @param : faciliry , date
	$('#target').change(function() {
		$.ajax({
			url : "ChartA.jsp",
			data : {
				facilityname : $('#target').val(),
				date : $('#date').val()
			},
			datatype : "html",
			type : "POST",
			success : function(data) {
				$("#test").html(data);
			},
			error : function() {
				alert('error');			
			}
		});
	});
</script>
</html>

