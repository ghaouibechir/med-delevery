<template>
  <div>
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
      :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3
              class="font-semibold text-lg"
              :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
            >
              Coming Orders
            </h3>
          </div>
        </div>
      </div>
      <div class="block w-full overflow-x-auto">
        <table class="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]"
              >
                Order
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]"
              ></th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]"
              >
                Status
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]"
              >
                precription
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]"
              >
                medcines
              </th>

              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]"
              >
                confirmation
              </th>
            </tr>
          </thead>
          <tbody v-for="item in incomingOrders" :key="item.quatity">
            <tr>
              <th
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
              >
                <img
                  :src="bootstrap"
                  class="h-12 w-12 bg-white rounded-full border"
                  alt="..."
                />
                <span
                  class="ml-3 font-bold"
                  :class="[
                    color === 'light' ? 'text-blueGray-600' : 'text-white',
                  ]"
                >
                  {{ item.username }}
                </span>
              </th>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              ></td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                <i class="fas fa-circle text-orange-500 mr-2"></i> pending
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                <i class="fas fa-prescription-bottle-alt" @click="change(item._id)" v-if="true && currentId!=item._id"></i>
                 <div v-if="currentId===item._id">
                   {{item.prescription}} hhhh
                 </div>
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                <div class="flex">
                  <i
                    class="fas fa-capsules"
                    @click="
                      {
                        showMedcines = !showMedcines;
                      }
                    "
                  ></i>
                  <div v-if="showMedcines">
                     <ul class="check-list"  v-for="medecin in medecines" :key="medecin.name"  >
                       <li>{{medecin}}</li>
                     </ul>
                  </div>
                </div>
              </td>
              <td
                v-if="view && currentEdit !== item._id"
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                <div class="flex items-center">
                  <button class="yes" v-on:click="confirm(item._id)">
                    <i class="fas fa-check"></i>
                  </button>

                  <button class="no" v-on:click="changeView(item._id)">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </td>
              <!-- confirmation view -->
              <td
                v-if="currentEdit === item._id"
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                <div class="flex items-center">
                  <button class="confirm" v-on:click="decline(item._id)">
                    Delete
                  </button>

                  <button class="decline" v-on:click="changeView('')">
                    cancel
                  </button>
                </div>
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
              ></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 2nd table -->
    <div>
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
        :class="[color === 'dark' ? 'bg-white' : 'bg-emerald-900 text-white']"
      >
        <div class="rounded-t mb-0 px-4 py-3 border-0">
          <div class="flex flex-wrap items-center">
            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                class="font-semibold text-lg"
                :class="[color === 'dark' ? 'text-blueGray-700' : 'text-white']"
              >
                Current Orders
              </h3>
            </div>
          </div>
        </div>
        <div class="block w-full overflow-x-auto">
          <table class="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  :class="[
                    color === 'dark'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                  ]"
                >
                  Order
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  :class="[
                    color === 'dark'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                  ]"
                >
                  Total Price
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  :class="[
                    color === 'dark'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                  ]"
                >
                  Status
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  :class="[
                    color === 'dark'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                  ]"
                ></th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  :class="[
                    color === 'dark'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                  ]"
                >
                  Completion
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  :class="[
                    color === 'dark'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                  ]"
                ></th>
              </tr>
            </thead>
            <tbody v-for="item in confirmeOrders" :key="item._id">
              <tr>
                <th
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
                >
                  <img
                    :src="bootstrap"
                    class="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  />
                  <span
                    class="ml-3 font-bold"
                    :class="[
                      color === 'dark' ? 'text-blueGray-600' : 'text-white',
                    ]"
                  >
                    {{ item.username }}
                  </span>
                </th>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  {{ item.totalPrice }}TND
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  <i class="fas fa-circle text-emerald-500 mr-2"></i> In
                  progress
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  <div class="flex"></div>
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  <div class="flex items-center">
                    <span class="mr-2">60%</span>
                    <div class="relative w-full">
                      <div
                        class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                      >
                        <div
                          style="width: 60%"
                          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
                ></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      orders: [],
      confirmeOrders: [],
      view: true,
      currentEdit: "",
      showMedcines: false,
      id: "",
      state:"",
      incomingOrders:[],
      medecines:[],
      show: false,
      currentId:""
    };
  },
  methods: {
    getOrders: function () {
      let s=localStorage.getItem('session')
      this.state=JSON.parse(s).state
      console.log(this.state);
     var data={
       state : this.state
     }
      axios
        .post("http://localhost:5000/orders/comingOrders",data)
        .then(({ data }) => {
         
          console.log("this is the order coming from server", data);
          
          for (var i=0; i<data.length ; i++){
            if(data[i].userConfirmation){
              this.incomingOrders.push(data[i])
            
            }
          }
           console.log("jghft",this.incomingOrders)
           
           for (let medecin in this.incomingOrders){
             this.medecines=this.incomingOrders[medecin].medecineId
           }
           console.log(this.medecines);

          axios.post("http://localhost:5000/orders/getMedecines",this.medecines)
          .then(({ data }) => {
          this.medecines=data
          console.log(this.medecines) 
        })
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeView: function (id) {
      // this.view = !this.view;
      this.currentEdit = id;
    },
    confirm: function (id) {
      for (var i = 0; i < this.orders.length; i++) {
        if (this.orders[i]._id === id) {
          this.confirmeOrders.push(i);
          this.orders.splice(i, 1);
        }
        console.log(this.confirmeOrders);
      }
    },
    decline: function (id) {
      for (var i = 0; i < this.orders.length; i++) {
        if (this.orders[i]._id === id) {
          this.orders.splice(i, 1);
        }
      }
    },
    change: function (id) {
     
      this.currentId = id;
    },
  },
  created:function(){
    this.getOrders()
  },

  components: {},
  props: {
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
};
</script>
<style scoped>
.yes {
  width: 20px;
  color: darkcyan;
}
.no {
  margin-left: 30px;
  width: 20px;
  color: crimson;
}
.confirm {
  width: 20px;
  color: rgb(241, 60, 28);
}
.decline {
  margin-left: 30px;
  width: 20px;
  color: rgb(149, 149, 149);
}
.check-list {
  margin: 0;
  padding-left: 1.2rem;
}

.check-list li {
  position: relative;
  list-style-type: none;
  padding-left: 2.5rem;
  margin-bottom: 0.5rem;
}

.check-list li:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: -2px;
    width: 5px;
    height: 11px;
    border-width: 0 2px 2px 0;
    border-style: solid;
    border-color: #00a8a8;
    transform-origin: bottom left;
    transform: rotate(45deg);
}
</style>
