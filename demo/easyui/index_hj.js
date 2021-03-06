//总共打开的标签数量
var tabCount = 0;
$(function() {

	var screenHeight = $(window).height();
	var screenWidth = $(window).width();
	$("#appTabs").tabs({
		fit : true,
		onContextMenu : function(e, title) {
			$('#appTabs').tabs('select', title);
			e.preventDefault();
			$('#menu').menu('show', {
				left : e.pageX,
				top : e.pageY
			}).data("tabTitle", title);
		}
	});
	$("#accordion").accordion({
		fit : true,
		width : "200px"
	});
	loadMenu();

	// 刷新
	$("#m-refresh").click(function() {
		var currTab = $('#appTabs').tabs('getSelected'); // 获取选中的标签项
		var url = $(currTab.panel('options').content).attr('src'); // 获取该选项卡中内容标签（iframe）的
		$(currTab.panel('options').content)[0].url = url;
		$('#appTabs').tabs('update', {
			tab : currTab,
			options : {
				content : $(currTab.panel('options').content)[0]
			}
		})
	});

	// 关闭所有
	$("#m-closeall").click(function() {
		$("#appTabs li").each(function(i, n) {
			var title = $(n).text();
			$('#appTabs').tabs('close', title);
		});
	});

	// 除当前之外关闭所有
	$("#m-closeother").click(function() {
		var currTab = $('#appTabs').tabs('getSelected');
		currTitle = currTab.panel('options').title;

		$("#appTabs li").each(function(i, n) {
			var title = $(n).text();

			if (currTitle != title) {
				$('#appTabs').tabs('close', title);
			}
		});
	});

	// 关闭当前
	$("#m-close").click(function() {
		var currTab = $('#appTabs').tabs('getSelected');
		currTitle = currTab.panel('options').title;
		$('#appTabs').tabs('close', currTitle);
	});
	
	$("#selfInfoWin").window({
		modal:false
	});
	
	$("#selfInfo").click(function(){
		$("#selfInfoWin").window("open");
	});
	$("#loginout").click(function(){
		$.messager.confirm("退出登录", "您确定要退出吗?",function(msg){
			if(msg){
				location.href = BASE_PATH+"/admin/logout.jsp";
			}
		})
	});
	$("#openToWin").click(function(){
		var currTab = $('#appTabs').tabs('getSelected'); // 获取选中的标签项
		var url = $(currTab.panel('options').content).attr('src'); // 获取该选项卡中内容标签（iframe）的
		window.open(url);
	});
});

function loadMenu() {
	loginBO
			.getDBGroupsMenusForSession(function(rep) {
				if (rep) {
					var oldmdid = ""; // 上一次模块id
					var oldmdname = ""; // 上一次模块的名称
					$a_html = "";
					for ( var i in rep) {
						var vmenu = rep[i];
						var uname = vmenu[1]; // url名称
						var url = vmenu[2]; // url地址
						var mdid = vmenu[3]; // 当前的模块id
						var mdname = vmenu[4]; // 当前的模块名称
						var state = vmenu[7];// state是状态见jselect_url_state说明
						if (mdid !== oldmdid) {
							$("#accordion").accordion("add", {
								title : mdname,
								id : "accordion_menu_" + mdid,
								closable:true
							});
							oldmdid = mdid;
							oldmdname = mdname;
						}
						if (state == 1) {
							$a_html = "<div ><a class='acca' href=\"javascript:myload('"
									+ uname
									+ "','"
									+ BASE_PATH
									+ url
									+ "') \" >" + uname + "</a></div>";
							var acc_index = $("#accordion").accordion(
									"getPanel", oldmdname);
							acc_index.append($a_html);
						}

					}
					$("#accordion").accordion("select", rep[0][4]);
				}
			});
}
function myload(title, url) {
	if (title != "") {
		if ($('#appTabs').tabs('exists', title)) {
			$('#appTabs').tabs('select', title);
		} else {
			$('#appTabs')
					.tabs(
							'add',
							{
								id : tabCount,
								title : title,
								content : "<iframe width=100% height=100% frameborder=0 scrolling=auto marginheight=0 marginwidth=0 src='"
										+ url + "'></iframe>",
								closable : true
							});
			tabCount++;
		}
	}
}