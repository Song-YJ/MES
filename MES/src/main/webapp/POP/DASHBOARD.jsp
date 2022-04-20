<!-- 업체관리 메인 jsp -->
<%@ page import="javax.security.auth.callback.ConfirmationCallback"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.io.PrintWriter"%>
<%@ page import="company.*"%>
<%@ page import="java.util.ArrayList"%>

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

<script
	src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.15.5/xlsx.full.min.js"></script>
<!-- apex차트 관련 임폴트 -->
<head>
<meta charset="UTF-8" />
    <meta name="viewport"
	content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link href="../../assets/styles.css" rel="stylesheet" />

    <style>
#chart {
	max-width: 380px;
	margin: 35px auto;
	padding: 0;
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
</head>


<body>
	<div class=title>업체 관리</div>

	<div class="panel panel-default border searchbox">
		<div class="panel-body">
			검색 &nbsp;&nbsp; <input type="date" class="form-control searchtitle"
				id="searchbox">
			<h5 class="panel-title" style="display: inline-block; float: right">(주)와이제이솔루션</h5>

			<script src="https://cdn.jsdelivr.net/npm/apexcharts">
				var pnum="1"
				var input="";
				
				$(document).ready(function(){
					//TableSetting();
				});
				function TableSetting(){
					$.ajax({
						type:"GET",
						url:"./companysearch.jsp",
				        data:{page:pnum},	// 페이지 데이터 넘김
				        dataType:"html",
				        success:function(data){
				            $("#companyt").html(data);	
						}	
					});
				}
				// 검색 처리
				$("#searchbox").on("keydown",function(e){	// 검색 창에 값이 입력됨에 따른 이벤트 처리
					if(e.keyCode==13){	// 엔터가 입력 됐을 때 
						input=$("#searchbox").val();
						
						$.ajax({
							type:"GET",
					        url:"./companysearch.jsp",
					        data:{page:"1", input:input},
					        dataType:"html",
					        success:function(data){
					            $("#companyt").html(data);
							}	
						});
					}
				});
				
			</script>

		</div>
	</div>

	<div class="row">
		<div class="panel panel-default border companylistbox col-md-6"
			style="width: 98vw">
			<div class="panel-heading">
				<h5 class="panel-title" style="display: inline-block;">DASHEBOARD</h5>

			</div>
			<div class="panel-body">
				<!-- 데이터 리스트 -->
				<div id="companyt">
				<div id="container">
				<div id="chart"></div>
				</div>
				<script>
      
        var options = {
          series: [44, 55, 41, 17, 15],
          chart: {
          type: 'donut',
        },
        responsive: [{
          breakpoint: 480,
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
				</div>
			</div>
		</div>
	</div>
</body>
</html>

