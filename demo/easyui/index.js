//总共打开的标签数量
var tabCount = 0;
var expandNorth = false;
var expandWest = false;
$(function () {

    var screenHeight = $(window).height();
    var screenWidth = $(window).width();
    $("body").layout("collapse", "south");
    $("#appTabs").tabs({
        fit:true,
        onContextMenu:function (e, title) {
            $('#appTabs').tabs('select', title);
            e.preventDefault();
            $('#menu').menu('show', {
                left:e.pageX,
                top:e.pageY
            }).data("tabTitle", title);
        }
    });
    $("#accordion").accordion({
        fit:true,
        width:"200px"
    });
    loadMenu();

    // 刷新
    $("#m-refresh").click(function () {
        var currTab = $('#appTabs').tabs('getSelected'); // 获取选中的标签项
        var url = $(currTab.panel('options').content).attr('src'); // 获取该选项卡中内容标签（iframe）的
        $(currTab.panel('options').content)[0].url = url;
        $('#appTabs').tabs('update', {
            tab:currTab,
            options:{
                content:$(currTab.panel('options').content)[0]
            }
        })
    });

    // 关闭所有
    $("#m-closeall").click(function () {
        $("#appTabs li").each(function (i, n) {
            var title = $(n).text();
            $('#appTabs').tabs('close', title);
        });
    });

    // 除当前之外关闭所有
    $("#m-closeother").click(function () {
        var currTab = $('#appTabs').tabs('getSelected');
        currTitle = currTab.panel('options').title;
        $("#appTabs li").each(function (i, n) {
            var title = $(n).text();
            if (currTitle != title) {
                $('#appTabs').tabs('close', title);
            }
        });
    });

    // 关闭当前
    $("#m-close").click(function () {
        var currTab = $('#appTabs').tabs('getSelected');
        currTitle = currTab.panel('options').title;
        $('#appTabs').tabs('close', currTitle);
    });
});

/*function loadMenu() {
 loginBO.getDBGroupsMenusForSession(function(rep) {
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
 if (mdid !== oldmdid) {
 $("#accordion").accordion("add", {
 title : mdname,
 id : "accordion_menu_" + mdid,
 });
 oldmdid = mdid;
 oldmdname = mdname;
 }
 $a_html = "<div ><a class='acca' href=\"javascript:myload('"
 + uname + "','" + BASE_PATH + url + "') \" >" + uname
 + "</a></div>";
 var acc_index = $("#accordion")
 .accordion("getPanel", oldmdname);
 acc_index.append($a_html);
 }
 $("#accordion").accordion("select", rep[0][4]);
 }
 });
 }*/

function loadMenu() {
    var acc = [
        {"title":"搜索", "menus":[
            {"name":"百度", "url":"http://www.baidu.com"},
            {"name":"谷歌", "url":"http://www.so.com"},
            {"name":"搜搜", "url":"http://www.soso.com"},
            {"name":"百度1", "url":"http://www.baidu.com"},
            {"name":"谷歌1", "url":"http://www.so.com"},
            {"name":"搜搜1", "url":"http://www.soso.com"},
            {"name":"百度2", "url":"http://www.baidu.com"},
            {"name":"谷歌2", "url":"http://www.so.com"},
            {"name":"搜搜3", "url":"http://www.soso.com"}
        ]},
        {"title":"社交", "menus":[
            {"name":"QQ", "url":"http://www.qq.com"},
            {"name":"新浪", "url":"http://weibo.com/230234893?wvr=5&"},
            {"name":"人人", "url":"http://www.renren.com"}
        ]}
    ];
    for (var i in acc) {
        $("#accordion").accordion("add", {
            title:acc[i].title,
            closable:true
        });
        var cm = acc[i].menus;
        var acc_index = $("#accordion")
            .accordion("getPanel", acc[i].title);
        for (var j in cm) {
            $a_html = "<div ><a class='acca' href=\"javascript:myload('"
                + cm[j].name + "','" + cm[j].url + "') \" >" + cm[j].name
                + "</a></div>";
            acc_index.append($a_html);
        }
    }
    $("#accordion").accordion("select","搜索");
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
                    id:tabCount,
                    title:title,
                    content:"<iframe width=100% height=100% frameborder=0 scrolling=no marginheight=0 marginwidth=0 src='"
                        + url + "'></iframe>",
                    closable:true
                });
            tabCount++;
        }
    }
}