// Easy Responsive Tabs Plugin CompuBrain
$(document).ready(function() {  
   if ($.fn.easyResponsiveTabs) {
      $('#top-tab').easyResponsiveTabs({ type : 'tab-top' });
       $('#bottom-tab').easyResponsiveTabs({ type : 'tab-bottom' });
      $('#left-tab').easyResponsiveTabs({ type : 'tab-left' });
      $('#right-tab').easyResponsiveTabs({ type : 'tab-right' });
      $('#accordion').easyResponsiveTabs({ type : 'accordion' });
   } else {
      console.log("jQuery easyResponsiveTabs plugin not found");
   }
});
