// Define a new component called button-counter
var component_content=Vue.component('component-content', {
  data: function () {
    return {
      data: []
    }
  },
  props:['customers'],
  template: `
    <div class="content">
      <div class="card">
        <div class="card-body overflow-hidden p-lg-6">
          
          <div class="row" v-for="chunk in customers"> 

            <component-company v-for="customer in chunk" v-bind:customer="customer" v-bind:key="customer.id"></component-company>
            
          </div>
        </div>
      </div>
      <component-footer></component-footer>
    </div>
  `
})
