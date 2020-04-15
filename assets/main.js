var files=[
	"https://designdatainc.sharepoint.com/sites/TeamD/SiteAssets/teamd/assets/components/navbar.js",
	"https://designdatainc.sharepoint.com/sites/TeamD/SiteAssets/teamd/assets/components/content.js",
	"https://designdatainc.sharepoint.com/sites/TeamD/SiteAssets/teamd/assets/components/companycard.js",
	"https://designdatainc.sharepoint.com/sites/TeamD/SiteAssets/teamd/assets/components/footer.js",
	"https://designdatainc.sharepoint.com/sites/TeamD/SiteAssets/teamd/assets/customers.js",
];




requirejs(files, function()
{

	// Define a new component called button-counter
	var clipboard = new ClipboardJS('.btn-copy');

	  clipboard.on('success', function(e) {
	      toastr.info('Copied!')

	      e.clearSelection();
	  });



	var app = new Vue({
	  el: '#app',
	  data: {
	    customers:customers,
	    search:'',
	  },
	  methods:{
	  	updatesearch(newvalue)
	  	{
		 	this.search=newvalue;		
	  	}
	  },
	  computed: 
	  {
	  chunkedCustomers () 
	    { 
	      var vm=this;
	      vm.total=vm.customers.length;
	      if(_.isEmpty(this.search)) {
	        vm.filtered=0;
	        //return this.customers;
	        return  _.chunk(this.customers,2);
	      }
	      else 
	      {          
	        var search=vm.search;
	        search=_.toLower(search);
	        var filtered=_.filter(this.customers,function(customer)
	          {
	            var found=false;            
	            var values=_.values(customer);
	            values=_.flatten(values);
	            _.forEach(values,function(value)
	              {               
	                
	              if(_.isObject(value))
	              {
	                var keys=_.values(value);
	                value=_.flatten(keys);
	              }
	                                    
	        value=_.toLower(value);
	        flag=value.includes(search);
	        if(flag)
	        {
	        found=true;
	        return false;                    
	        }
	                
	              });
	            return found;            
	          });         
	          vm.filtered=filtered.length;
	          //return filtered;
	        return _.chunk(filtered,2);
	      }
	       
	     }
	  },
	})
	


} );