// Define a new component called button-counter
Vue.component('component-navbar', {
  data: function () {
    return {
      count: 0,
    }
  },
  props:[],
  methods:{
 
},
  template: `
  <nav class="navbar navbar-light navbar-glass navbar-top sticky-kit navbar-expand-lg mb-4">

      <button class="btn navbar-toggler-humburger-icon navbar-toggler mr-1 mr-sm-3" type="button" data-toggle="collapse" data-target="#navbarStandard" aria-controls="navbarStandard" aria-expanded="false" aria-label="Toggle Navigation"><span class="navbar-toggle-icon"><span class="toggle-line"></span></span></button>
      <a class="navbar-brand mr-1 mr-sm-3" href="../index.html">
        <div class="d-flex align-items-center"><img class="mr-2" src="assets/img/logo.png" alt="" width="40" /><span class="text-sans-serif">TEAM D</span>
        </div>
      </a>
      <div class="collapse navbar-collapse" id="navbarStandard">
        <ul class="navbar-nav">
          <li class="nav-item "><a class="nav-link" id="navbarDropdownHome" href="#" role="button" >Home</a>
          </li>   
        </ul>
      </div>
      <ul class="navbar-nav navbar-nav-icons ml-auto flex-row align-items-center">
        <li class="nav-item">
         <form class="form-inline search-box">
          <input class="form-control rounded-pill search-input" type="search" placeholder="Search..." aria-label="Search" v-on:input="$emit('updatesearch',$event.target.value)" /><span class="position-absolute fas fa-search text-400 search-box-icon"></span>
          </form>
        </li>                                               
      </ul>    
               
    </nav>
  `
})
