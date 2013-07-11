    <%@page import="me.huijin.util.json.JsonUtil"%>
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
    .user_info{
        position: absolute;
        right: 0;
        line-height: 20px;
        font-size: 12px;
    }
    .system_controller{
        position: absolute;
        right: 0;
        bottom: 0;
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
    	href="<%=contextPath%>/easyui/themes/bootstrap/easyui.css" />
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
    		style="height: 50px; overflow: hidden;">
    		<div>
    		<h1 style="position: absolute;">汇锦房产销售系统</h1>
    		<div class="user_info">欢迎您&nbsp;<%=loginuser.getChineseName()%>(<%=loginuser.getStaffId()%>)
    		</div>
    		 <div class="system_controller"><a href="javascript:void(0)" class="easyui-menubutton" data-options="menu:'#bt_index_zxMenu',iconCls:'icon-controller'">控制面板</a></div>
    			<%--<h1>欢迎您&nbsp;<%=loginuser.getChineseName()%>(<%=loginuser.getStaffId()%>)</h1>
    		--%>
    		</div>

    	</div>
    	<div data-options="region:'west',split:true,title:'菜单'"
    		style="width:200px;">

    		<div id="accordion"></div>
    	</div>
    	<div data-options="region:'center',fit:true">

    		<div id="appTabs" fit="true" border="false"></div>
    		<div id="menu" class="easyui-menu" style="width:150px;">
    			<div id="m-refresh">刷新</div>
    			<div id="openToWin">新窗口打开</div>
    			<div class="menu-sep"></div>
    			<div id="m-closeall">全部关闭</div>
    			<div id="m-closeother">除此之外全部关闭</div>
    			<div class="menu-sep"></div>
    			<div id="m-close">关闭</div>
    		</div>
    	</div>
    	<%--<div data-options="region:'east',split:true,collapsed:true,title:'East'" style="width:100px;padding:10px;">east region
    		</div>
    --%>
    <!--
    	<div data-options="region:'south',border:false"
    		style="height:50px;padding:10px;">
    		<div style="text-align: center">江西汇锦信息技术</div>
    	</div>
    -->
      <div id="bt_index_zxMenu" style="display: none;">
                <div id="selfInfo" data-options="iconCls:'icon-user'">个人信息</div>
                <div  data-options="iconCls:'icon-setting'">系统设置</div>
                <!--
                <div data-options="iconCls:'icon-theme'">
                    <span>主题切换</span>
                    <div style="width:100px;">
                        <div class="theme" name="default">default</div>
                        <div class="theme" name="bootstrap">bootstrap</div>
                        <div class="theme" name="black">black</div>
                        <div class="theme" name="gray">gray</div>
                        <div class="theme" name="metro">metro</div>
                    </div>
                </div>
                 -->
                <div class="menu-sep"></div>
                <!--
                <div data-options="iconCls:'icon-lock'" id="bt_index_control_menu_lock">锁定系统</div>
                -->
                <div id="loginout" data-options="iconCls:'icon-exit'">退出系统</div>
            </div>
            <div id="selfInfoWin" iconCls="icon-user" title="个人信息" style="height: 400px;width: 300px" closed="true">

    		</div>



    </body>
    </html>
