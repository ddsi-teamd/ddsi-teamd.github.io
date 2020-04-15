// Define a new component called button-counter
Vue.component('component-company', {
  data: function () {
    return {
      count: 0
    }
  },
  props:['customer'],
  template: `
    <div class="col-lg-6 pr-lg-2 mb-3">
      <div class="card h-lg-100">
        <div class="card-header bg-light py-2">
                  <div class="row align-items-center">
                    <div class="col">
                      <h5 class="mb-0 text-warning">{{customer.name}}</h5>
                    </div>
                    <div class="col-auto text-center pr-card">
                      <div> {{customer.label}}</div>
                    </div>
                   
                  </div>
                  <div class="align-items-center mt-2">
                    <div class="text-center">
                      <h5>{{customer.phone}}</h5>
                    </div>
                  </div>          
        </div>
                <div class="card-body p-0">
                  <div class="row no-gutters align-items-center py-2 position-relative border-bottom border-200">
                    <div class="col pl-card py-1 position-static" v-if="customer.assigned_tam">
                      <div class="media align-items-center">
                        <div class="avatar avatar-xl mr-3">
                          <div class="avatar-name rounded-circle bg-soft-primary text-dark"><span class="fs-0 text-primary">TAM</span></div>
                        </div>
                        <div class="media-body">
                          <h6 class="mb-0 d-flex align-items-center">{{customer.assigned_tam}}</h6>
                        </div>
                      </div>
                    </div>
                    <div class="col py-1">
                      <div class="row flex-end-center no-gutters">
                        <div class="col-auto pr-2">
                          <div class="fs--1 font-weight-semi-bold"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row no-gutters align-items-center py-2 position-relative border-bottom border-200" v-if="customer.poc.length > 0" v-for="poc in customer.poc">
                    <div class="col pl-card py-1 position-static">
                      <div class="media align-items-center">
                        <div class="avatar avatar-xl mr-3">
                          <div class="avatar-name rounded-circle bg-soft-primary text-dark"><span class="fs-0 text-primary">POC</span></div>
                        </div>
                        <div class="media-body">
                          <h6 class="mb-0 d-flex align-items-center">{{poc.name}}</h6>
                        </div>
                      </div>
                    </div>
                    <div class="col py-1">
                      <div class="row flex-end-center no-gutters">
                        <div class="col-auto pr-2">
                          <div class="fs--1 font-weight-semi-bold"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row no-gutters align-items-center py-2 position-relative border-bottom border-200 hover-actions-trigger" v-if="customer.servers.length > 0" v-for="server in customer.servers">
                    <div class="col pl-card py-1 position-static">
                      <div class="media align-items-center">
                        <div class="avatar avatar-xl mr-3">
                          <div class="avatar-name rounded-circle bg-soft-primary text-dark"><span class="fs-0 text-primary">AD</span></div>
                        </div>
                        <div class="media-body">
                          <h6 class="mb-0 d-flex align-items-center"><a class="text-800 stretched-link"  v-bind:href="server.link" target="_blank">{{server.name}}</a></h6>
                        </div>
                      </div>
                    </div>
                    <div class="col py-1">
                      <div class="row flex-end-center no-gutters">
                        <div class="col-auto pr-2">
                          <div class="fs--1 font-weight-semi-bold">
                            <div class="hover-actions r-0 absolute-vertical-center">
                              <button class="btn btn-light border-300 btn-sm mr-1 text-600 bg-white" type="button" data-toggle="tooltip" data-placement="top" title="Copy" :data-clipboard-text="server.name"><span class='far fa-copy'></span></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                  <div class="row no-gutters align-items-center py-2 position-relative border-bottom border-200 hover-actions-trigger" v-if="customer.email.length > 0">
                    <div class="col pl-card py-1 position-static">
                      <div class="media align-items-center">
                        <div class="avatar avatar-xl mr-3">
                          <div class="avatar-name rounded-circle bg-soft-primary text-dark"><span class="fs-0 text-primary">MAIL</span></div>
                        </div>
                        <div class="media-body">
                          <h6 class="mb-0 d-flex align-items-center"><a class="text-800 stretched-link" v-bind:href="customer.email[0].link" target="_blank">{{ customer.email[0].type }} </a>                            
                            <span class="badge badge-pill ml-2 badge-soft-success " v-if="customer.email[0].sync_direction && customer.email[0].sync_direction==1">
                              AD Integrated - One Way
                            </span>
                            <span class="badge badge-pill ml-2 badge-soft-success " v-if="customer.email[0].sync_direction && customer.email[0].sync_direction==2">
                              AD Integrated - Two Way
                            </span>     
                            <span class="badge badge-pill ml-2 badge-soft-secondary " v-if="customer.email[0].sync_direction && customer.email[0].sync_direction==0">
                              No AD Integrated
                            </span>                            
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div class="col py-1">
                      <div class="row flex-end-center no-gutters">
                        <div class="col-auto pr-2">
                          <div class="fs--1 font-weight-semi-bold">
                                                   
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>     

                  <div class="row no-gutters align-items-center py-2 position-relative border-bottom border-200 hover-actions-trigger" v-if="customer.spam.length >0 ">
                    <div class="col pl-card py-1 position-static">
                      <div class="media align-items-center">
                        <div class="avatar avatar-xl mr-3">
                          <div class="avatar-name rounded-circle bg-soft-primary text-dark"><span class="fs-0 text-primary">SPAM</span></div>
                        </div>
                        <div class="media-body">
                          <h6 class="mb-0 d-flex align-items-center"><a class="text-800 stretched-link" v-bind:href="customer.spam[0].link" target="_blank">{{ customer.spam[0].type }} </a></h6>
                        </div>
                      </div>
                    </div>
                    <div class="col py-1">
                      <div class="row flex-end-center no-gutters">
                        <div class="col-auto pr-2">
                          <div class="fs--1 font-weight-semi-bold">
                                                  
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 

                  <div class="row no-gutters align-items-center py-2 position-relative border-bottom border-200 hover-actions-trigger" v-if="customer.vpn.length > 0">
                    <div class="col pl-card py-1 position-static">
                      <div class="media align-items-center">
                        <div class="avatar avatar-xl mr-3">
                          <div class="avatar-name rounded-circle bg-soft-primary text-dark"><span class="fs-0 text-primary">VPN</span></div>
                        </div>
                        <div class="media-body">
                          <h6 class="mb-0 d-flex align-items-center"><a class="text-800 stretched-link" v-bind:href="customer.vpn[0].link" target="_blank">{{ customer.vpn[0].type }} </a></h6>
                        </div>
                      </div>
                    </div>
                    <div class="col py-1">
                      <div class="row flex-end-center no-gutters">
                        <div class="col-auto pr-2">
                          <div class="fs--1 font-weight-semi-bold">
                                                  
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 

                  <div class="row no-gutters align-items-center py-2 position-relative border-bottom border-200 hover-actions-trigger" v-if="customer.phishing_testing.length > 0">
                    <div class="col pl-card py-1 position-static">
                      <div class="media align-items-center">
                        <div class="avatar avatar-xl mr-3">
                          <div class="avatar-name rounded-circle bg-soft-primary text-dark"><span class="fs-0 text-primary">KB4</span></div>
                        </div>
                        <div class="media-body">
                          <h6 class="mb-0 d-flex align-items-center"><a class="text-800 stretched-link" v-bind:href="customer.phishing_testing[0].link" target="_blank">{{ customer.phishing_testing[0].name }} </a></h6>
                        </div>
                      </div>
                    </div>
                    <div class="col py-1">
                      <div class="row flex-end-center no-gutters">
                        <div class="col-auto pr-2">
                          <div class="fs--1 font-weight-semi-bold">
                                                  
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>                   

                </div>
      </div>
    </div>  
  `
})
