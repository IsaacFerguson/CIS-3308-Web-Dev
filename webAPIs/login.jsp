<%@page contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%> 

<%@page language="java" import="model.webUser.*" %> 
<%@page language="java" import="com.google.gson.*" %>
<%@page language="java" import="dbUtils.*" %>

<%
    // logon.jsp

    StringData sd = new StringData();
    String password = request.getParameter("password");
    String email = request.getParameter("email");
    
    if ((password == null) || (email == null)) {
        sd.errorMsg = "Cannot search for user: 'password' and 'username' must be supplied";
    } else {
        DbConn dbc = new DbConn();
        sd.errorMsg = dbc.getErr(); 
        if (sd.errorMsg.length() == 0) { 
            System.out.println("*** Ready to call findLogon");
            sd = DbMods.findLogon(dbc, password, email);  
            if(sd.errorMsg.length() == 0){
                session.setAttribute("user", sd);
            }
        } else {
            sd.errorMsg += "you were logged off";
            session.invalidate();
        }        

        
        dbc.close(); 
    }
    Gson gson = new Gson();
    out.print(gson.toJson(sd));
%> 