package dbcon;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Vector;

import java.sql.Statement;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;

public class dbcon {
	Connection con = null;
	String url = "jdbc:mysql://192.168.0.0115:3306/mes?" + "useUnicode=true&characterEncoding=utf8";
	String id = "Usera";
	String pw = "1234";
	int degree = 1;
	int inet_id = 1;

	public dbcon() {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}

	public void dbconnect() {
		try {
			con = DriverManager.getConnection(url, id, pw);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public Vector<estimatedb> estimatetable() {
		Vector<estimatedb> v = new Vector<estimatedb>();
		try {
			dbconnect();
			String sql = "select et_id, degree, et_com_id, et_price, et_date, et_explain from estimate order by et_id desc";
			PreparedStatement pstmt = con.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				estimatedb es = new estimatedb();
				es.setEt_id(rs.getString("et_id"));
				es.setDegree(rs.getInt("degree"));
				es.setEt_com_name(rs.getString("et_com_id"));
				es.setEt_price(rs.getInt("et_price"));
				es.setEt_date(rs.getString("et_date"));
				String et_explain = rs.getString("et_explain");
				et_explain = et_explain.replace("\r\n", "!@#");
				es.setEt_explain(et_explain);
				v.add(es);
			}
			rs.close();
			pstmt.close();
			con.close();
			return v;
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}

	public Vector<estimatedb> searchestimatetable(String searchword, String startdate, String enddate) {
		Vector<estimatedb> v = new Vector<estimatedb>();
		try {
			dbconnect();
			String sql = "";
			if (startdate != null && enddate != null) {
				sql = "select et_id, degree, et_com_id, et_price, et_explain, et_date from estimate where et_com_id like ? and et_date between ? and ? order by et_id desc";
				PreparedStatement pstmt = con.prepareStatement(sql);
				pstmt.setString(1, "%" + searchword + "%");
				pstmt.setString(2, startdate);
				pstmt.setString(3, enddate + " 23:59:59");
				ResultSet rs = pstmt.executeQuery();
				while (rs.next()) {
					estimatedb es = new estimatedb();
					es.setEt_id(rs.getString("et_id"));
					es.setDegree(rs.getInt("degree"));
					es.setEt_com_name(rs.getString("et_com_id"));
					es.setEt_price(rs.getInt("et_price"));
					es.setEt_date(rs.getString("et_date"));
					String et_explain = rs.getString("et_explain");
					et_explain = et_explain.replace("\r\n", "!@#");
					es.setEt_explain(et_explain);
					v.add(es);
				}
				rs.close();
				pstmt.close();
				con.close();
			} else {
				sql = "select et_id, degree, et_com_id, et_price, et_explain, et_date from estimate where et_com_id like ? order by et_id desc";
				PreparedStatement pstmt = con.prepareStatement(sql);
				pstmt.setString(1, "%" + searchword + "%");
				ResultSet rs = pstmt.executeQuery();
				while (rs.next()) {
					estimatedb es = new estimatedb();
					es.setEt_id(rs.getString("et_id"));
					es.setDegree(rs.getInt("degree"));
					es.setEt_com_name(rs.getString("et_com_id"));
					es.setEt_price(rs.getInt("et_price"));
					es.setEt_date(rs.getString("et_date"));
					String et_explain = rs.getString("et_explain");
					et_explain = et_explain.replace("\r\n", "!@#");
					es.setEt_explain(et_explain);
					v.add(es);
				}
				rs.close();
				pstmt.close();
				con.close();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return v;
	}

	public Vector<estimatedb> degreesearchestimatetable(String searchword, String startdate, String enddate) {
		Vector<estimatedb> v = new Vector<estimatedb>();
		try {
			dbconnect();
			if (startdate != null && enddate != null) {
				String sql = "select et_id, max(degree), et_com_id, et_price, et_date, et_explain from estimate where et_com_id like ? and et_date between ? and ? group by et_id order by et_id desc";
				PreparedStatement pstmt = con.prepareStatement(sql);
				pstmt.setString(1, "%" + searchword + "%");
				pstmt.setString(2, startdate);
				pstmt.setString(3, enddate + " 23:59:59");
				ResultSet rs = pstmt.executeQuery();
				while (rs.next()) {
					estimatedb es = new estimatedb();
					es.setEt_id(rs.getString("et_id"));
					es.setDegree(rs.getInt("max(degree)"));
					es.setEt_com_name(rs.getString("et_com_id"));
					es.setEt_price(rs.getInt("et_price"));
					es.setEt_date(rs.getString("et_date"));
					String et_explain = rs.getString("et_explain");
					et_explain = et_explain.replace("\r\n", "!@#");
					es.setEt_explain(et_explain);
					v.add(es);
				}
				rs.close();
				pstmt.close();
				con.close();
			} else {
				String sql = "select et_id, max(degree), et_com_id, et_price, et_date, et_explain from estimate where et_com_id like ? group by et_id order by et_id desc";
				PreparedStatement pstmt = con.prepareStatement(sql);
				pstmt.setString(1, "%" + searchword + "%");
				ResultSet rs = pstmt.executeQuery();
				while (rs.next()) {
					estimatedb es = new estimatedb();
					es.setEt_id(rs.getString("et_id"));
					es.setDegree(rs.getInt("max(degree)"));
					es.setEt_com_name(rs.getString("et_com_id"));
					es.setEt_price(rs.getInt("et_price"));
					es.setEt_date(rs.getString("et_date"));
					String et_explain = rs.getString("et_explain");
					et_explain = et_explain.replace("\r\n", "!@#");
					es.setEt_explain(et_explain);
					v.add(es);
				}
				rs.close();
				pstmt.close();
				con.close();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return v;
	}

	public void insertestimate(String et_id, String et_com_name, int et_price, String et_explain,
			String[] materialarray, String[] material_no) {
		try {
			dbconnect();
			String sql = "insert into estimate(et_id, et_com_id, degree, et_price, et_explain, et_date) values(?, ?, ?, ?, ?, sysdate())";
			String idsql = "select et_id from estimate order by et_id desc";
			String matersql = "insert into materials_et values(?, ?, ?, ?)";
			PreparedStatement pstmt = con.prepareStatement(idsql);
			ResultSet rs = pstmt.executeQuery();
			if (et_id == "") {
				if (rs.next()) {
					inet_id = rs.getInt("et_id") + 1;
				}
			} else {
				String degreesql = "select et_id, degree from estimate where et_id = " + et_id
						+ " order by degree desc";
				pstmt = con.prepareStatement(degreesql);
				rs = pstmt.executeQuery();
				rs.next();
				inet_id = rs.getInt("et_id");
				degree = rs.getInt("degree");
				degree += 1;
			}
			rs.close();
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, inet_id);
			pstmt.setString(2, et_com_name);
			pstmt.setInt(3, degree);
			pstmt.setInt(4, et_price);
			pstmt.setString(5, et_explain);
			pstmt.executeUpdate();
			pstmt.close();
			con.close();
			if (materialarray != null && material_no != null) {
				dbconnect();
				PreparedStatement pstmt2 = con.prepareStatement(matersql);
				for (int i = 0; i < materialarray.length; i++) {
					pstmt2.setInt(1, inet_id);
					pstmt2.setInt(2, degree);
					pstmt2.setString(3, materialarray[i]);
					pstmt2.setString(4, material_no[i]);
					pstmt2.executeUpdate();
				}
				pstmt2.close();
				con.close();
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public void insertproc_cost(String[] standard_proc, String[] et_start, String[] et_end, String[] md,
			String[] cost) {
		try {
			if (standard_proc != null) {
				dbconnect();
				String sql = "insert into proc_cost values(?, ?, ?, ?, ?, ?, ?)";
				PreparedStatement pstmt = con.prepareStatement(sql);
				pstmt.setInt(1, inet_id);
				pstmt.setInt(2, degree);
				for (int i = 0; i < standard_proc.length; i++) {
					pstmt.setString(3, standard_proc[i]);
					pstmt.setString(4, et_start[i]);
					pstmt.setString(5, et_end[i]);
					pstmt.setString(6, md[i]);
					pstmt.setString(7, cost[i]);
					pstmt.executeUpdate();
				}
				pstmt.close();
				con.close();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void insertother_cost(String[] other_et_id, String[] othercost) {
		try {
			if (other_et_id != null) {
				dbconnect();
				String sql = "insert into other_cost(et_id, degree, other_et_id, cost) values(?, ?, ?, ?)";
				PreparedStatement pstmt = con.prepareStatement(sql);
				pstmt.setInt(1, inet_id);
				pstmt.setInt(2, degree);
				for (int i = 0; i < other_et_id.length; i++) {
					pstmt.setString(3, other_et_id[i]);
					pstmt.setString(4, othercost[i]);
					pstmt.executeUpdate();
				}
				pstmt.close();
				con.close();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public Vector<String> selectcomname() {
		Vector<String> v = new Vector<String>();
		try {
			dbconnect();
			String sql = "select com_name from company";
			PreparedStatement pstmt = con.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				v.add(rs.getString("com_name"));
			}
			rs.close();
			pstmt.close();
			con.close();
			return v;
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}

	/*
	 * public String comnametocomid(String com_name) { try { dbconnect(); String sql
	 * = "select com_id from company where com_name = '" + com_name + "'";
	 * PreparedStatement pstmt = con.prepareStatement(sql); ResultSet rs =
	 * pstmt.executeQuery(); rs.next(); String com_id = rs.getString("com_id");
	 * rs.close(); pstmt.close(); con.close(); return com_id; } catch (SQLException
	 * e) { e.printStackTrace(); } return null; }
	 * 
	 * public String comidtocomname(String com_id) { try { dbconnect(); String sql =
	 * "select com_name from company where com_id = '" + com_id + "'";
	 * PreparedStatement pstmt = con.prepareStatement(sql); ResultSet rs =
	 * pstmt.executeQuery(); rs.next(); String com_name = rs.getString("com_name");
	 * rs.close(); pstmt.close(); con.close(); return com_name; } catch
	 * (SQLException e) { e.printStackTrace(); } return null; }
	 */

	public void deleteestimate(String et_id, String degree) {
		try {
			dbconnect();
			String sql = "delete from estimate where et_id=? and degree = ?";
			String sql2 = "delete from materials_et where et_id = ? and degree = ?";
			String sql3 = "delete from proc_cost where et_id = ? and degree = ?";
			String sql4 = "delete from other_cost where et_id = ? and degree = ?";
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, Integer.parseInt(et_id));
			pstmt.setInt(2, Integer.parseInt(degree));
			pstmt.executeUpdate();
			pstmt = con.prepareStatement(sql2);
			pstmt.setInt(1, Integer.parseInt(et_id));
			pstmt.setInt(2, Integer.parseInt(degree));
			pstmt.executeUpdate();
			pstmt = con.prepareStatement(sql3);
			pstmt.setInt(1, Integer.parseInt(et_id));
			pstmt.setInt(2, Integer.parseInt(degree));
			pstmt.executeUpdate();
			pstmt = con.prepareStatement(sql4);
			pstmt.setInt(1, Integer.parseInt(et_id));
			pstmt.setInt(2, Integer.parseInt(degree));
			pstmt.executeUpdate();

			pstmt.close();
			con.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public Vector<String> selectmaterialname() {
		Vector<String> v = new Vector<String>();
		try {
			dbconnect();
			String sql = "select materials_name from materials";
			PreparedStatement pstmt = con.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				v.add(rs.getString("materials_name"));
			}
			rs.close();
			pstmt.close();
			con.close();
			return v;
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}

 	public Vector<material_etdb> getmaterial_etdb(String et_id, String degree) {
		Vector<material_etdb> v = new Vector<material_etdb>();
		try {
			dbconnect();
			String sql = "select materials_no, quantity from materials_et where et_id = ? and degree = ?";
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setString(1, et_id);
			pstmt.setInt(2, Integer.parseInt(degree));
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				material_etdb me = new material_etdb();
				me.setMaterials_no(rs.getString("materials_no"));
				me.setQuantity(rs.getString("quantity"));
				v.add(me);
			}
			rs.close();
			pstmt.close();
			con.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return v;
	}

	public Vector<String> selectprocname() {
		Vector<String> v = new Vector<String>();
		try {
			dbconnect();
			String sql = "select process_name from process";
			PreparedStatement pstmt = con.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				v.add(rs.getString("process_name"));
			}
			rs.close();
			pstmt.close();
			con.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return v;
	}

	public Vector<proc_costdb> getproc_costdb(String et_id, String degree) {
		Vector<proc_costdb> v = new Vector<proc_costdb>();
		try {
			dbconnect();
			String sql = "select standard_proc, et_start, et_end, MD, cost from proc_cost where et_id = ? and degree = ?";
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setString(1, et_id);
			pstmt.setString(2, degree);
			ResultSet rs = pstmt.executeQuery(); 
			while (rs.next()) {
				proc_costdb pc = new proc_costdb();
				pc.setStandard_proc(rs.getString("standard_proc"));
				pc.setEt_start(rs.getString("et_start"));
				pc.setEt_end(rs.getString("et_end"));
				pc.setMd(rs.getInt("md"));
				pc.setCost(rs.getInt("cost"));
				v.add(pc);
			}
			rs.close();
			pstmt.close();
			con.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return v;
	}

	public Vector<other_costdb> getother_cost(String et_id, String degree) {
		Vector<other_costdb> v = new Vector<other_costdb>();
		try {
			dbconnect();
			String sql = "select other_et_id, cost from other_cost where et_id = ? and degree = ?";
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setString(1, et_id);
			pstmt.setString(2, degree);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				other_costdb oc = new other_costdb();
				oc.setOther_et_id(rs.getString("other_et_id"));
				oc.setCost(rs.getString("cost"));
				v.add(oc);
			}
			rs.close();
			pstmt.close();
			con.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return v;
	}

	public Vector<estimatedb> degreetable() {
		Vector<estimatedb> v = new Vector<estimatedb>();
		try {
			dbconnect();
			String sql = "select et_id, max(degree), et_com_id, et_price, et_date, et_explain from estimate group by et_id order by et_id desc";
			PreparedStatement pstmt = con.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				estimatedb es = new estimatedb();
				es.setEt_id(rs.getString("et_id"));
				es.setDegree(rs.getInt("max(degree)"));
				es.setEt_com_name(rs.getString("et_com_id"));
				es.setEt_price(rs.getInt("et_price"));
				es.setEt_date(rs.getString("et_date"));
				String et_explain = rs.getString("et_explain");
				et_explain = et_explain.replace("\r\n", "!@#");
				es.setEt_explain(et_explain);
				v.add(es);
			}
			rs.close();
			pstmt.close();
			con.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return v;
	}

	public Vector<String> selectother() {
		Vector<String> v = new Vector<String>();
		try {
			dbconnect();
			String sql = "select sub_code from code_sub where main_code = '기타견적'";
			PreparedStatement pstmt = con.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				v.add(rs.getString("sub_code"));
			}
			rs.close();
			pstmt.close();
			con.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return v;
	}

	// -----------------------facilities-----------------------------------
	public Vector<facilitiesdb> facilitiestable() {
		Vector<facilitiesdb> v = new Vector<facilitiesdb>();
		try {
			dbconnect();
			String sql = "select facilities_name, facilities_status, pay, mes.facilities.using, using_all_day, facilities_start, facilities_end from facilities";
			PreparedStatement pstmt = con.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				facilitiesdb fc = new facilitiesdb();
				fc.setFacilities_name(rs.getString("facilities_name"));
				fc.setFacilities_status(rs.getString("facilities_status"));
				fc.setPay(rs.getString("pay"));
				fc.setUsing(rs.getString(4));
				fc.setUsing_all_day(rs.getString("using_all_day"));
				fc.setFacilities_start(rs.getString("facilities_start"));
				fc.setFacilities_end(rs.getString("facilities_end"));
				v.add(fc);
			}
			rs.close();
			pstmt.close();
			con.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return v;
	}

	public Vector<String> selectfacilities_status() {
		Vector<String> v = new Vector<String>();
		try {
			dbconnect();
			String sql = "select sub_code from code_sub where main_code = '설비현황'";
			PreparedStatement pstmt = con.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				v.add(rs.getString("sub_code"));
			}
			rs.close();
			pstmt.close();
			con.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return v;
	}

	public void insertfacilities(String fn, String fs, String pay, String using, String uad, String fst, String fe) {
		try {
			dbconnect();
			String check = "select facilities_name from facilities where facilities_name = ?";
			String updatesql = "update facilities set facilities_status = ?, pay = ?, mes.facilities.using = ?, using_all_day = ?, facilities_start = ?, facilities_end = ? where facilities_name = ?";
			String insertsql = "insert into facilities values(?, ?, ?, ?, ?, ?, ?)";
			String insertft = "insert into facility_time(facility_name, status, f_time) values (?, ?, sysdate())";
			PreparedStatement pstmt = con.prepareStatement(check);
			PreparedStatement pstmt2 = con.prepareStatement(updatesql);
			PreparedStatement pstmt3 = con.prepareStatement(insertsql);
			PreparedStatement pstmt4 = con.prepareStatement(insertft);
			pstmt.setString(1, fn);
			ResultSet rs = pstmt.executeQuery();
			if (rs.next()) {
				pstmt2.setString(1, fs);
				pstmt2.setString(2, pay);
				pstmt2.setString(3, using);
				pstmt2.setString(4, uad);
				pstmt2.setString(5, fst);
				pstmt2.setString(6, fe);
				pstmt2.setString(7, fn);
				pstmt2.executeUpdate();
			}
			else {
				pstmt3.setString(1, fn);
				pstmt3.setString(2, fs);
				pstmt3.setString(3, pay);
				pstmt3.setString(4, using);
				pstmt3.setString(5, uad);
				pstmt3.setString(6, fst);
				pstmt3.setString(7, fe);
				pstmt3.executeUpdate();
			}
			pstmt4.setString(1, fn);
			pstmt4.setString(2, fs);
			pstmt4.executeUpdate();
			
			rs.close();
			pstmt.close();
			pstmt2.close();
			pstmt3.close();
			pstmt4.close();
			con.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void deletefacilities(String fn) {
		try {
			dbconnect();
			String sql = "delete from facilities where facilities_name = ?";
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setString(1, fn);
			pstmt.executeUpdate();
			pstmt.close();
			con.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public Vector<facilitiesdb> searchfacilities(String search) {
		Vector<facilitiesdb> v = new Vector<facilitiesdb>();
		try {
			dbconnect();
			String sql = "select facilities_name, facilities_status, pay, mes.facilities.using, using_all_day, facilities_start, facilities_end from facilities where facilities_name like ?";
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setString(1, "%" + search + "%");
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				facilitiesdb fc = new facilitiesdb();
				fc.setFacilities_name(rs.getString("facilities_name"));
				fc.setFacilities_status(rs.getString("facilities_status"));
				fc.setPay(rs.getString("pay"));
				fc.setUsing(rs.getString(4));
				fc.setUsing_all_day(rs.getString("using_all_day"));
				fc.setFacilities_start(rs.getString("facilities_start"));
				fc.setFacilities_end(rs.getString("facilities_end"));
				v.add(fc);
			}
			rs.close();
			pstmt.close();
			con.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return v;
	}
	//---------------------------place_order-------------------
	public Vector<manage_porderdb> manage_porderdbtable(){
		Vector<manage_porderdb> v = new Vector<manage_porderdb>();
		try {
			dbconnect();
			String sql = "select m_no, part_name, order_name, number_of_request, type from manage_porder";
			PreparedStatement pstmt = con.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				manage_porderdb mp = new manage_porderdb();
				mp.setM_no(rs.getInt("m_no"));
				mp.setPart_name(rs.getString("part_name"));
				if(rs.getString("order_name") == null) {
					mp.setOrder_name("");
				}
				else {
					mp.setOrder_name(rs.getString("order_name"));
				}
				mp.setNumber_of_request(rs.getInt("number_of_request"));
				mp.setType(rs.getString("type"));
				v.add(mp);
			}
			rs.close();
			pstmt.close();
			con.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return v;
	}
	public Vector<manage_porderdb> searchmanage_porder(String searchpartname){
		Vector<manage_porderdb> v = new Vector<manage_porderdb>();
		try {
			dbconnect();
			String sql = "select m_no, part_name, order_name, number_of_request, type from manage_porder where part_name like ?";
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setString(1, "%"+searchpartname+"%");	
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				manage_porderdb mp = new manage_porderdb();
				mp.setM_no(rs.getInt("m_no"));
				mp.setPart_name(rs.getString("part_name"));
				if(rs.getString("order_name") == null) {
					mp.setOrder_name("");
				}
				else {
					mp.setOrder_name(rs.getString("order_name"));
				}
				mp.setNumber_of_request(rs.getInt("number_of_request"));
				mp.setType(rs.getString("type"));
				v.add(mp);
			}
			rs.close();
			pstmt.close();
			con.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return v;
	}
	
	public Vector<manage_porderdb> searchmanage_porder2(String searchpartname, String searchorder){
		Vector<manage_porderdb> v = new Vector<manage_porderdb>();
		try {
			dbconnect();
			String sql = "select m_no, part_name, order_name, number_of_request, type from manage_porder where part_name like ? and order_name like ?";
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setString(1, "%"+searchpartname+"%");
			pstmt.setString(2, "%"+searchorder+"%");	
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				manage_porderdb mp = new manage_porderdb();
				mp.setM_no(rs.getInt("m_no"));
				mp.setPart_name(rs.getString("part_name"));
				if(rs.getString("order_name") == null) {
					mp.setOrder_name("");
				}
				else {
					mp.setOrder_name(rs.getString("order_name"));
				}
				mp.setNumber_of_request(rs.getInt("number_of_request"));
				mp.setType(rs.getString("type"));
				v.add(mp);
			}
			rs.close();
			pstmt.close();
			con.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return v;
	}
	
	public void insertplace_order(String[] partname, String[] type, String[] nor, String com, String place, String[] price, String note){		
		try {
			dbconnect();
			String sql = "insert into place_order(part_name, type, "
					+ "number_of_request, porder_company, p_date, receiving_day, receiving_status, place_of_delivery, unit_price, note) values"
					+ "(?, ?, ?, ?, sysdate(), null, 'N', ?, ?, ?)";
			PreparedStatement pstmt = con.prepareStatement(sql);
			for(int i=0; i<partname.length; i++) {
				pstmt.setString(1, partname[i]);
				pstmt.setString(2, type[i]);
				pstmt.setString(3, nor[i]);
				pstmt.setString(4, com);
				pstmt.setString(5, place);
				pstmt.setInt(6, Integer.parseInt(price[i]));
				pstmt.setString(7, note);
				pstmt.executeUpdate();
			}
			pstmt.close();
			con.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public void deletemanage_porder(String[] m_no) {
		try {
			dbconnect();
			String sql = "delete from manage_porder where m_no = ?";
			PreparedStatement pstmt = con.prepareStatement(sql);
			for(int i=0; i<m_no.length; i++) {
				pstmt.setString(1, m_no[i]);
				pstmt.executeUpdate();
			}
			pstmt.close();
			con.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
	//------------------------------------pminquiry----------------------------------
	
	public Vector<pmdb> pmtable(){
		Vector<pmdb> v = new Vector<pmdb>();
		try {
			dbconnect();
			String sql = "select part_type, part_name, unit_price, stock, safety_stock from part";
			String sql2 = "select materials_name, unit_price, stock, safety_stock from materials";
			PreparedStatement pstmt = con.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				pmdb pm = new pmdb();
				pm.setType(rs.getString("part_type"));
				pm.setPm_name(rs.getString("part_name"));
				pm.setPrice(rs.getString("unit_price"));
				pm.setStock(rs.getString("stock"));
				pm.setSafety_stock(rs.getString("safety_stock"));
				v.add(pm);
			}
			pstmt = con.prepareStatement(sql2);
			rs = pstmt.executeQuery();
			while(rs.next()) {
				pmdb pm = new pmdb();
				pm.setType("자재");
				pm.setPm_name(rs.getString("materials_name"));
				pm.setPrice(rs.getString("unit_price"));
				pm.setStock(rs.getString("stock"));
				pm.setSafety_stock(rs.getString("safety_stock"));
				v.add(pm);
			}
			rs.close();
			pstmt.close();
			con.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return v;
	}
	
	public Vector<String> selecttype() {
		Vector<String> v = new Vector<String>();
		try {
			dbconnect();
			String sql = "select sub_code from code_sub where main_code = '부품구분'";
			PreparedStatement pstmt = con.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				v.add(rs.getString("sub_code"));
			}
			rs.close();
			pstmt.close();
			con.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return v;
	}
	
	public Vector<pmdb> searchpm(String searchtype, String searchpmname, String check){
		Vector<pmdb> v = new Vector<pmdb>();
		try {
			dbconnect();
			String sql = "";
			PreparedStatement pstmt;
			if(searchtype.equals("전체") && Integer.parseInt(check) == 0) {
				sql = "select part_type, part_name, unit_price, stock, safety_stock from part where part_name like ?";
				pstmt = con.prepareStatement(sql);
				pstmt.setString(1, "%"+searchpmname+"%");
				ResultSet rs = pstmt.executeQuery();
				while(rs.next()) {
					pmdb pm = new pmdb();
					pm.setType(rs.getString("part_type"));
					pm.setPm_name(rs.getString("part_name"));
					pm.setPrice(rs.getString("unit_price"));
					pm.setStock(rs.getString("stock"));
					pm.setSafety_stock(rs.getString("safety_stock"));
					v.add(pm);
				}
				sql = "select materials_name, unit_price, stock, safety_stock from materials where materials_name like ?";
				pstmt = con.prepareStatement(sql);
				pstmt.setString(1, "%"+searchpmname+"%");
				rs = pstmt.executeQuery();
				while(rs.next()) {
					pmdb pm = new pmdb();
					pm.setType("자재");
					pm.setPm_name(rs.getString("materials_name"));
					pm.setPrice(rs.getString("unit_price"));
					pm.setStock(rs.getString("stock"));
					pm.setSafety_stock(rs.getString("safety_stock"));
					v.add(pm);
				}
				rs.close();
				pstmt.close();
				con.close();
			}
			else if(searchtype.equals("전체") && Integer.parseInt(check) == 1) {
				sql = "select part_type, part_name, unit_price, stock, safety_stock from part where part_name like ? and stock < safety_stock";
				pstmt = con.prepareStatement(sql);
				pstmt.setString(1, "%"+searchpmname+"%");
				ResultSet rs = pstmt.executeQuery();
				while(rs.next()) {
					pmdb pm = new pmdb();
					pm.setType(rs.getString("part_type"));
					pm.setPm_name(rs.getString("part_name"));
					pm.setPrice(rs.getString("unit_price"));
					pm.setStock(rs.getString("stock"));
					pm.setSafety_stock(rs.getString("safety_stock"));
					v.add(pm);
				}
				sql = "select materials_name, unit_price, stock, safety_stock from materials where materials_name like ? and stock < safety_stock";
				pstmt = con.prepareStatement(sql);
				pstmt.setString(1, "%"+searchpmname+"%");
				rs = pstmt.executeQuery();
				while(rs.next()) {
					pmdb pm = new pmdb();
					pm.setType("자재");
					pm.setPm_name(rs.getString("materials_name"));
					pm.setPrice(rs.getString("unit_price"));
					pm.setStock(rs.getString("stock"));
					pm.setSafety_stock(rs.getString("safety_stock"));
					v.add(pm);
				}
				rs.close();
				pstmt.close();
				con.close();
			}
			else if(searchtype.equals("자재") && Integer.parseInt(check) == 0) {
				sql = "select materials_name, unit_price, stock, safety_stock from materials where materials_name like ?";
				pstmt = con.prepareStatement(sql);
				pstmt.setString(1, "%"+searchpmname+"%");
				ResultSet rs = pstmt.executeQuery();
				while(rs.next()) {
					pmdb pm = new pmdb();
					pm.setType("자재");
					pm.setPm_name(rs.getString("materials_name"));
					pm.setPrice(rs.getString("unit_price"));
					pm.setStock(rs.getString("stock"));
					pm.setSafety_stock(rs.getString("safety_stock"));
					v.add(pm);
				}
				rs.close();
				pstmt.close();
				con.close();
			}
			else if(searchtype.equals("자재") && Integer.parseInt(check) == 1) {
				sql = "select materials_name, unit_price, stock, safety_stock from materials where materials_name like ? and stock < safety_stock";
				pstmt = con.prepareStatement(sql);
				pstmt.setString(1, "%"+searchpmname+"%");
				ResultSet rs = pstmt.executeQuery();
				while(rs.next()) {
					pmdb pm = new pmdb();
					pm.setType("자재");
					pm.setPm_name(rs.getString("materials_name"));
					pm.setPrice(rs.getString("unit_price"));
					pm.setStock(rs.getString("stock"));
					pm.setSafety_stock(rs.getString("safety_stock"));
					v.add(pm);
				}
				rs.close();
				pstmt.close();
				con.close();
			}
			else if(Integer.parseInt(check) == 0) {
				sql = "select part_type, part_name, unit_price, stock, safety_stock from part where part_name like ? and part_type = ?";
				pstmt = con.prepareStatement(sql);
				pstmt.setString(1, "%"+searchpmname+"%");
				pstmt.setString(2, searchtype);
				ResultSet rs = pstmt.executeQuery();
				while(rs.next()) {
					pmdb pm = new pmdb();
					pm.setType(rs.getString("part_type"));
					pm.setPm_name(rs.getString("part_name"));
					pm.setPrice(rs.getString("unit_price"));
					pm.setStock(rs.getString("stock"));
					pm.setSafety_stock(rs.getString("safety_stock"));
					v.add(pm);
				}
				rs.close();
				pstmt.close();
				con.close();
			}
			else if(Integer.parseInt(check) == 1) {
				sql = "select part_type, part_name, unit_price, stock, safety_stock from part where part_name like ? and part_type = ? and stock < safety_stock";
				pstmt = con.prepareStatement(sql);
				pstmt.setString(1, "%"+searchpmname+"%");
				pstmt.setString(2, searchtype);
				ResultSet rs = pstmt.executeQuery();
				while(rs.next()) {
					pmdb pm = new pmdb();
					pm.setType(rs.getString("part_type"));
					pm.setPm_name(rs.getString("part_name"));
					pm.setPrice(rs.getString("unit_price"));
					pm.setStock(rs.getString("stock"));
					pm.setSafety_stock(rs.getString("safety_stock"));
					v.add(pm);
				}
				rs.close();
				pstmt.close();
				con.close();
			}
			else {
				sql = "select part_type, part_name, unit_price, stock, safety_stock from part";
				pstmt = con.prepareStatement(sql);
				ResultSet rs = pstmt.executeQuery();
				while(rs.next()) {
					pmdb pm = new pmdb();
					pm.setType(rs.getString("part_type"));
					pm.setPm_name(rs.getString("part_name"));
					pm.setPrice(rs.getString("unit_price"));
					pm.setStock(rs.getString("stock"));
					pm.setSafety_stock(rs.getString("safety_stock"));
					v.add(pm);
				}
				rs.close();
				pstmt.close();
				con.close();
			}

		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return v;
	}
	//-------------------------------dashboardorder------------------------
	public Vector<String> selectorder() {
		Vector<String> v = new Vector<String>();
		try {
			dbconnect();
			String sql = "select item_no from mes.order";
			PreparedStatement pstmt = con.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				v.add(rs.getString("item_no"));
			}
			rs.close();
			pstmt.close();
			con.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return v;
	}
	public String orderprice(String order_name) {
		String price = "";
		try {
			dbconnect();
			String sql = "select order_price from mes.order where item_no = ?";
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setString(1, order_name);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				price = rs.getString("order_price");
			}
			rs.close();
			pstmt.close();
			con.close();
		}	
		catch(Exception e) {
			e.printStackTrace();
		}
		return price;	
	}
	
	public Vector<orderproc_cost> proctable(String order_name){
		Vector<orderproc_cost> v = new Vector<orderproc_cost>();
		try {
			dbconnect();
			String sql = "select process, sum(timestampdiff(minute, work_start, work_end)), pay, no_men_processing_time from my_work, process where my_work.process = process.process_name and status='완료' and order_name = ? group by process";
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setString(1, order_name);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()){
				orderproc_cost oc = new orderproc_cost();
				double time = Math.round(0.01666666*rs.getDouble("sum(timestampdiff(minute, work_start, work_end))")*10/10.0);
				time += rs.getInt("no_men_processing_time");
				oc.setProc_name(rs.getString("process"));
				oc.setTime(time);
				oc.setPay(rs.getInt("pay"));
				oc.setTotalpay((int) time * rs.getInt("pay"));
				v.add(oc);
			}
			rs.close();
			pstmt.close();
			con.close();
		}
		catch(Exception e) { 
			e.printStackTrace();
		}
		return v;
	}
	
	public Vector<ordercosts> procordertable(String order_name){
		Vector<ordercosts> v = new Vector<ordercosts>();
		try {
			dbconnect();
			String sql = "select process, sum(price) from outsourcing where orders_name = ? group by process";
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setString(1, order_name);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()){
				ordercosts oc = new ordercosts();
				oc.setName(rs.getString("process"));
				oc.setPay(rs.getInt("sum(price)"));
				v.add(oc);
			}
			rs.close();
			pstmt.close();
			con.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return v;
	}
	
	public Vector<ordercosts> companyordertable(String order_name){
		Vector<ordercosts> v = new Vector<ordercosts>();
		try {
			dbconnect();
			String sql = "select company, sum(price) from outsourcing where orders_name = ? group by company";
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setString(1, order_name);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()){
				ordercosts oc = new ordercosts();
				oc.setName(rs.getString("company"));
				oc.setPay(rs.getInt("sum(price)"));
				v.add(oc);
			}
			rs.close();
			pstmt.close();
			con.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return v;
	}
	
	public Vector<ordertooldb> materialtable(String order_name){
		Vector<ordertooldb> v = new Vector<ordertooldb>();
		try {
			dbconnect();
			String sql = "select tool_name, unit_price, stock from tool where order_name = ?";
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setString(1, order_name);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()){
				ordertooldb ot = new ordertooldb();
				int price = rs.getInt("unit_price") * rs.getInt("stock");
				ot.setTool_name(rs.getString("tool_name"));
				ot.setPrice(price);
				v.add(ot);
			}
			rs.close();
			pstmt.close();
			con.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return v;
	}
	
	//--------------------dashboardoutsourcing-----------------------
	public String searchsum(String start_day, String end_day){
		String sum = "0";
		try {
			dbconnect();
			String sql = "select sum(price) from outsourcing where outend_date between ? and ?";
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setString(1, start_day);
			pstmt.setString(2, end_day);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()){
				sum = rs.getString("sum(price)");
			}
			rs.close();
			pstmt.close();
			con.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return sum;
	}
	
	public Vector<String> doscompany(){
		Vector<String> v = new Vector<String>();
		try {
			dbconnect();
			String sql = "select com_name from company";
			PreparedStatement pstmt = con.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				v.add(rs.getString("com_name"));
			}
			rs.close();
			pstmt.close();
			con.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return v;
	}
	
	public Vector<String> dosprocess(){
		Vector<String> v = new Vector<String>();
		try {
			dbconnect();
			String sql = "select process_name from process";
			PreparedStatement pstmt = con.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				v.add(rs.getString("process_name"));
			}
			rs.close();
			pstmt.close();
			con.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return v;
	}
	
	public Vector<ordercosts> searchcompanyordertable(String start_day, String end_day){
		Vector<ordercosts> v = new Vector<ordercosts>();
		try {
			dbconnect();
			String sql = "select company, sum(price) from outsourcing where outend_date between ? and ? group by company";
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setString(1, start_day);
			pstmt.setString(2, end_day);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()){
				ordercosts oc = new ordercosts();
				oc.setName(rs.getString("company"));
				oc.setPay(rs.getInt("sum(price)"));
				v.add(oc);
			}
			rs.close();
			pstmt.close();
			con.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return v;
	}
	
	public Vector<ordercosts> searchprocordertable(String start_day, String end_day){
		Vector<ordercosts> v = new Vector<ordercosts>();
		try {
			dbconnect();
			String sql = "select process, sum(price) from outsourcing where outend_date between ? and ? group by process";
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setString(1, start_day);
			pstmt.setString(2, end_day);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()){
				ordercosts oc = new ordercosts();
				oc.setName(rs.getString("process"));
				oc.setPay(rs.getInt("sum(price)"));
				v.add(oc);
			}
			rs.close();
			pstmt.close();
			con.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return v;
	}
	
	public Vector<mainorder> mainorder(){
		Vector<mainorder> v = new Vector<mainorder>();
		try {
			dbconnect();
			String sql = "select item_no, order_status, car_name, order_com_id, order_date from mes.order where due_date is null";
			PreparedStatement pstmt = con.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				mainorder mo = new mainorder();
				mo.setOrdername(rs.getString("item_no"));
				mo.setOrderstatus(rs.getString("order_status"));
				mo.setCar_name(rs.getString("car_name"));
				mo.setOrder_com_id(rs.getString("order_com_id"));
				mo.setOrder_date(rs.getString("order_date"));
				v.add(mo);
			}
			rs.close();
			pstmt.close();
			con.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return v;
	}
	//---------------------------main-------------------------
	public String[][] mainfc(){
		String[][] array = new String[0][0];
		try {
			dbconnect();
			Statement stmt = null;
			Statement stmt2 = null;
			ResultSet rs = null;
			ResultSet rs2 = null;
			String query = null;

			stmt = con.createStatement();
			LocalDate now = LocalDate.now();
			int year = now.getYear();
			int month = now.getMonthValue();
			Calendar cal = Calendar.getInstance();
			cal.set(year, month-1, 1);
			int lastday = cal.getActualMaximum(Calendar.DAY_OF_MONTH);
			String date1 = Integer.toString(year) + "-" + Integer.toString(month) + "-01";
			String date2 = Integer.toString(year) + "-" + Integer.toString(month) + "-" + Integer.toString(lastday);
			String strFormat = "yyyy-MM-dd";
			SimpleDateFormat sdf = new SimpleDateFormat(strFormat);
			Date d1 = sdf.parse(date1);
			Date d2 = sdf.parse(date2);

			long totalday = (long) (d2.getTime() - d1.getTime()) / (24 * 60 * 60 * 1000) + 1;

			strFormat = "yyyy-MM-dd HH:mm:ss";
			sdf = new SimpleDateFormat(strFormat);
			d1 = sdf.parse(date1 + " 00:00:00");
			d2 = sdf.parse(date2 + " 23:59:59");
			query = "select count(*) from facilities";
			rs = stmt.executeQuery(query);

			int facilitycount = 0;
			if (rs.next()) {
				facilitycount = rs.getInt(1);
			}
			query = "select * from facilities";
			rs = stmt.executeQuery(query);
			String[] facilityname = new String[facilitycount];

			int i = 0;
			while (rs.next()) {
				facilityname[i] = rs.getString("facilities_name");
				i++;
			}
			i = 0;

			array = new String[facilitycount][3];
			

			SimpleDateFormat dateParser = new SimpleDateFormat("yy-MM-dd HH:mm:ss");
			double sumon = 0;
			double sumoff = 0;
			double averageon = 0;
			double averageoff = 0;

			for (i = 0; i < facilitycount; i++) {
				int totaltemp = -1;
				double ontimeday = 0;
				double offtimeday = 0;
				query = "select count(*) from facility_time where facility_name='" + facilityname[i]
						+ "' and DATE(f_time) between '" + date1 + "' and '" + date2 + "'";
				rs = stmt.executeQuery(query);
				if (rs.next()) {
					if (rs.getInt(1) == 0) {
						totaltemp = -1;
					} else {
						totaltemp = rs.getInt(1);
					}

				}
				query = "select * from facility_time where facility_name='" + facilityname[i]
						+ "' and DATE(f_time) between '" + date1 + "' and '" + date2 + "'";
				rs = stmt.executeQuery(query);
				int temp = 0;
				long ontimesecond = 0;
				String previous = "";
				if (totaltemp == -1) {
					query = "select * from facility_time where facility_name='" + facilityname[i]
							+ "' order by num desc limit 1";
					rs = stmt.executeQuery(query);
					if (rs.next()) {
						if (rs.getString("status").equals("가동")) {
							ontimeday = totalday;
							offtimeday = 0;

						} else {
							ontimeday = 0;
							offtimeday = totalday;
						}
					}
				} else {
					while (rs.next()) {
						if (temp == 0) {
							if (rs.getString("status").equals("비가동")) {
								ontimesecond += (sdf.parse(rs.getString("f_time")).getTime() - d1.getTime()) / (1000);
							} else {
								previous = rs.getString("f_time");
							}
							temp++;
						} else {
							if (rs.getString("status").equals("비가동")) {
								ontimesecond += (sdf.parse(rs.getString("f_time")).getTime()
										- sdf.parse(previous).getTime()) / (1000);
							} else {
								if ((temp + 1) == totaltemp) {
									ontimesecond += (d2.getTime() - sdf.parse(rs.getString("f_time")).getTime()) / 1000;
								} else {
									previous = rs.getString("f_time");
								}

							}
							temp++;
						}
					}

					ontimeday = Math.round(ontimesecond / (60.0 * 60 * 24) * 100.0) / 100.0;
					offtimeday = Math.round(((double) totalday - ontimeday) * 100.0) / 100.0;

				}

				array[i][0] = facilityname[i];
				array[i][1] = String.valueOf(ontimeday);
				array[i][2] = String.valueOf(offtimeday);
				sumon += ontimeday;
				sumoff += offtimeday;
				averageon = Math.round((double) sumon / (double) totalday * 100.0) / 100.0;
				averageoff = Math.round((double) sumoff / (double) totalday * 100.0) / 100.0;
			}

		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return array;
	}
	public Vector<mainwork> mainwt(){
		Vector<mainwork> v = new Vector<mainwork>();
		try {
			dbconnect();
			String sql = "select sum(work_time) from my_work where work_end between ? and ?";
			String date1 = "";
			String date2 = "";
			int lastday = 0;
			PreparedStatement pstmt = con.prepareStatement(sql);
			ResultSet rs = null;
			Calendar cal = Calendar.getInstance();
			LocalDate now = LocalDate.now();
			int year = now.getYear();
			for(int i=0; i<12; i++) {
				mainwork mw = new mainwork();
				cal.set(year, i, 1);
				lastday = cal.getActualMaximum(Calendar.DAY_OF_MONTH);
				date1 = Integer.toString(year) + "-" + Integer.toString(i+1) + "-01";
				date2 = Integer.toString(year) + "-" + Integer.toString(i+1) + "-" + Integer.toString(lastday);
				pstmt.setString(1, date1);
				pstmt.setString(2, date2);
				rs = pstmt.executeQuery();
				mw.setMonth(Integer.toString(i+1) + "월");
				if(rs.next()) {
					if(rs.getString("sum(work_time)") == null) {
						mw.setWt("0");
					}
					else {
						mw.setWt(rs.getString("sum(work_time)"));
					}
				}
				else {
					mw.setWt("0");
				}
				v.add(mw);
			}
			
		}
		catch(Exception e) {
			e.printStackTrace();		}
		return v;
	}
	
	public Vector<String> mainnumber(){
		Vector<String> v = new Vector<String>();
		try {
			dbconnect();
			String sql = "select count(*) from mes.order where due_date is null";
			String sql2 = "select count(*) from outsourcing where outend_date is null";
			String sql3 = "select count(*) from facilities";
			String sql4 = "select count(*) from faulty";
			
			PreparedStatement pstmt = con.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();
			if(rs.next()) {
				v.add(rs.getString("count(*)"));
			}
			else {
				v.add("0");
			}
			pstmt = con.prepareStatement(sql2);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				v.add(rs.getString("count(*)"));
			}
			else {
				v.add("0");
			}
			pstmt = con.prepareStatement(sql3);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				v.add(rs.getString("count(*)"));
			}
			else {
				v.add("0");
			}
			pstmt = con.prepareStatement(sql4);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				v.add(rs.getString("count(*)"));
			}
			else {
				v.add("0");
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return v;
	}
	/**
	* status_data 테이블에 상태값 slelect  (combobox)
	* @ author : 양동빈 , fost008@gmail.com
	* @ return : Vector<String> (facility)
	* @ exception 예외사항 DB커넥트 실패, DB 파라메터가 NULL 일경우
	*/
	public Vector<String> dashboard_combobox() {
		Vector<String> value = new Vector<String>();
		try {
			
			dbconnect();
			String selectsql = "select  facility from status_data GROUP BY facility;";
			PreparedStatement pstmt = con.prepareStatement(selectsql);
			
			ResultSet rs = null;
			rs = pstmt.executeQuery();
			while(rs.next()) {
				value.add(rs.getString("facility"));
			}
			pstmt.close();
			con.close();
			return value;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return value;
	}
	/**
	* status_data 테이블에 상태값 select
	* @ author : 양동빈 , fost008@gmail.com
	* @ return : long[] (String 비정상, String 스탑 ,String 에러,String null)
	* @ exception 예외사항 DB커넥트 실패, DB 파라메터가 NULL 일경우
	*/
	public long[] chart_A(String target, String date) {
		long[] value = {0,0,0,0};
		
		try {
			
			dbconnect();
			String selectsql = "SELECT time,`status` FROM status_data WHERE facility = '"+target+"' AND "+"'"+date+" 00:00:00' "+" < time AND time <" +"'"+date+" 24:00:00' "+"ORDER BY time ASC;";
			System.out.println(selectsql);
			PreparedStatement pstmt = con.prepareStatement(selectsql);
			ResultSet rs = null;
			Timestamp ts = null;
			Timestamp ts2 = null;
			boolean firstflag = true;
			rs = pstmt.executeQuery();
			int status = -100;
			while(rs.next()) {
				if(firstflag) {
					status=Integer.parseInt(rs.getString("status"));
					ts2=Timestamp.valueOf(rs.getString("time"));
					firstflag=false;
				}else {
					ts=Timestamp.valueOf(rs.getString("time"));
					if(status == -1) {
						System.out.println("status -1");
						System.out.println("ts"+Long.toString(ts.getTime()));
						System.out.println("ts"+Long.toString(ts2.getTime()));
						value[0]=value[0]+(ts.getTime()-ts2.getTime())/1000;
					}else if(status == 0) {
						System.out.println("status 0");
						System.out.println("ts"+Long.toString(ts.getTime()));
						System.out.println("ts"+Long.toString(ts2.getTime()));
						value[1]=value[1]+(ts.getTime()-ts2.getTime())/1000;
					}else if(status == 1) {
						System.out.println("status 1");
						System.out.println("ts"+Long.toString(ts.getTime()));
						System.out.println("ts"+Long.toString(ts2.getTime()));
						value[2]=value[2]+(ts.getTime()-ts2.getTime())/1000;
					}
					ts2=ts;
					status=Integer.parseInt(rs.getString("status"));
				}

			}
			Timestamp tslast = Timestamp.valueOf(date+" 24:00:00");
			if(status == -1) {
				value[0]=value[0]+(tslast.getTime()-ts.getTime())/1000;
			}else if(status == 0) {
				value[1]=value[1]+(tslast.getTime()-ts.getTime())/1000;
			}else if(status == 1) {
				value[2]=value[2]+(tslast.getTime()-ts.getTime())/1000;
			}
			
			
			value[3]=86000-value[2]-value[1]-value[0];
			pstmt.close();
			con.close();
			System.out.println(Long.toString(value[0]));
			System.out.println(Long.toString(value[1]));
			System.out.println(Long.toString(value[2]));
			return value;
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println(value[0]);
		System.out.println(value[1]);
		System.out.println(value[2]);
		return value;
	}
	/**
	* status_data 테이블에 상태값 select
	* @ author : 양동빈 , fost008@gmail.com
	* @ return : ArrayList<String> (status,firstdate,enddate)
	* @ exception 예외사항 DB커넥트 실패, DB 파라메터가 NULL 일경우
	*/
	public ArrayList<String> chart_B(String target, String date) {
		ArrayList<String> value = new ArrayList<String>();
		
		try {
			
			dbconnect();
			String selectsql = "SELECT time,`status` FROM status_data WHERE facility = '"+target+"' AND "+"'"+date+" 00:00:00' "+" < time AND time <" +"'"+date+" 24:00:00' "+"ORDER BY time ASC;";
			System.out.println(selectsql);
			PreparedStatement pstmt = con.prepareStatement(selectsql);
			ResultSet rs = null;
			rs = pstmt.executeQuery();
			String status = "-100";
			boolean firstflag = true;
			String bft = date+" 00:00:00";
			while(rs.next()) {
				if(firstflag) {
					firstflag = false;
					
					value.add(status);
				}else {
					value.add(status);
				}
				
				value.add(bft);
				value.add(rs.getString("time"));
				
				status =rs.getString("status");
				bft=rs.getString("time");

			}
			value.add(status);
			value.add(bft);
			value.add(date+" 24:00:00 ");
			
			pstmt.close();
			con.close();
			
			for(int i =0;value.size()<i;i += 3) {
				System.out.println("-------------------------");
				System.out.println(value.get(i)+" / "+value.get(i+1)+" / "+value.get(i+2));
			}
			
			
			return value;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return value;
	}

}
}