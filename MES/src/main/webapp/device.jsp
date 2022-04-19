<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import="dbcon.dbcon"%>
<%@ page import="java.io.BufferedReader"%>
<%@ page import="java.io.IOException"%>
<%@ page import="org.json.simple.JSONObject"%>
<%@ page import="org.json.simple.JSONValue"%>


<%
StringBuffer data = new StringBuffer();
BufferedReader in = null;
String inputLine;
boolean acceseflag = false;

// body 에서 데이터 수신 후 
try {
	in = request.getReader();

	while ((inputLine = in.readLine()) != null) {
		data.append(inputLine);
	}
	acceseflag = true;

} catch (IOException ex) {
	throw ex;
} finally {
	if (in != null) {
		try {
	in.close();
		} catch (IOException ex) {
	out.println(ex);
		}
	}
}
JSONObject rdata = new JSONObject();
String Message = "";
if(acceseflag){
	JSONObject json = null;
	json = (JSONObject) JSONValue.parse(data.toString());

	if(json.get("time")==null)
	{
		rdata.put("result","-1");
		Message += " time ";
	}
	if(json.get("facility")==null)
	{
		rdata.put("result","-1");
		Message += " facility ";
	}
	if(json.get("status")==null)
	{
		rdata.put("result","-1");
		Message += " status ";
	}
	if(json.get("status").equals("-1")){
		if(json.get("errorNo")==null)
		{
			rdata.put("result","-1");
			Message += " errorNo ";
		}
		if(json.get("errorMessage")==null)
		{
			rdata.put("result","-1");
			Message += " errorMessage ";
		}
	}else{
		dbcon db = new dbcon();
		db.insertMuchinstatus(json.get("facility").toString(),json.get("status").toString(),json.get("time").toString());
		
		rdata.put("result","0");
		out.println(rdata);
		return ;
	}
	if(rdata.get("result")=="-1"){
		rdata.put("message",("Param"+Message+"is missing"));
		out.println(rdata);
	}else{
		dbcon db = new dbcon();
		db.insertMuchinstatus(json.get("facility").toString(),json.get("status").toString(),json.get("errorNo").toString(),json.get("errorMessage").toString(),json.get("time").toString());
		
		rdata.put("result","0");
		out.println(rdata);
	}
}



%>