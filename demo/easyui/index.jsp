<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<%@ page import="me.huijin.saleassist.constant.Constant"%>
<%@page import="me.huijin.saleassist.dao.*"%>

<%
    String contextPath = request.getContextPath();
    Staff loginuser = (Staff) session.getAttribute(Constant.LOGINEDUSER);
%>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>管理首页</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<style type="text/css">
.acca {
	font-size: 13px;
	color: #666;
	background-color: #ffffff;
	display: block;
	height: 15px;
	width: 80%; border : 1px solid #F9F9F9;
	margin: 3px 1px 0 12px;
	padding: 6px 7px 6px 7px;
	text-decoration: none;
	text-align: center;
	border: 1px solid #F9F9F9; margin : 3px 1px 0 12px; padding : 6px 7px
	6px 7px; text-decoration : none; text-align : center;
	border-radius: 5px;
}

#accordion a:hover {
	background-color: #ffebbf
} /* 鼠标悬停黑色 */
#accordion a:active {
	background-color: #ffebbf
} /* 鼠标点击与释放时蓝色 */
#accordion a:visited {
	color: #ffebbf
}
</style>


<!-- easyui -->
<link rel="stylesheet" type="text/css"
	href="<%=contextPath%>/easyui/themes/default/easyui.css" />
<link rel="stylesheet" type="text/css"
	href="<%=contextPath%>/easyui/themes/icon.css" />
<script src="<%=contextPath%>/servlet/Js"></script>
<script src="<%=contextPath%>/easyui/jquery.min.js"></script>
<script src="<%=contextPath%>/easyui/jquery.easyui.min.js"></script>
<script src="<%=contextPath%>/easyui/locale/easyui-lang-zh_CN.js"></script>
<script src="<%=contextPath%>/dwradmin/engine.js"></script>
<script src="<%=contextPath%>/dwradmin/interface/loginBO.js"></script>
<script src="index.js"></script>

</head>

<body class="easyui-layout">
	<div data-options="region:'north',border:false"
		style="height: 50px;background-color: #cccccc">
		<div style="text-align: center;">
			<h1>当前用户:user</h1>
		</div>

	</div>
	<div data-options="region:'west',split:true,title:'菜单'"
		style="width:200px;">

		<div id="accordion"></div>
	</div>
	<%--<div data-options="region:'east',split:true,collapsed:true,title:'East'" style="width:100px;padding:10px;">east region
</div>
--%>
	<div data-options="region:'south',border:false"
		style="height:50px;padding:10px;">
		<div style="text-align: center">江西汇锦信息技术</div>
	</div>
	<div data-options="region:'center'">

		<div id="appTabs" fit="true" border="false"></div>
		<div id="menu" class="easyui-menu" style="width:150px;">
			<div id="m-refresh">刷新</div>
			<div class="menu-sep"></div>
			<div id="m-closeall">全部关闭</div>
			<div id="m-closeother">除此之外全部关闭</div>
			<div class="menu-sep"></div>
			<div id="m-close">关闭</div>
		</div>
	</div>
  
</body>
</html>
