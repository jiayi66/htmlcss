/*flscts.js-fl20150919gz*/function flscts(a,b){var c=$(a);c.length&&c.each(function(a,d){var l,m,e=$(d),f=e.children(".s,.v"),i=(e.find(".s"),e.find(".kv"),e.find(".c")),j=c.not(c[a]),k=e.attr("evt");"hover"==k?e.hover(function(){e.addClass("scton"),j.removeClass("scton")},function(){e.removeClass("scton")}):f.click(function(a){a.stopPropagation(),e.toggleClass("scton"),j.removeClass("scton")}),i.on("click",".t",function(c){var d,f;c.stopPropagation(),d=e.attr("tkv"),d=d?d:"1","1"==d&&(f=$(c.currentTarget),flsctt(a,e,f,b))}),l=e.attr("pre"),flsctpre(a,e,l,b),m=e.attr("swi"),flsctswi(e,m)}),$(document).click(function(){c.removeClass("scton")})}function flsctt(a,b,c,d){var g,h,i,j,e=b.find(".c"),f=b.find(".kv");f=b.find(".kv"),g=b.find(".s"),h=c.attr("rel"),i=c.html(),j=e.find(".now").attr("rel"),void 0!==d&&d(a,h,j),c.addClass("now").siblings(".t").removeClass("now"),f.val(h),e.attr("oldkv",j),g.html(i),b.removeClass("scton")}function flsctpre(a,b,c,d){if(c){var e=b.find(".c").find("[rel="+c+"]");e.length?(b.attr("pre",c),flsctt(a,b,e,d)):alert("索引"+a+"sct "+c+"找不到对应的选项")}}function flsctswi(a,b){var c=a.find(".c");b=b?b:"auto",a.removeClass("bzb"),c.removeClass("cwi"),"auto"==b&&(b=c.width()+25),a.attr("swi",b),a.width(b),c.addClass("cwi"),a.addClass("bzb")}/*feilong.org-20150709-gz-end*/